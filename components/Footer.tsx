import React from 'react';
import { Facebook, Instagram, Phone, CreditCard, Landmark, Banknote, QrCode } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 font-sans border-t border-gray-100">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 justify-items-center">
          
          {/* Column 1: Ajuda */}
          <div className="flex flex-col items-center">
            <h4 className="text-gray-900 font-semibold mb-6 text-sm">Ajuda</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-medical-600">Dúvidas Frequentes</a></li>
              <li><a href="#" className="hover:text-medical-600">Política de Frete</a></li>
              <li><a href="#" className="hover:text-medical-600">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-medical-600">Sobre nós</a></li>
              <li><a href="#" className="hover:text-medical-600">Trocas e Devoluções</a></li>
            </ul>
          </div>

           {/* Column 2: Atendimento */}
           <div className="flex flex-col items-center">
            <h4 className="text-gray-900 font-semibold mb-6 text-sm">Atendimento</h4>
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded text-medical-800 text-sm font-medium">
               <Phone size={16} /> 0800 200 8022
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Segunda à Sexta<br/>
              08:00 às 18:00
            </p>
          </div>
          
          {/* Column 3: Siga nas Redes */}
          <div className="flex flex-col items-center">
              <h4 className="text-gray-900 font-semibold mb-6 text-sm">Siga nas Redes</h4>
              <div className="flex gap-4 text-gray-600 justify-center">
                <a href="#" className="hover:text-medical-600 transition-colors bg-gray-50 p-3 rounded-full"><Facebook size={24} /></a>
                <a href="#" className="hover:text-medical-600 transition-colors bg-gray-50 p-3 rounded-full"><Instagram size={24} /></a>
              </div>
          </div>

        </div>

        {/* Security & Payment Row */}
        <div className="border-t border-gray-100 py-10">
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-12 md:gap-24">
            
            {/* Payment Methods */}
            <div className="flex flex-col items-center w-full md:w-auto">
              <h5 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">Formas de pagamento</h5>
              <div className="flex flex-wrap justify-center gap-6 text-gray-500">
                 {/* PIX */}
                 <div className="flex flex-col items-center gap-2" title="PIX">
                    <QrCode size={28} />
                    <span className="text-[10px] font-medium">Pix</span>
                 </div>
                 {/* Cartão */}
                 <div className="flex flex-col items-center gap-2" title="Cartão de Crédito">
                    <CreditCard size={28} />
                    <span className="text-[10px] font-medium">Cartão</span>
                 </div>
                 {/* Transferência */}
                 <div className="flex flex-col items-center gap-2" title="Transferência Bancária">
                    <Landmark size={28} />
                    <span className="text-[10px] font-medium">Transf.</span>
                 </div>
                 {/* Boleto */}
                 <div className="flex flex-col items-center gap-2" title="Boleto">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 8v8"/><path d="M12 8v8"/><path d="M16 8v8"/></svg>
                    <span className="text-[10px] font-medium">Boleto</span>
                 </div>
                 {/* Depósito */}
                 <div className="flex flex-col items-center gap-2" title="Depósito em Conta">
                    <Banknote size={28} />
                    <span className="text-[10px] font-medium">Depósito</span>
                 </div>
              </div>
            </div>

            {/* Security Certificates */}
            <div className="flex flex-col items-center w-full md:w-auto">
               <h5 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">Segurança</h5>
               <a 
                 href="https://transparencyreport.google.com/safe-browsing/search" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex flex-col items-center gap-2 group"
               >
                  {/* Placeholder for Google Seal Image */}
                  <div className="w-32 h-12 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-xs text-gray-400 group-hover:border-medical-200 transition-colors">
                    [Google Selo Img]
                  </div>
               </a>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 py-8 text-[11px] text-gray-400 text-center leading-relaxed bg-gray-50 -mx-4 px-4">
          <p className="font-medium tracking-wide">
            © 2026 - VMAC REPRESENTACOES E SERVICOS LTDA | CNPJ: 3.847.273/0001-25 | Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;