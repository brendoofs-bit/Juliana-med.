import { Product } from '../types';

export const products: Product[] = [
  // ESTÉTICA
  {
    id: 'est-1',
    name: 'Laser Hakon 4D Medical San',
    description: 'Epilação a Laser 4D com 4 comprimentos de onda simultâneos.',
    subcategory: 'EPILAÇÃO A LASER',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768068339/hakon-epilacao-a-laser_ttakuc.webp', 
    tags: ['Elegível para Financiamento', 'Alta Potência'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia 4D Exclusiva</h4>
      <p class="mb-4 text-gray-600">O Hakon redefine a epilação a laser ao integrar Rubi (694nm), Alexandrite (755nm), Diodo (808nm) e ND-YAG (1064nm) em um único disparo. Essa combinação permite tratar com eficácia e segurança todos os fototipos, desde peles muito claras até negras (fototipo VI), atingindo o pelo em diferentes profundidades.</p>
      
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Rentabilidade e Performance</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Sistema Cryocooling:</strong> Ponteira resfriada a -12°C garante conforto absoluto ao paciente.</li>
        <li><strong>Modo Varredura (SHR):</strong> Permite sessões ultrarrápidas, aumentando o giro da sala e faturamento.</li>
        <li><strong>Interface Intuitiva:</strong> Software inteligente que sugere parâmetros ideais baseados no fototipo.</li>
      </ul>
      
      <p class="text-gray-600 italic">O investimento certo para clínicas que buscam ser referência em depilação definitiva.</p>
    `
  },
  {
    id: 'est-2',
    name: 'Omer Smart Medical San',
    description: 'Laser Q-Switched Nd:YAG para remoção de tatuagens e micropigmentação.',
    subcategory: 'LASER REMOÇÃO',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768068644/omer-smart-medical-san-remove-tatuagem_ksisjr.webp',
    tags: ['Sob Encomenda', 'Compacto'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Especialista em Despigmentação</h4>
      <p class="mb-4 text-gray-600">O Omer Smart é a porta de entrada para o lucrativo mercado de remoção. Com a tecnologia Q-Switched Nd:YAG, ele emite pulsos de nanosegundos que fragmentam o pigmento sem causar danos térmicos à pele adjacente, garantindo uma cicatrização perfeita.</p>
      
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Protocolos Versáteis</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>1064nm:</strong> Remove pigmentos escuros (tatuagens pretas, azuis, sobrancelhas cinzas).</li>
        <li><strong>532nm:</strong> Eficaz em pigmentos quentes (vermelho, marrom, laranja).</li>
        <li><strong>Carbon Peel:</strong> Realiza o "Peeling de Hollywood", tratando oleosidade, poros e luminosidade instantânea.</li>
      </ul>
      
      <p class="text-gray-600 italic">Compacto, potente e com o melhor ROI da categoria para remoção a laser.</p>
    `
  },
  {
    id: 'est-3',
    name: 'Pisom Medical San',
    description: 'Eletrocautério e Jato de Plasma de alta precisão.',
    subcategory: 'ELETROTERAPIA',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768067783/Design_sem_nome_t7guwz.png',
    tags: ['Lançamento', 'Portátil'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Precisão Cirúrgica em Estética</h4>
      <p class="mb-4 text-gray-600">O Pisom é um equipamento inovador de eletrocautério e jato de plasma. Ideal para procedimentos delicados como blefaroplastia não cirúrgica (levantamento de pálpebras), remoção de xantelasmas, verrugas pingentes e tratamento de estrias.</p>
      
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Resultados Imediatos</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Retração de Pele:</strong> Combate a flacidez tissular localizada com eficiência superior.</li>
        <li><strong>Recuperação Rápida:</strong> A técnica gera carbonização controlada que estimula intensa regeneração.</li>
        <li><strong>Custo-Benefício:</strong> Equipamento acessível com alto valor agregado nos tratamentos ofertados.</li>
      </ul>
      
      <p class="text-gray-600 italic">A ferramenta indispensável para harmonização facial minimamente invasiva.</p>
    `
  },
  {
    id: 'est-4',
    name: 'Hegon Medical San',
    description: 'Laser CO2 Fracionado para rejuvenescimento profundo.',
    subcategory: 'LASER ABLATIVO',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768068829/hegon-laser-co2-medical-san_niddnl.webp',
    tags: ['Padrão Ouro', 'Cirúrgico'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Rejuvenescimento Agressivo e Eficaz</h4>
      <p class="mb-4 text-gray-600">O Hegon utiliza Laser de CO2 Fracionado (10.600nm) para realizar a renovação completa da epiderme e derme. É o tratamento de escolha para cicatrizes de acne profundas, rugas estáticas e flacidez severa, promovendo uma neocolagênese intensa.</p>
      
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Múltiplas Aplicações</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Fracionado:</strong> Cria microzonas térmicas para recuperação mais rápida (downtime controlado).</li>
        <li><strong>Cirúrgico:</strong> Acompanha caneta de corte para pequenas cirurgias dermatológicas sem sangramento.</li>
        <li><strong>Ginecológico:</strong> Ponteiras opcionais para rejuvenescimento íntimo e tratamento de atrofia.</li>
      </ul>
      
      <p class="text-gray-600 italic">Tecnologia consagrada para resultados dramáticos em poucas sessões.</p>
    `
  },

  // HOF
  {
    id: 'hof-1',
    name: 'Velaryan Medical San',
    description: 'Laser Diodo Estacionário para lipólise de gordura localizada.',
    subcategory: 'HARMONIZAÇÃO CORPORAL',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768069102/velaryan-medical-san-laser-estacionario-para-harmonizacao-corporal_bsdfvm.jpg',
    tags: ['Hands-Free', 'Alta Lucratividade'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Lipólise Automatizada (Hands-Free)</h4>
      <p class="mb-4 text-gray-600">O Velaryan inova com o laser de diodo 1060nm com afinidade específica pelo tecido adiposo. O sistema aquece as células de gordura entre 42-47°C, induzindo a apoptose (morte celular programada) sem danificar a pele.</p>
      
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Maximização de Tempo</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Atendimento Simultâneo:</strong> Por ser "mãos livres", você libera o profissional para realizar outros procedimentos.</li>
        <li><strong>4 Aplicadores:</strong> Trate abdômen e flancos ao mesmo tempo em apenas 25 minutos.</li>
        <li><strong>Conforto:</strong> Resfriamento de contato protege a epiderme durante todo o ciclo.</li>
      </ul>
      
      <p class="text-gray-600 italic">Escale seus lucros atendendo mais pacientes com menos esforço operacional.</p>
    `
  },
  {
    id: 'hof-2',
    name: 'Ômer Premium',
    description: 'Plataforma Q-Switched Nd:YAG em torre de alta estabilidade.',
    subcategory: 'LASER PREMIUM',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768069415/omer-premium-medical-san_tndwaa.jpg',
    tags: ['Premium', 'Alta Potência'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Robustez e Precisão Absoluta</h4>
      <p class="mb-4 text-gray-600">A versão Premium do Ômer traz a estabilidade de um braço articulado com espelhos de alta qualidade. Isso garante que 100% da energia chegue ao alvo com perfil de feixe perfeito (top hat), essencial para remover tatuagens complexas com segurança.</p>
      
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Diferenciais da Torre</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Zoom Handpiece:</strong> Ajuste o tamanho do spot (1-10mm) diretamente na peça de mão.</li>
        <li><strong>Alta Frequência:</strong> Disparos rápidos (até 10Hz) para tratamentos ágeis em grandes áreas.</li>
        <li><strong>Durabilidade:</strong> Sistema de refrigeração avançado para uso contínuo em clínicas de alto fluxo.</li>
      </ul>
      
      <p class="text-gray-600 italic">O equipamento definitivo para clínicas especializadas em remoção a laser.</p>
    `
  },
  {
    id: 'hof-3',
    name: 'Hyper Slim',
    description: 'Campo Eletromagnético de Alta Intensidade (PEMF) para definição muscular.',
    subcategory: 'BODY CONTOURING',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768069547/hyper-slim-estimulador-muscular_vldhx2.webp',
    tags: ['Tendência', 'Definição Muscular'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Hipertrofia e Definição</h4>
      <p class="mb-4 text-gray-600">O Hyper Slim revoluciona a estética corporal utilizando tecnologia PEMF para induzir contrações musculares supramáximas. Uma sessão de 30 minutos equivale a mais de 20.000 abdominais ou agachamentos, algo impossível de realizar na academia.</p>
      
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Dupla Ação</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Queima de Gordura:</strong> O alto consumo energético das contrações reduz o tecido adiposo local.</li>
        <li><strong>Construção Muscular:</strong> Aumenta o volume e a densidade das fibras musculares (glúteos, abdômen, coxas).</li>
        <li><strong>Diástase:</strong> Protocolos específicos para recuperação abdominal pós-parto.</li>
      </ul>
      
      <p class="text-gray-600 italic">Ofereça o "corpo de atleta" sem esforço para seus pacientes.</p>
    `
  },
  {
    id: 'hof-4',
    name: 'Novo Ultramed HIFU',
    description: 'Ultrassom Micro e Macrofocado para lifting facial e corporal.',
    subcategory: 'LIFTING NÃO CIRÚRGICO',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768069963/ultramed-hifu-medical-san_okfaqq.webp',
    tags: ['Lifting Sem Cortes', 'Best-Seller'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia HIFU Consagrada</h4>
      <p class="mb-4 text-gray-600">O Ultramed utiliza Ultrassom Focado de Alta Intensidade para criar pontos de coagulação térmica profunda (até o SMAS). Isso gera um efeito lifting imediato e estimula a produção de colágeno tipo I por meses após a aplicação.</p>
      
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Versatilidade Total</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Cartuchos Faciais (1.5, 3.0, 4.5mm):</strong> Tratam rugas, flacidez e fazem o efeito bichectomia sem cortes.</li>
        <li><strong>Cartuchos Corporais (8.0, 13.0mm):</strong> Destroem gordura localizada e combatem flacidez em áreas difíceis (joelhos, braços).</li>
        <li><strong>Sem Downtime:</strong> O paciente retorna às atividades imediatamente.</li>
      </ul>
      
      <p class="text-gray-600 italic">Alternativa segura e eficaz à cirurgia plástica para flacidez.</p>
    `
  }
];