import React from 'react';
import { Product } from '../types';
import { Tag } from 'lucide-react';

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
      {/* Discount Tag */}
      {product.discount && (
        <div className="absolute top-4 left-4 bg-action-red text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 z-10 shadow-sm">
          <Tag size={10} className="fill-current" />
          -{product.discount}% OFF
        </div>
      )}

      {/* Image Area */}
      <div className="relative h-56 mb-4 flex items-center justify-center p-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-grow">
        {/* Subcategory Tag */}
        <div className="mb-2">
            <span className="inline-block bg-medical-50 text-medical-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide border border-medical-100">
                {product.subcategory}
            </span>
        </div>

        {/* Full Name (No truncation) */}
        <h3 className="text-sm font-bold text-gray-800 mb-2 leading-snug group-hover:text-medical-600 transition-colors">
          {product.name}
        </h3>
        
        {/* CTA Fake Button */}
        <div className="mt-auto pt-4">
           <button className="w-full py-2 rounded-lg border border-medical-500 text-medical-600 font-bold text-xs uppercase hover:bg-medical-500 hover:text-white transition-all">
             Saiba Mais
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;