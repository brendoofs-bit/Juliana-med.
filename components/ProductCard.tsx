import React from 'react';
import { Product } from '../types';
import { BadgeCheck, CalendarClock } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  return (
    <div 
      className="group bg-white rounded-xl border border-gray-100 p-4 hover:shadow-xl hover:border-medical-200 transition-all duration-300 cursor-pointer flex flex-col h-full relative"
      onClick={() => onOpenModal(product)}
    >
      {/* Image Area - White Background */}
      <div className="relative h-56 mb-4 flex items-center justify-center p-2 bg-white rounded-lg transition-colors">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {/* Tag Overlay if exists */}
        {product.tags && product.tags.length > 0 && (
           <div className="absolute top-2 left-2 flex flex-col gap-1">
             <span className="bg-medical-500/10 text-medical-700 text-[9px] font-bold px-2 py-1 rounded border border-medical-100 backdrop-blur-sm">
               {product.tags[0]}
             </span>
           </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-grow">
        {/* Subcategory Tag */}
        <div className="mb-2">
            <span className="inline-block bg-gray-50 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide border border-gray-100">
                {product.subcategory}
            </span>
        </div>

        {/* Full Name */}
        <h3 className="text-sm font-bold text-medical-900 mb-1 leading-snug group-hover:text-medical-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Description Code */}
        <p className="text-[11px] text-gray-500 mb-4 line-clamp-2">{product.description}</p>

        {/* Status / Call to action visual replacement for price */}
        <div className="mt-auto space-y-2 border-t border-gray-50 pt-3">
            <div className="flex items-center gap-2 text-gray-500 text-[10px] font-medium">
               <BadgeCheck size={14} className="text-green-500"/>
               <span>Sob encomenda</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-[10px] font-medium">
               <CalendarClock size={14} className="text-medical-500"/>
               <span>Elegível para financiamento</span>
            </div>
        </div>

        {/* Fake CTA Button */}
        <div className="mt-4">
           <button className="w-full py-2.5 rounded-lg border border-medical-500 text-medical-600 font-bold text-xs uppercase hover:bg-medical-500 hover:text-white transition-all">
             Ver Detalhes
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;