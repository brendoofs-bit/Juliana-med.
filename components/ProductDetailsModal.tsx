import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onRequestQuote?: (product: Product) => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  const handleWhatsAppRedirect = () => {
    const message = `Olá! Gostaria de receber um orçamento especial e mais informações sobre o equipamento *${product.name}* que vi no site.`;
    const url = `https://wa.me/555180985851?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Container Principal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]">
        
        {/* Seção Imagem: Fundo Branco, Maximizada */}
        <div className="w-full md:w-2/5 bg-white p-2 md:p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 relative shrink-0 h-48 md:h-auto overflow-hidden">
           {/* Tag Subcategoria Flutuante */}
           <span className="absolute top-4 left-4 bg-gray-50/90 backdrop-blur text-gray-800 text-[10px] font-bold px-2 py-1 rounded shadow-sm border border-gray-200 z-10">
             {product.subcategory}
           </span>
           <img 
             src={product.imageUrl} 
             alt={product.name} 
             className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
           />
        </div>

        {/* Seção Conteúdo */}
        <div className="w-full md:w-3/5 flex flex-col h-full overflow-hidden bg-white">
            {/* Header (Fixo) */}
            <div className="p-4 md:p-5 border-b border-gray-100 flex justify-between items-start bg-white shrink-0 z-10 relative">
              <div className="pr-4">
                <h3 className="text-base md:text-lg font-extrabold text-medical-900 leading-tight line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mt-1 font-medium">{product.description}</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors p-1 bg-gray-50 rounded-full shrink-0">
                <X size={20} />
              </button>
            </div>

            {/* Descrição (Scrollável) */}
            <div className="p-4 md:p-6 overflow-y-auto flex-1 custom-scrollbar text-sm text-gray-600 leading-relaxed bg-white">
              <div 
                dangerouslySetInnerHTML={{ __html: product.benefits || '<p>Descrição detalhada não disponível.</p>' }} 
                className="space-y-4"
              />
              
              {/* CTA ao final do scroll */}
              <div className="mt-8 mb-2 p-4 bg-medical-50 rounded-lg border border-medical-100 text-center">
                 <p className="text-medical-800 font-bold mb-2">Gostou deste equipamento?</p>
                 <button 
                   onClick={handleWhatsAppRedirect}
                   className="inline-flex items-center justify-center gap-2 bg-action-cyan hover:bg-cyan-400 text-medical-900 font-bold py-2 px-6 rounded-full text-xs uppercase tracking-wide transition-colors"
                 >
                    Solicitar Ficha Técnica
                 </button>
              </div>
            </div>

            {/* Footer / CTA (Fixo no fundo) */}
            <div className="p-4 md:p-5 border-t border-gray-100 bg-white shrink-0 shadow-[0_-4px_10px_rgba(0,0,0,0.03)] z-10">
               <button 
                 onClick={handleWhatsAppRedirect}
                 className="w-full bg-[#25D366] hover:bg-[#1ebc57] text-white font-extrabold py-3 md:py-3.5 px-4 rounded-xl uppercase tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-xs md:text-sm"
               >
                 <MessageCircle size={18} className="md:w-5 md:h-5" />
                 Solicitar Orçamento no WhatsApp
               </button>
               <p className="text-[10px] text-center text-gray-400 mt-2">
                 Fale diretamente com um consultor especialista.
               </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;