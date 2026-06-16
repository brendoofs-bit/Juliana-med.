const fs = require('fs');
const dir = 'andromeda-termofrequencia-bipolar-medical-san';
let html = fs.readFileSync(dir + '/index.html', 'utf8');

const salesDesc = `O Andrômeda Medical San é a revolução em tratamentos estéticos que a sua clínica precisa para decolar o faturamento! Com a inovadora tecnologia de termofrequência bipolar, você oferece rejuvenescimento facial, contorno corporal e redução de celulite com resultados visíveis logo nas primeiras sessões. Seus aplicadores estacionários e motion garantem tratamentos efetivos e dinâmicos em diversas áreas do corpo. Não é invasivo, não exige tempo de recuperação e ainda estimula a produção rápida de colágeno. Invista no único equipamento do Brasil com essa tecnologia exclusiva e torne sua clínica referência!`;

html = html.replace(/<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">\s*Hakon 4D Premium.*?<\/p>/s, `<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">\n                        ${salesDesc}\n                    </p>`);

html = html.replace('alt="Hakon Laser Principal"', 'alt="Andromeda Medical San"');

/* Also we need to make sure the tags are actually removed if there are any trailing spaces. */
html = html.replace(/<span class="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full text-\[11px\] font-semibold shadow-sm">\s*<svg class="w-3\.5 h-3\.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"><\/path><\/svg>\s*<\/span>\s*/g, '');

fs.writeFileSync(dir + '/index.html', html);
console.log('Fixed brief desc');
