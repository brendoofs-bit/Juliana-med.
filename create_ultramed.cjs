const fs = require('fs');

let content = fs.readFileSync('./hakon/index.html', 'utf-8');

// Title
content = content.replace(/<title>Hakon - Alta Performance<\/title>/g, `<title>Ultramed PRO - Medical San</title>`);

// Hero
content = content.replace(/Cód: ME21364A/g, 'Cód: ME21446A');
content = content.replace(/Hakon Medical San - Equipamento de Laser para Epilação Premium 4D/g, 'Ultramed PRO - Medical San');
content = content.replace(/Hakon 4D Premium combina 4 lasers em um único aplicador, atendendo diferentes tipos de pele e pelo com mais segurança, conforto e velocidade\. Tecnologia premium para clínicas que querem ampliar resultados e faturamento com depilação a laser\./g, 'Ultramed PRO: Ultrassom Micro e Macrofocado com Ponteira Pontual para Aplicações Precisas.');

// Images
const ultramedImages = [
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778105232/01_-_ultramed_pro_nfelpd.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778105232/03_-_ultramed_pro_ah73dr.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778105232/02_-_ultramed_pro_g4vgo4.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778105232/04_-_ultramed_pro_t8evox.png'
];

content = content.replace(/https:\/\/res.cloudinary.com\/doqw5aqcf\/image\/upload\/v1778022679\/01_-_Frente_jcq9n2.png/g, ultramedImages[0]);

// Carousel thumbs
const carouselPattern = /<div class="flex gap-3 overflow-x-auto pb-4 snap-x">.*?<\/div>/s;
let carouselThumbs = ultramedImages.map(img => `
                            <button onclick="changeImage(this, '${img}')" class="thumb-btn border-2 flex-shrink-0 w-16 h-16 rounded-xl border-transparent hover:border-gray-300 opacity-60 hover:opacity-100 bg-white p-1 overflow-hidden transition-all snap-start">
                                <img src="${img}" class="w-full h-full object-contain mix-blend-multiply">
                            </button>`).join('\n');
content = content.replace(carouselPattern, `<div class="flex gap-3 overflow-x-auto pb-4 snap-x">${carouselThumbs}\n                            </div>`);

// Descrição do Produto
const newDesc = `O Ultramed PRO é um equipamento que combina ultrassom microfocado e macrofocado com a versatilidade da ponteira pontual. Essa integração permite realizar tratamentos com precisão em áreas de difícil acesso, mantendo resultados naturais e consistentes.<br><br>A tecnologia foi desenvolvida para possibilitar intervenções detalhadas, com controle sobre profundidade e estratégia terapêutica. Cada cartucho entrega precisão energética, favorecendo a eficácia dos tratamentos e proporcionando maior controle ao profissional durante a aplicação.<br><br>A arquitetura do sistema foi projetada para garantir confiabilidade, repetibilidade dos resultados e facilidade de uso, aspectos essenciais para a rotina clínica.`;
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
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Precisão Avançada</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">O Ultramed PRO utiliza ultrassom microfocado com disparos pontuais, precisos e estratégicos, permitindo atuação em áreas de difícil acesso.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Estímulo Focado</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">Cada disparo direciona a energia de forma controlada, estimulando a resposta tecidual com eficiência.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Tecnologia Adaptável</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">O equipamento conta com aplicador pontual e cartuchos modelo pen. Possui profundidades de 1,5 mm, 3 mm, 4,5 mm e 8 mm.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Controle e Segurança</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">O uso é direcionado por segurança, previsibilidade e controle durante os procedimentos.</p>
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
const indicationsList = ['Gordura localizada', 'Flacidez'];
let indContent = indicationsList.map(ind => `<li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">${ind}</p></li>`).join('\n');
content = content.replace(/<ul class="space-y-4">.*?<\/ul>/s, `<ul class="space-y-4">\n${indContent}\n                </ul>`);

// Contraindicações
const contraIndications = [
    'Arteriosclerose',
    'Doenças hepáticas ativas e antecedentes',
    'Patologias vasculares (tromboflebites, varizes de grande dimensão)',
    'Insuficiência renal',
    'Implantes metálicos no local da aplicação',
    'Gravidez e amamentação',
    'Neoplasias',
    'Elevados valores de triglicérides',
    'Infecções ativas',
    'Terapia anticoagulante',
    'Osteoporose',
    'Diabetes descontrolada',
    'Psoríase',
    'Lúpus'
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
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Tensão de rede de alimentação</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">BIVOLT AUTOMÁTICO - 100 - 240V~</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Frequência da rede de alimentação</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">60Hz</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Potência de entrada</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">300 VA</span>
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
                        <span class="text-sm text-gray-600 font-medium md:text-left">50.0 x 60.0 x 45.0 cm</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Peso Kg</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">15.0</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Dimensões Embalado (C x L x A)</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">160.0 x 60.0 x 84.0 cm</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Peso Embalado Kg</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">90.0</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Marca</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">MEDICAL SAN</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Garantia</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">18 meses</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">NCM</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">90189099</span>
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
    </section>\`);

// Itens Inclusos
const itens = [
  ['01', 'Ultramed PRO – Medical San'],
  ['01', 'Aplicador pontual'],
  ['01', 'Cartuchos pontuais: 1.5mm / 3.0mm / 4.5mm / 8.0mm']
];
let itensHtml = itens.map(i => '<li class="flex gap-3 items-center">' +
                        '<span class="text-medical-500 font-bold bg-medical-100 px-2 flex items-center justify-center py-1 rounded text-xs border border-medical-200 leading-none">' + i[0] + '</span>' +
                        '<span class="text-sm md:text-base text-gray-700 font-medium">' + i[1] + '</span>' +
                    '</li>').join('\n                    ');

content = content.replace(/<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">.*?<\/ul>/s, `<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">\n                    ${itensHtml}\n                </ul>`);

if (!fs.existsSync('./ultramed-pro')){ fs.mkdirSync('./ultramed-pro'); }
fs.writeFileSync('./ultramed-pro/index.html', content);

console.log('Ultramed PRO page generated.');
