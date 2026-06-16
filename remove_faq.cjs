const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('.').filter(file => fs.statSync(file).isDirectory() && fs.existsSync(path.join(file, 'index.html')));

const faqRegex = /<!-- Perguntas Frequentes -->\s*<section id="faq".*?<\/section>/s;

dirs.forEach(dir => {
    const indexPath = path.join(dir, 'index.html');
    let html = fs.readFileSync(indexPath, 'utf8');
    if (faqRegex.test(html)) {
        html = html.replace(faqRegex, '');
        fs.writeFileSync(indexPath, html);
        console.log(`Removido FAQ de ${indexPath}`);
    }
});
