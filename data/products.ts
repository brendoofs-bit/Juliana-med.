import { Product } from '../types';

// Helper para criar o CTA padrão ao final de cada descrição
const createCTA = () => `
  <div class="mt-8 mb-2 p-4 bg-medical-50 rounded-lg border border-medical-100 text-center">
     <p class="text-medical-800 font-bold mb-2">Deseja valores e condições de pagamento?</p>
     <p class="text-sm text-gray-600 mb-4">Receba a apresentação comercial completa no seu WhatsApp agora mesmo.</p>
  </div>
`;

export const products: Product[] = [
  // ESTÉTICA
  {
    id: 'est-1',
    name: 'Laser Hakon 4D Medical San',
    description: 'Epilação a Laser 4D (Rubi, Alexandrite, Diodo e ND-YAG)',
    subcategory: 'EPILAÇÃO A LASER',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768068339/hakon-epilacao-a-laser_ttakuc.webp', 
    tags: ['Elegível para Financiamento', 'Alta Potência'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800">A Revolução da Epilação 4D</h4>
      <p class="mb-4 text-gray-600">O Hakon é o único laser do mercado que combina quatro comprimentos de onda (Rubi 694nm, Alexandrite 755nm, Diodo 808nm e ND-YAG 1064nm) em um único disparo. Isso garante eficácia em todos os fototipos de pele, inclusive as bronzeadas.</p>
      
      <h4 class="font-bold mb-2 text-medical-800">Diferenciais Competitivos:</h4>
      <ul class="list-disc pl-5 space-y-1 mb-4 text-gray-600">
        <li><strong>Tecnologia 4D:</strong> Atinge diferentes profundidades do folículo piloso simultaneamente.</li>
        <li><strong>Sistema de Resfriamento:</strong> Ponteira resfriada a -12°C, proporcionando um tratamento praticamente indolor.</li>
        <li><strong>Modo Varrredura:</strong> Maior rapidez nas sessões, permitindo atender mais pacientes por dia.</li>
        <li><strong>Design Ergonômico:</strong> Handpiece leve para evitar fadiga do operador.</li>
      </ul>
      
      <h4 class="font-bold mb-2 text-medical-800">Especificações:</h4>
      <p class="text-gray-600 mb-4">Potência de saída de 2000W, Spot size de 12x12mm e tela touch screen intuitiva de 10 polegadas.</p>
      ${createCTA()}
    `
  },
  {
    id: 'est-2',
    name: 'Omer Smart Medical San',
    description: 'Laser Q-Switched para Remoção de Tatuagem',
    subcategory: 'LASER DE ALTA POTÊNCIA',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768068644/omer-smart-medical-san-remove-tatuagem_ksisjr.webp',
    tags: ['Sob Encomenda', 'Compacto'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800">Precisão na Remoção de Pigmentos</h4>
      <p class="mb-4 text-gray-600">O Omer Smart democratiza o acesso à tecnologia Q-Switched Nd:YAG. Desenvolvido especificamente para remoção de tatuagens e micropigmentação, ele fragmenta o pigmento em micropartículas sem danificar o tecido adjacente.</p>
      
      <h4 class="font-bold mb-2 text-medical-800">Versatilidade de Tratamentos:</h4>
      <ul class="list-disc pl-5 space-y-1 mb-4 text-gray-600">
        <li><strong>Ponteira 1064nm:</strong> Para pigmentos escuros (preto, azul escuro, cinza).</li>
        <li><strong>Ponteira 532nm:</strong> Para pigmentos coloridos (vermelho, laranja, amarelo).</li>
        <li><strong>Black Peel:</strong> Realiza o famoso peeling de Hollywood para rejuvenescimento e controle de oleosidade.</li>
      </ul>
      
      <h4 class="font-bold mb-2 text-medical-800">Retorno sobre Investimento:</h4>
      <p class="text-gray-600 mb-4">Equipamento de baixo custo operacional e alta margem de lucro por sessão. Ideal para quem deseja iniciar no mercado de remoção.</p>
      ${createCTA()}
    `
  },
  {
    id: 'est-3',
    name: 'Pisom Medical San',
    description: 'BB Laser de 1550nm e 1927nm (Thulium)',
    subcategory: 'TERAPIAS',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768067783/Design_sem_nome_t7guwz.png',
    tags: ['Lançamento', 'Financiamento Disponível'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800">O Verdadeiro BB Laser</h4>
      <p class="mb-4 text-gray-600">O Pisom traz a tecnologia de laser de Thulium (1927nm) combinada com Erbium Glass (1550nm). É a solução definitiva para o "efeito porcelana" na pele, tratando textura, poros dilatados e melasma com eficácia superior.</p>
      
      <h4 class="font-bold mb-2 text-medical-800">Indicações Principais:</h4>
      <ul class="list-disc pl-5 space-y-1 mb-4 text-gray-600">
        <li>Rejuvenescimento facial não ablativo (pouco downtime).</li>
        <li>Tratamento de melasma resistente e hiperpigmentações.</li>
        <li>Cicatrizes de acne e estrias brancas e vermelhas.</li>
        <li>Drug delivery de alta performance.</li>
      </ul>
      
      <p class="text-gray-600 mb-4">Um equipamento sofisticado para clínicas que atendem um público exigente que busca resultados naturais.</p>
      ${createCTA()}
    `
  },
  {
    id: 'est-4',
    name: 'Hegon Medical San',
    description: 'Laser de CO2 Fracionado',
    subcategory: 'TERAPIAS',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768068829/hegon-laser-co2-medical-san_niddnl.webp',
    tags: ['Padrão Ouro', 'Cirúrgico'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800">O Padrão Ouro em Rejuvenescimento</h4>
      <p class="mb-4 text-gray-600">O Hegon é um Laser de CO2 Fracionado que atua na renovação intensa da pele. Ele estimula a produção de colágeno através da vaporização seletiva dos tecidos, sendo insuperável para rugas profundas e flacidez.</p>
      
      <h4 class="font-bold mb-2 text-medical-800">Funcionalidades:</h4>
      <ul class="list-disc pl-5 space-y-1 mb-4 text-gray-600">
        <li><strong>Rejuvenescimento Global:</strong> Face, pescoço e colo.</li>
        <li><strong>Modo Cirúrgico:</strong> Acompanha caneta cirúrgica para blefaroplastia sem cortes e remoção de lesões benignas.</li>
        <li><strong>Ginecologia:</strong> Possui ponteiras opcionais para rejuvenescimento íntimo.</li>
      </ul>
      
      <p class="text-gray-600 mb-4">Alta potência e controle preciso de pulso para resultados dramáticos e seguros.</p>
      ${createCTA()}
    `
  },

  // HOF
  {
    id: 'hof-1',
    name: 'Velaryan Medical San',
    description: 'Laser Estacionário para Harmonização Corporal',
    subcategory: 'HARMONIZAÇÃO',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768069102/velaryan-medical-san-laser-estacionario-para-harmonizacao-corporal_bsdfvm.jpg',
    tags: ['Hands-Free', 'Alta Lucratividade'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800">Lipólise Hands-Free</h4>
      <p class="mb-4 text-gray-600">O Velaryan é um laser diodo estacionário de 1060nm. Sua afinidade pelo tecido adiposo provoca a apoptose (morte celular) da gordura. O grande diferencial é ser um tratamento "mãos livres": você posiciona os aplicadores e o equipamento trabalha sozinho.</p>
      
      <h4 class="font-bold mb-2 text-medical-800">Por que investir?</h4>
      <ul class="list-disc pl-5 space-y-1 mb-4 text-gray-600">
        <li><strong>Otimização de Tempo:</strong> Permite que o profissional atenda outro paciente enquanto o Velaryan atua.</li>
        <li><strong>Conforto:</strong> Sistema de resfriamento de contato protege a epiderme.</li>
        <li><strong>Áreas Difíceis:</strong> 4 aplicadores independentes para tratar flancos, abdômen e coxas simultaneamente.</li>
      </ul>
      
      <p class="text-gray-600 mb-4">A tecnologia perfeita para escalar os atendimentos da sua clínica.</p>
      ${createCTA()}
    `
  },
  {
    id: 'hof-2',
    name: 'Ômer Premium',
    description: 'Laser Q-Switched Nd:YAG em Torre',
    subcategory: 'HARMONIZAÇÃO',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768069415/omer-premium-medical-san_tndwaa.jpg',
    tags: ['Premium', 'Alta Potência'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800">Potência Elevada em Design Torre</h4>
      <p class="mb-4 text-gray-600">A versão Premium do Ômer oferece maior estabilidade e potência em um design robusto de torre. Ideal para clínicas com alto fluxo de remoção de tatuagens e tratamentos de pigmentação.</p>
      
      <h4 class="font-bold mb-2 text-medical-800">Vantagens do Modelo Premium:</h4>
      <ul class="list-disc pl-5 space-y-1 mb-4 text-gray-600">
        <li>Braço articulado com espelhos de alta precisão (entrega de energia 100% estável).</li>
        <li>Spot size ajustável na própria ponteira (zoom handpiece).</li>
        <li>Maior frequência de disparos (Hz), permitindo sessões mais rápidas em áreas grandes.</li>
      </ul>
      
      <p class="text-gray-600 mb-4">Para profissionais que não abrem mão de excelência técnica e design imponente.</p>
      ${createCTA()}
    `
  },
  {
    id: 'hof-3',
    name: 'Hyper Slim',
    description: 'Eletroestimulador Magnético (PEMF)',
    subcategory: 'HARMONIZAÇÃO',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768069547/hyper-slim-estimulador-muscular_vldhx2.webp',
    tags: ['Tendência', 'Definição Muscular'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800">A Academia do Futuro</h4>
      <p class="mb-4 text-gray-600">O Hyper Slim utiliza campo eletromagnético de alta intensidade para gerar contrações supramáximas (até 20.000 contrações em 30 minutos). Ele constrói músculos e queima gordura simultaneamente.</p>
      
      <h4 class="font-bold mb-2 text-medical-800">Resultados Esperados:</h4>
      <ul class="list-disc pl-5 space-y-1 mb-4 text-gray-600">
        <li>Hipertrofia muscular (aumento de volume).</li>
        <li>Tonificação intensa (abdômen, glúteos, braços e coxas).</li>
        <li>Redução de gordura visceral e subcutânea na área tratada.</li>
        <li>Protocolos exclusivos para diástase abdominal pós-parto.</li>
      </ul>
      
      <p class="text-gray-600 mb-4">O equipamento mais desejado para harmonização corporal (Body Contouring).</p>
      ${createCTA()}
    `
  },
  {
    id: 'hof-4',
    name: 'Novo Ultramed HIFU',
    description: 'Ultrassom Micro e Macrofocado',
    subcategory: 'HARMONIZAÇÃO',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768069963/ultramed-hifu-medical-san_okfaqq.webp',
    tags: ['Lifting Sem Cortes', 'Best-Seller'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800">Lifting Facial e Corporal Não Invasivo</h4>
      <p class="mb-4 text-gray-600">O Ultramed HIFU entrega pontos de coagulação térmica profunda, atingindo desde a derme até o SMAS (sistema muscular aponeurótico). O resultado é uma retração imediata e estímulo de colágeno a longo prazo.</p>
      
      <h4 class="font-bold mb-2 text-medical-800">Versatilidade Total:</h4>
      <ul class="list-disc pl-5 space-y-1 mb-4 text-gray-600">
        <li><strong>Microfocado:</strong> Para face, efeito bichectomia, papada e rugas finas.</li>
        <li><strong>Macrofocado:</strong> Para gordura localizada corporal e flacidez intensa (joelhos, umbigo triste, bananinha).</li>
        <li>Cartuchos com diferentes profundidades (1.5mm até 13mm).</li>
      </ul>
      
      <p class="text-gray-600 mb-4">A tecnologia consagrada para tratar flacidez sem cirurgia e sem downtime.</p>
      ${createCTA()}
    `
  }
];