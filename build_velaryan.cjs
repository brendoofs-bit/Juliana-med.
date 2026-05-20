const fs = require('fs');
const path = require('path');

let html = fs.readFileSync('hakon/index.html', 'utf8');

const replacements = {
  '<title>Hakon - Alta Performance</title>': '<title>Velaryan - Harmonização Corporal - Medical San</title>',
  'Cód: ME21364A': 'Cód: ME21415A', // random default
  'Hakon Medical San - Equipamento de Laser para Epilação Premium 4D': 'Novo Velaryan - Laser Diodo para Harmonização Corporal - Medical San',
  'Hakon 4D Premium combina 4 lasers em um único aplicador, atendendo diferentes tipos de pele e pelo com mais segurança, conforto e velocidade. Tecnologia premium para clínicas que querem ampliar resultados e faturamento com depilação a laser.': 'O VELARYAN da Medical San é um avançado sistema de laser de diodo microcontrolado que opera em quatro comprimentos de onda (660nm, 808nm, 850nm e 980nm). Indicado para auxiliar no tratamento de gordura localizada, reparo tecidual e processos inflamatórios, ele oferece máxima versatilidade e precisão clínica. Com interface intuitiva e alta performance, é a solução ideal para profissionais que buscam tecnologia de ponta e a segurança de 18 meses de garantia.',
  'Hakon Laser Principal': 'Velaryan',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/01_-_Frente_jcq9n2.png': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779290541/velaryan_01_ngxrz4.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/02_-_Diagonal_direito_osbdgr.png': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779290540/velaryan_02_zx4dw6.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/03_-_Lateral_direito_f6ju8x.png': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779290540/velaryan_03_dim4w2.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/04_-_traseiro_fpgrbe.png': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779290540/velaryan_04_iekgag.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/05_-_Lateral_esquerdo_cwqvvu.png': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779290542/velaryan_05_l1akns.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/06_-_Diagonal_esquerdo_hbbcax.png': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779290540/velaryan_06_cf1hi2.png',
  'R$ 169.899,90': 'R$ 89.900,00',
  'R$ 79.191,00': 'R$ 89.900,00', 
  '-53%': '', // Remove discount badge if we can
  'R$ 87.990,00': 'R$ 89.900,00',
  'R$ 7.332,50': 'R$ 7.491,66',
  '12x': '12x'
};

for (const [key, val] of Object.entries(replacements)) {
  html = html.split(key).join(val);
}

// Add the 7th image if possible, but 6 is fine since the template has 6 buttons.
// Actually, I can just replace the image buttons string if needed

html = html.replace(/<span class="bg-red-500 text-white px-2 py-0.5 rounded text-sm font-bold ml-2"><\/span>/g, '');
html = html.replace(/<div class="flex items-center text-sm text-gray-500 line-through">.*?<\/del>/s, '');


// Replace tags
html = html.replace(/Crédito pré-aprovado no boleto/g, 'Redução de medidas');
html = html.replace(/Aprovação rápida/g, 'Tecnologia Inovadora');

let descricaoHtml = `O Velaryan representa a inovação na Harmonização Corporal não invasiva. Um equipamento avançado de laser de diodo de baixa intensidade, focado na harmonização corporal por meio da tecnologia inovadora BodySculpt Laser Technology. Com um modo de aplicação contínuo, oferece tratamentos eficazes e indolores, atuando diretamente e indiretamente no panículo adiposo, sem danificar a epiderme. A plataforma multipolar inteligente garante resultados uniformes, modelando o corpo com máxima precisão e segurança.`;

html = html.replace(/O Hakon da Medical San é um avançado sistema de laser.*?Hakon é o investimento ideal para clínicas que buscam resultados de excelência e tecnologia de ponta\./g, descricaoHtml);

let diferencasList = [
    {titulo: 'Laser de Diodo de Baixa Intensidade', desc: 'de alta eficiência.'},
    {titulo: 'Quatro Comprimentos de Onda', desc: '660 nm, 808 nm, 850 nm e 980 nm.'},
    {titulo: 'BodySculpt Laser Technology', desc: 'permitindo a personalização dos feixes de acordo com o objetivo do tratamento.'},
    {titulo: 'Plataforma Multipolar Inteligente', desc: '6 braços mecânicos.'},
    {titulo: 'Aplicadores Versáteis', desc: '4 corporais e 2 corporais/papada.'},
    {titulo: 'Aplicação Hands Free', desc: 'sem mãos, maximizando a eficiência da clínica.'},
    {titulo: 'Interface Intuitiva', desc: 'com presets de tratamentos e customização livre.'},
    {titulo: 'Resultados Rápidos', desc: 'e não invasivos.'},
    {titulo: 'Manutenção Mínima', desc: 'não necessita de consumíveis.'},
    {titulo: 'Versatilidade', desc: 'compatibilidade de todos os fototipos e pode ser utilizado em qualquer estação.'}
];

let diferenciaisBody = diferencasList.map(d => `
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
                    <div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">${d.titulo}</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">${d.desc}</p></div>
                </div>
`).join('');

html = html.replace(/<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">.*?<\/section>/s, '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">\n' + diferenciaisBody + '\n</div></div></section>');

let efeitosBody = `
                    <li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed"><b>Indicações:</b> Redução de medidas</p></li>
                    <li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">Harmonização corporal e facial (papada)</p></li>
                    <li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">Auxílio na redução da flacidez e Melhoria do contorno corporal</p></li>
                    <li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">Auxilia na regeneração de tecidos e cicatrização</p></li>
                    <li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">Pode ser combinado com outras terapias como criolipólise, radiofrequência, ultrassom, endermologia, entre outras.</p></li>
`;
html = html.replace(/<ul class="space-y-4">.*?<\/ul>/s, '<ul class="space-y-4">\n' + efeitosBody + '\n</ul>');

let contraindicativosList = [
    'Útero gravídico', 'Globo ocular', 'Áreas de tromboflebite',
    'Diagnóstico clínico de câncer localizado na região', 'Histórico de carcinoma',
    'Epilepsia não controlada', 'Pacientes portadores de marcapasso',
    'Infecções bacterianas ou fúngicas locais', 'Medicamentos fotossensíveis',
    'Regiões com placas de crescimento ósseo (em crianças)'
];

let contraBody = contraindicativosList.map(c => 
    '<li class="flex gap-3 items-center"><div class="bg-red-50 text-red-500 p-1.5 rounded-full shrink-0"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium">' + c + '</p></li>'
).join('\n');

html = html.replace(/<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">\n' + contraBody + '\n</ul>');

let specList = [
    ['Terapia', 'Laserterapia'],
    ['Laser', 'Diodo'],
    ['Comprimentos de onda', '660 nm, 808 nm, 850 nm, e 980 nm'],
    ['Potência de entrada máxima', '600 VA'],
    ['Tempo máximo de tratamento', '60 minutos'],
    ['Alimentação', 'Bivolt Automático (100-240V | 50/60Hz)'],
    ['Dimensões bancada', '40 x 44 x 42 cm (LxPxA)'],
    ['Dimensões com suporte', '140 x 54 x 103 cm (LxPxA)'],
    ['Peso bancada', '18 kg'],
    ['Peso suporte', '21,5 kg']
];

let specBody = specList.map(s => 
    '<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">' + s[0] + '</span><span class="text-sm text-gray-600 font-medium md:text-left">' + s[1] + '</span></div>'
).join('\n');

html = html.replace(/<section id="especificacoes" class="py-16 bg-gray-50 border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, 
'<section id="especificacoes" class="py-16 bg-gray-50 border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Especificações Técnicas</h2><div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + specBody + '\n</div></div></div></section>');

let fichaList = [
    ['Alimentação', 'Bivolt automático'],
    ['Comprimento de Onda', '660nm, 808nm, 850nm e 980nm'],
    ['Dimensões (C x L x A) com suporte', '54cm x 140cm x 103cm'],
    ['Dimensões (C x L x A) de bancada', '44cm x 40cm x 42cm'],
    ['Peso com suporte Kg', '39.5'],
    ['Peso da bancada Kg', '18'],
    ['Dimensões Embalado (C x L x A) Bancada', '52cm X 55cm x 68.5cm'],
    ['Dimensões Embalado (C x L x A) Suporte', '62.5cm X 102.5cm x 28.5cm'],
    ['Peso Embalado Kg', '31.5 (bancada) / 44.5 (suporte)'],
    ['Garantia', '18 meses'],
    ['NCM', '90189099'],
    ['Anvisa', '81243810014']
];

let fichaBody = fichaList.map(s => 
    '<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">' + s[0] + '</span><span class="text-sm text-gray-600 font-medium md:text-left">' + s[1] + '</span></div>'
).join('\n');

html = html.replace(/<section id="ficha-tecnica" class="py-16 bg-white border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, 
'<section id="ficha-tecnica" class="py-16 bg-white border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Ficha Técnica</h2><div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + fichaBody + '\n</div></div></div></section>');

let itemsList = [
    ['01', 'Velaryan Medical San – Laser Diodo para Harmonização Corporal'],
    ['04', 'Aplicadores corporais'],
    ['02', 'Aplicadores corporais/papada'],
    ['01', 'Cabo de força'],
    ['01', 'Par de óculos de proteção (paciente e operador)'],
    ['01', 'Suporte com 6 braços mecânicos'],
    ['01', 'Chave de segurança'],
    ['01', 'Manual do usuário']
];

let itemsBody = itemsList.map(item => 
    '<li class="flex gap-3 items-center"><span class="text-medical-500 font-bold bg-medical-100 px-2 flex items-center justify-center py-1 rounded text-xs border border-medical-200 leading-none">' + item[0] + '</span><span class="text-gray-700 text-sm font-medium">' + item[1] + '</span></li>'
).join('');

html = html.replace(/<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">' + itemsBody + '</ul>');

let faqList = [
    {q: 'Tem ANVISA?', a: 'Sim, o Velaryan possui registro na ANVISA.'},
    {q: 'Qual a potência do equipamento?', a: 'Potência de entrada de 600 VA.'},
    {q: 'O aparelho precisa de água?', a: 'Não. O Velaryan não utiliza água.'},
    {q: 'Pode aplicar por cima da roupa?', a: 'Não. O laser deve atuar diretamente sobre a pele do paciente.'},
    {q: 'Quantos pads o Velaryan possui?', a: 'São 6 pads, 4 grandes e 2 pequenos, que devem ser interligados aos conectores do equipamento.'}
];

let faqBody = faqList.map(f => `
                <div class="bg-white border text-left border-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition-shadow">
                    <details class="group p-5 md:p-6 cursor-pointer">
                        <summary class="flex justify-between items-center font-bold text-medical-900 list-none selection:bg-transparent" style="list-style: none;">
                            <span class="text-sm md:text-base">${f.q}</span>
                            <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" class="text-medical-600"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <p class="text-gray-600 mt-4 text-sm md:text-base leading-relaxed group-open:animate-fadeIn">
                            ${f.a}
                        </p>
                    </details>
                </div>
`).join('\n');

html = html.replace(/<div class="space-y-4">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<div class="space-y-4">\\n' + faqBody + '\\n</div></div></section>');

fs.mkdirSync('velaryan-medical-san', {recursive: true});
fs.writeFileSync('velaryan-medical-san/index.html', html);
