import React from 'react';
import { Product } from '../types';
import { CreditCard } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  // Calculate installment value if installments exist
  const installmentValue = product.installments 
    ? (product.price / product.installments).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : null;

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
        <p className="text-[10px] text-gray-400 mb-3">{product.description}</p>

        {/* Installments Visual */}
        {product.installments && installmentValue && (
          <div className="mt-auto bg-medical-50 border border-medical-100 rounded-lg p-2 flex items-center gap-2 group-hover:border-medical-200 transition-colors">
             <div className="bg-white p-1 rounded-full text-medical-600">
               <CreditCard size={14} />
             </div>
             <div className="flex flex-col leading-none">
                <span className="text-[10px] text-medical-800 font-bold uppercase">Em até {product.installments}x de</span>
                <span className="text-sm font-extrabold text-medical-600">{installmentValue}</span>
             </div>
          </div>
        )}

        {/* Fake CTA Button */}
        <div className="mt-3">
           <button className="w-full py-2 rounded-lg border border-medical-500 text-medical-600 font-bold text-xs uppercase hover:bg-medical-500 hover:text-white transition-all">
             Saiba Mais
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;