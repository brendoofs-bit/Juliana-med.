const fs = require('fs');
const dir = 'magni-endermologia-cromoterapia-medical-san';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
fs.copyFileSync('hakon/style.css', dir + '/style.css');
console.log('Copied css');
