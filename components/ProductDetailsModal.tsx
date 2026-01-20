import React, { useEffect } from 'react';
import { X, MessageCircle, FileText, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onRequestQuote?: (product: Product) => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ isOpen, onClose, product }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleWhatsAppRedirect = () => {
    const message = `Olá! Tenho interesse no equipamento *${product.name}*. Gostaria de receber a ficha técnica e condições de pagamento para CNPJ.`;
    const url = `https://wa.me/555180985851?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-medical-900/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Container Principal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden animate-fade-in-up flex flex-col md:flex-row max-h-[90vh] md:h-[85vh]">
        
        {/* Seção Imagem (Esquerda) - BG White & Maximized Image */}
        <div className="w-full md:w-5/12 bg-white p-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 relative shrink-0 h-48 md:h-auto">
           
           {/* Badges Flutuantes */}
           <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              <span className="bg-white/90 backdrop-blur text-medical-800 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm border border-gray-200 uppercase tracking-wide">
                {product.subcategory}
              </span>
           </div>
           
           <img 
             src={product.imageUrl} 
             alt={product.name} 
             className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 drop-shadow-lg"
           />
        </div>

        {/* Seção Conteúdo (Direita) - Com Scroll Interno */}
        <div className="w-full md:w-7/12 flex flex-col h-full bg-white relative">
            
            {/* Header Fixo */}
            <div className="p-5 md:p-6 border-b border-gray-100 flex justify-between items-start bg-white shrink-0 z-10">
              <div className="pr-10">
                <h3 className="text-xl md:text-2xl font-black text-medical-900 leading-tight uppercase tracking-tight">{product.name}</h3>
                
                {product.tags && (
                   <div className="flex flex-wrap gap-2 mt-2">
                      {product.tags.map((tag, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 text-[10px] bg-green-50 text-green-700 px-2 py-1 rounded border border-green-100 font-bold uppercase">
                           <Check size={10} /> {tag}
                        </span>
                      ))}
                   </div>
                )}
              </div>
              <button 
                onClick={onClose} 
                className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full shrink-0 absolute top-4 right-4"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
            </div>

            {/* Conteúdo Scrollável (Descrição + CTA no final) */}
            <div 
              className="p-5 md:p-8 overflow-y-auto flex-1 custom-scrollbar text-sm text-gray-600 leading-relaxed bg-white overscroll-contain"
              style={{ overscrollBehavior: 'contain' }}
            >
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                  <h4 className="font-bold text-blue-900 text-sm mb-1">Por que este equipamento vende?</h4>
                  <p className="text-xs text-blue-800">Alta demanda de pacientes e custo operacional reduzido.</p>
              </div>

              {/* Inserção do HTML da descrição do produto */}
              <div 
                dangerouslySetInnerHTML={{ __html: product.benefits || '<p>Descrição técnica detalhada disponível no catálogo PDF.</p>' }} 
                className="space-y-4 prose prose-sm max-w-none prose-headings:text-medical-800 prose-headings:font-bold prose-headings:uppercase prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-medical-700"
              />
              
              {/* CTA movido para dentro do scroll */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3">
                 <button 
                   onClick={handleWhatsAppRedirect}
                   className="w-full bg-[#25D366] hover:bg-[#1ebc57] text-white font-extrabold py-4 px-6 rounded-xl uppercase tracking-wide transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm md:text-base group"
                 >
                   <MessageCircle size={22} className="group-hover:animate-bounce" />
                   Solicitar Cotação no WhatsApp
                 </button>
                 
                 <div className="flex justify-between items-center text-[10px] text-gray-400 font-medium px-2">
                    <span className="flex items-center gap-1"><FileText size={12}/> Catálogo Técnico PDF</span>
                    <span>⚡ Resposta média: 5 min</span>
                 </div>
              </div>
              
              <div className="h-4"></div> {/* Spacer bottom */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;