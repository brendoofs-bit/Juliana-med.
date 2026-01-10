import { Product } from '../types';

const defaultBenefits = `
  <h4 class="font-bold mb-2 text-medical-800">Principais Benefícios:</h4>
  <ul class="list-disc pl-5 space-y-1 mb-4 text-gray-600">
    <li>Alta performance clínica com resultados comprovados.</li>
    <li>Tecnologia de ponta para tratamentos estéticos avançados.</li>
    <li>Design ergonômico facilitando o manuseio pelo profissional.</li>
    <li>Interface intuitiva e software inteligente.</li>
    <li>Baixo custo de manutenção e alta durabilidade.</li>
    <li>Certificado pela ANVISA e órgãos reguladores.</li>
  </ul>
  <h4 class="font-bold mb-2 text-medical-800">Indicações:</h4>
  <p class="mb-4 text-gray-600">Ideal para clínicas de estética, dermatologistas e fisioterapeutas que buscam excelência em tratamentos corporais e faciais.</p>
  <h4 class="font-bold mb-2 text-medical-800">Especificações Técnicas:</h4>
  <p class="text-gray-600">Potência ajustável, múltiplos handpieces e sistema de resfriamento integrado para maior conforto do paciente.</p>
  <br/>
  <p class="font-bold text-medical-600">Toque no botão abaixo para receber a ficha técnica completa no WhatsApp.</p>
`;

export const products: Product[] = [
  // ESTÉTICA
  {
    id: 'est-1',
    name: 'Laser Hakon 4D Medical San Epilaça Rubi, Alexandrite, Diodo e ND-YAG',
    description: 'Cód: ME20175A',
    subcategory: 'EPILAÇÃO A LASER',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768068339/hakon-epilacao-a-laser_ttakuc.webp', 
    price: 284905.00,
    installments: 48,
    benefits: defaultBenefits
  },
  {
    id: 'est-2',
    name: 'Omer Smart Medical San - Laser para Remoçao de Tatuagem',
    description: 'Cód: ME21358A',
    subcategory: 'LASER DE ALTA POTÊNCIA',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768068644/omer-smart-medical-san-remove-tatuagem_ksisjr.webp',
    price: 5690.50,
    installments: 60,
    benefits: defaultBenefits
  },
  {
    id: 'est-3',
    name: 'Pisom Medical San – BB Laser de 1550nm e 1927nm',
    description: 'Cód: ME20191A',
    subcategory: 'TERAPIAS',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768067783/Design_sem_nome_t7guwz.png',
    price: 142405.00,
    installments: 36,
    benefits: defaultBenefits
  },
  {
    id: 'est-4',
    name: 'Hegon Medical San – Laser de CO2 Fracionado',
    description: 'Cód: ME21360A',
    subcategory: 'TERAPIAS',
    category: 'estetica',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768068829/hegon-laser-co2-medical-san_niddnl.webp',
    price: 79191.00,
    installments: 48,
    benefits: defaultBenefits
  },

  // HOF (Harmonização Orofacial / Corporal Avançada)
  {
    id: 'hof-1',
    name: 'Velaryan Medical San – Laser Estacionário para Harmonização Corporal',
    description: 'Cód: ME20930A',
    subcategory: 'HARMONIZAÇÃO',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768069102/velaryan-medical-san-laser-estacionario-para-harmonizacao-corporal_bsdfvm.jpg',
    price: 5690.50,
    installments: 36,
    benefits: defaultBenefits
  },
  {
    id: 'hof-2',
    name: 'Ômer Premium Medical San – Laser para Remoção de Tatuagem e Micropigmentação',
    description: 'Cód: ME19613A',
    subcategory: 'HARMONIZAÇÃO',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768069415/omer-premium-medical-san_tndwaa.jpg',
    price: 137655.00,
    installments: 48,
    benefits: defaultBenefits
  },
  {
    id: 'hof-3',
    name: 'Hyper Slim Medical San - Eletroestimulador Magnético',
    description: 'Cód: ME20013A',
    subcategory: 'HARMONIZAÇÃO',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768069547/hyper-slim-estimulador-muscular_vldhx2.webp',
    price: 87990.00,
    installments: 36,
    benefits: defaultBenefits
  },
  {
    id: 'hof-4',
    name: 'Novo Ultramed HIFU Medical San - Ultrassom Micro e Macrofocado',
    description: 'Cód: ME20657A',
    subcategory: 'HARMONIZAÇÃO',
    category: 'hof',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1768069963/ultramed-hifu-medical-san_okfaqq.webp',
    price: 158310.01,
    installments: 48,
    benefits: defaultBenefits
  }
];