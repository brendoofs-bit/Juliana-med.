import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductCarouselProps {
  items: Product[];
  onOpenModal: (product: Product) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ items, onOpenModal }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // Adjust scroll distance
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative group">
      {/* Left Arrow */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-100 rounded-full p-2 text-gray-700 hover:bg-gray-50 hover:text-medical-600 -ml-2 md:-ml-6"
        aria-label="Scroll Left"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 snap-x snap-mandatory py-4 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]"
      >
        {items.map(product => (
          <div key={product.id} className="min-w-[180px] w-[180px] md:min-w-[220px] md:w-[220px] snap-start flex-shrink-0">
            <ProductCard product={product} onOpenModal={onOpenModal} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-100 rounded-full p-2 text-gray-700 hover:bg-gray-50 hover:text-medical-600 -mr-2 md:-mr-6"
        aria-label="Scroll Right"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ProductCarousel;