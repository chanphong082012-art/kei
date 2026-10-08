const fs = require('fs');
const path = require('path');

function walk(d) {
  if (!fs.existsSync(d)) return;
  fs.readdirSync(d).forEach(f => {
    let p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) {
      if (f !== 'node_modules') walk(p);
    } else if (p.endsWith('.js') || p.endsWith('.mjs')) {
      let c = fs.readFileSync(p, 'utf8');
      
      // 1. S?a cú pháp ES2020+ cho máy
      c = c.replace(/\?\./g, '.')
           .replace(/\?\?/g, '||')
           .replace(/typeof require !== "undefined" \. require/g, 'typeof require !== "undefined" ? require')
           .replace(/typeof Proxy !== "undefined" \. new Proxy/g, 'typeof Proxy !== "undefined" ? new Proxy')
           .replace(/&& require :/g, '? require :')
           .replace(/__getPrototypeOf\(mod\)\) :/g, '__getPrototypeOf(mod)) ?');
           
      // 2. S?a require path thi?u duôi .js
      c = c.replace(/require\((['"])(\.[^'"]+)\1\)/g, (m, q, g) => {
        if (g.endsWith('.js')) return m;
        let r = path.resolve(path.dirname(p), g + '.js');
        return fs.existsSync(r) ? 'require(' + q + g + '.js' + q + ')' : m;
      });

      fs.writeFileSync(p, c);
    }
  });
}

// Quét toàn b? các thu m?c source code
walk('./dist');
walk('./artifacts');
walk('./src');
if (fs.existsSync('./index.js')) walk('./');

console.log('Da fix xong toan bo syntax va import path!');