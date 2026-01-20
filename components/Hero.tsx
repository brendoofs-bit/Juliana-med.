import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import BannerModal from './BannerModal';

interface BannerData {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  promoText: string;
  gradient: string;
  bullets?: string[];
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

  // COPYWRITING DE ALTA CONVERSÃO
  const omerData: BannerData = {
    title: 'LUCRATIVIDADE IMEDIATA',
    subtitle: 'OMER SMART: O FIM DAS TATUAGENS INDESEJADAS',
    promoText: 'Tecnologia Q-Switched Acessível',
    description: 'Entre no mercado que mais cresce na estética. O Omer Smart oferece a tecnologia Nd:YAG Q-Switched para remoção de tatuagens e micropigmentação com o melhor custo-benefício do Brasil. Payback estimado em menos de 6 meses.',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Omer-Smart.png',
    gradient: 'from-[#1a0b40] via-[#2d1b69] to-[#050505]',
    bullets: ['Remoção de Tatuagem', 'Black Peel (Hollywood)', 'Retorno Financeiro Rápido']
  };

  const hakonData: BannerData = {
    title: 'AUMENTE SEU FATURAMENTO',
    subtitle: 'HAKON 4D: A EPILAÇÃO DEFINITIVA',
    promoText: 'Atenda Todos os Fototipos',
    description: 'Não perca mais pacientes por conta do tom de pele. O Hakon 4D combina 4 comprimentos de onda, permitindo tratar desde peles claras até negras com segurança total e sem dor. A ferramenta definitiva para escalar sua agenda.',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Hakon-1.png',
    gradient: 'from-[#3d2306] via-[#694b1b] to-[#1a1a1a]',
    bullets: ['4 Comprimentos de Onda', 'Sem Dor (Ponteira Ice)', 'Sessões 2x Mais Rápidas']
  };

  const mainSlides = [omerData, hakonData];

  // Dados para banners secundários
  const ultramedData: BannerData = {
    title: 'ULTRAMED MPT',
    promoText: 'Lifting Sem Cirurgia',
    description: 'Ultrassom Micro e Macrofocado.',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Ultramed-1.png',
    gradient: ''
  };

  const velaryanData: BannerData = {
    title: 'VELARYAN',
    promoText: 'Mãos Livres, Lucro Alto',
    description: 'Laser estacionário para emagrecimento.',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Velaryan-1.png',
    gradient: ''
  };

  const magniData: BannerData = {
    title: 'MAGNI',
    promoText: 'Corporal Completo',
    description: 'Tecnologia híbrida.',
    imageUrl: 'https://medicalsan.com.br/wp-content/uploads/2022/07/Magni-1.png',
    gradient: ''
  };

  const liftendoData: BannerData = {
    title: 'LIFTENDO',
    promoText: 'A Era do Endolaser',
    description: 'Resultados cirúrgicos no consultório.',
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
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${mainSlides[currentSlide].gradient} z-0`}></div>
            
            {/* Efeito de brilho de fundo */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 skew-x-12 blur-3xl rounded-full mix-blend-overlay"></div>

            {/* Imagem de Fundo */}
            <img 
               key={currentSlide} 
               src={mainSlides[currentSlide].imageUrl}
               className="absolute right-0 bottom-0 h-[85%] md:h-[105%] w-auto object-contain md:mr-10 z-10 animate-fade-in drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
               alt={mainSlides[currentSlide].title}
            />

            {/* Texto Persuasivo */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-20 text-white max-w-3xl">
              <span className="inline-block bg-action-cyan text-medical-900 text-[10px] md:text-xs font-bold px-3 py-1 rounded mb-4 w-fit animate-slide-up">
                 {mainSlides[currentSlide].promoText.toUpperCase()}
              </span>
              
              <h2 className="text-3xl md:text-6xl font-extrabold mb-2 uppercase tracking-tight leading-[0.9] animate-slide-up">
                {mainSlides[currentSlide].title}
              </h2>
              
              <h3 className="text-lg md:text-2xl font-light text-gray-200 mb-6 animate-slide-up-delay">
                 {mainSlides[currentSlide].subtitle}
              </h3>

              {/* Bullets de Benefícios (Desktop) */}
              {mainSlides[currentSlide].bullets && (
                <div className="hidden md:flex flex-col gap-2 mb-8 animate-slide-up-delay">
                  {mainSlides[currentSlide].bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-100">
                      <CheckCircle2 size={16} className="text-action-cyan" />
                      {bullet}
                    </div>
                  ))}
                </div>
              )}

              <button 
                className="w-full md:w-fit bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold py-4 px-8 rounded-xl transition-all text-sm md:text-base tracking-wider uppercase z-30 shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                Solicitar Orçamento VIP
              </button>
              <p className="mt-3 text-[10px] text-gray-400 md:text-gray-300 opacity-80 animate-pulse">
                *Últimas unidades com IPI reduzido.
              </p>
            </div>

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
               className="relative rounded-xl overflow-hidden h-40 bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex flex-col justify-center cursor-pointer group shadow-lg border-b-4 border-action-cyan"
               onClick={() => handleBannerClick(ultramedData)}
             >
                <div className="z-10 relative">
                  <span className="text-[10px] text-action-cyan font-bold uppercase">Lifting HIFU</span>
                  <h3 className="text-xl font-black text-white leading-none mt-1 mb-2 group-hover:text-action-cyan transition-colors">ULTRAMED<br/>MPT</h3>
                  <p className="text-[10px] text-gray-400">Clique para ver detalhes</p>
                </div>
                <img src="https://medicalsan.com.br/wp-content/uploads/2022/07/Ultramed-1.png" className="absolute right-[-20px] bottom-[-20px] h-32 object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" alt="Ultramed"/>
             </div>

             {/* Card 2 */}
             <div 
               className="relative rounded-xl overflow-hidden h-40 bg-gradient-to-br from-medical-900 to-medical-800 p-6 flex flex-col justify-center cursor-pointer group shadow-lg border-b-4 border-medical-500"
               onClick={() => handleBannerClick(velaryanData)}
             >
                <div className="z-10 relative">
                  <span className="text-[10px] text-medical-300 font-bold uppercase">Emagrecimento</span>
                  <h3 className="text-xl font-black text-white leading-none mt-1 mb-2 group-hover:text-medical-300 transition-colors">VELARYAN<br/>LASER</h3>
                  <p className="text-[10px] text-gray-400">Clique para ver detalhes</p>
                </div>
                <img src="https://medicalsan.com.br/wp-content/uploads/2022/07/Velaryan-1.png" className="absolute right-[-20px] bottom-[-20px] h-32 object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" alt="Velaryan"/>
             </div>

             {/* Card 3 */}
             <div 
               className="relative rounded-xl overflow-hidden h-40 bg-gradient-to-br from-gray-800 to-gray-700 p-6 flex flex-col justify-center cursor-pointer group shadow-lg border-b-4 border-purple-500"
               onClick={() => handleBannerClick(magniData)}
             >
                <div className="z-10 relative">
                  <span className="text-[10px] text-purple-300 font-bold uppercase">Corporal</span>
                  <h3 className="text-xl font-black text-white leading-none mt-1 mb-2 group-hover:text-purple-300 transition-colors">MAGNI<br/>HÍBRIDO</h3>
                  <p className="text-[10px] text-gray-400">Clique para ver detalhes</p>
                </div>
                <img src="https://medicalsan.com.br/wp-content/uploads/2022/07/Magni-1.png" className="absolute right-[-20px] bottom-[-20px] h-32 object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" alt="Magni"/>
             </div>

             {/* Card 4 */}
             <div 
               className="relative rounded-xl overflow-hidden h-40 bg-gradient-to-br from-[#1E3A5F] to-[#0f1d30] p-6 flex flex-col justify-center cursor-pointer group shadow-lg border-b-4 border-orange-500"
               onClick={() => handleBannerClick(liftendoData)}
             >
                <div className="z-10 relative">
                  <span className="text-[10px] text-orange-300 font-bold uppercase">Endolaser</span>
                  <h3 className="text-xl font-black text-white leading-none mt-1 mb-2 group-hover:text-orange-300 transition-colors">LIFTENDO<br/>SUBDÉRMICO</h3>
                  <p className="text-[10px] text-gray-400">Clique para ver detalhes</p>
                </div>
                <img src="https://medicalsan.com.br/wp-content/uploads/2022/07/LiftEndo.png" className="absolute right-[-20px] bottom-[-20px] h-32 object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" alt="LiftEndo"/>
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