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
  // Fisioterapia (Antigo Mais Procurados)
  {
    id: 'mp-1',
    name: 'Ethernia Cold Smart – Aparelho Criofrequência, Radiofrequência e Eletroporação',
    description: 'Cód: ME05632A',
    subcategory: 'Tecarterapia',
    category: 'most_wanted',
    imageUrl: 'https://ibb.co/FLXqssgz',
    price: 284905.00,
    installments: 12,
    benefits: defaultBenefits
  },

  // Eletroterapia (Antigo Mais Vendidos)
  {
    id: 'mv-1',
    name: 'Lipocavity 40 Medical San — Aparelho de Ultracavitação Multifrequencial',
    description: 'Cód: ME20658A',
    subcategory: 'Terapias',
    category: 'best_sellers',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Lipocavity-1.png',
    price: 5690.50,
    installments: 12,
    benefits: defaultBenefits
  },
  {
    id: 'mv-2',
    name: 'Pisom Medical San – BB Laser de 1550nm e 1927nm',
    description: 'Cód: ME20191A',
    subcategory: 'Terapias',
    category: 'best_sellers',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Ultramed-Hifu.png',
    price: 142405.00,
    installments: 12,
    benefits: defaultBenefits
  },
  {
    id: 'mv-3',
    name: 'Magni Medical San – Aparelho de Endermologia com Cromoterapia',
    description: 'Cód: ME21244A',
    subcategory: 'Terapias',
    category: 'best_sellers',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Omer-Smart.png',
    originalPrice: 150000.00,
    price: 79191.00,
    discount: 53,
    installments: 12,
    benefits: defaultBenefits
  },
  {
    id: 'mv-4',
    name: 'Cartucho para Aplicador Íntimo - Ultramed 9D',
    description: 'Cód: ME20692A71',
    subcategory: 'Terapias',
    category: 'best_sellers',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Aplicador-Criodermis.png',
    price: 5690.50,
    installments: 12,
    benefits: defaultBenefits
  },
  {
    id: 'mv-5',
    name: 'LiftEndo - Endolaser Subdérmico de 980nm',
    description: 'Endolaser',
    subcategory: 'Laserterapia',
    category: 'best_sellers',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/LiftEndo.png',
    price: 137655.00,
    installments: 12,
    benefits: defaultBenefits
  },
  {
    id: 'mv-6',
    name: 'Hakon Medical San - Equipamento de Laser 4D',
    description: 'Epilação 4D',
    subcategory: 'Laserterapia',
    category: 'best_sellers',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Hakon-1.png',
    originalPrice: 160000.00,
    price: 87990.00,
    discount: 48,
    installments: 12,
    benefits: defaultBenefits
  },

  // Estética (Antigo Últimos Vistos)
  {
    id: 'rc-1',
    name: 'Pisom Medical San – BB Laser de 1550nm e 1927nm',
    description: 'BB Laser',
    subcategory: 'Laserterapia',
    category: 'recent',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Pisom-1.png',
    originalPrice: 310000.00,
    price: 158310.01,
    discount: 54,
    installments: 12,
    benefits: defaultBenefits
  }
];