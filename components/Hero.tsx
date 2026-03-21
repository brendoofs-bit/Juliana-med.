import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import BannerModal from './BannerModal';
import { trackLead } from '../src/utils/analytics';

interface BannerData {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  desktopImageUrl: string;
  mobileImageUrl: string;
  promoText: string;
  bullets?: string[];
}

const Hero: React.FC = () => {
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState<BannerData | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBannerClick = (data: BannerData) => {
    trackLead();
    setSelectedBanner(data);
    setIsBannerModalOpen(true);
  };

  const closeBannerModal = () => {
    setIsBannerModalOpen(false);
    setSelectedBanner(null);
  };

  // COPYWRITING DE ALTA CONVERSÃO
  const omerData: BannerData = {
    title: 'NOVO OMER LASER 3D',
    subtitle: 'PORTÁTIL E EFICIENTE',
    promoText: 'Tecnologia de Ponta',
    description: 'A nova geração do laser 3D portátil, unindo potência e praticidade para sua clínica.',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108155/novo-omer-laser-3d-portatil_i624q5.png',
    desktopImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108155/novo-omer-laser-3d-portatil_i624q5.png',
    mobileImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108661/novo-omer-laser-3d-mobile_yrmevb.png',
    bullets: ['Portátil', 'Alta Potência', 'Resultados Rápidos']
  };

  const ultramedDataCarousel: BannerData = {
    title: 'ULTRAMED',
    subtitle: 'TECNOLOGIA AVANÇADA',
    promoText: 'Lifting Sem Cirurgia',
    description: 'Ultrassom micro e macrofocado de alta performance.',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108155/ultramed_xpmjhj.png',
    desktopImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108155/ultramed_xpmjhj.png',
    mobileImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108661/ultramed-mobile_ykrall.png',
    bullets: ['Lifting', 'Sem Cortes', 'Resultados Imediatos']
  };

  const hegonData: BannerData = {
    title: 'HEGON LASER CO2',
    subtitle: 'FRACIONADO PREMIUM',
    promoText: 'Rejuvenescimento Total',
    description: 'Laser de CO2 fracionado para rejuvenescimento e saúde íntima.',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108155/hegon-laser-co2-fracionado_abfluk.png',
    desktopImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108155/hegon-laser-co2-fracionado_abfluk.png',
    mobileImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108661/hegon-laser-co2-mobile_vqjgmt.png',
    bullets: ['Rejuvenescimento', 'Saúde Íntima', 'Alta Precisão']
  };

  const hakonData: BannerData = {
    title: 'HAKON LASER',
    subtitle: 'EPILAÇÃO PREMIUM 4D',
    promoText: 'Atenda Todos os Fototipos',
    description: 'A ferramenta definitiva para escalar sua agenda com epilação definitiva.',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108155/hakon-laser-para-epilacao-premium_omz2vq.png',
    desktopImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108155/hakon-laser-para-epilacao-premium_omz2vq.png',
    mobileImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108661/hakon-laser-epilcacao-premium-4d-mobile_ekn4kn.png',
    bullets: ['4 Comprimentos de Onda', 'Sem Dor', 'Sessões Rápidas']
  };

  const criolipoliseData: BannerData = {
    title: 'CRIOLIPÓLISE',
    subtitle: 'TECNOLOGIA AVANÇADA',
    promoText: 'Redução de Gordura',
    description: 'Tecnologia avançada para redução de gordura localizada.',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108155/tecnologia-avancada-em-criolpolise_ft9zv9.png',
    desktopImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108155/tecnologia-avancada-em-criolpolise_ft9zv9.png',
    mobileImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774108662/tecnologia-avancada-criolpolise-mobile_ayhwmt.png',
    bullets: ['Redução de Gordura', 'Não Invasivo', 'Resultados Seguros']
  };

  const mainSlides = [omerData, ultramedDataCarousel, hegonData, hakonData, criolipoliseData];

  // Dados para banners secundários
  const liftendoData: BannerData = {
    title: 'LIFTENDO',
    promoText: 'A Era do Endolaser',
    description: 'Resultados cirúrgicos no consultório.',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774109170/liftendo-desktop_up5n4l.png',
    desktopImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774109170/liftendo-desktop_up5n4l.png',
    mobileImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774118758/liftendo-mobile_s9ir45.png',
  };

  const ptolomeuData: BannerData = {
    title: 'PTOLOMEU',
    promoText: 'RF Microagulhada',
    description: 'Rejuvenescimento e tratamento de flacidez.',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774109170/ptolomeu-desktop_x1nw1q.png',
    desktopImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774109170/ptolomeu-desktop_x1nw1q.png',
    mobileImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774118758/ptolomeu-mobile_rpkbro.png',
  };

  const ultramedMptData: BannerData = {
    title: 'ULTRAMED MPT',
    promoText: 'Lifting Sem Cirurgia',
    description: 'Ultrassom micro e macrofocado.',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774109170/ultramed-mpt-desktop_r6vf1f.png',
    desktopImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774109170/ultramed-mpt-desktop_r6vf1f.png',
    mobileImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774118758/ultramed-mobile_xhp6kt.png',
  };

  const velaryanData: BannerData = {
    title: 'VELARYAN',
    promoText: 'Mãos Livres, Lucro Alto',
    description: 'Laser estacionário para emagrecimento.',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774109170/velaryan-desktop_nltbnp.png',
    desktopImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774109170/velaryan-desktop_nltbnp.png',
    mobileImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774118758/velaryan-mobile_dho64i.png',
  };

  // Carousel Logic
  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev === mainSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? mainSlides.length - 1 : prev - 1));
  };

  const goToSlide = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === mainSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [mainSlides.length]);

  return (
    <>
      <div className="w-full bg-white pb-8 border-b border-gray-100">
        <div className="container mx-auto px-4 pt-4 md:pt-6">
          
          {/* Banner Principal (Slider) */}
          <div 
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] mb-8 group cursor-pointer transition-transform duration-500 hover:scale-[1.005]" 
            onClick={() => handleBannerClick(mainSlides[currentSlide])}
          >
            {/* Imagem Desktop */}
            <img 
               key={`desktop-${currentSlide}`} 
               src={mainSlides[currentSlide].desktopImageUrl}
               className="hidden md:block absolute inset-0 w-full h-full object-cover z-10 animate-fade-in" 
               alt={mainSlides[currentSlide].title}
            />
            {/* Imagem Mobile */}
            <img 
               key={`mobile-${currentSlide}`} 
               src={mainSlides[currentSlide].mobileImageUrl}
               className="block md:hidden absolute inset-0 w-full h-full object-cover z-10 animate-fade-in" 
               alt={mainSlides[currentSlide].title}
            />

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-medical-900 rounded-full p-3 z-30 shadow-md backdrop-blur-md transition-all border border-white/20"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-medical-900 rounded-full p-3 z-30 shadow-md backdrop-blur-md transition-all border border-white/20"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-6 md:left-20 flex gap-2 z-30">
              {mainSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToSlide(e, index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-action-cyan w-8' : 'bg-white/30 w-4 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Grid de Banners Secundários (Vitrines Rápidas) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {/* Card 1 */}
             <div 
               className="relative rounded-xl overflow-hidden h-[160px] w-full md:h-40 bg-gray-100 flex flex-col justify-center cursor-pointer group shadow-lg"
               onClick={() => handleBannerClick(liftendoData)}
             >
                <img src={liftendoData.desktopImageUrl} className="hidden md:absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Liftendo Desktop"/>
                <img src={liftendoData.mobileImageUrl} className="block md:absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Liftendo Mobile"/>
             </div>

             {/* Card 2 */}
             <div 
               className="relative rounded-xl overflow-hidden h-[160px] w-full md:h-40 bg-gray-100 flex flex-col justify-center cursor-pointer group shadow-lg"
               onClick={() => handleBannerClick(ptolomeuData)}
             >
                <img src={ptolomeuData.desktopImageUrl} className="hidden md:absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Ptolomeu Desktop"/>
                <img src={ptolomeuData.mobileImageUrl} className="block md:absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Ptolomeu Mobile"/>
             </div>

             {/* Card 3 */}
             <div 
               className="relative rounded-xl overflow-hidden h-[160px] w-full md:h-40 bg-gray-100 flex flex-col justify-center cursor-pointer group shadow-lg"
               onClick={() => handleBannerClick(ultramedMptData)}
             >
                <img src={ultramedMptData.desktopImageUrl} className="hidden md:absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Ultramed MPT Desktop"/>
                <img src={ultramedMptData.mobileImageUrl} className="block md:absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Ultramed MPT Mobile"/>
             </div>

             {/* Card 4 */}
             <div 
               className="relative rounded-xl overflow-hidden h-[160px] w-full md:h-40 bg-gray-100 flex flex-col justify-center cursor-pointer group shadow-lg"
               onClick={() => handleBannerClick(velaryanData)}
             >
                <img src={velaryanData.desktopImageUrl} className="hidden md:absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Velaryan Desktop"/>
                <img src={velaryanData.mobileImageUrl} className="block md:absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Velaryan Mobile"/>
             </div>
          </div>

        </div>
      </div>

      <BannerModal 
        isOpen={isBannerModalOpen} 
        onClose={closeBannerModal} 
        data={selectedBanner}
      />
    </>
  );
};

export default Hero;