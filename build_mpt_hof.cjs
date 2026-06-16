const fs = require('fs');

const dir = 'ultramed-mpt-hof-medical-san';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let html = fs.readFileSync('hakon/index.html', 'utf8');

const replacements = {
    'Hakon - Alta Performance': 'Ultramed MPT HOF Medical San – Ultrassom Microfocado',
    'Cód: ME21364A': 'Cód: ME21265A',
    'Hakon Medical San - Equipamento de Laser para Epilação Premium 4D': 'Ultramed MPT HOF - Ultrassom Microfocado',
};

for (const [key, val] of Object.entries(replacements)) {
    html = html.split(key).join(val);
}

// Remove Price/Outlet/Manual Tags
html = html.replace(/<span class="inline-block bg-yellow-100 text-yellow-700 font-bold text-xs px-2 py-0.5 rounded uppercase tracking-widest mb-2 align-middle mr-2">Outlet<\/span>/g, '');
html = html.replace(/<!-- 5\. Price -->.*?<!-- 6\. CTA -->/s, '<!-- 6. CTA -->');

// Sales Desc
const salesDesc = `O Ultramed MPT HOF é a evolução máxima da plataforma de ultrassom microfocado! Combinando a potência e rapidez da tecnologia MPT com a precisão exigida na harmonização orofacial e corporal, este equipamento entrega resultados inigualáveis em lifting e estímulo de colágeno. Com 13 cartuchos exclusivos e a maior variedade de disparos do mercado, você garante procedimentos muito mais rápidos, precisos e confortáveis. Eleve agora o padrão técnico da sua clínica e ofereça o que há de mais avançado no mundo com segurança total e alta performance comprovada.`;

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
html = html.replace(/https:\/\/res\.cloudinary\.com\/doqw5aqcf\/image\/upload\/v\d+\/.*?\.png/g, 'https://placehold.co/600x400?text=Ultramed+MPT+HOF');

fs.writeFileSync(dir + '/index.html', html);
console.log('Ultramed MPT HOF build success');
