const fs = require('fs');
const path = require('path');

let html = fs.readFileSync('hakon/index.html', 'utf8');

const replacements = {
  '<title>Hakon - Alta Performance</title>': '<title>Novo Ômer - Laser 3D - Medical San</title>',
  'Cód: ME21364A': 'Cód: ME21416A',
  'Hakon Medical San - Equipamento de Laser para Epilação Premium 4D': 'Novo Ômer - Laser 3D Portátil para Remoção de Tatuagem e Micropigmentação - Medical San',
  'Hakon 4D Premium combina 4 lasers em um único aplicador, atendendo diferentes tipos de pele e pelo com mais segurança, conforto e velocidade. Tecnologia premium para clínicas que querem ampliar resultados e faturamento com depilação a laser.': 'O Ômer Smart da Medical San é um avançado sistema de laser de diodo (532nm e 1064nm) especializado na remoção de tatuagens e micropigmentação. Sua tecnologia microcontrolada oferece tratamentos não invasivos e precisos, garantindo segurança e eficácia para diversos tipos de pigmentos. Com design portátil e interface intuitiva, é a solução ideal para clínicas que buscam alta performance e a confiança de 18 meses de garantia.',
  'Hakon Laser Principal': 'Ômer Smart 3D',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/01_-_Frente_jcq9n2.png': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778186589/01_-_omer_smart_thc5no.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/02_-_Diagonal_direito_osbdgr.png': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778186589/02_-_omer_smart_ctdpso.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/03_-_Lateral_direito_f6ju8x.png': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778186589/03_-_omer_smart_h4k5su.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/04_-_traseiro_fpgrbe.png': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778186589/04_-_omer_smart_vqugmx.png'
};

for (const [key, val] of Object.entries(replacements)) {
  html = html.split(key).join(val);
}

// Remove the extra thumbnails since we only have 4 images
html = html.replace(/<button onclick="changeImage\(this, 'https:\/\/res\.cloudinary\.com\/doqw5aqcf\/image\/upload\/v1778022679\/05_-_Lateral_esquerdo_cwqvvu\.png'\)".*?<\/button>/s, '');
html = html.replace(/<button onclick="changeImage\(this, 'https:\/\/res\.cloudinary\.com\/doqw5aqcf\/image\/upload\/v1778022679\/06_-_Diagonal_esquerdo_hbbcax\.png'\)".*?<\/button>/s, '');

// Replace tags
html = html.replace(/Crédito pré-aprovado no boleto/g, 'Remoção de Tatuagens');
html = html.replace(/Aprovação rápida/g, 'Micropigmentação');
// Treinamento incluso is fine to keep? Let's just keep 'Treinamento incluso'

// Replace sections
let descricaoHtml = `O Novo Ômer Smart Laser 3D da Medical San chega em versão atualizada com design totalmente renovado, mais moderno e funcional. Mantendo sua alta tecnologia, o equipamento foi desenvolvido para profissionais que buscam resultados superiores na remoção de tatuagens, micropigmentações e em tratamentos avançados de pele.
<br><br><b>Comprimentos de Onda e Indicações de Tratamento</b><br>
O equipamento disponibiliza dois comprimentos de onda que se adaptam à cor do pigmento tratado:<br>
- 1064nm: indicado para remoção de pigmentos em tons escuros<br>
- 532nm: indicado para remoção de pigmentos em tons claros<br><br>
A ação do laser atua de forma eficaz na quebra dos pigmentos, reduzindo o risco de danos aos vasos adjacentes e preservando a integridade da epiderme.<br><br>
<b>Precisão, Design e Portabilidade</b><br>
O Novo Ômer foi desenvolvido para oferecer eficiência, praticidade e alto desempenho no uso profissional:<br>
- Precisão: spot de 4mm que proporciona aplicação versátil e precisa<br>
- Design: aplicador com formato anatômico que facilita o manuseio e melhora a eficiência<br>
- Portabilidade: estrutura leve e compacta, permitindo armazenamento e transporte simples e seguro, ideal para profissionais que trabalham com aluguel<br>
- Segurança e manutenção: tecnologia brasileira com registro ANVISA, garantindo confiabilidade e manutenção rápida e eficiente<br><br>
O Novo Ômer Smart da Medical San representa uma evolução nos tratamentos de remoção de pigmentos, oferecendo tecnologia avançada com praticidade no dia a dia profissional.`;

html = html.replace(/O Hakon da Medical San é um avançado sistema de laser.*?Hakon é o investimento ideal para clínicas que buscam resultados de excelência e tecnologia de ponta\./g, descricaoHtml);

// Build Diferenciais (8 items)
let diferenciaisBody = `
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
                    <div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Tecnologia Q-Switched</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">pulsos ultrarrápidos de 5 ns que promovem fragmentação eficiente do pigmento</p></div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg></div>
                    <div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Multifuncionalidade</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">atende remoção de tatuagem, micropigmentação, rejuvenescimento, acne, melasma, poros, onicomicose e outros tratamentos</p></div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div>
                    <div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Vida útil ampliada</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">até 4 milhões de disparos com baixo custo por disparo</p></div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></div>
                    <div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Diversidade de ponteiras</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">532 nm, 1064 nm e Carbon para diferentes demandas estéticas</p></div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
                    <div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Segurança para fototipos altos</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">uso seguro da ponteira 1064 nm em fototipos IV, V e VI</p></div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></div>
                    <div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Protocolos completos</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">indicações detalhadas para diferentes tratamentos estéticos</p></div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg></div>
                    <div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Manutenção simplificada</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">troca de água mensal e calibração anual</p></div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>
                    <div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Equipamento robusto</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">potência de 1760 VA com design seguro e EPIs inclusos</p></div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></div>
                    <div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Facilidade de operação</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">tela intuitiva, pedal de disparo e aplicador confortável</p></div>
                </div>
`;
html = html.replace(/<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">.*?<\/section>/s, '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">\n' + diferenciaisBody + '\n</div></div></section>');

// We need an "Indicações" section, but the prompt says to keep the exact same HTML structure. 
// "Replicate the EXACT HTML structure from hakon/index.html. Include the exact same sections: Hero, Product Images, CTA/Benefits, Brief Description, Ficha Técnica, Itens Inclusos, FAQ, and Global Components."
// I will repurpose Efeitos Fisiologicos to "Indicações e Efeitos Fisiológicos" or just add it there
let efeitosBody = `
                    <li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed"><b>Indicações:</b> Remoção de tatuagens escuras e coloridas; Remoção de micropigmentações em sobrancelhas, lábios e outras áreas; Clareamento de melasma, melanose e hipercromias; Tratamento de acne; Rejuvenescimento facial; Redução de poros e oleosidade; Black Peel com ponteira Carbon; Tratamento de onicomicose; Clareamento íntimo com protocolo Carbon.</p></li>
                    <li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed"><b>O funcionamento do laser:</b> Fragmentação das partículas de tinta através dos fenômenos de fotoacústica e fototermólise seletiva.</p></li>
                    <li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">Emissão de energia de alta intensidade em pulsos extremamente curtos que atravessam a pele e fragmentam o pigmento em micropartículas.</p></li>
                    <li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">Remoção das micropartículas pelo organismo por meio da fagocitose, com eliminação pelo sistema linfático.</p></li>
                    <li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed"><b>Black Peel:</b> Melhora da textura da pele, Rejuvenescimento, Redução da oleosidade e Hidratação.</p></li>
                    <li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed"><b>Conservação:</b> Evitar locais sujeitos a vibrações; Não armazenar em ambientes úmidos, quentes ou com poeira; Não bloquear a ventilação do equipamento; Remover resíduos de gel condutor do aplicador após o uso; Armazenar o aplicador em local seco, apropriado e protegido contra agressões ambientais.</p></li>
`;

html = html.replace(/<ul class="space-y-4">.*?<\/ul>/s, '<ul class="space-y-4">\n' + efeitosBody + '\n</ul>');

let contraindicativosList = [
    'Arteriosclerose', 'Doenças hepáticas ativas ou antecedentes', 'Patologias vasculares, como tromboflebites e varizes de grande dimensão',
    'Insuficiência renal', 'Implantes metálicos no local da aplicação', 'Gravidez e amamentação', 'Neoplasias', 'Áreas inflamadas',
    'Níveis elevados de triglicérides', 'Infecções ativas', 'Terapia anticoagulante', 'Proximidade óssea', 'Osteoporose',
    'Diabetes descontrolada', 'Psoríase', 'Lúpus', 'Proximidade cardíaca', 'Cabeça', 'Região cervical', 'Áreas ganglionares'
];

let contraBody = contraindicativosList.map(c => 
    '<li class="flex gap-3 items-center"><div class="bg-red-50 text-red-500 p-1.5 rounded-full shrink-0"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium">' + c + '</p></li>'
).join('\n');

html = html.replace(/<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">\n' + contraBody + '\n</ul>');

let specList = [
    ['Comprimento de onda', '532nm e 1064nm'],
    ['Modo', 'Nanosegundo'],
    ['Quantidade de disparos', '4 milhões'],
    ['Energia', 'Até 1000mJ'],
    ['Spot', '4mm'],
    ['Frequência', '1 a 6Hz'],
    ['Voltagem', '220V'],
    ['Dimensões', '45x48x45cm (LxPxA)'],
    ['Peso', '18kg']
];

let specBody = specList.map(s => 
    '<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">' + s[0] + '</span><span class="text-sm text-gray-600 font-medium md:text-left">' + s[1] + '</span></div>'
).join('\n');

html = html.replace(/<section id="especificacoes" class="py-16 bg-gray-50 border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, 
'<section id="especificacoes" class="py-16 bg-gray-50 border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Especificações Técnicas</h2><div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + specBody + '\n</div></div></div></section>');


let fichaList = [
    ['Peso', '18kg'],
    ['Reservatorio de Água', '600mL'],
    ['Frequencia', '1 a 6Hz'],
    ['Modo', 'Nanosegundo'],
    ['Dimensões', '45x48x45cm(LxPxA)'],
    ['Quantidade de Disparos', '4 milhões'],
    ['Comprimento de onda', '532nm e 1064nm'],
    ['Energia', 'Até 1000mJ'],
    ['Spot (área útil do aplicador)', '4mm'],
    ['Dimensões (C x L x A)', '48.0 x 45.0 x 45.0 cm'],
    ['Peso Kg', '18.0'],
    ['Dimensões Embalado (C x L x A)', '68.5 x 55.0 x 42.0 cm'],
    ['Peso Embalado Kg', '31.5'],
    ['Marca', 'MEDICAL SAN'],
    ['Modelo', 'Tatuagem e Micropigmentação'],
    ['Garantia', '18 meses'],
    ['NCM', '90189099'],
    ['Anvisa', '81243810008']
];

let fichaBody = fichaList.map(s => 
    '<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">' + s[0] + '</span><span class="text-sm text-gray-600 font-medium md:text-left">' + s[1] + '</span></div>'
).join('\n');

html = html.replace(/<section id="ficha-tecnica" class="py-16 bg-white border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, 
'<section id="ficha-tecnica" class="py-16 bg-white border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Ficha Técnica</h2><div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + fichaBody + '\n</div></div></div></section>');

let itemsList = [
    ['01', 'Ômer Smart Medical San – Laser para Remoção de Tatuagem e Micropigmentação'],
    ['01', 'Aplicador'],
    ['01', 'Ponteira 532nm'],
    ['01', 'Ponteira 1064nm'],
    ['01', 'Ponteira 1320nm exclusiva para Black Peel'],
    ['01', 'Pedal de acionamento'],
    ['01', 'Cabo de força'],
    ['01', 'Par de óculos de proteção para operador'],
    ['01', 'Par de óculos de proteção para paciente'],
    ['01', 'Funil plástico'],
    ['01', 'Conector mangueira funil']
];

let itemsBody = itemsList.map(item => 
    '<li class="flex gap-3 items-center"><span class="text-medical-500 font-bold bg-medical-100 px-2 flex items-center justify-center py-1 rounded text-xs border border-medical-200 leading-none">' + item[0] + '</span><span class="text-gray-700 text-sm font-medium">' + item[1] + '</span></li>'
).join('');

html = html.replace(/<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">' + itemsBody + '</ul>');

let faqList = [
    {q: 'Qual tipo de laser o equipamento utiliza?', a: 'O equipamento trabalha com laser ND-YAG.'},
    {q: 'É obrigatório o uso de óculos de proteção?', a: 'Sim. O uso é obrigatório tanto para o profissional quanto para o cliente, a fim de evitar danos visuais.'},
    {q: 'Por que o equipamento possui dois comprimentos de onda?', a: 'Os comprimentos de onda permitem adaptação à cor do pigmento tratado. O 1064nm possui afinidade com pigmentos escuros, como azul e preto. O 532nm possui afinidade com pigmentos claros, como vermelho, rosa, roxo e marrom.'},
    {q: 'O equipamento acompanha rack?', a: 'O equipamento não possui rack.'},
    {q: 'Qual tipo de água deve ser utilizada?', a: 'Deve ser utilizada água deionizada ou destilada.'}
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

html = html.replace(/<div class="space-y-4">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<div class="space-y-4">\n' + faqBody + '\n</div></div></section>');

fs.mkdirSync('omer-smart-3d', {recursive: true});
fs.writeFileSync('omer-smart-3d/index.html', html);
