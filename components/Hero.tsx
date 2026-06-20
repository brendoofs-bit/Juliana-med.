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
    let url = '';
    
    switch (data.title) {
      // Banner carrossel
      case 'NOVO OMER LASER 3D':
        url = '/omer-smart-3d/index.html';
        break;
      case 'ULTRAMED':
        url = '/ultramed-pro/index.html';
        break;
      case 'HEGON LASER CO2':
        url = '/hegon/index.html';
        break;
      case 'HAKON LASER':
        url = '/hakon/index.html';
        break;
      case 'CRIOLIPÓLISE':
        url = '/criodemis-smart-medical-san/index.html';
        break;
        
      // Mini banners
      case 'LIFTENDO':
        url = '/liftendo-endolaser-subdermico-medical-san/index.html';
        break;
      case 'PTOLOMEU':
        url = '/ptolomeu-radiofrequencia-fracionada-medical-san/index.html';
        break;
      case 'ULTRAMED MPT':
        url = '/ultramed-mpt-medical-san/index.html';
        break;
      case 'VELARYAN':
        url = '/velaryan-medical-san/index.html';
        break;
        
      default:
        trackLead();
        setSelectedBanner(data);
        setIsBannerModalOpen(true);
        return;
    }
    
    if (url) {
      window.location.href = url;
    }
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
    imageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780958964/banner-novo-omer-laser-3d-portatil-remocao-tatuagem-micropigmentacao_xwcpm3.webp',
    desktopImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780958964/banner-novo-omer-laser-3d-portatil-remocao-tatuagem-micropigmentacao_xwcpm3.webp',
    mobileImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780958964/banner-promocional-novo-omer-laser-3d-portatil-remocao-tatuagem-micro-pigmentacao_pmobcj.webp',
    bullets: ['Portátil', 'Alta Potência', 'Resultados Rápidos']
  };

  const ultramedDataCarousel: BannerData = {
    title: 'ULTRAMED',
    subtitle: 'TECNOLOGIA AVANÇADA',
    promoText: 'Lifting Sem Cirurgia',
    description: 'Ultrassom micro e macrofocado de alta performance.',
    imageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780959471/banner-lancamento-medical-san-ultrassom-lifting-firmeza-redefinicao-facial-corporal_ag8nez.webp',
    desktopImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780959471/banner-lancamento-medical-san-ultrassom-lifting-firmeza-redefinicao-facial-corporal_ag8nez.webp',
    mobileImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780959471/anuncio-lancamento-ultramed-lifting-firmeza-rejuvenescimento-facial-corporal_wwtbqu.webp',
    bullets: ['Lifting', 'Sem Cortes', 'Resultados Imediatos']
  };

  const hegonData: BannerData = {
    title: 'HEGON LASER CO2',
    subtitle: 'FRACIONADO PREMIUM',
    promoText: 'Rejuvenescimento Total',
    description: 'Laser de CO2 fracionado para rejuvenescimento e saúde íntima.',
    imageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780959718/anuncio-rejuvenescimento-laser-co2-fracionado-hegon-beneficios_b4imjr.webp',
    desktopImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780959718/anuncio-rejuvenescimento-laser-co2-fracionado-hegon-beneficios_b4imjr.webp',
    mobileImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780959718/anuncio-laser-fracionado-rejuvenescimento-renovacao-celular-reducao-rugas-tratamento-estrias-cicatri_xbdhjl.webp',
    bullets: ['Rejuvenescimento', 'Saúde Íntima', 'Alta Precisão']
  };

  const hakonData: BannerData = {
    title: 'HAKON LASER',
    subtitle: 'EPILAÇÃO PREMIUM 4D',
    promoText: 'Atenda Todos os Fototipos',
    description: 'A ferramenta definitiva para escalar sua agenda com epilação definitiva.',
    imageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780959868/banner-haakon-laser-depilacao-premium-4d-equipamento-e-portatil_hbeuq4.webp',
    desktopImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780959868/banner-haakon-laser-depilacao-premium-4d-equipamento-e-portatil_hbeuq4.webp',
    mobileImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780959868/anuncio-laser-hakon-epilacao-premium-4d_oa8vkh.webp',
    bullets: ['4 Comprimentos de Onda', 'Sem Dor', 'Sessões Rápidas']
  };

  const criolipoliseData: BannerData = {
    title: 'CRIOLIPÓLISE',
    subtitle: 'TECNOLOGIA AVANÇADA',
    promoText: 'Redução de Gordura',
    description: 'Tecnologia avançada para redução de gordura localizada.',
    imageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780960038/banner-tecnologia-criolipolise-cryodermis-20-aparelho-silhueta-corpo_q4wbma.webp',
    desktopImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780960038/banner-tecnologia-criolipolise-cryodermis-20-aparelho-silhueta-corpo_q4wbma.webp',
    mobileImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780960038/tecnologia-avancada-criolipolise-reducao-de-gordura-localizada_o433tm.webp',
    bullets: ['Redução de Gordura', 'Não Invasivo', 'Resultados Seguros']
  };

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const velaryanData: BannerData = {
    title: 'VELARYAN',
    promoText: 'Mãos Livres, Lucro Alto',
    description: 'Laser estacionário para emagrecimento.',
    imageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774109170/velaryan-desktop_nltbnp.png',
    desktopImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774109170/velaryan-desktop_nltbnp.png',
    mobileImageUrl: 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1774118758/velaryan-mobile_dho64i.png',
  };

  const desktopSlides = [omerData, ultramedDataCarousel, hegonData, hakonData, criolipoliseData];
  const mobileSlides = [omerData, ultramedDataCarousel, hegonData, hakonData, criolipoliseData];
  const mainSlides = isDesktop ? desktopSlides : mobileSlides;

  // Dados para banners secundários
  const liftendoData: BannerData = {
    title: 'LIFTENDO',
    promoText: 'A Era do Endolaser',
    description: 'Resultados cirúrgicos no consultório.',
    imageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780960514/anuncio-endoideal-dispositivo-teste-endodontico-tela-chamada-confira_mxxozz.webp',
    desktopImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780960514/anuncio-endoideal-dispositivo-teste-endodontico-tela-chamada-confira_mxxozz.webp',
    mobileImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780960514/endolaser-lift-promocao-dispositivo-laser-endolift_nxj2ts.webp',
  };

  const ptolomeuData: BannerData = {
    title: 'PTOLOMEU',
    promoText: 'RF Microagulhada',
    description: 'Rejuvenescimento e tratamento de flacidez.',
    imageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780960641/anuncio-microagulhamento-robotico-pototomu-equipamento-acne-rejuvenescimento_gwgzjm.webp',
    desktopImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780960641/anuncio-microagulhamento-robotico-pototomu-equipamento-acne-rejuvenescimento_gwgzjm.webp',
    mobileImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780960642/anuncio-microagulhamento-robotico-ptolomeu-radiofrequencia_ffj7hp.webp',
  };

  const ultramedMptData: BannerData = {
    title: 'ULTRAMED MPT',
    promoText: 'Lifting Sem Cirurgia',
    description: 'Ultrassom micro e macrofocado.',
    imageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780960842/anuncio-equipamento-lifting-ultramode-ultraformed-mpt-tecnologia-mpt_bmvxbj.webp',
    desktopImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780960842/anuncio-equipamento-lifting-ultramode-ultraformed-mpt-tecnologia-mpt_bmvxbj.webp',
    mobileImageUrl: 'https://res.cloudinary.com/dy0ialgio/image/upload/v1780960842/descricao-ultramed-mpt-ultrassom-hifu-microfocalizacao-macro-mip_dsqtvi.webp',
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
    if (currentSlide >= mainSlides.length) {
      setCurrentSlide(0);
    }
  }, [mainSlides.length, currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= mainSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [mainSlides.length]);

  const safeSlide = currentSlide >= mainSlides.length ? 0 : currentSlide;

  return (
    <>
      <div className="w-full bg-white pb-8 border-b border-gray-100">
        <div className="container mx-auto px-4 pt-4 md:pt-6">
          
          {/* Banner Principal (Slider) */}
          <div 
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] mb-8 group cursor-pointer transition-transform duration-500 hover:scale-[1.005]" 
            onClick={() => handleBannerClick(mainSlides[safeSlide])}
          >
            {/* Imagem Desktop */}
            <img 
               key={`desktop-${safeSlide}`} 
               src={mainSlides[safeSlide].desktopImageUrl}
               className="hidden md:block absolute inset-0 w-full h-full object-cover z-10 animate-fade-in" 
               alt={mainSlides[safeSlide].title}
            />
            {/* Imagem Mobile */}
            <img 
               key={`mobile-${safeSlide}`} 
               src={mainSlides[safeSlide].mobileImageUrl}
               className="block md:hidden absolute inset-0 w-full h-full object-cover z-10 animate-fade-in" 
               alt={mainSlides[safeSlide].title}
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
                    safeSlide === index ? 'bg-action-cyan w-8' : 'bg-white/30 w-4 hover:bg-white'
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