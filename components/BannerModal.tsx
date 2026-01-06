import React from 'react';
import { X, MessageCircle, Tag } from 'lucide-react';

interface BannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    description: string;
    imageUrl: string;
    promoText: string;
  } | null;
}

const BannerModal: React.FC<BannerModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  const handleWhatsAppRedirect = () => {
    const message = `Olá! Vi o banner promocional *${data.title}* no site e gostaria de saber mais sobre as condições especiais.`;
    const url = `https://wa.me/555180985851?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up flex flex-col max-h-[90vh]">
        
        {/* Header Image Area */}
        <div className="relative h-48 bg-gradient-to-r from-medical-900 to-medical-800 shrink-0">
           <img 
             src={data.imageUrl} 
             alt={data.title} 
             className="w-full h-full object-contain p-4 opacity-90"
           />
           <button 
             onClick={onClose} 
             className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full transition-colors"
           >
             <X size={20} />
           </button>
           <div className="absolute bottom-4 left-4 bg-action-cyan text-medical-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
             <Tag size={12} />
             OFERTA ESPECIAL
           </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 overflow-hidden">
            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
               <h3 className="text-2xl font-extrabold text-medical-900 mb-2 leading-tight">{data.title}</h3>
               <p className="text-medical-600 font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                 {data.promoText}
               </p>
               
               <div className="text-gray-600 text-sm space-y-3 leading-relaxed">
                 <p>{data.description}</p>
                 <ul className="list-disc pl-5 space-y-1 bg-gray-50 p-3 rounded-lg border border-gray-100 text-gray-700">
                    <li>Condições de pagamento facilitadas.</li>
                    <li>Entrega técnica especializada.</li>
                    <li>Garantia e suporte direto de fábrica.</li>
                 </ul>
                 <p className="font-medium text-medical-800">Não perca essa oportunidade de equipar sua clínica com tecnologia de ponta.</p>
               </div>
            </div>

            {/* CTA Footer */}
            <div className="p-5 border-t border-gray-100 bg-gray-50 shrink-0">
               <button 
                 onClick={handleWhatsAppRedirect}
                 className="w-full bg-[#25D366] hover:bg-[#1ebc57] text-white font-extrabold py-3.5 px-4 rounded-xl uppercase tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
               >
                 <MessageCircle size={20} />
                 Falar com Consultor Agora
               </button>
               <p className="text-[10px] text-center text-gray-400 mt-2">
                 Promoção por tempo limitado. Consulte disponibilidade.
               </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BannerModal;