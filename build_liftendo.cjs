const fs = require('fs');

const dir = 'liftendo-endolaser-subdermico-medical-san';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let html = fs.readFileSync('hakon/index.html', 'utf8');

const replacements = {
    'Hakon - Alta Performance': 'LiftEndo - Endolaser Subdérmico',
    'Cód: ME21364A': 'Cód: ME20170A',
    'Hakon Medical San - Equipamento de Laser para Epilação Premium 4D': 'LiftEndo - Endolaser Subdérmico de 980nm e 1470nm - Medical San',
};

for (const [key, val] of Object.entries(replacements)) {
    html = html.split(key).join(val);
}

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
const salesDesc = `Transforme a sua clínica com o avançado LiftEndo da Medical San, o sistema de endolaser subdérmico definitivo! Aproveitando o poder dos comprimentos de onda de 980nm e 1470nm de forma combinada e precisa, você entregará resultados inacreditáveis de lifting e remodelação corporal logo nas primeiras sessões. Minimamente invasivo, atua com alta precisão e segurança liquefeita a gordura e retraindo a pele sem os grandes períodos de recuperação de uma lipoaspiração. Eleve agora o ticket médio dos seus atendimentos, ofereça uma alternativa inovadora e segura às cirurgias tradicionais e surpreenda seus pacientes com resultados visíveis, rápidos e estéticos!`;

// Replace short description block (from hakon initial template, it's inside order-4)
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
O Liftendo da Medical San é um equipamento de endolaser subdérmico desenvolvido para tratamentos estéticos e médicos, com foco em procedimentos de lifting e melhoria da qualidade da pele. A tecnologia foi projetada para proporcionar resultados naturais e duradouros, com aplicação direcionada e controle preciso.<br><br>
O equipamento utiliza dois comprimentos de onda, 1470nm e 980nm, que atuam de forma complementar. Essa combinação permite indução de neocolagênese, remodelação tecidual e endurecimento uniforme da pele, com trauma reduzido e recuperação mais rápida em comparação com procedimentos cirúrgicos como a lipoaspiração.<br><br>
Para garantir a segurança e higiene, é necessário utilizar uma fibra exclusiva por paciente, com descarte ao final de cada procedimento.<br><br>
O LiftEndo integra tecnologia voltada para tratamentos que visam melhorar a firmeza, textura e aparência da pele.
</p>`;
html = html.replace(/<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">.*?<\/p>/s, descricaoHtml);

// Diferenciais
const differentials = [
    { title: "Tecnologia de Ponta", desc: "Utiliza tecnologia de endolaser voltada para levantamento e firmeza da pele, além de atuação em rugas e linhas finas." },
    { title: "NeoColagênese", desc: "Estimula a neocolagênese, promovendo produção de colágeno associada à melhora da aparência da pele." },
    { title: "Ergonomia", desc: "Possui design ergonômico e portátil, facilitando o manuseio durante os procedimentos." },
    { title: "Resultados Progressivos", desc: "Proporciona resultados progressivos relacionados à firmeza e qualidade da pele." },
    { title: "Segurança", desc: "Apresenta redução de complicações quando comparado a procedimentos cirúrgicos, como edema, danos neurais e embolia adiposa." },
    { title: "Higiene", desc: "Requer uso de fibra individual descartável por paciente, garantindo controle de higiene." }
];

let diferenciaisBody = differentials.map(d => `<div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md"><div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">${d.title}</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">${d.desc}</p></div></div>`).join('\n');
html = html.replace(/<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">.*?<\/section>/s, '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">\n' + diferenciaisBody + '\n</div></div></section>');

// Indicações
const indicacoesList = [
    "Lipólise – redução de gordura",
    "Retração da derme",
    "Estímulo de colágeno",
    "Efeito lifting",
    "Melhora da textura da pele",
    "Rosácea",
    "Telangiectasias",
    "Região íntima"
];
let indicacoesBody = indicacoesList.map(item => `<li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">${item}</p></li>`).join('\n');

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
`;

// Replace Efeitos Fisiologicos block from hakon with "Indicações" and "Efeitos fisiológicos"
const efeitosList = [
    "No tecido adiposo, promove emulsificação do tecido e lesão térmica da célula de gordura.",
    "Na derme, provoca retração tecidual por ação fototérmica, decorrente da concentração térmica de energia.",
    "Os resultados estéticos apresentam características semelhantes aos procedimentos cirúrgicos, com menor ocorrência de traumas e cicatrizes."
];
let efeitosBody = efeitosList.map(item => `<li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">${item}</p></li>`).join('\n');

const efeitosSectionHtml = `
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

html = html.replace(/<section id="fisiologicos".*?<\/section>/s, indicacoesSectionHtml + '\n' + efeitosSectionHtml);


// Informações Adicionais (replaces conservacao from hakon)
const extrasList = [
    "Não é recomendado o uso da fibra de 200, pois sua dimensão reduzida pode ocasionar rompimento no equipamento ou durante a aplicação no paciente."
];
let extrasBody = extrasList.map(item => `<li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">${item}</p></li>`).join('\n');

const extrasSectionHtml = `
    <!-- Informações Adicionais -->
    <section id="informacoes-adicionais" class="py-16 bg-white border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Informações Adicionais</h2>
            <div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <ul class="space-y-4">
                    ${extrasBody}
                </ul>
            </div>
        </div>
    </section>
`;
html = html.replace(/<section id="conservacao".*?<\/section>/s, extrasSectionHtml);

// Contraindicacoes
const contras = [
    "Pacientes com problemas cardíacos",
    "Psicose",
    "Doenças hipertensivas ou pacientes comprovadamente não adequados para terapia com laser"
];
let contraBody = contras.map(c => `<li class="flex gap-3 items-center"><div class="bg-red-50 text-red-500 p-1.5 rounded-full shrink-0"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium">${c}</p></li>`).join('\n');
html = html.replace(/<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid flex-col flex gap-x-6 gap-y-4">\n' + contraBody + '\n</ul>');

// Itens Inclusos
const items = [
    "01 LiftEndo Medical San – Endolaser Subdérmico 980nm e 1470nm",
    "01 Cabo de alimentação",
    "01 Manual do usuário",
    "01 Certificado de garantia"
];
let itemsBody = items.map(i => `<li class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"><div class="bg-white p-2 rounded-lg shadow-sm text-medical-500"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><span class="text-sm md:text-base font-medium text-gray-700">${i}</span></li>`).join('\n');
html = html.replace(/<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">\n' + itemsBody + '\n</ul>');


// Especificacoes
const specs = [
    { k: 'Modo de operação', v: 'Contínuo;' },
    { k: 'Tensão de rede', v: '110 - 127V;' },
    { k: 'Frequência', v: '60 Hz;' },
    { k: 'Potência', v: '47W (1470nm/17W e 980nm/30W);' },
    { k: 'Peso', v: '5kg;' },
    { k: 'Dimensões', v: '410x270x310 mm (LxAxP);' },
    { k: 'Garantia', v: '18 meses;' },
    { k: 'Tipo de laser', v: 'Laser de diodo 980nm + 1470nm;' },
    { k: 'Potência de saída', v: '980nm 16W ±20% / 1470nm 4.5W ±20%.' }
];
let specBody = specs.map(s => `<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">${s.k}</span><span class="text-sm text-gray-600 font-medium md:text-left">${s.v}</span></div>`).join('\n');
html = html.replace(/<section id="especificacoes" class="py-16 bg-gray-50 border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<section id="especificacoes" class="py-16 bg-white border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Especificações Técnicas</h2><div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + specBody + '\n</div></div></div></section>');

// Ficha
const ficha = [
    {k: 'Dimensões (C x L x A)', v: '31.0 x 41.0 x 27.0 cm'},
    {k: 'Peso Kg', v: '8.5'},
    {k: 'Dimensões Embalado (C x L x A)', v: '82.0 x 55.0 x 34.0 cm'},
    {k: 'Peso Embalado Kg', v: '17.3'},
    {k: 'Marca', v: 'MEDICAL SAN'},
    {k: 'Modelo', v: 'Endolaser Subdérmico de 980nm e 1470nm'},
    {k: 'Garantia', v: '18 meses'},
    {k: 'NCM', v: '90189099'},
    {k: 'Anvisa', v: '81243810011'}
];
let fichaBody = ficha.map(f => `<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">${f.k}</span><span class="text-sm text-gray-600 font-medium md:text-left">${f.v}</span></div>`).join('\n');

html = html.replace(/<section id="ficha-tecnica" class="py-16 bg-white border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<section id="ficha-tecnica" class="py-16 bg-gray-50 border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Ficha Técnica</h2><div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + fichaBody + '\n</div></div></div></section>');


// Remover Perguntas Frequentes
html = html.replace(/<!-- Perguntas Frequentes -->.*?<\/section>/s, '');


// Clean images
html = html.replace(/https:\/\/res\.cloudinary\.com\/doqw5aqcf\/image\/upload\/v1778022679\/.*?_jcq9n2\.png/g, 'https://placehold.co/600x400?text=LiftEndo+Medical+San');
html = html.replace(/alt="Hakon Laser Principal"/g, 'alt="LiftEndo Endolaser Subdérmico"');

// Thumbs
html = html.replace(/<button onclick="changeImage.*?<\/button>/gs, '');

fs.writeFileSync(dir + '/index.html', html);
console.log('LiftEndo build success');
