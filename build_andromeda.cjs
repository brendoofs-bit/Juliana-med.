const fs = require('fs');
const dir = 'andromeda-termofrequencia-bipolar-medical-san';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let html = fs.readFileSync('hakon/index.html', 'utf8');

const replacements = {
    'Hakon - Alta Performance': 'Andrômeda - Termofrequência Bipolar',
    'Cód: ME21364A': 'Cód: ME21245A',
    'Hakon Medical San - Equipamento de Laser para Epilação Premium 4D': 'Andrômeda Medical San - Aparelho de Termofrequência Bipolar',
};

for (const [key, val] of Object.entries(replacements)) {
    html = html.split(key).join(val);
}

// Removendo badges extras se quiser:
html = html.replace(/Crédito pré-aprovado no boleto/g, 'Lançamento');
html = html.replace(/Aprovação rápida/g, ''); // just remove text
html = html.replace(/Treinamento incluso/g, ''); 

// To clean up empty badges
html = html.replace(/<span class="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full text-\[11px\] font-semibold shadow-sm">\s*<svg.*?<\/svg>\s*<\/span>/g, '');

// Brief Desc
const salesDesc = `O Andrômeda Medical San é a revolução em tratamentos estéticos que a sua clínica precisa para decolar o faturamento! Com a inovadora tecnologia de termofrequência bipolar, você oferece rejuvenescimento facial, contorno corporal e redução de celulite com resultados visíveis logo nas primeiras sessões. Seus aplicadores estacionários (M e G) e motion garantem tratamentos efetivos e dinâmicos em diversas áreas do corpo. Não é invasivo, não exige tempo de recuperação e ainda estimula a produção rápida de colágeno. Invista no único equipamento do Brasil com essa tecnologia exclusiva e torne sua clínica referência!`;
html = html.replace(/<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">\s*Hakon.*?<\/p>/, `<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">\n                        ${salesDesc}\n                    </p>`);

// Price
const priceHtml = `
<div class="mt-4 mb-2">
    <p class="text-gray-500 text-sm line-through">De: R$ 299.900,00</p>
    <div class="flex items-center gap-2">
        <span class="text-3xl md:text-4xl font-extrabold text-medical-900">R$ 160.550,01</span>
        <span class="text-sm text-gray-600 font-medium">à vista</span>
    </div>
    <p class="text-sm text-gray-600">ou <strong class="text-medical-900 font-bold">R$ 169.000,01</strong> em até <strong>12x de R$ 14.083,33 sem juros</strong></p>
</div>
`;
// Insert price above CTA:
html = html.replace('<!-- 6. CTA -->', '<!-- 5. Price -->\n' + priceHtml + '\n<!-- 6. CTA -->');


// Descricao
const descricaoHtml = `<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">
O Andrômeda Medical San é um aparelho de termofrequência bipolar desenvolvido para elevar o nível dos tratamentos estéticos, combinando tecnologia avançada, eficiência e segurança. Indicado para rejuvenescimento facial, contorno corporal e melhora da qualidade da pele, o equipamento atua diretamente nas camadas mais profundas, promovendo resultados visíveis. <br><br>
A tecnologia de termofrequência bipolar estimula a produção de colágeno, favorece a lipólise e melhora a firmeza da pele. Como resultado, contribui para a redução de rugas, linhas finas, celulite e flacidez, além de proporcionar uma pele mais lisa, uniforme e com aparência rejuvenescida.<br><br>
O equipamento conta com quatro frequências de trabalho (650 kHz, 1 MHz, 2 MHz e 3 MHz), permitindo a personalização dos tratamentos conforme a necessidade de cada paciente. Possui dois aplicadores estacionários (tamanhos M e G) e aplicadores motion intercambiáveis (facial, corporal e íntimo), garantindo versatilidade, precisão e adaptação a diferentes áreas do corpo.<br><br>
O Andrômeda possibilita tratamentos não invasivos, seguros e confortáveis, sem necessidade de tempo de recuperação, proporcionando melhora estética associada ao bem-estar e à autoestima.
</p>`;
html = html.replace(/<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">.*?<\/p>/s, descricaoHtml);


// Diferenciais
const differentials = [
    { title: "Atuação Profunda", desc: "A tecnologia de termofrequência bipolar permite atuação em diferentes profundidades da pele com segurança e eficácia." },
    { title: "Estímulo de Colágeno", desc: "Estimula a produção de colágeno, reduz rugas e linhas finas e melhora a elasticidade da pele." },
    { title: "Versatilidade de Aplicadores", desc: "Os aplicadores estacionários (M e G) e motion (facial, corporal e íntimo) ampliam as possibilidades de tratamento em múltiplas áreas." },
    { title: "Tecnologia Exclusiva", desc: "É o único aparelho no Brasil com tecnologia de termofrequência estacionária." },
    { title: "Frequências Personalizadas", desc: "As quatro frequências de trabalho possibilitam ajustes personalizados para cada paciente." },
    { title: "Ação Lipolítica", desc: "Atua nas camadas de gordura, promovendo lipólise e auxiliando no contorno corporal." },
    { title: "Textura Uniforme", desc: "Melhora a textura da pele, deixando-a mais lisa e uniforme." },
    { title: "Tratamento Confortável", desc: "Proporciona um procedimento não invasivo, confortável e sem necessidade de recuperação." }
];

let diferenciaisBody = differentials.map(d => `<div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md"><div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">${d.title}</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">${d.desc}</p></div></div>`).join('\n');
html = html.replace(/<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">.*?<\/section>/s, '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">\n' + diferenciaisBody + '\n</div></div></section>');

// Indicacoes
const indicacoesList = [
    "Indicado para celulite, cicatrizes de acne, flacidez, rejuvenescimento facial, gordura localizada, estrias e pós-operatório tardio (40 dias)."
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

html = html.replace('<!-- Efeitos Fisiológicos -->', indicacoesSectionHtml + '\n\n    <!-- Efeitos Fisiológicos -->');


// Efeitos Fisiologicos
const efeitosList = [
    "Promove vasodilatação e aumento da circulação sanguínea, favorecendo maior aporte de oxigênio e nutrientes.",
    "Facilita a eliminação de toxinas.",
    "Estimula a lipólise e a tonificação dos tecidos.",
    "Melhora o aspecto do fibro edema gelóide.",
    "Contribui para o aumento da síntese de colágeno."
];
let efeitosBody = efeitosList.map(item => `<li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">${item}</p></li>`).join('\n');
html = html.replace(/<ul class="space-y-4">.*?<\/ul>/s, '<ul class="space-y-4">\n' + efeitosBody + '\n</ul>');


// Informações Adicionais
const extrasList = [
    "Permite o uso de até quatro aplicadores simultaneamente.",
    "Possui sensor de temperatura integrado, proporcionando maior segurança durante o tratamento."
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
html = html.replace('<!-- Contraindicações -->', extrasSectionHtml + '\n\n    <!-- Contraindicações -->');

// Contraindicacoes
const contras = [
    "Contraindicado para gestantes e aplicação na região abdominal durante o período menstrual.",
    "Não deve ser utilizado em pacientes com marca-passo ou cardiopatias.",
    "Evitar uso sobre implantes metálicos, doenças de pele, dermatites e região da pálpebra superior.",
    "Não indicado para acne ativa, fístulas, processos infecciosos agudos e preenchimentos.",
    "Contraindicado em doenças vasculares, uso de isotretinoína, câncer ou metástase e trombose venosa."
];
let contraBody = contras.map(c => `<li class="flex gap-3 items-center"><div class="bg-red-50 text-red-500 p-1.5 rounded-full shrink-0"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium">${c}</p></li>`).join('\n');
html = html.replace(/<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">\n' + contraBody + '\n</ul>');

// Especificacoes
const specs = [
    { k: 'Frequência', v: '650 kHz, 1 MHz, 2 MHz e 3 MHz;' },
    { k: 'Ajuste de Tempo', v: '5 a 90 minutos;' },
    { k: 'Ajuste de Potência', v: '5 a 250W;' },
    { k: 'Voltagem', v: 'Bivolt automático;' },
    { k: 'Tamanho dos Aplicadores', v: 'G - 10x14cm | M - 7x7cm;' }
];
let specBody = specs.map(s => `<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">${s.k}</span><span class="text-sm text-gray-600 font-medium md:text-left">${s.v}</span></div>`).join('\n');
html = html.replace(/<section id="especificacoes" class="py-16 bg-gray-50 border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<section id="especificacoes" class="py-16 bg-gray-50 border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Especificações Técnicas</h2><div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + specBody + '\n</div></div></div></section>');

// Ficha
const ficha = [
    {k: 'Dimensões (C x L x A)', v: '34.0 x 45.0 x 20.0 cm'},
    {k: 'Peso Kg', v: '3.5'},
    {k: 'Dimensões Embalado (C x L x A)', v: '91.0 x 76.0 x 135.0 cm'},
    {k: 'Peso Embalado Kg', v: '45.0'},
    {k: 'Marca', v: 'MEDICAL SAN'},
    {k: 'Garantia', v: '18 meses'},
    {k: 'NCM', v: '90189099'},
];
let fichaBody = ficha.map(f => `<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">${f.k}</span><span class="text-sm text-gray-600 font-medium md:text-left">${f.v}</span></div>`).join('\n');
// manual at the end
fichaBody += `\n<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Manual completo</span><span class="text-sm text-gray-600 font-medium md:text-left"><a href="#" class="bg-medical-900 text-white px-4 py-1.5 rounded text-sm font-bold inline-block hover:bg-medical-800 transition-colors">Baixar manual</a></span></div>`;

html = html.replace(/<section id="ficha-tecnica" class="py-16 bg-white border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<section id="ficha-tecnica" class="py-16 bg-white border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Ficha Técnica</h2><div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + fichaBody + '\n</div></div></div></section>');

// Itens Inclusos
const items = [
    "01 Andrômeda Medical San – Aparelho de Termofrequência Bipolar",
    "04 Aplicadores Estacionários tamanho G",
    "02 Aplicadores Estacionários tamanho M",
    "01 Aplicador Motion",
    "03 Ponteiras Intercambiáveis (corporal, facial e íntimo)",
    "01 Kit de Faixas de Fixação",
    "01 Manual de Instruções",
    "01 Guia Clínico",
    "01 Cabo de Força"
];
let itemsBody = items.map(i => `<li class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"><div class="bg-white p-2 rounded-lg shadow-sm text-medical-500"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><span class="text-sm md:text-base font-medium text-gray-700">${i}</span></li>`).join('\n');
html = html.replace(/<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">' + itemsBody + '</ul>');

// Remover FAQ
html = html.replace(/<!-- Perguntas Frequentes -->.*?<\/section>/s, '');

// Clean images
html = html.replace(/https:\/\/res\.cloudinary\.com\/doqw5aqcf\/image\/upload\/v1778022679\/.*?_jcq9n2\.png/g, 'https://placehold.co/600x400?text=Andromeda+Medical+San');
// For the thumbnails, we can leave them empty or remove them
html = html.replace(/<button onclick="changeImage.*?<\/button>/gs, '');

fs.writeFileSync(dir + '/index.html', html);
console.log('Done!');
