const fs = require('fs');

const dir = 'criodemis-smart-medical-san';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let html = fs.readFileSync('hakon/index.html', 'utf8');

const replacements = {
    'Hakon - Alta Performance': 'Criodermis Smart - Criolipólise de Placas',
    'Cód: ME21364A': 'Cód: ME21445A',
    'Hakon Medical San - Equipamento de Laser para Epilação Premium 4D': 'Criodermis Smart Medical San – Aparelho de Criolipólise de Placas com 04 Aplicadores (não acompanha o rack)',
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
const salesDesc = `Transforme a sua clínica com o Criodermis Smart Medical San! Este revolucionário aparelho de criolipólise de placas garante resultados incríveis e indolores na redução de gordura. Com seu sistema inovador de borda infinita e aplicadores tamanho G, você otimiza o tempo e oferece amplo conforto. Livre de água e manutenção complexa, é prático, durável e ecologicamente correto. As manoplas permitem o uso simultâneo, maximizando a área tratada e duplicando os lucros da sua agenda. Invista na tecnologia patenteada que vai atrair novos clientes e elevar seu faturamento de forma segura e imediata!`;
html = html.replace(/<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">\s*Hakon 4D Premium.*?<\/p>/, `<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify">\n                        ${salesDesc}\n                    </p>`);

// Price remove
const priceRegex = /<!-- 5. Price -->.*?<!-- 6. CTA -->/s;
html = html.replace(priceRegex, '<!-- 6. CTA -->'); // Assuming Hakon template may or may not have price, but we already removed it in previous steps, so let's make sure it's not there.
// If Hakon had price, the regex above removes it. But wait, we edited the Hakon template? No, we edited Andromeda. So Hakon doesn't have prices.

// Descricao
const descricaoHtml = `<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">
Criodermis Smart Medical San: Criolipólise de Placas para Redução de Gordura Localizada<br><br>

O Criodermis Smart é a versão atualizada da criolipólise de placas mais vendida do Brasil. Desenvolvido pela Medical San, o equipamento mantém a qualidade e os resultados já consolidados no mercado estético, incorporando novas funcionalidades que ampliam o desempenho nos tratamentos de redução de gordura localizada.<br><br>

Com design aprimorado e recursos exclusivos, o Criodermis Smart possui 4 aplicadores grandes de borda infinita, que permitem maior área de aplicação, sem espaços entre as placas. Essa configuração contribui para otimizar o tempo de atendimento e promover resultados mais uniformes.<br><br>

O equipamento utiliza um sistema patenteado de congelamento por dissipação de ar, proporcionando um processo eficiente, seguro e sustentável durante os procedimentos. <br><br>

Além de atuar na redução de gordura localizada por meio do resfriamento e flexibilização dos adipócitos, o Criodermis Smart também pode ser utilizado em abordagens relacionadas à gordura visceral, emagrecimento e flacidez da pele, ampliando suas possibilidades de aplicação em clínicas de estética.<br><br>

Conta com manoplas no tamanho G, com área de 200 cm² e equipadas com 2 peltiers, sendo projetadas para atender regiões corporais amplas com maior praticidade.<br><br>

O Criodermis Smart representa a evolução de um equipamento já consolidado, mantendo o padrão de qualidade e confiabilidade, agora com recursos adicionais para potencializar os tratamentos estéticos.
</p>`;
html = html.replace(/<p class="text-sm md:text-base font-medium text-gray-600 leading-relaxed text-justify max-w-4xl mx-auto">.*?<\/p>/s, descricaoHtml);

// Diferenciais
const differentials = [
    { title: "Sustentável", desc: "O sistema patenteado de resfriamento por dissipação de ar elimina a necessidade de troca de água, aumentando a durabilidade." },
    { title: "Borda Infinita", desc: "Os aplicadores grandes com borda infinita cobrem completamente a área tratada, sem intervalos entre as placas, melhorando a eficiência e reduzindo o tempo." },
    { title: "Acoplamento Otimizado", desc: "O sistema foi otimizado para facilitar o acoplamento das manoplas e a passagem das faixas, tornando o uso muito mais prático e ágil." },
    { title: "Ação Versátil", desc: "A tecnologia permite a atuação na redução de gordura localizada, gordura visceral, emagrecimento e melhora da flacidez." },
    { title: "Tecnologia Verde", desc: "O equipamento possui a tecnologia Patente Verde, garantindo eficiência energética e menor impacto ambiental." },
    { title: "Alto Desempenho", desc: "Conta com 4 manoplas tamanho G (200 cm2), cada qual equipada com 2 peltiers, proporcionando alta performance em áreas amplas." },
    { title: "Portabilidade", desc: "O design leve e compacto facilita o transporte e a utilização em clínicas estéticas, mantendo a funcionalidade e organização." }
];

let diferenciaisBody = differentials.map(d => `<div class="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-md"><div class="bg-medical-100 text-medical-600 p-2.5 rounded-xl shrink-0 mt-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><div><h4 class="text-sm font-extrabold text-medical-900 mb-1 uppercase tracking-tight">${d.title}</h4><p class="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">${d.desc}</p></div></div>`).join('\n');
html = html.replace(/<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">.*?<\/section>/s, '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">\n' + diferenciaisBody + '\n</div></div></section>');

// Indicacoes
const indicacoesList = [
    "Indicado para tratamento de gordura localizada e flacidez.",
    "Pode ser aplicado nas seguintes regiões: abdômen, flancos, braços, culote, interno de coxas, bananinha, papada, peitoral masculino e região íntima."
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

// we inject above efeitos fisiologica
html = html.replace('<!-- Efeitos Fisiológicos -->', indicacoesSectionHtml + '\n\n    <!-- Efeitos Fisiológicos -->');

// Efeitos Fisiologicos
const efeitosList = [
    "A cristalização dos lipídios ocorre a partir da extração de temperatura (-5ºC a 8ºC), promovendo a morte celular dos adipócitos, que são mais sensíveis ao frio.",
    "Durante o resfriamento, ocorre a ausência de oxigênio e nutrientes na região tratada. Após o procedimento, o retorno do fluxo sanguíneo gera inflamação e dano oxidativo devido ao estresse oxidativo.",
    "A paniculite inflamatória se desenvolve com o aumento de células inflamatórias, sendo perceptível após 3 dias, com pico no 14º dia, apresentando infiltrado de histiócitos, neutrófilos, mastócitos e outras células mononucleadas.",
    "Entre o 14º e 30º dia, ocorre a remoção gradual dos resíduos celulares por fagocitose, com atuação de macrófagos e demais fagócitos.",
    "Após 4 semanas, há a redução da inflamação e do volume de adipócitos. Entre 2 e 3 meses, ocorre espessamento dos septos interlobulares e o desaparecimento do processo inflamatório, contribuindo para a remodelação corporal."
];
let efeitosBody = efeitosList.map(item => `<li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">${item}</p></li>`).join('\n');
html = html.replace(/<ul class="space-y-4">.*?<\/ul>/s, '<ul class="space-y-4">\n' + efeitosBody + '\n</ul>');

// Informações Adicionais
const extrasList = [
    "Para a prática adequada, recomenda-se manter o ambiente com ar condicionado a 20ºC.",
    "Utilizar manta bem lubrificada e de boa qualidade.",
    "Não obstruir as saídas de ar das manoplas.",
    "Seguir rigorosamente o protocolo conforme a espessura de gordura da região, evitando excesso de tempo de aplicação."
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
html = html.replace('<!-- Contraindicações -->', extrasSectionHtml + '\n\n    <!-- Conservacao -->');

// Conservação
const consList = [
    "Evitar exposição a vibrações, ambientes úmidos, quentes ou com poeira.",
    "Não bloquear a ventilação do equipamento.",
    "Em caso de instalação em armário embutido, garantir livre circulação de ar na parte traseira.",
    "Não inserir objetos nos orifícios do dispositivo.",
    "Desligar da fonte de alimentação antes da limpeza.",
    "Realizar a limpeza com pano umedecido em detergente neutro.",
    "A limpeza deve ser feita sempre que necessário, sendo sugerida a limpeza semanal do equipamento e a higienização dos aplicadores após cada sessão.",
    "Não submergir o equipamento ou cabos em líquidos.",
    "Realizar limpeza do transdutor ao final de cada sessão com pano seco e álcool.",
    "Não é necessário esterilizar partes ou peças do equipamento.",
    "<b>Calibração:</b> O equipamento deve passar por manutenção periódica anual para minimizar desgastes ou corrosões que possam reduzir suas propriedades mecânicas dentro do seu período de vida útil."
];
let consBody = consList.map(item => `<li class="flex gap-3 items-start"><div class="bg-medical-100 text-medical-600 p-1.5 rounded-full shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium leading-relaxed">${item}</p></li>`).join('\n');
const consSectionHtml = `
    <section id="conservacao" class="py-16 bg-white border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Conservação</h2>
            <div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <ul class="space-y-4">
                    ${consBody}
                </ul>
            </div>
        </div>
    </section>
`;

html = html.replace('<!-- Conservacao -->', consSectionHtml + '\n\n    <!-- Contraindicações -->');

// Contraindicacoes
const contras = [
    "Não indicado para gestantes ou lactantes.",
    "Contraindicado em casos de dermatite ou pele irritada, síndrome de Raynaud, áreas neoplásicas ou com histórico de remoção de tumor.",
    "Não utilizar em regiões com cirurgias recentes, cicatrizes ou hérnias.",
    "Contraindicado para diabetes descompensada, doenças autoimunes, lesões abertas ou infectadas.",
    "Não indicado para pessoas com sensibilidade dérmica ao frio, distúrbios circulatórios ou uso de anticoagulantes.",
    "Contraindicado em casos de hemoglobinúria e hepatite C."
];
let contraBody = contras.map(c => `<li class="flex gap-3 items-center"><div class="bg-red-50 text-red-500 p-1.5 rounded-full shrink-0"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg></div><p class="text-sm md:text-base text-gray-600 font-medium">${c}</p></li>`).join('\n');
html = html.replace(/<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">\n' + contraBody + '\n</ul>');

// Itens Inclusos
const items = [
    "01 Criodermis Smart Medical San - aparelho de criolipólise de placas",
    "04 aplicadores de placas tamanho G",
    "01 cabo de força",
    "01 manual de instruções"
];
let itemsBody = items.map(i => `<li class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"><div class="bg-white p-2 rounded-lg shadow-sm text-medical-500"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><span class="text-sm md:text-base font-medium text-gray-700">${i}</span></li>`).join('\n');
html = html.replace(/<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">.*?<\/ul>/s, '<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">\n' + itemsBody + '\n</ul>');

// Acessorios Opcionais
const optItems = [
    "ME20656A - Aplicador Médio Medical San - para Criodermis",
    "ME19357A - Aplicador Big Medical San - para Criodermis",
    "ME19358A - Aplicador Flex Medical San - para Criodermis"
];
let optItemsBody = optItems.map(i => `<li class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"><div class="bg-white p-2 rounded-lg shadow-sm text-medical-500"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg></div><span class="text-sm md:text-base font-medium text-gray-700">${i}</span></li>`).join('\n');
const optSect = `
    <!-- Acessórios Opcionais -->
    <section id="acessorios" class="py-16 bg-gray-50 border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Acessórios Opcionais</h2>
            <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                ${optItemsBody}
            </ul>
        </div>
    </section>
`;
// Need to put this right after Itens Inclusos
html = html.replace('<!-- Especificações Técnicas -->', optSect + '\n\n    <!-- Especificações Técnicas -->');


// Especificacoes
const specs = [
    { k: 'Temperatura de Resfriamento/Aquecimento', v: '-5ºC a 40ºC;' },
    { k: 'Temperatura Ambiente', v: '20ºC a 23ºC;' },
    { k: 'Potência de Entrada', v: '900VA;' },
    { k: 'Modo', v: 'Contínuo;' },
    { k: 'Não necessita água', v: 'Sim;' },
    { k: 'Peso', v: '6,5kg;' },
    { k: 'Voltagem', v: 'bivolt automático - 100 - 240V / 60 Hz - 300VA.' }
];
let specBody = specs.map(s => `<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">${s.k}</span><span class="text-sm text-gray-600 font-medium md:text-left">${s.v}</span></div>`).join('\n');
html = html.replace(/<section id="especificacoes" class="py-16 bg-gray-50 border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<section id="especificacoes" class="py-16 bg-white border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Especificações Técnicas</h2><div class="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + specBody + '\n</div></div></div></section>');

// Ficha
const ficha = [
    {k: 'Dimensões (C x L x A)', v: '42.0 x 43.0 x 27.0 cm'},
    {k: 'Peso Kg', v: '6.5'},
    {k: 'Dimensões Embalado (C x L x A)', v: '54.5 x 52.5 x 138.5 cm'},
    {k: 'Peso Embalado Kg', v: '29.8'},
    {k: 'Marca', v: 'MEDICAL SAN'},
    {k: 'Modelo', v: 'SMART'},
    {k: 'NCM', v: '90189099'},
    {k: 'Anvisa', v: '81243810003'}
];
let fichaBody = ficha.map(f => `<div class="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-100 last:border-0 gap-1 md:gap-4"><span class="text-sm font-bold text-gray-700 md:w-1/3 shrink-0">${f.k}</span><span class="text-sm text-gray-600 font-medium md:text-left">${f.v}</span></div>`).join('\n');

html = html.replace(/<section id="ficha-tecnica" class="py-16 bg-white border-t border-gray-100">.*?<div class="flex flex-col">.*?<\/div>.*?<\/div>.*?<\/section>/s, '<section id="ficha-tecnica" class="py-16 bg-gray-50 border-t border-gray-100"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><h2 class="text-xl md:text-2xl font-extrabold text-medical-900 mb-10 uppercase tracking-wider text-center">Ficha Técnica</h2><div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto"><div class="flex flex-col">\n' + fichaBody + '\n</div></div></div></section>');

// Remover Perguntas Frequentes
html = html.replace(/<!-- Perguntas Frequentes -->.*?<\/section>/s, '');

// Clean images
html = html.replace(/https:\/\/res\.cloudinary\.com\/doqw5aqcf\/image\/upload\/v1778022679\/.*?_jcq9n2\.png/g, 'https://placehold.co/600x400?text=Criodermis+Smart');
html = html.replace(/alt="Hakon Laser Principal"/g, 'alt="Criodermis Smart Medical San"');

// Thumbs - we can leave placehold or just clear thumbs entirely, for Hakon there was a changeImage script. Let's just remove thumbs for now to make it cleaner, or keep placeholders
html = html.replace(/<button onclick="changeImage.*?<\/button>/gs, '');

fs.writeFileSync(dir + '/index.html', html);
console.log('Criodermis build success');
