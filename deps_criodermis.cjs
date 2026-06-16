const fs = require('fs');
const dir = 'criodemis-smart-medical-san';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
fs.copyFileSync('hakon/style.css', dir + '/style.css');
console.log('Copied css');
