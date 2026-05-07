const fs = require('fs');

let content = fs.readFileSync('./hakon/index.html', 'utf-8');

// Title
content = content.replace(/<title>Hakon - Alta Performance<\/title>/g, `<title>Pisom - Medical San</title>`);

// Hero
content = content.replace(/Cód: ME21364A/g, 'Cód: ME20191A');
content = content.replace(/Hakon Medical San - Equipamento de Laser para Epilação Premium 4D/g, 'Pisom Medical San – BB Laser de 1550nm e 1927nm');
content = content.replace(/Hakon 4D Premium combina 4 lasers em um único aplicador, atendendo diferentes tipos de pele e pelo com mais segurança, conforto e velocidade\. Tecnologia premium para clínicas que querem ampliar resultados e faturamento com depilação a laser\./g, 'O PISOM da Medical San é um avançado sistema de laser de fibra fracionado (1550nm e 1927nm) especializado em rejuvenescimento e renovação da pele. Sua tecnologia de microfeixes estimula intensamente o colágeno, tratando rugas, cicatrizes e manchas em todos os fototipos de pele com máxima segurança. Com interface touch intuitiva e alta performance, oferece resultados de excelência e a tranquilidade de 18 meses de garantia.');

// Images
const pisomImages = [
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778174435/01_-_pisom_mfipgo.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778174434/02_-_pisom_xg2pya.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778174433/03_-_pisom_fo6fv6.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778174434/04_-_pisom_xczbpe.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778174433/06_-_pisom_lghkyt.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778174432/05_-_pisom_lbyads.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778174432/07_-_pisom_xwg1dp.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778174431/08_-_pisom_tsbqyg.png',
  'https://res.cloudinary.com/doqw5aqcf/image/upload/v1778174411/09_-_pisom_r0ohrg.png'
];
const mainImgRegex = /<img src="[^"]+" class="max-h-\[300px\] md:max-h-\[460px\] w-auto object-contain" alt="[^"]+" id="ecommerceMainImg">/;
content = content.replace(mainImgRegex, `<img src="${pisomImages[0]}" class="max-h-[300px] md:max-h-[460px] w-auto object-contain" alt="Pisom Principal" id="ecommerceMainImg">`);

const carouselPattern = /<div id="thumbCarousel".*?<\/div>\s*<\/div>\s*<button onclick="scrollCarousel\(1\)"/s;
const carouselThumbs = pisomImages.map((img, index) => {
    return `<button onclick="changeImage(this, '${img}')" class="thumb-btn border-2 flex-shrink-0 w-16 h-16 rounded-xl ${index === 0 ? 'border-medical-500' : 'border-transparent hover:border-gray-300 opacity-60 hover:opacity-100'} bg-white p-1 overflow-hidden transition-all snap-start">
                                <img src="${img}" class="w-full h-full object-contain mix-blend-multiply">
                            </button>`;
}).join('\n                            ');
content = content.replace(/<div id="thumbCarousel"[^>]*>.*?<\/div>\s*<button onclick="scrollCarousel\(1\)"/s, `<div id="thumbCarousel" class="flex gap-2 overflow-x-auto scroll-smooth w-full py-1 snap-x" style="-ms-overflow-style: none; scrollbar-width: none;">
                            <style>#thumbCarousel::-webkit-scrollbar { display: none; }</style>
                            ${carouselThumbs}
                        </div>
                        <button onclick="scrollCarousel(1)"`);

// Descrição do Produto
const newDesc = `Pisom: Laser Dual Wave com Tecnologia Thulium e Érbium para Rejuvenescimento da Pele<br><br>O Pisom é um equipamento de laser Dual Wave que integra as tecnologias Thulium e Érbium em um único sistema. Utiliza comprimentos de onda de 1550nm e 1927nm para promover o rejuvenescimento da pele de forma eficaz.<br><br>Desenvolvido para atender aos mais rigorosos padrões internacionais de segurança e desempenho, o Pisom garante resultados consistentes e notáveis em tratamentos estéticos e dermatológicos.<br><br>O equipamento atua no tratamento de diversas condições específicas da pele, incluindo renovação cutânea, redução de rugas e linhas de expressão, combate ao fotodano tecidual, tratamento de melanoses e ceratoses, além da suavização de cicatrizes leves a moderadas.<br><br>Com área máxima de disparo de 20x20mm e capacidade de até 3025 pontos por disparo, o Pisom proporciona uma cobertura ampla e uniforme durante os procedimentos.<br><br>A tecnologia empregada utiliza sistemas de laser de fibra operando nos comprimentos de onda de 1550nm e 1927nm, reforçando o compromisso com a excelência na área de estética e dermatologia. O equipamento foi projetado para valorizar a beleza natural da pele, sendo aplicável a diferentes fototipos e adequado para uso em todas as estações do ano.<br><br>O Pisom também se destaca por ser o primeiro BB Laser com dois comprimentos de onda fabricado no Brasil, evidenciando o compromisso da Medical San com a inovação e o desenvolvimento de tecnologias avançadas no país.<br><br>Com o Pisom, a tecnologia de classe mundial se une à estética e ao bem-estar, tornando os cuidados com a pele mais acessíveis.`;
const descRegex = /<h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-6 uppercase tracking-wider text-center">Descrição do Produto<\/h2>\s*<div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">\s*<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">\s*.*?\s*<\/p>/s;
content = content.replace(descRegex, `<h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-6 uppercase tracking-wider text-center">Descrição do Produto</h2>
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">
                    ${newDesc}
                </p>`);

const newCtaSection = `<!-- CTA Section -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8 py-10 bg-medical-50/50 rounded-3xl border border-medical-100 relative overflow-hidden">
        <div class="absolute -right-24 -top-24 w-64 h-64 bg-medical-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div class="absolute -left-24 -bottom-24 w-64 h-64 bg-action-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute right-0 bottom-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div class="md:w-2/3">
                <h3 class="text-2xl md:text-3xl font-extrabold text-medical-900 mb-4 tracking-tight">Potencialize seus Tratamentos Dermatológicos</h3>
                <p class="text-medical-800 font-medium text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
                    A tecnologia Dual Wave 1550nm e 1927nm permite atender diferentes necessidades de rejuvenescimento da pele com segurança e resultados notáveis.
                </p>
                <div class="flex flex-wrap gap-4">
                    <span class="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-sm font-bold text-medical-700 shadow-sm border border-medical-100">
                        <svg class="w-5 h-5 text-action-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Dual Wave
                    </span>
                    <span class="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-sm font-bold text-medical-700 shadow-sm border border-medical-100">
                        <svg class="w-5 h-5 text-action-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Alta Performance
                    </span>
                </div>
            </div>
            <div class="md:w-1/3 flex justify-center md:justify-end w-full">
                <a href="https://wa.me/555180985851" target="_blank" class="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-[#25D366] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-[#1DA851] transition-all shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,211,102,0.4)] text-lg border border-[#25D366]">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Falar com Consultor
                </a>
            </div>
        </div>
    </section>`;
content = content.replace(/<!-- CTA Section -->\s*<section class="max-w-6xl mx-auto px-4.*?>\s*<div class="flex flex-col md:flex-row items-center justify-between gap-8">\s*<div class="md:w-2\/3">\s*.*?<\/div>\s*<\/section>/s, newCtaSection);

const diffs = `
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Tecnologia Dual Wave</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">Permite a utilização dos comprimentos de onda 1550nm e 1927nm para atender diferentes necessidades de rejuvenescimento da pele, mantendo a eficácia dos tratamentos em diversos contextos.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Versatilidade nos Tratamentos</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">Apresenta versatilidade no tratamento de renovação da pele, redução de ritides, combate ao fotodano tecidual, tratamento de melanoses e ceratoses, além da suavização de cicatrizes.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md">
                    <div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">Eficiência Energética</h4>
                        <p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">A cobertura de tratamento é eficiente, com área de disparo de 20x20mm e 3025 pontos por aplicação, assegurando precisão e uniformidade.</p>
                    </div>
                </div>
                `;
content = content.replace(/<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\s*<div.*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/s, `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${diffs}
            </div>
        </div>
    </section>`);

// Indicações e Conservação e Contraindicações
const indicacoes = [
    'Renovação da pele',
    'Rejuvenescimento',
    'Linhas e rugas de expressão',
    'Fotodano tecidual',
    'Melanoses',
    'Ceratoses',
    'Cicatrizes leves e moderadas',
    'Tratamento capilar',
    'Onicomicose',
    'Poiquilodermia',
    'Rejuvenescimento e clareamento íntimo'
].map(item => `<li class="flex gap-3 items-center">
                        <div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <p class="text-sm md:text-base text-gray-600 font-medium">${item}</p>
                    </li>`).join('\\n                    ');

const conservacao = [
    'Recomenda-se realizar a limpeza do equipamento semanalmente.',
    'O equipamento e o aplicador não devem ser molhados.',
    'Desligar o equipamento antes de realizar a higienização.'
].map(item => `<li class="flex gap-3 items-center">
                        <div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p class="text-sm md:text-base text-gray-600 font-medium">${item}</p>
                    </li>`).join('\\n                    ');

const contraindicacoes = [
    'Gestantes',
    'Portadores de dispositivos eletrônicos',
    'Erupções cutâneas',
    'Doenças autoimunes',
    'Alterações de sensibilidade',
    'Câncer',
    'Trombose',
    'Diabetes',
    'Uso de isotretinoína, anticoagulantes, anti-inflamatórios e/ou antibióticos',
    'Não é recomendado aplicar luz intensa pulsada ou laser de epilação na mesma área'
].map(item => `<li class="flex gap-3 items-center">
                        <div class="bg-red-50 text-red-500 p-1.5 rounded-full shrink-0">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                        <p class="text-sm md:text-base text-gray-600 font-medium">${item}</p>
                    </li>`).join('\\n                    ');

content = content.replace(/<!-- Efeitos Fisiológicos -->.*?<!-- Especificações Técnicas -->/s, `<!-- Indicações -->
    <section id="indicacoes" class="py-16 bg-gray-50 border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Indicações</h2>
            
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    ${indicacoes}
                </ul>
            </div>
        </div>
    </section>

    <!-- Conservação -->
    <section id="conservacao" class="py-16 bg-white border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Conservação</h2>
            
            <div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <ul class="space-y-4">
                    ${conservacao}
                </ul>
            </div>
        </div>
    </section>

    <!-- Contraindicações -->
    <section id="contraindicacoes" class="py-16 bg-gray-50 border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Contraindicações</h2>
            
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    ${contraindicacoes}
                </ul>
            </div>
        </div>
    </section>

    <!-- Especificações Técnicas -->`);

// Specs
const specsHtml = `
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Modo de operação</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">Contínuo</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Tensão</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">Bivolt automático</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Modo de aplicação</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">Contínuo e pulsado</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Densidade do foco</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">25 a 3025 pontos</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Energia</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">1 a 100mJ/1550nm – 1 a 70mJ/1927nm</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Largura de pulso</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">1 a 20ms/1550nm – 1 a 10ms/1927nm</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Potência</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">600 W</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Comprimento de onda</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">1150nm e 1927nm</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Peso</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">30kg</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Dimensões</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">520x320x440 mm (LxAxC)</span>
                    </div>
`;
content = content.replace(/<div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">\s*<div class="flex flex-col">.*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<!-- Ficha Técnica -->/s, `<div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <div class="flex flex-col">
${specsHtml}
                </div>
            </div>
        </div>
    </section>

    <!-- Ficha Técnica -->`);

const fichaTecheHtml = `
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Comprimento de Onda</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">1550nm e 1927nm</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Modo de Aplicação</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">Contínuo e pulsado</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Densidade do Foco</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">25 a 3025 pontos</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Energia</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">1 a 100mJ/1550nm – 1 a 70mJ/1927nm</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Largura de Pulso</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">1 a 20ms/1550nm – 1 a 10ms/1927nm</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Dimensões (C x L x A)</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">44.0 x 52.0 x 32.0 cm</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Peso Kg</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">30.0</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Dimensões Embalado (C x L x A)</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">74.0 x 62.0 x 113.0 cm</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Peso Embalado Kg</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">80.0</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Garantia</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">18 meses</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">NCM</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">90189099</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4">
                        <span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">Anvisa</span>
                        <span class="text-sm text-gray-600 font-medium md:text-left">81243810013</span>
                    </div>`;
content = content.replace(/<div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">\s*<div class="flex flex-col">.*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<!-- O que vem na caixa\? -->/s, `<div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <div class="flex flex-col">
${fichaTecheHtml}
                </div>
            </div>
        </div>
    </section>

    <!-- O que vem na caixa? -->`);

// Remove FAQ specific terms of Hakon
content = content.replace(/<section id="faq".*?<\/section>/s, ``);

// Itens Inclusos
const itens = [
  ['01', 'Pisom Medical San - BB Laser de 1550nm e 1927nm'],
  ['01', 'Aplicador'],
  ['02', 'Suportes para aplicador'],
  ['02', 'Óculos de proteção (paciente e operador)'],
  ['01', 'Cabo de energia'],
  ['01', 'Pedal'],
  ['01', 'Conector de bloqueio remoto'],
  ['01', 'Chave'],
  ['01', 'Manual do usuário']
];
let itensHtml = itens.map(i => '<li class="flex gap-3 items-center">' +
                        '<span class="text-medical-500 font-bold bg-medical-100 px-2 flex items-center justify-center py-1 rounded text-xs border border-medical-200 leading-none">' + i[0] + '</span>' +
                        '<span class="text-gray-700 text-sm font-medium">' + i[1] + '</span>' +
                    '</li>').join('\\n                    ');
content = content.replace(/<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">.*?<\/ul>/s, `<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">\\n                    ${itensHtml}\\n                </ul>`);

if (!fs.existsSync('./pisom')){ fs.mkdirSync('./pisom'); }
fs.writeFileSync('./pisom/index.html', content);

console.log('Pisom page generated.');
