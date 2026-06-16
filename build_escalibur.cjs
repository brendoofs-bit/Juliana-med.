const fs = require('fs');

const dir = 'escalibur-mapeamento-tridimensional-medical-san';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let html = fs.readFileSync('hakon/index.html', 'utf8');

const replacements = {
    'Hakon - Alta Performance': 'Escalibur – Mapeamento Tridimensional Medical San',
    'Cód: ME21364A': 'Cód: MS100069',
    'Hakon Medical San - Equipamento de Laser para Epilação Premium 4D': 'Escalibur - Mapeamento Tridimensional para Avaliação e Planejamento',
};

for (const [key, val] of Object.entries(replacements)) {
    html = html.split(key).join(val);
}

// Remove Price/Outlet/Manual Tags
html = html.replace(/<span class="inline-block bg-yellow-100 text-yellow-700 font-bold text-xs px-2 py-0.5 rounded uppercase tracking-widest mb-2 align-middle mr-2">Outlet<\/span>/g, '');
html = html.replace(/<!-- 5\. Price -->.*?<!-- 6\. CTA -->/s, '<!-- 6. CTA -->');

// Sales Desc
const salesDesc = `Revolucione a sua clínica com o Escalibur, a ferramenta definitiva em mapeamento tridimensional e inteligência artificial para estética avançada. Com capturas padronizadas de alta definição, você oferece simulações precisas que encantam suas pacientes e elevam a segurança no planejamento de procedimentos faciais e corporais. Transforme suas avaliações, aumente o ticket médio e garanta resultados previsíveis com a tecnologia que é referência absoluta em planejamento estético. O Escalibur é o diferencial competitivo que sua marca precisa para se destacar no mercado!`;

const newOrder4 = `<div class="order-4 lg:col-span-7 lg:col-start-6 lg:row-start-3 border border-gray-100 rounded-2xl p-4 md:p-5 bg-white shadow-sm mt-3 w-full">
                    <p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">
                        ${salesDesc}
                    </p>
                </div>`;
html = html.replace(/<div class="order-4 lg:col-span-7 lg:col-start-6 lg:row-start-3 border border-gray-100 rounded-2xl p-4 md:p-5 bg-white shadow-sm mt-3 w-full">\s*<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">.*?<\/p>\s*<\/div>/s, newOrder4);

// Content replacements
html = html.replace(/<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">.*?<\/p>/s, `<p>${salesDesc.replace(/<br>/g, '<br><br>')}</p>`);

// Rebuild sections
html = html.replace(/<section id="fisiologicos".*?<\/section>/s, '');
html = html.replace(/<section id="conservacao".*?<\/section>/s, '');
html = html.replace(/<!-- 8\. Perguntas Frequentes -->.*?<\/section>/s, '');
html = html.replace(/<!-- 9\. Manual -->.*?<\/section>/s, '');

// Clean images
html = html.replace(/https:\/\/res\.cloudinary\.com\/doqw5aqcf\/image\/upload\/v\d+\/.*?\.png/g, 'https://placehold.co/600x400?text=Escalibur');

fs.writeFileSync(dir + '/index.html', html);
console.log('Escalibur build success');
