const fs = require('fs');

const dir = 'ultramed-mpt-medical-san';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let html = fs.readFileSync('hakon/index.html', 'utf8');

const replacements = {
    'Hakon - Alta Performance': 'Ultramed MPT Medical San – Ultrassom Micro e Macrofocado',
    'Cód: ME21364A': 'Cód: ME21380A',
    'Hakon Medical San - Equipamento de Laser para Epilação Premium 4D': 'Ultramed MPT - Ultrassom Micro e Macrofocado',
};

for (const [key, val] of Object.entries(replacements)) {
    html = html.split(key).join(val);
}

// Remove Price/Outlet/Manual Tags
html = html.replace(/<span class="inline-block bg-yellow-100 text-yellow-700 font-bold text-xs px-2 py-0.5 rounded uppercase tracking-widest mb-2 align-middle mr-2">Outlet<\/span>/g, '');
html = html.replace(/<!-- 5\. Price -->.*?<!-- 6\. CTA -->/s, '<!-- 6. CTA -->');

// Sales Desc
const salesDesc = `O Ultramed MPT é a revolução definitiva da estética mundial! Com tecnologia de ultrassom 100% nacional, ele eleva a performance da sua clínica ao máximo com 4 aplicadores versáteis e 7 modos de operação Ultra Pulse. O resultado? Procedimentos até 5 vezes mais rápidos, muito mais precisos e com absoluto conforto para o paciente. Entregue lifting, definição corporal e resultados perceptíveis desde a primeira aplicação. Seja líder de mercado com a plataforma mais avançada do mundo e garanta o retorno financeiro que sua clínica merece!`;

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

// Clean images
html = html.replace(/https:\/\/res\.cloudinary\.com\/doqw5aqcf\/image\/upload\/v\d+\/.*?\.png/g, 'https://placehold.co/600x400?text=Ultramed+MPT');

fs.writeFileSync(dir + '/index.html', html);
console.log('Ultramed MPT build success');
