export interface Product {
  id: string;
  name: string;
  description: string;
  subcategory: string;
  category: 'estetica' | 'hof';
  imageUrl: string;
  benefits?: string; // HTML content for the modal
  tags?: string[]; // Ex: "Sob Encomenda", "Lançamento"
}

export interface QuoteRequest {
  productName?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}