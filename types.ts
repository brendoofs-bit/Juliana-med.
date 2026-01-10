export interface Product {
  id: string;
  name: string;
  description: string;
  subcategory: string;
  category: 'estetica' | 'hof';
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