import { Product } from '../types';

export const products: Product[] = [
  // ESTÉTICA
  {
    id: 'est-1',
    name: 'Hakon Laser para Epilação',
    description: 'Sistema a laser microcontrolado de múltiplos comprimentos de onda para depilação de alta eficácia e segurança.',
    subcategory: 'Estética Avançada',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769022371/equipamento-hakon_lvqo5y.png', 
    tags: ['Depilação 4D', 'Tecnologia de Diodo'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia de Laser 4D de Última Geração</h4>
      <p class="mb-4 text-gray-600">O Hakon é um sistema a laser de diodo microcontrolado que integra comprimentos de onda de 694nm a 1064nm para depilação avançada. Sua tecnologia atua de forma não invasiva, transformando a energia em modificações biológicas que eliminam os pelos e melhoram a qualidade da pele.</p>
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Precisão e Controle</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Modos 3D e 4D:</strong> Seleção versátil de comprimentos de onda para diferentes necessidades clínicas.</li>
        <li><strong>Ajuste de Fototipo:</strong> Configurações específicas para peles de fototipo baixo, médio e alto.</li>
        <li><strong>Segurança Total:</strong> Sistema equipado com botão de emergência e sensores de monitoramento constante.</li>
      </ul>
      
      <p class="text-gray-600 italic">Eficiência máxima e inovação em depilação a laser com a segurança da tecnologia microcontrolada.</p>
    `
  },
  {
    id: 'est-2',
    name: 'Omer Smart',
    description: 'Equipamento microcontrolado de laser de diodo para remoção de tatuagem, micropigmentação e rejuvenescimento.',
    subcategory: 'Estética Avançada',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769020006/equipamento-omer-smart_s2grpr.png',
    tags: ['Remoção de Tatuagem', 'Laserterapia Segura'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia de Laser de Diodo Microcontrolada</h4>
      <p class="mb-4 text-gray-600">O Ômer Smart é um equipamento avançado que utiliza laser de diodo nos comprimentos de 532nm e 1064nm. Sua tecnologia é focada na remoção de tatuagens e micropigmentação, agindo diretamente nos pigmentos ou na água do tecido para estimular a renovação da pele.</p>
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Versatilidade e Precisão</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Aplicações Amplas:</strong> Indicado para remoção de pigmentos artificiais e tratamento de manchas solares (melanina).</li>
        <li><strong>Parâmetros Customizáveis:</strong> Energia de saída de até 1000mJ e frequência de 1 a 6 Hz para agilidade no atendimento.</li>
        <li><strong>Segurança:</strong> Equipamento Classe 4, acompanhado de óculos de proteção para operador e paciente.</li>
      </ul>
      
      <p class="text-gray-600 italic">Solução definitiva para profissionais que buscam excelência em despigmentação e rejuvenescimento a laser.</p>
    `
  },
  {
    id: 'est-3',
    name: 'Ômer Premium',
    description: 'Equipamento microcontrolado de laser de diodo para remoção de tatuagens, micropigmentação e rejuvenescimento.',
    subcategory: 'Estética Avançada',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769020885/equipamento-omer-premium_nfdm55.png',
    tags: ['Remoção de Tatuagem', 'Tecnologia de Diodo'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia de Diodo de Alta Precisão</h4>
      <p class="mb-4 text-gray-600">O Ômer Premium é um sistema microcontrolado que opera nos comprimentos de onda de 532nm e 1064nm. Sua energia atinge alvos específicos como melanina e tintas de tatuagem, promovendo a fragmentação do pigmento ou o estímulo térmico para colágeno.</p>
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Diferenciais Técnicos</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Potência e Frequência:</strong> Entrega até 1000mJ com repetição de pulso de 1 a 10 Hz para sessões rápidas.</li>
        <li><strong>Segurança Óptica:</strong> Equipamento Classe 4, exigindo uso de óculos de proteção para operador e paciente.</li>
        <li><strong>Versatilidade de Spot:</strong> Diâmetro ajustável entre 1 e 10mm para tratar desde pequenas áreas de micropigmentação até grandes tatuagens.</li>
      </ul>
      
      <p class="text-gray-600 italic">Tecnologia robusta para resultados excepcionais em despigmentação e rejuvenescimento.</p>
    `
  },
  {
    id: 'est-4',
    name: 'Velaryan Harmonização Corporal',
    description: 'Sistema de laser para terapia focado em gordura localizada, processos inflamatórios e reparo tecidual.',
    subcategory: 'Laser para Terapia',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769021295/equipamento-velaryan_cf8nwi.png',
    tags: ['Laserterapia', 'Reparo Tecidual', 'Gordura Localizada'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia de Laser Microcontrolada</h4>
      <p class="mb-4 text-gray-600">O Velaryan é um equipamento de laser de diodo acoplado a fibra, desenvolvido para oferecer radiação óptica para fins terapêuticos e estéticos. Com uma interface touchscreen de alta resolução, o profissional tem controle total sobre a intensidade (até 4000mW) e o tempo de aplicação para protocolos personalizados.</p>
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Versatilidade e Conforto</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Ampla Gama de Aplicações:</strong> Eficaz em tratamentos não invasivos que não exigem tempo de recuperação.</li>
        <li><strong>Controle Preciso:</strong> Permite ajustes de pulso e frequência, garantindo a entrega exata de energia conforme o objetivo clínico.</li>
        <li><strong>Design Funcional:</strong> Inclui suporte para aplicadores e tela sensível ao toque para facilitar a rotina do operador.</li>
      </ul>
      
      <p class="text-gray-600 italic">A solução tecnológica ideal para quem busca eficiência em fotobiomodulação e contorno corporal.</p>
    `
  },
  {
    id: 'est-5',
    name: 'Hyper Slim',
    description: 'Equipamento de estimulação muscular por campo eletromagnético para fortalecimento e tonificação.',
    subcategory: 'Estética Avançada',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769021551/equipamento-hyper-slim_xwrayc.png',
    tags: ['Tonificação Muscular', 'Contrações Supra Máximas'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Precisão e Resultados</h4>
      <p class="mb-4 text-gray-600">O Hyper Slim é um sistema avançado da Medical San que utiliza a tecnologia de Campo Eletromagnético Pulsado (PEMF) para induzir contrações musculares intensas. Ao contrário do exercício físico comum, ele gera contrações supra máximas que aumentam o estresse e a carga de trabalho do músculo sem que ocorra adaptação, resultando em hipertrofia e tonificação acelerada.</p>
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Dupla Ação</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Ação Direta:</strong> Estimula impulsos que não dependem da função cerebral, agindo diretamente na placa mioneural.</li>
        <li><strong>Versatilidade:</strong> Equipado com aplicadores anatômicos e planos para tratar diferentes áreas do corpo com total eficiência.</li>
        <li><strong>Conformidade Médica:</strong> Equipamento microcontrolado e testado sob rigorosos padrões de biocompatibilidade e segurança elétrica.</li>
      </ul>
      
      <p class="text-gray-600 italic">A escolha ideal para profissionais que buscam oferecer fortalecimento e definição muscular de alta performance.</p>
    `
  },
  {
    id: 'est-6',
    name: 'Andrômeda Termofrequência Bipolar',
    description: 'Sistema de termofrequência microcontrolado para tratamentos de rejuvenescimento e contorno corporal.',
    subcategory: 'Estética Avançada',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769021702/equipamento-andromeda_pkrezv.png',
    tags: ['Tratamento de Flacidez', 'Radiofrequência Estacionária'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia de Termofrequência Avançada</h4>
      <p class="mb-4 text-gray-600">O Andrômeda é um equipamento microcontrolado que opera nas frequências de 650kHz, 1200kHz e 2400kHz. Sua tecnologia de radiofrequência é focada em promover efeitos fisiológicos e terapêuticos através do aquecimento controlado, sendo uma técnica não invasiva e sem efeitos sistêmicos.</p>
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Indicações Clínicas</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Corporal:</strong> Auxilia no tratamento de estrias, flacidez e adiposidade localizada.</li>
        <li><strong>Facial:</strong> Atua de forma eficaz no rejuvenescimento cutâneo.</li>
        <li><strong>Segurança:</strong> Sistema com interface intuitiva para monitoramento de potência e tempo de aplicação.</li>
      </ul>
      
      <p class="text-gray-600 italic">A solução ideal para profissionais que buscam versatilidade e eficácia em tratamentos de radiofrequência.</p>
    `
  },
  {
    id: 'est-7',
    name: 'Criodermis Smart',
    description: 'Equipamento de criolipólise microcontrolado para redução de gordura localizada, melhora da flacidez e contorno corporal.',
    subcategory: 'Termoterapia',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769021876/equipamento-criodermis-smart_nhp5cy.png',
    tags: ['Eliminação de Gordura pelo Frio', 'Apoptose Celular'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia de Criolipólise Smart</h4>
      <p class="mb-4 text-gray-600">O Criodermis Smart é um equipamento avançado da Medical San que utiliza a crioterapia (-5ºC) para dissolver a massa gorda. Através de um aplicador posicionado sobre a pele com proteção adequada, o sistema gera um processo inflamatório nas células adiposas, levando à sua autodestruição natural e segura.</p>
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Diferenciais Técnicos</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Controle de Tempo:</strong> Sessões ajustáveis entre 15 e 60 minutos, conforme a necessidade clínica.</li>
        <li><strong>Segurança Operacional:</strong> Interface intuitiva com botões para aumento/diminuição de temperatura e interrupção imediata (Stop).</li>
        <li><strong>Praticidade:</strong> Equipamento bivolt automático, compacto e fácil de higienizar.</li>
      </ul>
      
      <p class="text-gray-600 italic">Solução eficaz e de alta tecnologia para emagrecimento localizado e harmonização corporal.</p>
    `
  },
  {
    id: 'est-8',
    name: 'Magni Endermologia com Cromoterapia',
    description: 'Massageador terapêutico de esferas com tecnologia de microvibração de compressão para tratamentos estéticos e alívio de dores.',
    subcategory: 'Estética e Terapia',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769022041/equipamento-magni_aii8ln.png',
    tags: ['Analgesia', 'Modelagem Corporal', 'Microvibração de Compressão'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia Magni de Compressão Pulsada</h4>
      <p class="mb-4 text-gray-600">O Magni é um massageador de esferas microcontrolado que utiliza a técnica de microvibração de compressão para promover efeitos fisiológicos sistêmicos e estéticos. Através de seus aplicadores com esferas de silicone ou metal (Gold Roller), o equipamento realiza um movimento "push-pull" contínuo que ativa a circulação e oxigena os tecidos de forma profunda e segura.</p>
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Precisão e Versatilidade</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Aplicador Corporal:</strong> Ideal para grandes áreas, auxiliando na redução de medidas e drenagem.</li>
        <li><strong>Aplicador Facial:</strong> Focado em regiões menores como rosto, pescoço e ombros para lifting e relaxamento.</li>
        <li><strong>Controle Total:</strong> Interface digital para ajuste de velocidade, direção de rotação e intensidade da luz LED.</li>
      </ul>
      
      <p class="text-gray-600 italic">Tratamento não invasivo, sem efeitos colaterais e com alta performance em relaxamento e estética.</p>
    `
  },

  // HOF
  {
    id: 'hof-1',
    name: 'Escalibur Mapeamento Tridimensional',
    description: 'Câmera e software de captura 3D para análise dermatológica e acompanhamento preciso de resultados.',
    subcategory: 'Estética Avançada',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769022569/equipamento-escalibur_lfgwxq.png',
    tags: ['Análise 3D', 'Estético e Dermatológico'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia Escalibur 3D</h4>
      <p class="mb-4 text-gray-600">O Escalibur é um sistema de captura de imagens de alta resolução voltado para dermatologia e estética avançada. Através de reconstrução 3D e softwares de precisão, ele permite monitorar a evolução da pele e simular resultados de procedimentos como rinoplastia e preenchimentos labiais. É uma ferramenta não invasiva e sem efeitos colaterais, essencial para alinhar expectativas e documentar melhorias clínicas de forma objetiva.</p>
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Versatilidade e Precisão</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Pontos Anatômicos:</strong> Identificação precisa de áreas que necessitam intervenção.</li>
        <li><strong>Medições Digitais:</strong> Avaliação objetiva de volumes, ângulos e proporções.</li>
        <li><strong>Simulações Estéticas:</strong> Apoio visual para planejamento de tratamentos faciais.</li>
      </ul>
      
      <p class="text-gray-600 italic">Solução de diagnóstico precisa para incentivar tratamentos futuros demonstrando resultados reais aos pacientes.</p>
    `
  },
  {
    id: 'hof-2',
    name: 'Hegon Laser CO2 Fracionado',
    description: 'Laser de CO2 fracionado para rejuvenescimento cutâneo, remoção de lesões e saúde íntima.',
    subcategory: 'Estética Avançada',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769022684/equipamento-hegon_p8blsl.png',
    tags: ['Resurfacing Cutâneo', 'Rejuvenescimento Íntimo'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia CO2 Consagrada</h4>
      <p class="mb-4 text-gray-600">O Hegon é um sistema de laser de CO2 fracionado de 10600nm com 30W de potência, projetado para procedimentos de rejuvenescimento e correção de lesões. Sua energia promove a sublimação do tecido, gerando um estímulo profundo de colágeno e retração imediata da pele.</p>
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Versatilidade e Precisão</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Multiarea:</strong> Interfaces exclusivas para tratamentos faciais, corporais e saúde íntima feminina.</li>
        <li><strong>Controle Total:</strong> Ajuste de formatos de escaneamento, duração de pulso e energia por ponto.</li>
        <li><strong>Segurança:</strong> Braço guia articulado de 7 juntas para maior precisão operativa.</li>
      </ul>
      
      <p class="text-gray-600 italic">Solução tecnológica de alta performance para renovação profunda de tecidos e mucosas.</p>
    `
  },
  {
    id: 'hof-3',
    name: 'LiftEndo Endolaser Subdérmico',
    description: 'Laser subdérmico de alta precisão para tratamento de gordura localizada e flacidez tecidual.',
    subcategory: 'Estética Avançada',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769022885/equipamento-liftendo_iqafgh.png',
    tags: ['Lipoaspiração a Laser', 'Efeito Tensor Imediato'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia de Endolaser Avançada</h4>
      <p class="mb-4 text-gray-600">O Liftendo é um sistema de laser de diodo de 980nm e 1470nm para cirurgias minimamente invasivas. Atuando de forma subdérmica via fibra óptica, ele liquefaz a gordura e promove a retração tecidual imediata através da estimulação de colágeno.</p>
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Vantagens Clínicas</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Remodelagem Total:</strong> Eficaz em áreas como submento, braços, abdômen e coxas.</li>
        <li><strong>Procedimento Seguro:</strong> Menor perda de sangue e hematomas pós-cirúrgicos que métodos tradicionais.</li>
        <li><strong>Controle Preciso:</strong> Interface microcontrolada com diversos modos de pulso para personalização total.</li>
      </ul>
      
      <p class="text-gray-600 italic">Alternativa cirúrgica moderna e eficaz para harmonização e definição de contornos sem grandes traumas.</p>
    `
  },
  {
    id: 'hof-4',
    name: 'Pisom Laser Dual Wave',
    description: 'Sistema a laser de fibra para rejuvenescimento cutâneo e tratamento de cicatrizes.',
    subcategory: 'Laser de Fibra Fracionado',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769022979/equipamento-pisom_yxhmj0.png',
    tags: ['Rejuvenescimento Fracionado', 'Renovação Cutânea'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia de Laser de Fibra</h4>
      <p class="mb-4 text-gray-600">O Pisom é um sistema de tratamento que opera com lasers de fibra de 1550nm e 1927nm. Através de feixes microscópicos, ele promove a fototermólise seletiva, criando zonas térmicas que estimulam a renovação celular e a produção de colágeno tipo I.</p>
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Versatilidade e Resultados</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Tratamentos Faciais:</strong> Reduz rugas periorbitárias, ceratoses e manchas solares.</li>
        <li><strong>Correção de Marcas:</strong> Altamente eficaz em cicatrizes de acne e estrias.</li>
        <li><strong>Segurança Óptica:</strong> Equipado com sensores e óculos de proteção específicos para operação segura.</li>
      </ul>
      
      <p class="text-gray-600 italic">A escolha ideal para rejuvenescimento e resurfacing cutâneo com tecnologia de alta performance.</p>
    `
  },
  {
    id: 'hof-5',
    name: 'Ptolomeu Radiofrequência Fracionada',
    description: 'Radiofrequência microagulhada avançada para tratamento de flacidez, estrias e gordura localizada',
    subcategory: 'Estética Avançada',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769023089/equipamento-ptolomeu_hhlphw.png',
    tags: ['Microagulhamento RF', 'Rejuvenescimento Tecidual'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia Ptolomeu RF</h4>
      <p class="mb-4 text-gray-600">O Ptolomeu é um sistema de radiofrequência microagulhada de 4MHz que realiza tratamentos fracionados minimamente invasivos. Ao combinar microlesões controladas com estímulo térmico na ponta das agulhas, ele promove a retração tecidual, destrói células adiposas e estimula colágeno novo por meses.</p>
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Versatilidade de Aplicação</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Spots Especializados:</strong> Tips de 12 a 40 agulhas e versão Nano para rejuvenescimento facial, corporal e drug delivery.</li>
        <li><strong>Ação Profunda:</strong> Controle preciso de penetração (0,5mm a 7,0mm) para tratar estrias, flacidez e cicatrizes de acne.</li>
      </ul>
      
      <p class="text-gray-600 italic">Solução tecnológica de alta performance para renovação tecidual e remodelagem sem cirurgia.</p>
    `
  },
  {
    id: 'hof-6',
    name: 'Ultramed HIFU',
    description: 'Ultrassom microcontrolado de alta tecnologia para tratamento não invasivo de flacidez e gordura',
    subcategory: 'Estética Avançada',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769023209/equipamento-ultramed-hifu_ybo2yl.png',
    tags: ['Lifting Não Invasivo', 'Remodelagem Corporal'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia HIFU de Alta Precisão</h4>
      <p class="mb-4 text-gray-600">O Ultramed utiliza ultrassom microcontrolado para gerar ondas que rompem os adipócitos e atingem camadas profundas como o SMAS. Isso promove a retração tecidual imediata e a eliminação natural da gordura.
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Versatilidade e Segurança</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Faciais (1.5, 3.5, 4.5mm):</strong> Tratam rugas, poros e promovem efeito lifting por meio da retração de colágeno.</li>
        <li><strong>Corporais (8.0, 13.0mm):</strong> Focados em gordura localizada e flacidez em áreas como abdômen e coxas.</li>
        <li><strong>Não Invasivo:</strong> Procedimento sem efeitos sistêmicos ou necessidade de tempo de recuperação.</li>
      </ul>
      
      <p class="text-gray-600 italic">Solução tecnológica avançada para remodelagem corporal e rejuvenescimento facial sem cortes.</p>
    `
  },
  {
    id: 'hof-7',
    name: 'Ultramed HOF',
    description: 'Ultrassom microcontrolado de alta tecnologia para harmonização e tratamento não invasivo de gordura.',
    subcategory: 'Estética Avançada',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769023301/equipamento-ultramed-hof_uhwq3e.png',
    tags: ['Lifting Sem Cortes', 'Harmonização Orofacial'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia HOF Avançada</h4>
      <p class="mb-4 text-gray-600">O Ultramed HOF utiliza ultrassom de 650kHz para criar ondas de choque que rompem adipócitos e atingem o SMAS. Isso promove lifting imediato e redução de gordura localizada de forma não invasiva.
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Versatilidade de Aplicadores</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Faciais (1.5, 3.5, 4.5mm):</strong> Focam na derme e SMAS para tratar rugas e promover rejuvenescimento.</li>
        <li><strong>Corporais (8.0, 13.0mm):</strong> Combatem gordura profunda e flacidez corporal em áreas como abdômen e coxas.</li>
        <li><strong>Resultados Seguros:</strong> Sem efeitos colaterais, permitindo retorno imediato às atividades.</li>
      </ul>
      
      <p class="text-gray-600 italic">Eficiência máxima em harmonização e estética com tecnologia microcontrolada e segura.</p>
    `
  },
  {
    id: 'hof-8',
    name: 'Ultramed Intimy',
    description: 'Ultrassom microcontrolado de alta intensidade para tratamentos estéticos faciais, corporais e íntimos.',
    subcategory: 'Estética Avançada',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769023384/equipamento-ultramed-intimy_acspzg.png',
    tags: ['Rejuvenescimento Íntimo', 'Lifting Não Invasivo'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia HIFU Especializada</h4>
      <p class="mb-4 text-gray-600">O Ultramed Intimy utiliza ultrassom focalizado de alta intensidade para promover a ruptura de adipócitos e retração do colágeno. Sua tecnologia atinge camadas profundas, proporcionando lifting e redução de medidas sem a necessidade de cortes ou procedimentos invasivos.
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Versatilidade Total</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Aplicador Íntimo:</strong> Focado em tratamentos delicados de retração e rejuvenescimento.</li>
        <li><strong>Cartuchos Faciais e Corporais:</strong> Atuam de 1.5mm a 13mm para tratar rugas e gordura localizada.</li>
        <li><strong>Aplicador Pontual:</strong> Garante precisão máxima em áreas restritas.</li>
      </ul>
      
      <p class="text-gray-600 italic">Alternativa segura e eficiente para rejuvenescimento tecidual e harmonização íntima de alta tecnologia.</p>
    `
  },
  {
    id: 'hof-9',
    name: 'Ultramed MPT',
    description: 'Ultrassom microcontrolado de alta intensidade para tratamento de gordura localizada e flacidez.',
    subcategory: 'Estética Avançada',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769024077/equipamento-ultramed-mpt_hkv766.png',
    tags: ['Lifting Imediato', 'Lipo Sem Cortes'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia HIFU MPT de Última Geração</h4>
      <p class="mb-4 text-gray-600">O Ultramed MPT utiliza ultrassom focalizado de alta intensidade para realizar tratamentos estéticos precisos e não invasivos. Através de ondas de choque, ele promove a ruptura de adipócitos e atinge o SMAS, garantindo lifting imediato e redução de gordura localizada.
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Máxima Versatilidade</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Aplicadores 2D e 9D MPT:</strong> Tratam flacidez facial e gordura corporal com disparos otimizados.</li>
        <li><strong>Cartuchos Diversificados (1,5 a 13mm):</strong> Personalizam a profundidade do tratamento, da derme superficial ao tecido adiposo profundo.</li>
        <li><strong>Sem Downtime:</strong> O paciente retorna à rotina imediatamente após a aplicação.</li>
      </ul>
      
      <p class="text-gray-600 italic">Solução inovadora para harmonização facial e corporal com resultados de alta performance.</p>
    `
  },
  {
    id: 'hof-10',
    name: 'Ultramed MPT HOF',
    description: 'Ultrassom microcontrolado de alta intensidade para harmonização facial e remodelagem corporal avançada.',
    subcategory: 'Estética Avançada',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769024678/equipamento-ultramed-hof-hifu_cuolns.png',
    tags: ['Harmonização Orofacial', 'Lifting Sem Cortes'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia MPT de Alta Precisão</h4>
      <p class="mb-4 text-gray-600">O Ultramed MPT HOF utiliza ultrassom focalizado de alta intensidade para criar pontos de coagulação térmica, atingindo camadas profundas como o SMAS. Isso promove lifting imediato e estimula colágeno por meses, sendo ideal para harmonização orofacial e corporal.
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Versatilidade Avançada</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Aplicadores Faciais (2D MPT e PEN):</strong> Tratam rugas e flacidez com máxima precisão.</li>
        <li><strong>Aplicador Corporal (9D MPT):</strong> Focado em gordura localizada e remodelagem do contorno.</li>
        <li><strong>Sem Downtime:</strong> Retorno imediato à rotina após o procedimento.</li>
      </ul>
      
      <p class="text-gray-600 italic">A solução definitiva e não invasiva para resultados estéticos de alta performance.</p>
    `
  },
  {
    id: 'hof-11',
    name: 'Ultramed 9D',
    description: 'Ultrassom focalizado microcontrolado de alta intensidade para redução de gordura e flacidez.',
    subcategory: 'Estética Avançada',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1769001778/ultramed_9d_ozant2.png',
    tags: ['Lipo Sem Cortes', 'Lifting Facial'],
    benefits: `
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Tecnologia HIFU 9D Consagrada</h4>
      <p class="mb-4 text-gray-600">O Ultramed 9D utiliza ultrassom focalizado de alta intensidade para criar pontos de coagulação térmica e ondas de choque que atingem do tecido adiposo ao SMAS. Isso garante resultados eficazes em gordura localizada e flacidez.
      <h4 class="font-bold mb-2 text-medical-800 uppercase">Versatilidade e Precisão</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
        <li><strong>Cartuchos Faciais (1.5mm a 4.5mm):</strong> Tratam rugas, estimulam colágeno e promovem lifting.</li>
        <li><strong>Cartuchos Corporais (8.0mm e 13.0mm):</strong> Focados na destruição de células de gordura.</li>
        <li><strong>Aplicadores PEN e Íntimo:</strong> Permitem aplicações pontuais e tratamentos de rejuvenescimento íntimo.</li>
      </ul>
      
      <p class="text-gray-600 italic">Procedimento não invasivo com tecnologia microcontrolada para resultados de alta performance.</p>
    `
  }
];