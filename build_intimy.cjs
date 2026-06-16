const fs = require('fs');

const dir = 'ultramed-intimy-medical-san';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let html = fs.readFileSync('hakon/index.html', 'utf8');

const replacements = {
    'Hakon - Alta Performance': 'Ultramed Intimy Medical San - Ultrassom Focalizado para Rejuvenescimento Íntimo',
    'Cód: ME21364A': 'Cód: ME21377A',
    'Hakon Medical San - Equipamento de Laser para Epilação Premium 4D': 'Ultramed Intimy - Ultrassom Focalizado para Rejuvenescimento Íntimo',
};

for (const [key, val] of Object.entries(replacements)) {
    html = html.split(key).join(val);
}

// Remove Price/Outlet/Manual Tags
html = html.replace(/<span class="inline-block bg-yellow-100 text-yellow-700 font-bold text-xs px-2 py-0.5 rounded uppercase tracking-widest mb-2 align-middle mr-2">Outlet<\/span>/g, '');
html = html.replace(/<!-- 5\. Price -->.*?<!-- 6\. CTA -->/s, '<!-- 6. CTA -->');

// Tags
const tagsContent = `<div class="order-3 lg:col-span-7 lg:col-start-6 lg:row-start-2 flex flex-wrap gap-2 mt-2">
                    <span class="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full text-[11px] font-semibold shadow-sm">
                        <svg class="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        Crédito pré-aprovado no boleto
                    </span>
                    <span class="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full text-[11px] font-semibold shadow-sm">
                        <svg class="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        Aprovação rápida
                    </span>
                    <span class="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full text-[11px] font-semibold shadow-sm">
                        <svg class="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        Treinamento incluso
                    </span>
                </div>`;
html = html.replace(/<div class="order-3 lg:col-span-7 lg:col-start-6 lg:row-start-2 flex flex-wrap gap-2 mt-2">.*?<\/div>/s, tagsContent);

// Sales Desc
const salesDesc = `Elevando o padrão do rejuvenescimento íntimo feminino, o Ultramed Intimy é a solução definitiva em tecnologia de ultrassom focalizado de alta intensidade. Com precisão inigualável, ele atua diretamente na restauração da saúde e bem-estar íntimo, combatendo a flacidez e promovendo firmeza e hidratação. É o investimento que a sua clínica precisa para oferecer tratamentos seguros, confortáveis e com resultados reais que transformam a vida das suas pacientes. Aumente a autoridade da sua marca com a inovação absoluta da Medical San!`;

const newOrder4 = `<div class="order-4 lg:col-span-7 lg:col-start-6 lg:row-start-3 border border-gray-100 rounded-2xl p-4 md:p-5 bg-white shadow-sm mt-3 w-full">
                    <p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">
                        ${salesDesc}
                    </p>
                </div>`;
html = html.replace(/<div class="order-4 lg:col-span-7 lg:col-start-6 lg:row-start-3 border border-gray-100 rounded-2xl p-4 md:p-5 bg-white shadow-sm mt-3 w-full">\s*<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">.*?<\/p>\s*<\/div>/s, newOrder4);

// Content
html = html.replace(/<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">.*?<\/p>/s, `<p>${salesDesc.replace(/<br>/g, '<br><br>')}</p>`);

// Rebuild sections
html = html.replace(/<section id="fisiologicos".*?<\/section>/s, '');
html = html.replace(/<section id="conservacao".*?<\/section>/s, '');
html = html.replace(/<!-- 8\. Perguntas Frequentes -->.*?<\/section>/s, '');

// Clean images
html = html.replace(/https:\/\/res\.cloudinary\.com\/doqw5aqcf\/image\/upload\/v\d+\/.*?\.png/g, 'https://placehold.co/600x400?text=Ultramed+Intimy');

fs.writeFileSync(dir + '/index.html', html);
console.log('Ultramed Intimy build success');
