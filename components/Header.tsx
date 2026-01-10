import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full font-sans bg-white relative z-50 sticky top-0 shadow-md">
      {/* Cookie/Privacy Bar */}
      <div className="bg-medical-900 text-white text-[10px] md:text-xs py-2 px-4 text-center">
        <p>Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência. Ao continuar navegando, você concorda com a nossa Política de Privacidade.</p>
      </div>

      {/* Main Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 max-w-7xl py-4">
          <div className="flex flex-col items-center justify-center gap-4">
            
            {/* Logo Centered */}
            <div className="flex items-center gap-2 shrink-0">
               <div className="flex flex-col items-center leading-none">
                  <span className="text-3xl md:text-4xl font-extrabold tracking-tighter text-medical-800">
                    MEDICAL<span className="font-light">SAN</span><span className="text-sm font-normal ml-1 text-gray-400">SHOP</span>
                  </span>
               </div>
            </div>

            {/* Desktop Navigation (Anchors) */}
            <nav className="hidden md:flex items-center gap-8 mt-2">
              <a 
                href="#estetica" 
                className="text-gray-600 hover:text-medical-600 font-semibold text-sm uppercase tracking-wider transition-colors border-b-2 border-transparent hover:border-medical-600 pb-1"
              >
                Estética
              </a>
              <a 
                href="#hof" 
                className="text-gray-600 hover:text-medical-600 font-semibold text-sm uppercase tracking-wider transition-colors border-b-2 border-transparent hover:border-medical-600 pb-1"
              >
                HOF
              </a>
            </nav>
            
             {/* Mobile Navigation */}
             <div className="md:hidden w-full flex justify-center mt-2 border-t border-gray-100 pt-2 gap-3 overflow-x-auto">
                <a href="#estetica" className="text-xs font-bold text-gray-600 hover:text-medical-600 uppercase whitespace-nowrap">Estética</a>
                <a href="#hof" className="text-xs font-bold text-gray-600 hover:text-medical-600 uppercase whitespace-nowrap">HOF</a>
             </div>

          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;