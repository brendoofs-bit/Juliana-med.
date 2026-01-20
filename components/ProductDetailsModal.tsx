import React, { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onRequestQuote?: (product: Product) => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ isOpen, onClose, product }) => {
  // Lock body scroll
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
    const message = `Olá! Estou no site e gostaria de saber o valor e condições de pagamento do *${product.name}*.`;
    const url = `https://wa.me/555180985851?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay Backdrop */}
      <div className="absolute inset-0 bg-medical-900/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      {/* Container Principal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden animate-fade-in-up flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]">
        
        {/* Seção Imagem (Esquerda/Topo) - Fixa no Desktop */}
        <div className="w-full md:w-5/12 bg-white p-4 md:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 relative shrink-0 h-48 md:h-auto overflow-hidden group">
           <span className="absolute top-4 left-4 bg-gray-50/90 backdrop-blur text-gray-800 text-[10px] font-bold px-2 py-1 rounded shadow-sm border border-gray-200 z-10">
             {product.subcategory}
           </span>
           <img 
             src={product.imageUrl} 
             alt={product.name} 
             className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
           />
        </div>

        {/* Seção Conteúdo (Direita/Baixo) - Com Scroll */}
        <div className="w-full md:w-7/12 flex flex-col h-full bg-white relative">
            
            {/* Header (Fixo no topo da coluna da direita) */}
            <div className="p-4 md:p-6 border-b border-gray-100 flex justify-between items-start bg-white shrink-0 z-10">
              <div className="pr-8">
                <h3 className="text-lg md:text-2xl font-extrabold text-medical-900 leading-tight">{product.name}</h3>
                <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">{product.description}</p>
                {product.tags && (
                   <div className="flex gap-2 mt-2">
                      {product.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100 font-semibold">{tag}</span>
                      ))}
                   </div>
                )}
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors p-2 bg-gray-50 hover:bg-red-50 rounded-full shrink-0">
                <X size={24} />
              </button>
            </div>

            {/* Área de Texto (Scrollável) */}
            <div className="p-4 md:p-8 overflow-y-auto flex-1 custom-scrollbar text-sm text-gray-600 leading-relaxed bg-white">
              <div 
                dangerouslySetInnerHTML={{ __html: product.benefits || '<p>Descrição detalhada não disponível.</p>' }} 
                className="space-y-4 prose prose-sm max-w-none prose-headings:text-medical-800 prose-a:text-medical-600"
              />
              {/* Espaço extra para não cortar o conteúdo no final */}
              <div className="h-4"></div>
            </div>

            {/* Footer / CTA (Fixo no fundo da coluna da direita) */}
            <div className="p-4 md:p-6 border-t border-gray-100 bg-gray-50 shrink-0 z-10 shadow-[0_-4px_10px_rgba(0,0,0,0.03)] flex flex-col gap-2">
               <button 
                 onClick={handleWhatsAppRedirect}
                 className="w-full bg-[#25D366] hover:bg-[#1ebc57] text-white font-extrabold py-3.5 px-6 rounded-xl uppercase tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm"
               >
                 <MessageCircle size={20} />
                 Solicitar Orçamento no WhatsApp
               </button>
               <div className="flex justify-center items-center gap-4 text-[10px] text-gray-400">
                  <span>🔒 Compra Segura</span>
                  <span>⚡ Resposta em minutos</span>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;