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
import { ShieldCheck, TrendingUp, Users, CheckCircle, Zap, DollarSign } from 'lucide-react';

const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailsModalOpen(true);
  };

  const handleRequestQuoteFromDetails = (product: Product) => {
    setIsDetailsModalOpen(false);
  };

  const handleCloseModals = () => {
    setIsQuoteModalOpen(false);
    setIsDetailsModalOpen(false);
    setSelectedProduct(null);
  };

  // Filtragem de produtos
  const esteticaProducts = products.filter(p => p.category === 'estetica');
  const hofProducts = products.filter(p => p.category === 'hof');

  const Section = ({ id, title, subtitle, items, bgColor = "bg-white" }: { id: string, title: string, subtitle?: string, items: Product[], bgColor?: string }) => (
    <section id={id} className={`py-16 md:py-20 scroll-mt-24 ${bgColor}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-10 border-l-4 border-medical-500 pl-4">
           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">{title}</h2>
           {subtitle && <p className="text-gray-500 mt-2 text-lg">{subtitle}</p>}
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

        {/* NOVA SEÇÃO: Autoridade (Stats) */}
        <section className="bg-white py-10 border-b border-gray-100">
           <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                 <div>
                    <span className="block text-3xl md:text-4xl font-black text-medical-800">+5.000</span>
                    <span className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">Clínicas Equipadas</span>
                 </div>
                 <div>
                    <span className="block text-3xl md:text-4xl font-black text-medical-800">25</span>
                    <span className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">Anos de Inovação</span>
                 </div>
                 <div>
                    <span className="block text-3xl md:text-4xl font-black text-medical-800">Anvisa</span>
                    <span className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">Certificação Total</span>
                 </div>
                 <div>
                    <span className="block text-3xl md:text-4xl font-black text-medical-800">24h</span>
                    <span className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">Suporte Técnico</span>
                 </div>
              </div>
           </div>
        </section>

        <Section 
          id="estetica" 
          title="Alta Performance em Estética" 
          subtitle="Equipamentos consagrados para tratamentos corporais e epilação."
          items={esteticaProducts} 
        />

        {/* NOVA SEÇÃO: Lucratividade e ROI (Foco B2B) */}
        <section id="roi" className="bg-medical-900 py-16 text-white relative overflow-hidden">
           {/* Background Pattern */}
           <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
           
           <div className="container mx-auto px-4 max-w-7xl relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-12">
                 <div className="md:w-1/2">
                    <span className="text-action-cyan font-bold uppercase tracking-wider text-sm mb-2 block">Crescimento Exponencial</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Transforme sua Clínica em uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-action-cyan to-blue-400">Máquina de Vendas</span></h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                       Não vendemos apenas equipamentos. Entregamos um modelo de negócio validado. Nossas tecnologias são desenvolvidas pensando no <strong>Payback Rápido</strong> e na <strong>Recorrência</strong> dos seus pacientes.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                       <li className="flex items-start gap-3">
                          <div className="bg-green-500/20 p-1 rounded-full text-green-400 mt-1"><CheckCircle size={18} /></div>
                          <div>
                             <strong className="block text-white">Ticket Médio Elevado</strong>
                             <span className="text-sm text-gray-400">Tratamentos valorizados pelo mercado (HIFU, Laser 4D).</span>
                          </div>
                       </li>
                       <li className="flex items-start gap-3">
                          <div className="bg-green-500/20 p-1 rounded-full text-green-400 mt-1"><CheckCircle size={18} /></div>
                          <div>
                             <strong className="block text-white">Resultados na 1ª Sessão</strong>
                             <span className="text-sm text-gray-400">Fidelização imediata do paciente pela eficácia.</span>
                          </div>
                       </li>
                    </ul>

                    <a href="https://wa.me/555180985851" target="_blank" className="inline-flex items-center gap-2 bg-action-cyan text-medical-900 font-bold py-4 px-8 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20">
                       <DollarSign size={20} />
                       Simular Retorno de Investimento
                    </a>
                 </div>
                 <div className="md:w-1/2 relative">
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
                       <h3 className="text-xl font-bold mb-6 text-center">O que nossos parceiros dizem:</h3>
                       <div className="space-y-6">
                          <div className="bg-white/5 p-4 rounded-lg">
                             <p className="italic text-gray-300 text-sm mb-3">"O Hakon mudou o patamar da minha clínica. Paguei o investimento em 4 meses apenas com a agenda de epilação."</p>
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                                <div>
                                   <p className="text-sm font-bold">Dra. Amanda S.</p>
                                   <p className="text-xs text-gray-500">Dermatologista - SP</p>
                                </div>
                             </div>
                          </div>
                          <div className="bg-white/5 p-4 rounded-lg">
                             <p className="italic text-gray-300 text-sm mb-3">"O suporte da Medical San é diferenciado. A entrega técnica foi impecável e minha equipe saiu treinada para vender."</p>
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                                <div>
                                   <p className="text-sm font-bold">Clínica Bellavie</p>
                                   <p className="text-xs text-gray-500">Rede de Franquias - PR</p>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <Section 
           id="hof" 
           title="Harmonização & Face" 
           subtitle="Tecnologias avançadas para HOF e rejuvenescimento."
           items={hofProducts} 
           bgColor="bg-gray-50" 
        />
        
        {/* NOVA SEÇÃO: Diferenciais (Why Us) */}
        <section id="diferenciais" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <span className="text-medical-600 font-bold uppercase tracking-wider text-sm mb-2 block">Ecossistema Completo</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-medical-900 mb-12">Por que as maiores clínicas escolhem a Medical San?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-16 h-16 bg-blue-50 text-medical-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-medical-600 group-hover:text-white transition-colors">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tecnologia Disruptiva</h3>
                <p className="text-gray-500 leading-relaxed">Pioneirismo em lasers 4D e ultrassom de alta performance. Equipamentos que entregam resultados superiores.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Facilidade Comercial</h3>
                <p className="text-gray-500 leading-relaxed">Financiamento facilitado, carência para começar a pagar e planos especiais para CNPJ.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Treinamento e Suporte</h3>
                <p className="text-gray-500 leading-relaxed">Entrega técnica completa e acesso à Medical San Academy para treinar sua equipe.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final: Foco na Urgência */}
        <section className="bg-gradient-to-r from-medical-900 to-medical-800 py-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Não deixe para depois o crescimento da sua clínica</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-light">
              Receba agora a tabela de preços exclusiva para profissionais e agende uma demonstração online.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
               <a 
                 href="https://wa.me/555180985851" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold py-5 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm md:text-base animate-pulse"
               >
                 <ShieldCheck size={24} />
                 Quero Receber Proposta
               </a>
               <button 
                 onClick={() => document.getElementById('estetica')?.scrollIntoView({ behavior: 'smooth' })}
                 className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold py-5 px-10 rounded-full transition-all uppercase tracking-widest text-sm md:text-base"
               >
                 Ver Equipamentos
               </button>
            </div>
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
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={handleCloseModals} 
        product={selectedProduct} 
      />
    </div>
  );
};

export default App;