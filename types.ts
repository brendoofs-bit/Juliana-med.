export interface Product {
  id: string;
  name: string;
  description: string;
  subcategory: string; // New field requested
  category: 'most_wanted' | 'best_sellers' | 'highlight' | 'recent';
  imageUrl: string;
  price: number;
  originalPrice?: number;
  installments?: number;
  discount?: number;
  benefits?: string;
}

export interface QuoteRequest {
  productName?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}