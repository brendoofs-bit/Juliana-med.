const fs = require('fs');

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

function fixTagsAndDesc(file, correctDesc) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix tags
    content = content.replace(/<div class="order-3 lg:col-span-7 lg:col-start-6 lg:row-start-2 flex flex-wrap gap-2 mt-2"><\/div>/, tagsContent);

    // Next fix the description
    const order4Regex = /<div class="order-4 lg:col-span-7 lg:col-start-6 lg:row-start-3 border border-gray-100 rounded-2xl p-4 md:p-5 bg-white shadow-sm mt-3 w-full">\s*<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">.*?<\/p>\s*<\/div>/s;
    
    const newOrder4 = `<div class="order-4 lg:col-span-7 lg:col-start-6 lg:row-start-3 border border-gray-100 rounded-2xl p-4 md:p-5 bg-white shadow-sm mt-3 w-full">
                    <p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">
                        ${correctDesc}
                    </p>
                </div>`;
                
    content = content.replace(order4Regex, newOrder4);
    
    fs.writeFileSync(file, content);
}

// Criodermis
fixTagsAndDesc('criodemis-smart-medical-san/index.html', `Transforme a sua clínica com o Criodermis Smart Medical San! Este revolucionário aparelho de criolipólise de placas garante resultados incríveis e indolores na redução de gordura. Com seu sistema inovador de borda infinita e aplicadores tamanho G, você otimiza o tempo e oferece amplo conforto. Livre de água e manutenção complexa, é prático, durável e ecologicamente correto. As manoplas permitem o uso simultâneo, maximizando a área tratada e duplicando os lucros da sua agenda. Invista na tecnologia patenteada que vai atrair novos clientes e elevar seu faturamento de forma segura e imediata!`);

// Magni
fixTagsAndDesc('magni-endermologia-cromoterapia-medical-san/index.html', `Revolucione os tratamentos corporais e faciais da sua clínica com o Magni Medical San! A combinação poderosa de endermologia positiva por roletes de esferas 360º com cromoterapia de 7 cores entrega firmeza, redução de celulite e alívio de tensões de forma não invasiva e espetacular. Totalmente indolor e 100% confortável, o Magni gera resultados nítidos desde a primeira sessão, fidelizando pacientes e superando expectativas. Com aplicadores confortáveis para grandes e pequenas áreas e tela touch de ajuste fácil, o atendimento se torna rápido e preciso. Invista na tecnologia inovadora que moderniza sua clínica e aumenta sua rentabilidade agora!`);

// Andromeda
fixTagsAndDesc('andromeda-termofrequencia-bipolar-medical-san/index.html', `Descubra a revolução na estética e dermatologia com o Andrômeda, o inovador sistema de termofrequência bipolar e eletroestimulação da Medical San. Indolor, prático de usar e sem necessidade de descartáveis, ele reduz custos operacionais, otimiza o tempo de cada sessão e impressiona clientes desde a primeira aplicação. Sua ponteira ergonômica distribui os estímulos de forma segura para os tecidos, ativando a produção de ATP e promovendo lifting facial e tonificação imediatos. Eleve o padrão da sua clínica, ganhe tempo e multiplique sua margem de lucro com este equipamento versátil e incomparável.`);

console.log('Fixed descriptions and tags');
