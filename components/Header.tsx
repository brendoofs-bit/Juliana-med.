import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full font-sans bg-white relative z-50 sticky top-0 shadow-sm transition-all duration-300">
      {/* Faixa de Urgência/Autoridade */}
      <div className="bg-medical-900 text-white text-[10px] md:text-xs py-2.5 px-4 text-center tracking-wide font-medium">
        <p>🚀 <span className="font-bold text-action-cyan">OFERTA B2B:</span> Condições exclusivas de parcelamento para CNPJ neste mês.</p>
      </div>

      {/* Main Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-7xl py-4 flex justify-between items-center">
            
            {/* Logo Profissional */}
            <div className="flex items-center gap-2 shrink-0">
               <div className="flex flex-col items-center leading-none select-none">
                  <span className="text-2xl md:text-3xl font-extrabold tracking-tighter text-medical-800">
                    MEDICAL<span className="font-light">SAN</span>
                  </span>
                  <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-gray-400 w-full text-center">
                    Technology
                  </span>
               </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a 
                href="#estetica" 
                className="text-gray-600 hover:text-medical-600 font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-0.5"
              >
                Estética
              </a>
              <a 
                href="#hof" 
                className="text-gray-600 hover:text-medical-600 font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-0.5"
              >
                Harmonização
              </a>
              <a 
                href="#diferenciais" 
                className="text-gray-600 hover:text-medical-600 font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-0.5"
              >
                Por que a Medical San?
              </a>
            </nav>

            {/* CTA Header Desktop */}
            <div className="hidden md:block">
               <a 
                 href="https://wa.me/555180985851" 
                 target="_blank"
                 className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2.5 px-5 rounded-full uppercase tracking-wide transition-all shadow-md hover:shadow-lg flex items-center gap-2"
               >
                 Falar com Especialista
               </a>
            </div>
            
             {/* Mobile Menu Icon (Simples) */}
             <div className="md:hidden text-gray-600">
                <a href="#estetica" className="text-xs font-bold uppercase text-medical-600 border border-medical-100 px-3 py-1.5 rounded-lg bg-medical-50">
                  Ver Produtos
                </a>
             </div>

        </div>
        
        {/* Mobile Navigation Bar */}
        <div className="md:hidden w-full flex justify-center border-t border-gray-100 bg-gray-50/50 py-2 gap-4 overflow-x-auto px-4">
           <a href="#estetica" className="text-[10px] font-bold text-gray-500 hover:text-medical-600 uppercase whitespace-nowrap">Estética Corporal</a>
           <a href="#hof" className="text-[10px] font-bold text-gray-500 hover:text-medical-600 uppercase whitespace-nowrap">HOF & Face</a>
           <a href="#roi" className="text-[10px] font-bold text-gray-500 hover:text-medical-600 uppercase whitespace-nowrap">Lucratividade</a>
        </div>
      </header>
    </div>
  );
};

export default Header;