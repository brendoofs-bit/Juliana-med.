const fs = require('fs');

const dir = 'ptolomeu-radiofrequencia-fracionada-medical-san';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let html = fs.readFileSync('hakon/index.html', 'utf8');

const replacements = {
    'Hakon - Alta Performance': 'Ptolomeu - Radiofrequência Fracionada',
    'Cód: ME21364A': 'Cód: ME21101A',
    'Hakon Medical San - Equipamento de Laser para Epilação Premium 4D': 'Ptolomeu Medical San – Equipamento de Radiofrequência Fracionada',
};

for (const [key, val] of Object.entries(replacements)) {
    html = html.split(key).join(val);
}

// Add Lançamento Tag back before the Code
const titleContainerRegex = /<span class="text-sm text-medical-500 mb-2 font-semibold tracking-wider uppercase block">/;
html = html.replace(titleContainerRegex, `<span class="inline-block bg-medical-100 text-medical-700 font-bold text-xs px-2 py-0.5 rounded uppercase tracking-widest mb-2 align-middle mr-2">Lançamento</span><span class="text-sm text-medical-500 mb-2 font-semibold tracking-wider uppercase inline-block align-middle">`);


// Ensure the 3 tags are present
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

// Brief Desc
const salesDesc = `Eleve o padrão dos seus tratamentos com o Ptolomeu Medical San, o mais avançado microagulhamento robótico com tecnologia Bio Redense! Com microagulhas de ouro e um sistema Multideep exclusivo, atinja até três camadas da pele em um único disparo, garantindo resultados de lifting imediato, rejuvenescimento e redensificação profunda. Ofereça tratamentos para todos os fototipos com conforto e segurança inigualáveis. Fidelize seus pacientes e destaque sua clínica com essa inovação revolucionária que maximiza seus ganhos em menos tempo!`;

// Replace short description block
const order4Regex = /<div class="order-4 lg:col-span-7 lg:col-start-6 lg:row-start-3 border border-gray-100 rounded-2xl p-4 md:p-5 bg-white shadow-sm mt-3 w-full">\s*<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">.*?<\/p>\s*<\/div>/s;
const newOrder4 = `<div class="order-4 lg:col-span-7 lg:col-start-6 lg:row-start-3 border border-gray-100 rounded-2xl p-4 md:p-5 bg-white shadow-sm mt-3 w-full">
                    <p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">
                        ${salesDesc}
                    </p>
                </div>`;
html = html.replace(order4Regex, newOrder4);

// Price remove
const priceRegex = /<!-- 5\. Price -->.*?<!-- 6\. CTA -->/s;
html = html.replace(priceRegex, '<!-- 6. CTA -->');

// Descricao
const descricaoHtml = `<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">
<b>Ptolomeu: Microagulhamento Robótico com Tecnologia Bio Redense para Redensificação e Rejuvenescimento da Pele</b><br><br>
O Ptolomeu é um equipamento de microagulhamento robótico desenvolvido para cuidados estéticos faciais e corporais. Combina microagulhas de ouro com a tecnologia Bio Redense, promovendo redensificação profunda da pele e estimulando a bioregeneração do tecido, com foco em rejuvenescimento facial e corporal.<br><br>
O equipamento atua no combate à flacidez e no aprimoramento do contorno corporal. Possui sistema Multideep ajustável, capaz de atingir até três camadas da pele — Epiderme, Derme e Hipoderme — em um único disparo, com profundidades que variam de 0,2 a 7 milímetros e ação térmica que pode alcançar até 8 milímetros.<br><br>
É indicado para tratamentos faciais e corporais, proporcionando lifting imediato, melhora da textura da pele, atuação em melasma e permeação intensificada de ativos.<br><br>
O Ptolomeu conta com 4 ponteiras inteligentes que garantem precisão e versatilidade nos procedimentos. São três ponteiras com microagulhas de ouro, com diferentes quantidades para aplicações personalizadas, e uma ponteira Redense com nano cristais, desenvolvida para otimizar a entrega de ativos diretamente na pele.<br><br>
A interface é intuitiva e a funcionalidade é dinâmica, facilitando a operação e otimizando o tempo do profissional. O equipamento é indicado para todos os fototipos de pele e atende a diferentes aplicações clínicas.
</p>`;
html = html.replace(/<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">.*?<\/p>/s, descricaoHtml);

// Diferenciais
const differentials = [
    { title: "Bio Redense", desc: "A tecnologia Bio Redense promove bioregeneração e redensificação profunda da pele." },
    { title: "Sistema Multideep", desc: "O sistema Multideep permite atingir até três camadas da pele em um único disparo." },
    { title: "Versatilidade Clínica", desc: "Apresenta versatilidade clínica para tratamentos faciais, corporais e melasma." },
    { title: "Rejuvenescimento Profundo", desc: "Proporciona resultados rápidos e duradouros, com efeito de lifting imediato e rejuvenescimento profundo." },
    { title: "Para Todos os Fototipos", desc: "É indicado para todos os fototipos, garantindo segurança e eficácia." },
    { title: "Ação Térmica", desc: "Possui ação térmica com profundidade ajustável de até 8mm." },
    { title: "Intuitivo", desc: "A interface intuitiva facilita o uso e contribui para maior produtividade do profissional." }
];

let diferenciaisBody = differentials.map(d => `<div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md"><div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">${d.title}</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">${d.desc}</p></div></div>`).join('\n');
html = html.replace(/<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">.*?<\/section>/s, '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">\n' + diferenciaisBody + '\n</div></div></section>');

// Indicações e Fisiológicos
const indicacoesList = [
    "Flacidez corporal e facial",
    "Estrias",
    "Rugas e linhas de expressão",
    "Cicatrizes de acne",
    "Rejuvenescimento",
    "Melhora na textura da pele"
];
let indicacoesBody = indicacoesList.map(item => `<li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">${item}</p></li>`).join('\n');

const efeitosList = [
    "Estimula a produção de colágeno",
    "Estimula a formação de novas fibras elásticas"
];
let efeitosBody = efeitosList.map(item => `<li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">${item}</p></li>`).join('\n');


const indicacoesSectionHtml = `
    <!-- Indicações -->
    <section id="indicacoes" class="py-16 bg-white border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Indicações</h2>
            <div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <ul class="space-y-4">
                    ${indicacoesBody}
                </ul>
            </div>
        </div>
    </section>

    <!-- Efeitos Fisiológicos -->
    <section id="fisiologicos" class="py-16 bg-gray-50 border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Efeitos Fisiológicos</h2>
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <ul class="space-y-4">
                    ${efeitosBody}
                </ul>
            </div>
        </div>
    </section>
`;

// Substituir fisiológicos original do hakon
html = html.replace(/<section id="fisiologicos".*?<\/section>/s, indicacoesSectionHtml);

// Remover Conservação do Hakon (Ptolomeu não tem informações adicionais ou conservação)
html = html.replace(/<section id="conservacao".*?<\/section>/s, '');


// Contraindicacoes
const contras = [
    "Gravidez e lactação",
    "Portadores de marcapassos, desfibriladores internos ou implantes metálicos em qualquer parte do corpo",
    "Pacientes em tratamento oncológico, quimioterapia ou radioterapia",
    "Condições ativas da pele na área de tratamento, incluindo inflamações e condições alérgicas",
    "Histórico de sensibilidade à estimulação térmica",
    "Pessoas com constituição cicatricial grave, mecanismo de coagulação deficiente, quelóides, cicatrização anormal de feridas ou pele muito seca e frágil devem utilizar com cautela",
    "Doenças imunossupressoras devem ser consideradas com cautela",
    "Doenças cardíacas, distúrbios sensoriais, epilepsia, hipertensão não controlada, doenças hepáticas e renais, vitiligo e leucemia devem ser avaliadas com cautela",
    "Distúrbios endócrinos não controlados, como diabetes ou disfunções da tireoide"
];
let contraBody = contras.map(c => `<li class="flex gap-3 items-center"><div class="bg-red-50 text-red-500 p-1.5 rounded-full shrink-0"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium">${c}</p></li>`).join('\n');
html = html.replace(/<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid flex-col flex gap-x-6 gap-y-4">\n' + contraBody + '\n</ul>');

// Itens Inclusos
const items = [
    "01 Ptolomeu Medical San – Equipamento de Radiofrequência Fracionada",
    "01 Aplicador",
    "01 Pedal",
    "01 Ponteira com 12 microagulhas",
    "01 Ponteira com 24 microagulhas",
    "01 Ponteira com 40 microagulhas",
    "01 Ponteira Redense com nano cristais",
    "01 Cabo de força",
    "01 Certificado de garantia"
];
let itemsBody = items.map(i => `<li class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"><div class="bg-white p-2 rounded-lg shadow-sm text-medical-500"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><span class="text-sm md:text-base font-medium text-gray-700">${i}</span></li>`).join('\n');
html = html.replace(/<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">\n' + itemsBody + '\n</ul>');

// Especificacoes
const specs = [
    { k: 'Voltagem', v: 'Bivolt automático;' },
    { k: 'Profundidade', v: '0.5 - 7mm - Corporal;' },
    { k: 'Profundidade (Facial)', v: '0.2 - 3.5mm - Facial;' },
    { k: 'Potência de saída (Corporal)', v: '300W - Corporal;' },
    { k: 'Potência de saída (Facial)', v: '200W - Facial;' },
    { k: 'Frequência de saída', v: '4MHz;' },
    { k: 'Peso', v: '13kg;' },
    { k: 'Dimensões', v: '420x23x430 (LxAxC).' }
];
let specBody = specs.map(s => `<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">${s.k}</span><span class="text-sm text-gray-600 font-medium md:text-left">${s.v}</span></div>`).join('\n');
html = html.replace(/<section id="especificacoes" class="py-16 bg-gray-50 border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<section id="especificacoes" class="py-16 bg-white border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Especificações Técnicas</h2><div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + specBody + '\n</div></div></div></section>');

// Ficha Técnica
const ficha = [
    {k: 'Dimensões (C x L x A)', v: '43.0 x 42.0 x 23.0 cm'},
    {k: 'Peso Kg', v: '27.0'},
    {k: 'Dimensões Embalado (C x L x A)', v: '148.0 x 62.0 x 151.0 cm'},
    {k: 'Peso Embalado Kg', v: '110.8'},
    {k: 'Marca', v: 'MEDICAL SAN'},
    {k: 'Garantia', v: '18 MESES'},
    {k: 'NCM', v: '90189099'},
    {k: 'Anvisa', v: '81243819006'}
];
let fichaBody = ficha.map(f => `<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">${f.k}</span><span class="text-sm text-gray-600 font-medium md:text-left">${f.v}</span></div>`).join('\n');

html = html.replace(/<section id="ficha-tecnica" class="py-16 bg-white border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<section id="ficha-tecnica" class="py-16 bg-gray-50 border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Ficha Técnica</h2><div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + fichaBody + '\n</div></div></div></section>');

// Perguntas Frequentes
const faqBody = `<div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-base md:text-lg font-bold text-medical-900 mb-2">Quantas sessões são necessárias?</h3>
                            <p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                                É indicada uma sequência de 3 sessões, com intervalo mínimo de 30 dias entre elas.
                            </p>
                        </div>
                    </div>
                </div>`;
html = html.replace(/<div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto">.*?<\/div>/s, faqBody);


// Clean images
html = html.replace(/https:\/\/res\.cloudinary\.com\/doqw5aqcf\/image\/upload\/v1778022679\/.*?_jcq9n2\.png/g, 'https://placehold.co/600x400?text=Ptolomeu+Radiofrequencia');
html = html.replace(/alt="Hakon Laser Principal"/g, 'alt="Ptolomeu Radiofrequência Fracionada"');

// Thumbs
html = html.replace(/<button onclick="changeImage.*?<\/button>/gs, '');

fs.writeFileSync(dir + '/index.html', html);
console.log('Ptolomeu build success');
