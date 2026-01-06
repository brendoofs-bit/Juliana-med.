import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import QuoteModal from './components/QuoteModal';
import ProductDetailsModal from './components/ProductDetailsModal';
import ProductCarousel from './components/ProductCarousel';
import { products } from './data/products';
import { Product } from './types';
import { ShieldCheck, TrendingUp, Award, Clock } from 'lucide-react';

const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailsModalOpen(true);
  };

  const handleRequestQuoteFromDetails = (product: Product) => {
    // This is now handled inside the modal via WhatsApp redirect, keeping this for interface compatibility
    setIsDetailsModalOpen(false);
  };

  const handleCloseModals = () => {
    setIsQuoteModalOpen(false);
    setIsDetailsModalOpen(false);
    setSelectedProduct(null);
  };

  // Mapping old categories to new section logic based on request
  // Mais procurados -> Fisioterapia
  const fisioterapiaProducts = products.filter(p => p.category === 'most_wanted');
  // Mais vendidos -> Eletroterapia
  const eletroterapiaProducts = products.filter(p => p.category === 'best_sellers');
  // Últimos vistos -> Estética
  const esteticaProducts = products.filter(p => p.category === 'recent');

  const Section = ({ id, title, items, bgColor = "bg-white" }: { id: string, title: string, items: Product[], bgColor?: string }) => (
    <section id={id} className={`py-12 md:py-16 scroll-mt-24 ${bgColor}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
           <div className="w-1 h-8 bg-medical-500 rounded-full"></div>
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
        </div>
        <ProductCarousel items={items} onOpenModal={handleCardClick} />
      </div>
    </section>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        {/* Persuasion Section (High Conversion Copy) */}
        <section className="bg-gradient-to-b from-medical-50 to-white py-12 border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-medical-900 mb-4">Por que escolher a Medical San?</h2>
              <p className="text-gray-600">Tecnologia de ponta e suporte especializado para alavancar os resultados da sua clínica.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-medical-600 rounded-full flex items-center justify-center mb-4">
                  <Award size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Qualidade Comprovada</h3>
                <p className="text-xs text-gray-500">Equipamentos certificados pela ANVISA com alta durabilidade.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Retorno Rápido</h3>
                <p className="text-xs text-gray-500">Alta rentabilidade por sessão com tratamentos eficazes.</p>
              </div>
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Garantia Estendida</h3>
                <p className="text-xs text-gray-500">Suporte técnico especializado e garantia total de fábrica.</p>
              </div>
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Atendimento Ágil</h3>
                <p className="text-xs text-gray-500">Consultores prontos para tirar suas dúvidas via WhatsApp.</p>
              </div>
            </div>
          </div>
        </section>

        <Section id="fisioterapia" title="Fisioterapia" items={fisioterapiaProducts} />
        <Section id="eletroterapia" title="Eletroterapia" items={eletroterapiaProducts} bgColor="bg-[#F8F9FA]" />
        <Section id="estetica" title="Estética" items={esteticaProducts} />
        
        {/* Call to Action Final */}
        <section className="bg-medical-900 py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua clínica?</h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">Fale agora com nossos especialistas e descubra as condições exclusivas de parcelamento e entrega para sua região.</p>
            <a 
              href="https://wa.me/555180985851" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Falar com Consultor Agora
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      
      <ProductDetailsModal 
        isOpen={isDetailsModalOpen} 
        onClose={handleCloseModals} 
        product={selectedProduct} 
        onRequestQuote={handleRequestQuoteFromDetails}
      />
      
      {/* QuoteModal kept in codebase but not actively triggered via details anymore, strictly Whatsapp focus */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={handleCloseModals} 
        product={selectedProduct} 
      />
    </div>
  );
};

export default App;