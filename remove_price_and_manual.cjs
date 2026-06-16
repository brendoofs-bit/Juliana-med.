const fs = require('fs');

const file = 'andromeda-termofrequencia-bipolar-medical-san/index.html';
let content = fs.readFileSync(file, 'utf8');

// Remove price section
const priceRegex = /<!-- 5. Price -->.*?<!-- 6. CTA -->/s;
content = content.replace(priceRegex, '<!-- 6. CTA -->');

// Remove Manual completo
const manualRegex = /<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1\/3 shrink-0">Manual completo<\/span>.*?Baixar manual<\/a><\/span><\/div>/s;
content = content.replace(manualRegex, '');

fs.writeFileSync(file, content);
console.log('Removed price and manual');
