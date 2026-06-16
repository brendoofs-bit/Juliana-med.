const fs = require('fs');
const dir = 'andromeda-termofrequencia-bipolar-medical-san';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let content = fs.readFileSync('./hakon/index.html', 'utf-8');

// Title
content = content.replace(/<title>.*?<\/title>/, '<title>Andrômeda - Termofrequência Bipolar</title>');

// Hero
content = content.replace('Cód: ME21364A', 'Cód: ME21245A');
content = content.replace('Hakon Medical San - Equipamento de Laser para Epilação Premium 4D', 'Andrômeda Medical San - Aparelho de Termofrequência Bipolar');

// We use empty images or keep placeholders
// Tags in Hero
content = content.replace(/Crédito pré-aprovado no boleto/, 'Lançamento');
content = content.replace(
  /<span class="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full text-\[11px\] font-semibold shadow-sm">\s*<svg.*?>.*?<\/svg>\s*Aprovação rápida\s*<\/span>/,
  ''
);
content = content.replace(
  /<span class="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full text-\[11px\] font-semibold shadow-sm">\s*<svg.*?>.*?<\/svg>\s*Treinamento incluso\s*<\/span>/,
  ''
);

// Brief Description (7 linhas, foco em vendas)
const salesDesc = `O Andrômeda Medical San é a revolução em tratamentos estéticos que a sua clínica precisa para decolar o faturamento! Com a inovadora tecnologia de termofrequência bipolar, você oferece rejuvenescimento facial, contorno corporal e redução de celulite com resultados visíveis logo nas primeiras sessões. Seus aplicadores estacionários  e motion garantem tratamentos efetivos e dinâmicos em diversas áreas do corpo. Totalmente não invasivo, não exige tempo de recuperação e ainda estimula a produção rápida de colágeno, deixando seus clientes encantados. Saia na frente da concorrência e invista no único equipamento do Brasil com essa tecnologia exclusiva. Aproveite as condições imperdíveis de lançamento e torne sua clínica referência!`;

content = content.replace(
  /<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">\s*Hakon 4D Premium combina 4 lasers.*?<\/p>/,
  `<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">\n                        ${salesDesc}\n                    </p>`
);

// We need to add Prices to Hero. Wait, the Hakon page DOES NOT HAVE PRICES in the template?
// Let's check if there is price in the HTML.
