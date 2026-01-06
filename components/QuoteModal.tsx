import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { Product } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate sending email to brendoofs@gmail.com
    console.log(`Sending quote for ${product?.name} to brendoofs@gmail.com`, formData);
    
    // In a real frontend-only scenario without an API, we can try mailto:
    // const subject = `Orçamento: ${product?.name || 'Geral'}`;
    // const body = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefone: ${formData.phone}%0D%0AMensagem: ${formData.message}`;
    // window.open(`mailto:brendoofs@gmail.com?subject=${subject}&body=${body}`);

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-medical-900 px-6 py-4 flex justify-between items-center text-white">
          <h3 className="text-xl font-bold">Solicitar Orçamento</h3>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle size={64} className="text-green-500 mb-4" />
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Solicitação Enviada!</h4>
              <p className="text-gray-600">Recebemos seu pedido. Um consultor entrará em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {product && (
                <div className="bg-medical-50 border border-medical-100 p-3 rounded-lg mb-4 flex items-center gap-3">
                  <img src={product.imageUrl} alt={product.name} className="w-12 h-12 object-cover rounded bg-white" />
                  <div>
                    <span className="text-xs text-gray-500 uppercase font-semibold">Interesse em:</span>
                    <p className="font-bold text-medical-900">{product.name}</p>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input 
                  required
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-medical-500 focus:border-medical-500 outline-none"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-medical-500 focus:border-medical-500 outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp/Telefone</label>
                  <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-medical-500 focus:border-medical-500 outline-none"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-medical-500 focus:border-medical-500 outline-none resize-none"
                  placeholder="Gostaria de saber mais sobre as formas de pagamento..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-action-500 hover:bg-action-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Enviar Solicitação
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-2">
                Seus dados serão enviados para nossa equipe comercial.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;