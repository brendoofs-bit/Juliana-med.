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
      
      {/* Container Principal: Define altura máxima e flex column para estruturar */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]">
        
        {/* Seção Imagem: Altura fixa no mobile, auto no desktop */}
        <div className="w-full md:w-2/5 bg-gray-50 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 relative shrink-0 h-48 md:h-auto">
           {/* Tag Subcategoria */}
           <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-medical-800 text-[10px] font-bold px-2 py-1 rounded shadow-sm border border-gray-100">
             {product.subcategory}
           </span>
           <img 
             src={product.imageUrl} 
             alt={product.name} 
             className="max-h-full max-w-full object-contain"
           />
        </div>

        {/* Seção Conteúdo: Flex column para gerenciar header, scroll area e footer */}
        <div className="w-full md:w-3/5 flex flex-col h-full overflow-hidden">
            {/* Header (Fixo) */}
            <div className="p-4 md:p-5 border-b border-gray-100 flex justify-between items-start bg-white shrink-0">
              <div className="pr-4">
                <h3 className="text-base md:text-lg font-extrabold text-medical-900 leading-tight line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mt-1 font-medium">{product.description}</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors p-1 bg-gray-50 rounded-full shrink-0">
                <X size={20} />
              </button>
            </div>

            {/* Descrição (Scrollável) - Flex-1 faz ocupar o espaço restante */}
            <div className="p-4 md:p-6 overflow-y-auto flex-1 custom-scrollbar text-sm text-gray-600 leading-relaxed bg-gray-50/30">
              <div 
                dangerouslySetInnerHTML={{ __html: product.benefits || '<p>Descrição detalhada não disponível.</p>' }} 
                className="space-y-4"
              />
            </div>

            {/* Footer / CTA (Fixo no fundo) - shrink-0 impede de ser esmagado */}
            <div className="p-4 md:p-5 border-t border-gray-100 bg-white shrink-0">
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