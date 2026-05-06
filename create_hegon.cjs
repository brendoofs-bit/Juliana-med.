const fs = require('fs');

let content = fs.readFileSync('./hakon/index.html', 'utf-8');

// Title
content = content.replace(/<title>Hakon - Alta Performance<\/title>/g, `<title>Hegon - Laser de CO2 Fracionado</title>`);

// Hero
content = content.replace(/Cód: ME21364A/g, 'Cód: ME21360A');
content = content.replace(/Hakon Medical San - Equipamento de Laser para Epilação Premium 4D/g, 'Hegon Medical San - Laser de CO2 Fracionado');
content = content.replace(/Hakon 4D Premium combina 4 lasers em um único aplicador, atendendo diferentes tipos de pele e pelo com mais segurança, conforto e velocidade\\. Tecnologia premium para clínicas que querem ampliar resultados e faturamento com depilação a laser\\./g, 'O Hegon é uma tecnologia de Laser CO2 (dióxido de carbono) ablativo fracionado desenvolvida para aplicações dermatológicas. Opera com comprimento de onda de 10.600nm e potência de 60W, oferecendo ampla capacidade de ajuste para diferentes abordagens de tratamento.');

// Images
const hegonImages = [
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778100983/01_-_hagon_qz6bkd.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778100983/02_-_hagon_r0ntl0.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778100983/03_-_hagon_sjn27n.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778100983/04_-_hagon_f1jspm.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778100983/05_-_hagon_iaqavv.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778100983/06_-_hagon_kcyvxg.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778100983/07_-_hagon4_nd4hiw.png'
];

content = content.replace(/https:\/\/res.cloudinary.com\/doqw5aqcf\/image\/upload\/v1778022679\/01_-_Frente_jcq9n2.png/g, hegonImages[0]);
content = content.replace(/https:\/\/res.cloudinary.com\/doqw5aqcf\/image\/upload\/v1778022679\/02_-_Diagonal_direito_osbdgr.png/g, hegonImages[1]);
content = content.replace(/https:\/\/res.cloudinary.com\/doqw5aqcf\/image\/upload\/v1778022679\/03_-_Lateral_direito_f6ju8x.png/g, hegonImages[2]);
content = content.replace(/https:\/\/res.cloudinary.com\/doqw5aqcf\/image\/upload\/v1778022679\/04_-_traseiro_fpgrbe.png/g, hegonImages[3]);
content = content.replace(/https:\/\/res.cloudinary.com\/doqw5aqcf\/image\/upload\/v1778022679\/05_-_Lateral_esquerdo_cwqvvu.png/g, hegonImages[4]);
content = content.replace(/https:\/\/res.cloudinary.com\/doqw5aqcf\/image\/upload\/v1778022679\/06_-_Diagonal_esquerdo_hbbcax.png/g, hegonImages[5]);
// Add the 7th image
const matchStr = `<button onclick="changeImage(this, '${hegonImages[5]}')" class="thumb-btn border-2 flex-shrink-0 w-16 h-16 rounded-xl border-transparent hover:border-gray-300 opacity-60 hover:opacity-100 bg-white p-1 overflow-hidden transition-all snap-start">
                                <img src="${hegonImages[5]}" class="w-full h-full object-contain mix-blend-multiply">
                            </button>`;
const replStr = matchStr + `
                            <button onclick="changeImage(this, '${hegonImages[6]}')" class="thumb-btn border-2 flex-shrink-0 w-16 h-16 rounded-xl border-transparent hover:border-gray-300 opacity-60 hover:opacity-100 bg-white p-1 overflow-hidden transition-all snap-start">
                                <img src="${hegonImages[6]}" class="w-full h-full object-contain mix-blend-multiply">
                            </button>`;
content = content.replace(matchStr, replStr);

// Descrição do Produto
const newDesc = `O equipamento permite configurações com largura de pulso variável entre 0,1 e 9,9 ms e energia entre 0,1 e 594 mJ, possibilitando controle preciso durante os procedimentos. Conta com quatro modos de tratamento: Fracionado, Corte, Cirúrgico e Íntimo.<br><br>A tecnologia é adaptável a diferentes necessidades dermatológicas, incluindo resurfacing, remoção de patologias e corte cirúrgico. Também é aplicado na região íntima interna, atuando na remoção de lesões e na melhora da espessura da região.<br><br>O Hegon possui quatro aplicadores especializados e três modos de aplicação: Não Ablativo, Micro Ablativo e Ultra Ablativo, permitindo personalização conforme a indicação clínica.<br><br>O funcionamento do laser ocorre por meio da vaporização da epiderme e ablação parcial da derme, utilizando lesão térmica no tecido. O cromóforo alvo é a água, permitindo fototermólise seletiva sem comprometer os tecidos adjacentes.<br><br>O equipamento é indicado para fotoenvelhecimento severo, ritides, tratamento de lesões pigmentadas, estímulo de neocolagênese e outras condições dermatológicas.<br><br>O Hegon é uma solução voltada para múltiplas aplicações na dermatologia, com foco em precisão e controle nos tratamentos.`;
const descRegex = /<h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-6 uppercase tracking-wider text-center">Descrição do Produto<\/h2>\\s*<div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">\\s*<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">\\s*.*?\\s*<\/p>/s;
content = content.replace(descRegex, `<h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-6 uppercase tracking-wider text-center">Descrição do Produto</h2>
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">
                    ${newDesc}
                </p>`);

// Diferenciais e Benefícios
const diffHtml = `
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Fabricação Nacional</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">Fabricado no Brasil, sendo um Laser CO2 nacional, com suporte local e padrão de qualidade voltado aos profissionais da saúde.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Inovação Medical San</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">Representa a inovação da Medical San como o primeiro Laser CO2 completo para pele da marca.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Adequado a Pele Brasileira</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">Desenvolvido por especialistas com foco nas características da pele brasileira.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Precisão Técnica</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">Apresenta precisão em procedimentos como blefaroplastia, com controle técnico durante a aplicação.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Vários Modos de Tratamento</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">Possui modo contínuo que permite tratamento semi-ablativo, ampliando as possibilidades de uso.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Múltiplas Ponteiras</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">Conta com ponteiras cirúrgicas, vaginal e fracionada, possibilitando aplicações dermatológicas e ginecológicas.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Alta Durabilidade</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">Disponibiliza disparos ilimitados e revisão programada a cada 6 meses para manutenção do desempenho.</p>
                    </div>
                </div>`;
const diffRegex = /<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">.*?<\/div>\\s*<\/div>\\s*<\/section>/s;
content = content.replace(diffRegex, `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
${diffHtml}
            </div>
        </div>
    </section>`);

// Efeitos Fisiológicos => Indicações
content = content.replace(/Efeitos Fisiológicos/g, 'Indicações');
const indicationsList = [
    'Fotoenvelhecimento severo',
    'Ritides',
    'Tratamento de lesões pigmentadas',
    'Melhora de ceratose actínicas',
    'Neocolagênese',
    'Cicatrizes hipertróficas',
    'Cicatrizes após queimaduras',
    'Região íntima interna e externa',
    'Corte cirúrgico',
    'Noodoplastia subdérmica do clitóris'
];
let indContent = indicationsList.map(ind => `<li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">${ind}</p></li>`).join('\n');
content = content.replace(/<ul class="space-y-4">.*?<\/ul>/s, `<ul class="space-y-4">\n${indContent}\n                </ul>`);

// Contraindicações
const contraIndications = [
    'Gravidez',
    'Lactantes',
    'Herpes ativa',
    'Tratamento com isotretinoína há menos de 6 meses',
    'Doenças autoimunes',
    'Câncer há menos de 5 anos',
    'Lesão pigmentar maligna',
    'Doenças fotossensibilizantes',
    'Uso de medicamentos fotossensibilizantes',
    'Diabetes descompensado',
    'DIU'
];
let contraContent = contraIndications.map(c => `
                    <li class="flex gap-3 items-center">
                        <div class="bg-red-50 text-red-500 p-1.5 rounded-full shrink-0">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                        <p class="text-sm md:text-base text-gray-600 font-medium">${c}</p>
                    </li>`).join('');
content = content.replace(/<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">.*?<\/ul>/s, `<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">${contraContent}\n                </ul>`);

// Especificações Técnicas
const specsHtml = `
                <div class="flex flex-col">
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Tipo de Laser</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">CO2</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Classe</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">4</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Largura de Pulso</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">1-1000ms</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Comprimento de Onda</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">10.600nm</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Energia Final</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">1-120mJ/dot</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Mira Laser</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">Luz indicadora de semicondutor vermelho (650nm)</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Voltagem</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">110 - 230V</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Potência de Consumo</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">660 VA</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Peso</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">40kg</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Dimensões</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">375x1130x290mm (LxAxC)</span>
                    </div>
                </div>`;
const specRegex = /<section id="especificacoes".*?<div class="flex flex-col">.*?<\/div>\\s*<\/div>\\s*<\/div>\\s*<\/section>/s;
content = content.replace(specRegex, `<section id="especificacoes" class="py-16 bg-gray-50 border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Especificações Técnicas</h2>
            
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
${specsHtml}
            </div>
        </div>
    </section>`);

// Ficha Técnica
const fichaHtml = `
                <div class="flex flex-col">
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Dimensões (C x L x A)</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">29.0 x 37.5 x 113.0 cm</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Peso Kg</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">40.0</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Dimensões Embalado (C x L x A)</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">68.0 x 59.0 x 134.0 cm</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Peso Embalado Kg</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">86.0</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Marca</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">MEDICAL SAN</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Modelo</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">Laser de CO2 Fracionado</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Garantia</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">18 meses</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">NCM</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">90182090</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Anvisa</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">81243810014</span>
                    </div>
                </div>`;
const fichaRegex = /<section id="ficha-tecnica".*?<div class="flex flex-col">.*?<\/div>\\s*<\/div>\\s*<\/div>\\s*<\/section>/s;
content = content.replace(fichaRegex, `<section id="ficha-tecnica" class="py-16 bg-white border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Ficha Técnica</h2>
            
            <div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
${fichaHtml}
            </div>
        </div>
    </section>`);

// Itens Inclusos
const itens = [
  ['01', 'Hegon Medical San – Laser de CO2 Fracionado'],
  ['01', 'Braço articulado'],
  ['01', 'Cabo de força'],
  ['01', 'Pedal de acionamento'],
  ['01', 'Óculos de proteção – operador'],
  ['01', 'Óculos de proteção – paciente'],
  ['02', 'Chaves'],
  ['02', 'Ponteiras íntimas – 90° e 360°'],
  ['02', 'Ponteiras alongadas'],
  ['02', 'Ponteira corte cirúrgico'],
  ['01', 'Ponteira grande ponto fracionado'],
  ['01', 'Ponteira fracionada micro-ablativa – 100mm'],
  ['01', 'Ponteira fracionada ablativa – 50mm']
];
let itensHtml = itens.map(i => `<li class="flex gap-3 items-center">
                        <span class="text-medical-500 font-bold bg-medical-100 px-2 flex items-center justify-center py-1 rounded text-xs border border-medical-200 leading-none">${i[0]}</span>
                        <span class="text-sm md:text-base text-gray-700 font-medium">${i[1]}</span>
                    </li>`).join('\n                    ');

content = content.replace(/<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">.*?<\/ul>/s, `<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">\n                    ${itensHtml}\n                </ul>`);

if (!fs.existsSync('./hegon')){ fs.mkdirSync('./hegon'); }
fs.writeFileSync('./hegon/index.html', content);

console.log('Hegon page generated.');
