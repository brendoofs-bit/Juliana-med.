const fs = require('fs');

const dir = 'magni-endermologia-cromoterapia-medical-san';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let html = fs.readFileSync('hakon/index.html', 'utf8');

const replacements = {
    'Hakon - Alta Performance': 'Magni - Endermologia com Cromoterapia',
    'Cód: ME21364A': 'Cód: ME21244A',
    'Hakon Medical San - Equipamento de Laser para Epilação Premium 4D': 'Magni Medical San – Aparelho de Endermologia com Cromoterapia',
};

for (const [key, val] of Object.entries(replacements)) {
    html = html.split(key).join(val);
}

// Remove tags we don't need
html = html.replace(/<span class="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full text-\[11px\] font-semibold shadow-sm">\s*<svg.*?<\/svg>\s*Crédito pré-aprovado no boleto\s*<\/span>/, '');
html = html.replace(/<span class="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full text-\[11px\] font-semibold shadow-sm">\s*<svg.*?<\/svg>\s*Aprovação rápida\s*<\/span>/, '');
html = html.replace(/<span class="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full text-\[11px\] font-semibold shadow-sm">\s*<svg.*?<\/svg>\s*Treinamento incluso\s*<\/span>/, '');

// Clean empty lines in tags area
html = html.replace(/<div class="order-3 lg:col-span-7 lg:col-start-6 lg:row-start-2 flex flex-wrap gap-2 mt-2">\s*<\/div>/, '<div class="order-3 lg:col-span-7 lg:col-start-6 lg:row-start-2 flex flex-wrap gap-2 mt-2"></div>');

// Brief Desc
const salesDesc = `Revolucione os tratamentos corporais e faciais da sua clínica com o Magni Medical San! A combinação poderosa de endermologia positiva por roletes de esferas 360º com cromoterapia de 7 cores entrega firmeza, redução de celulite e alívio de tensões de forma não invasiva e espetacular. Totalmente indolor e 100% confortável, o Magni gera resultados nítidos desde a primeira sessão, fidelizando pacientes e superando expectativas. Com aplicadores confortáveis para grandes e pequenas áreas e tela touch de ajuste fácil, o atendimento se torna rápido e preciso. Invista na tecnologia inovadora que moderniza sua clínica e aumenta sua rentabilidade agora!`;
html = html.replace(/<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">\s*Hakon 4D Premium.*?<\/p>/, `<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">\n                        ${salesDesc}\n                    </p>`);

// Price remove
const priceRegex = /<!-- 5\. Price -->.*?<!-- 6\. CTA -->/s;
html = html.replace(priceRegex, '<!-- 6. CTA -->');

// Descricao
const descricaoHtml = `<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">
O Magni combina inovação, eficácia e bem-estar em um único equipamento. Com tecnologia de endermologia positiva não invasiva, proporciona tratamentos completos voltados à tonificação, firmeza e suavização das imperfeições corporais, de forma confortável, segura e eficaz.<br><br>
O sistema inteligente opera com um roller de esferas com rotação 360º, que gera microvibrações de compressão responsáveis pelo aquecimento dos tecidos e estímulo da atividade celular. Como resultado, promove melhora visível da celulite, remodelamento corporal e alívio de dores musculares.<br><br>
O equipamento conta com dois aplicadores — um destinado a grandes áreas e outro para regiões menores —, além de 10 níveis de rolamento ajustáveis. Possui cromoterapia integrada com 7 cores terapêuticas e tela touch intuitiva, garantindo versatilidade, precisão e personalização em cada protocolo. Trata-se de uma solução moderna voltada ao rejuvenescimento, bem-estar e resultados consistentes.
</p>`;
html = html.replace(/<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">.*?<\/p>/s, descricaoHtml);

// Diferenciais
const differentials = [
    { title: "Tecnologia Segura", desc: "A tecnologia de endermologia positiva oferece um tratamento não invasivo, com estímulos profundos realizados com conforto e segurança." },
    { title: "Resultados Imediatos", desc: "A microvibração associada à compressão promove geração de calor e estímulo celular, contribuindo para resultados visíveis desde as primeiras sessões." },
    { title: "Cromoterapia Integrada", desc: "A cromoterapia integrada disponibiliza 7 cores com efeitos dermatoestéticos complementares." },
    { title: "Controle Total", desc: "Permite ajustar intensidade, velocidade, direção do movimento e cromoterapia diretamente no aplicador G." },
    { title: "Fácil Higienização", desc: "A higienização é facilitada por meio da peça de mão e cilindro removíveis, de fácil limpeza." },
    { title: "Intuitivo", desc: "A tela touch intuitiva possibilita programação simples e armazenamento de protocolos personalizados." }
];

let diferenciaisBody = differentials.map(d => `<div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md"><div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">${d.title}</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">${d.desc}</p></div></div>`).join('\n');
html = html.replace(/<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">.*?<\/section>/s, '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">\n' + diferenciaisBody + '\n</div></div></section>');

// Indicacoes (We replace the Efeitos Fisiologicos section to Indicações initially from hakon? Hakon didn't have indicacoes per se, so we insert it before conservacao/contraindica)
const indicacoesList = [
    "Indicado para remodelamento corporal, redução de celulite (FEG), alívio de dores musculares, drenagem linfática, rejuvenescimento facial e corporal, lifting da pele e tratamento de aderências."
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

// In Hakon, after Efeitos Fisiologicos is Contraindicacoes? Actually Hakon had Contraindicacoes, Itens Inclusos, etc. So we will just replace the "Efeitos Fisiológicos" entirely with "Indicações"
html = html.replace(/<section id="fisiologicos".*?<\/section>/s, indicacoesSectionHtml);

// Informações Adicionais
const extrasList = [
    "O Aplicador G (Grandes Áreas) possui roller de silicone e metalizado, sendo indicado para regiões como abdômen, coxas, glúteos e costas.",
    "O Aplicador P (Pequenas Áreas) conta com rotter de silicone e metalizado, adequado para áreas como rosto, braços, colo e região íntima.",
    "Ambos os aplicadores oferecem ajuste em 10 níveis de rolamento, permitindo personalização da intensidade conforme a necessidade do paciente."
];
let extrasBody = extrasList.map(item => `<li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">${item}</p></li>`).join('\n');

const extrasSectionHtml = `
    <!-- Informações Adicionais -->
    <section id="informacoes-adicionais" class="py-16 bg-gray-50 border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Informações Adicionais</h2>
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <ul class="space-y-4">
                    ${extrasBody}
                </ul>
            </div>
        </div>
    </section>
`;

// Insert info adicionais before Contraindicações
html = html.replace('<!-- Contraindicações -->', extrasSectionHtml + '\n\n    <!-- Contraindicações -->');

// Contraindicacoes
const contras = [
    "Contraindicado em casos de infecções ativas, hipertensão descontrolada, varizes, uso de anticoagulantes, problemas cardíacos, presença de marcapasso, trombose e câncer."
];
let contraBody = contras.map(c => `<li class="flex gap-3 items-center"><div class="bg-red-50 text-red-500 p-1.5 rounded-full shrink-0"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium">${c}</p></li>`).join('\n');
html = html.replace(/<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid flex-col flex gap-x-6 gap-y-4">\n' + contraBody + '\n</ul>');

// Itens Inclusos
const items = [
    "01 Magni Medical San - Aparelho de Endermologia com Cromoterapia",
    "01 Aplicador G",
    "01 Aplicador P",
    "01 Espátula de Higienização",
    "01 Cabo de Alimentação"
];
let itemsBody = items.map(i => `<li class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"><div class="bg-white p-2 rounded-lg shadow-sm text-medical-500"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><span class="text-sm md:text-base font-medium text-gray-700">${i}</span></li>`).join('\n');
html = html.replace(/<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">\n' + itemsBody + '\n</ul>');


// Especificacoes
const specs = [
    { k: 'Potência de Saída', v: '1000W;' },
    { k: 'Velocidade do Aplicador G', v: '450rpm;' },
    { k: 'Velocidade do Aplicador P', v: '410rpm;' },
    { k: 'Rolamento', v: '10 níveis progressivos de intensidade;' },
    { k: 'Cores Cromoterapia', v: 'Amarelo, Índigo/Anil, Verde, Vermelho, Violeta, Laranja e Azul Claro;' },
    { k: 'Rotação', v: 'Sentido horário e anti-horário;' },
    { k: 'Voltagem', v: 'Bivolt;' },
    { k: 'Tempo de Sessão', v: 'De 5 a 60 minutos.' }
];
let specBody = specs.map(s => `<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">${s.k}</span><span class="text-sm text-gray-600 font-medium md:text-left">${s.v}</span></div>`).join('\n');
html = html.replace(/<section id="especificacoes" class="py-16 bg-gray-50 border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<section id="especificacoes" class="py-16 bg-white border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Especificações Técnicas</h2><div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + specBody + '\n</div></div></div></section>');

// Ficha
const ficha = [
    {k: 'Dimensões (C x L x A)', v: '34.0 x 45.0 x 20.0 cm'},
    {k: 'Peso Kg', v: '5.0'},
    {k: 'Dimensões Embalado (C x L x A)', v: '74.0 x 77.0 x 134.0 cm'},
    {k: 'Peso Embalado Kg', v: '41.0'},
    {k: 'Marca', v: 'MEDICAL SAN'},
    {k: 'Modelo', v: 'MASSAGEADOR TERAPEUTICO'},
    {k: 'NCM', v: '90189099'}
];
let fichaBody = ficha.map(f => `<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">${f.k}</span><span class="text-sm text-gray-600 font-medium md:text-left">${f.v}</span></div>`).join('\n');

html = html.replace(/<section id="ficha-tecnica" class="py-16 bg-white border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<section id="ficha-tecnica" class="py-16 bg-gray-50 border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Ficha Técnica</h2><div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + fichaBody + '\n</div></div></div></section>');

// Remover Perguntas Frequentes
html = html.replace(/<!-- Perguntas Frequentes -->.*?<\/section>/s, '');


// Clean images
html = html.replace(/https:\/\/res\.cloudinary\.com\/doqw5aqcf\/image\/upload\/v1778022679\/.*?_jcq9n2\.png/g, 'https://placehold.co/600x400?text=Magni+Endermologia');
html = html.replace(/alt="Hakon Laser Principal"/g, 'alt="Magni Medical San"');

// Thumbs
html = html.replace(/<button onclick="changeImage.*?<\/button>/gs, '');

fs.writeFileSync(dir + '/index.html', html);
console.log('Magni build success');
