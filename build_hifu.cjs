const fs = require('fs');

const dir = 'novo-ultramed-hifu-medical-san';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let html = fs.readFileSync('hakon/index.html', 'utf8');

const replacements = {
    'Hakon - Alta Performance': 'Novo Ultramed HIFU - Ultrassom Micro e Macrofocado',
    'Cód: ME21364A': 'Cód: ME20657A',
    'Hakon Medical San - Equipamento de Laser para Epilação Premium 4D': 'Novo Ultramed HIFU Medical San - Ultrassom Micro e Macrofocado',
};

for (const [key, val] of Object.entries(replacements)) {
    html = html.split(key).join(val);
}

// Add Lançamento/Outlet Tag back before the Code
// const titleContainerRegex = /<span class="text-sm text-medical-500 mb-2 font-semibold tracking-wider uppercase block">/;
// html = html.replace(titleContainerRegex, `<span class="inline-block bg-yellow-100 text-yellow-700 font-bold text-xs px-2 py-0.5 rounded uppercase tracking-widest mb-2 align-middle mr-2">Outlet</span><span class="text-sm text-medical-500 mb-2 font-semibold tracking-wider uppercase inline-block align-middle">`);

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
const salesDesc = `Revolucione os resultados da sua clínica com o Novo Ultramed HIFU, a mais avançada tecnologia de ultrassom micro e macrofocado da Medical San! Desenvolvido para oferecer máxima precisão em tratamentos faciais e corporais, ele combate flacidez, gordura localizada e realiza lifting não invasivo com resultados expressivos desde a primeira sessão. Uma escolha inteligente para profissionais que buscam elevar o padrão de seus procedimentos e faturamento com alta performance e durabilidade inigualável.`;

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
Ultramed HIFU Medical San – Ultrassom Micro e Macrofocado<br><br>
Descubra a evolução no cuidado estético com o Ultramed HIFU da Medical San. Este equipamento de ultrassom micro e macrofocado foi desenvolvido para atender diversas demandas estéticas, incluindo flacidez tissular, estrias e adiposidade localizada. A tecnologia permite a realização de tratamentos eficazes com resultados consistentes, elevando o padrão dos procedimentos estéticos.<br><br>
O Ultramed HIFU possibilita ao profissional oferecer tratamentos com alto nível de desempenho, contribuindo para a entrega de resultados expressivos e fortalecendo a relação de confiança com os clientes. O equipamento conta com o primeiro cartucho desenvolvido no Brasil, com mais de 20.000 disparos, garantindo longa vida útil e desempenho contínuo.<br><br>
Com foco em eficiência e desempenho, o Ultramed HIFU é uma solução para otimizar a rotina profissional e potencializar a entrega de resultados em procedimentos estéticos.
</p>`;
html = html.replace(/<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">.*?<\/p>/s, descricaoHtml);

// Diferenciais
const differentials = [
    { title: "Otimização de Tempo", desc: "A tecnologia do Ultramed HIFU foi projetada para otimizar o tempo do profissional esteticista, permitindo maior eficiência na execução dos procedimentos." },
    { title: "Resultados Consistentes", desc: "A interface intuitiva e os recursos tecnológicos facilitam a realização dos tratamentos, contribuindo para resultados consistentes em menos tempo." },
    { title: "Atração de Clientes", desc: "A realização de tratamentos eficazes pode atrair mais clientes e contribuir para o aumento do faturamento, além de favorecer a fidelização." },
    { title: "Cartucho 2D Exclusivo", desc: "O equipamento possui cartucho 2D com 20.000 disparos, sendo o primeiro desenvolvido no Brasil com essa capacidade, permitindo maior número de procedimentos sem necessidade de substituição frequente." },
    { title: "Custo-Benefício", desc: "A alta capacidade de disparos contribui para melhor custo-benefício e maior aproveitamento do equipamento." }
];

let diferenciaisBody = differentials.map(d => `<div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md"><div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">${d.title}</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">${d.desc}</p></div></div>`).join('\n');
html = html.replace(/<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">.*?<\/section>/s, '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">\n' + diferenciaisBody + '\n</div></div></section>');


// Indicações
const indicacoesList = [
    "Indicado para rejuvenescimento, cicatriz de acne e definição do arco da mandíbula.",
    "Pode ser utilizado no tratamento de linhas de expressão, redução de papada e efeito tightening.",
    "Também é indicado para gordura localizada, flacidez tecidual, alta definição abdominal, tratamento íntimo externo, redução de monte de vênus e tratamento de estrias."
];
let indicacoesBody = indicacoesList.map(item => `<li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">${item}</p></li>`).join('\n');

const infosAdicionaisList = [
    "<b>Aplicador 9D:</b> indicado para região corporal, com 3 opções de transdutores.",
    "<b>Aplicador 2D:</b> possibilita aplicação facial e corporal, com 8 opções de transdutores.",
    "<b>Aplicador Pen:</b> indicado para pequenas áreas faciais, com 3 opções de transdutores."
];
let infosAdicBody = infosAdicionaisList.map(item => `<li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">${item}</p></li>`).join('\n');

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

    <!-- Informações Adicionais -->
    <section id="informacoes" class="py-16 bg-gray-50 border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Informações Adicionais</h2>
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify mb-4">
                    O Ultramed HIFU conta com diferentes aplicadores que permitem versatilidade nos tratamentos.
                </p>
                <ul class="space-y-4">
                    ${infosAdicBody}
                </ul>
            </div>
        </div>
    </section>
`;

// Substituir fisiológicos original do hakon
html = html.replace(/<section id="fisiologicos".*?<\/section>/s, indicacoesSectionHtml);

// Remover Conservação do Hakon
html = html.replace(/<section id="conservacao".*?<\/section>/s, '');
// Remover Perguntas Frequentes
html = html.replace(/<!-- 8\. Perguntas Frequentes -->.*?<\/section>/s, '');

// Contraindicacoes
const contras = [
    "Gestantes e lactantes",
    "Doença cardíaca",
    "Globo ocular",
    "Portador de marcapasso",
    "Queloide e cicatriz hipertrófica",
    "Trombose",
    "Acne ativa",
    "Dermatite",
    "Doenças auto imunes",
    "Epilepsia",
    "Não aplicar sobre glândulas mamárias",
    "Tireoide descompensada",
    "Hipersensibilidade ao calor",
    "Diabetes descompensada",
    "Infecções de pele"
];
let contraBody = contras.map(c => `<li class="flex gap-3 items-center"><div class="bg-red-50 text-red-500 p-1.5 rounded-full shrink-0"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium">${c}</p></li>`).join('\n');
html = html.replace(/<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid flex-col flex gap-x-6 gap-y-4 md:grid-cols-2">\n' + contraBody + '\n</ul>');

// Itens Inclusos
const items = [
    "01 Ultramed HIFU Medical San – Ultrassom Micro e Macrofocado",
    "01 Aplicador 2D",
    "01 Cartucho 1,5 mm",
    "01 Cartucho 3,0 mm",
    "01 Cartucho 4,5 mm",
    "01 Cartucho 8,0 mm",
    "01 Cartucho 13 mm",
    "01 Aplicador 9D",
    "01 Cartucho 0,8 cm",
    "01 Cartucho 1,3 cm",
    "01 Cartucho 1,6 cm",
    "01 Aplicador Pen",
    "01 Cartucho 1,5 mm",
    "01 Cartucho 3,0 mm",
    "01 Cartucho 4,5 mm",
    "01 Cabo de alimentação",
    "01 Manual do usuário",
    "01 Certificado de garantia"
];
let itemsBody = items.map(i => `<li class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"><div class="bg-white p-2 rounded-lg shadow-sm text-medical-500"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><span class="text-sm md:text-base font-medium text-gray-700">${i}</span></li>`).join('\n');
html = html.replace(/<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">\n' + itemsBody + '\n</ul>');

// Especificacoes
const specs = [
    { k: 'Modo de Operação', v: 'Contínuo;' },
    { k: 'Voltagem', v: 'Bivolt automático;' },
    { k: 'Frequência', v: '60Hz;' },
    { k: 'Potência', v: '300W;' },
    { k: 'Peso', v: '3,5kg;' },
    { k: 'Dimensões', v: '440x220x420 mm (LxAxC).' }
];
let specBody = specs.map(s => `<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">${s.k}</span><span class="text-sm text-gray-600 font-medium md:text-left">${s.v}</span></div>`).join('\n');
html = html.replace(/<section id="especificacoes" class="py-16 bg-gray-50 border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<section id="especificacoes" class="py-16 bg-white border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Especificações Técnicas</h2><div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + specBody + '\n</div></div></div></section>');

// Ficha Técnica
const ficha = [
    {k: 'Dimensões (C x L x A)', v: '50.0 x 60.0 x 45.0 cm'},
    {k: 'Peso Kg', v: '10.0'},
    {k: 'Dimensões Embalado (C x L x A)', v: '160.0 x 60.0 x 84.0 cm'},
    {k: 'Peso Embalado Kg', v: '89.35'},
    {k: 'Marca', v: 'MEDICAL SAN'},
    {k: 'Garantia', v: '18 meses'},
    {k: 'NCM', v: '90189099'}
];
let fichaBody = ficha.map(f => `<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">${f.k}</span><span class="text-sm text-gray-600 font-medium md:text-left">${f.v}</span></div>`).join('\n');

html = html.replace(/<section id="ficha-tecnica" class="py-16 bg-white border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<section id="ficha-tecnica" class="py-16 bg-gray-50 border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Ficha Técnica</h2><div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + fichaBody + '\n</div></div></div></section>');

// Clean images
html = html.replace(/https:\/\/res\.cloudinary\.com\/doqw5aqcf\/image\/upload\/v1778022679\/.*?_jcq9n2\.png/g, 'https://placehold.co/600x400?text=Ultramed+HIFU');
html = html.replace(/alt="Hakon Laser Principal"/g, 'alt="Novo Ultramed HIFU Medical San"');

// Thumbs
html = html.replace(/<button onclick="changeImage.*?<\/button>/gs, '');

fs.writeFileSync(dir + '/index.html', html);
console.log('Ultramed HIFU build success');
