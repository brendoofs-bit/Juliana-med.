import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BannerModal from './BannerModal';

interface BannerData {
  title: string;
  description: string;
  imageUrl: string;
  promoText: string;
  gradient: string; // Add gradient property for variety
}

const Hero: React.FC = () => {
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState<BannerData | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBannerClick = (data: BannerData) => {
    setSelectedBanner(data);
    setIsBannerModalOpen(true);
  };

  const closeBannerModal = () => {
    setIsBannerModalOpen(false);
    setSelectedBanner(null);
  };

  // Data definitions
  const omerData: BannerData = {
    title: 'OMER SMART',
    promoText: 'Remoção de Tatuagem e Micropigmentação',
    description: 'O Omer Smart é a revolução em tratamentos a laser. Tecnologia Q-Switched Nd:YAG para remoção segura e eficaz de pigmentos. Garanta resultados visíveis desde as primeiras sessões e atraia mais clientes para sua clínica.',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Omer-Smart.png',
    gradient: 'from-[#1a0b40] via-[#2d1b69] to-[#000000]'
  };

  const hakonData: BannerData = {
    title: 'HAKON 4D',
    promoText: 'Epilação a Laser 4D',
    description: 'A tecnologia 4D do Hakon permite a aplicação em todos os fototipos de pele. O laser mais rápido e indolor do mercado, proporcionando alta lucratividade e satisfação do paciente.',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Hakon-1.png',
    gradient: 'from-[#40280b] via-[#694b1b] to-[#000000]'
  };

  // Main Carousel Slides
  const mainSlides = [omerData, hakonData];

  const ultramedData: BannerData = {
    title: 'ULTRAMED MPT',
    promoText: 'Ultrassom Micro e Macrofocado',
    description: 'O Ultramed MPT oferece lifting facial e corporal não invasivo. Alta precisão para tratamentos de flacidez e gordura localizada. Potencialize seus resultados com a tecnologia HIFU mais avançada do mercado.',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Ultramed-1.png',
    gradient: ''
  };

  const velaryanData: BannerData = {
    title: 'VELARYAN',
    promoText: 'Harmonização Corporal Avançada',
    description: 'Laser estacionário inovador para redução de medidas e contorno corporal. Tratamento hands-free que otimiza o tempo do profissional e oferece conforto total ao paciente.',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Velaryan-1.png',
    gradient: ''
  };

  const magniData: BannerData = {
    title: 'MAGNI',
    promoText: 'Endermologia + Cromoterapia',
    description: 'Combinação perfeita de vacuoterapia e terapia de luz. Ideal para tratamentos de celulite, drenagem linfática e remodelagem corporal. Versatilidade e eficiência em um único equipamento.',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Magni-1.png',
    gradient: ''
  };

  const liftendoData: BannerData = {
    title: 'LIFTENDO',
    promoText: 'Endolaser Subdérmico',
    description: 'A tecnologia minimamente invasiva para retração de pele e lipólise. O LiftEndo utiliza laser de diodo 980nm ou 1470nm para resultados surpreendentes em flacidez tissular.',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/LiftEndo.png',
    gradient: ''
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

  // Auto-play (Optional, but good for carousels)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === mainSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [mainSlides.length]);

  return (
    <>
      <div className="w-full bg-gray-50 pb-8">
        {/* Container Principal */}
        <div className="container mx-auto px-4 pt-6">
          
          {/* Banner Principal (Slider) */}
          <div 
            className="relative w-full rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[450px] mb-6 group cursor-pointer transition-all duration-500" 
            onClick={() => handleBannerClick(mainSlides[currentSlide])}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${mainSlides[currentSlide].gradient} z-0 transition-colors duration-700`}></div>
            
            {/* Imagem de Fundo */}
            <img 
               key={currentSlide} // Key forces re-render for animation
               src={mainSlides[currentSlide].imageUrl}
               className="absolute right-0 bottom-0 h-[100%] md:h-[110%] object-contain opacity-80 mix-blend-lighten md:mr-20 z-10 animate-fade-in" 
               alt={mainSlides[currentSlide].title}
            />

            {/* Texto */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-24 text-white">
              <h2 className="text-3xl md:text-7xl font-bold mb-2 uppercase tracking-tight animate-slide-up leading-tight">
                {mainSlides[currentSlide].title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h2>
              <p className="text-sm md:text-2xl font-light mb-8 max-w-[70%] md:max-w-md text-gray-200 animate-slide-up-delay">
                {mainSlides[currentSlide].promoText}
              </p>
              <button 
                className="w-fit bg-action-cyan text-medical-900 font-bold py-3 px-8 md:px-10 rounded-full hover:bg-white transition-all text-xs md:text-sm tracking-wider uppercase z-30 shadow-lg"
              >
                CONFIRA
              </button>
            </div>

            {/* Desktop Navigation Arrows (Hidden on Mobile) */}
            <button 
              onClick={prevSlide}
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-medical-900 rounded-full p-2 z-30 shadow-md backdrop-blur-sm transition-all"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={nextSlide}
              className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-medical-900 rounded-full p-2 z-30 shadow-md backdrop-blur-sm transition-all"
            >
              <ChevronRight size={32} />
            </button>

            {/* Dots Navigation (Visible on All, Styled for bottom) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {mainSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToSlide(e, index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-action-cyan w-6 md:w-8' : 'bg-white/50 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Grid de Banners Secundários 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
             {/* Banner 1: Ultramed */}
             <div 
               className="relative rounded-xl overflow-hidden h-[200px] bg-gradient-to-r from-medical-800 to-medical-600 flex items-center justify-between p-8 shadow-md cursor-pointer group hover:shadow-lg transition-all"
               onClick={() => handleBannerClick(ultramedData)}
             >
                <div className="z-10 text-white max-w-[50%]">
                  <h3 className="text-3xl font-extrabold uppercase leading-none mb-2">Ultramed<br/>MPT</h3>
                  <p className="text-xs mb-4 text-blue-100">Ultrassom micro e macrofocado com alta performance</p>
                  <button className="bg-action-cyan text-medical-900 text-xs font-bold px-6 py-2 rounded-full uppercase group-hover:bg-white transition-colors">Confira</button>
                </div>
                <img src="https://medicalsan.com.br/wp-content/uploads/2022/07/Ultramed-1.png" className="absolute right-4 h-[120%] object-contain opacity-90 group-hover:scale-110 transition-transform" alt="Ultramed"/>
             </div>

             {/* Banner 2: Velaryan */}
             <div 
               className="relative rounded-xl overflow-hidden h-[200px] bg-gradient-to-r from-medical-900 to-black flex items-center justify-between p-8 shadow-md cursor-pointer group hover:shadow-lg transition-all"
               onClick={() => handleBannerClick(velaryanData)}
             >
                <div className="z-10 text-white max-w-[50%]">
                  <h3 className="text-3xl font-extrabold uppercase leading-none mb-2">Velaryan</h3>
                  <p className="text-xs mb-4 text-gray-300">Harmonização corporal com laser estacionário</p>
                  <button className="bg-action-cyan text-medical-900 text-xs font-bold px-6 py-2 rounded-full uppercase group-hover:bg-white transition-colors">Compre Agora</button>
                </div>
                <img src="https://medicalsan.com.br/wp-content/uploads/2022/07/Velaryan-1.png" className="absolute right-4 h-[120%] object-contain opacity-90 group-hover:scale-110 transition-transform" alt="Velaryan"/>
             </div>
          </div>

          {/* Grid de Banners Secundários 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
             {/* Banner 3: Magni */}
             <div 
               className="relative rounded-xl overflow-hidden h-[200px] bg-[#0A1A3F] flex items-center justify-between p-8 shadow-md cursor-pointer group hover:shadow-lg transition-all"
               onClick={() => handleBannerClick(magniData)}
             >
                <div className="z-10 text-white max-w-[50%]">
                  <h3 className="text-3xl font-extrabold uppercase leading-none mb-2">Magni</h3>
                  <p className="text-xs mb-4 text-blue-100">Endermologia + cromoterapia para tratamentos completos</p>
                  <button className="bg-action-cyan text-medical-900 text-xs font-bold px-6 py-2 rounded-full uppercase group-hover:bg-white transition-colors">Garanta Já</button>
                </div>
                <img src="https://medicalsan.com.br/wp-content/uploads/2022/07/Magni-1.png" className="absolute right-4 h-[130%] object-contain opacity-90 group-hover:scale-110 transition-transform" alt="Magni"/>
             </div>

             {/* Banner 4: LiftEndo */}
             <div 
               className="relative rounded-xl overflow-hidden h-[200px] bg-[#1E3A5F] flex items-center justify-between p-8 shadow-md cursor-pointer group hover:shadow-lg transition-all"
               onClick={() => handleBannerClick(liftendoData)}
             >
                <div className="z-10 text-white max-w-[50%]">
                  <h3 className="text-3xl font-extrabold uppercase leading-none mb-2">LiftEndo</h3>
                  <p className="text-xs mb-4 text-gray-300">Endolaser subdérmico para flacidez e remodelação</p>
                  <button className="bg-action-cyan text-medical-900 text-xs font-bold px-6 py-2 rounded-full uppercase group-hover:bg-white transition-colors">Eu Quero</button>
                </div>
                <img src="https://medicalsan.com.br/wp-content/uploads/2022/07/LiftEndo.png" className="absolute right-4 h-[110%] object-contain opacity-90 group-hover:scale-110 transition-transform" alt="LiftEndo"/>
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