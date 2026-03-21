import React from 'react';
import { Facebook, Instagram, Phone, CreditCard, Landmark, Banknote, QrCode } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 font-sans border-t border-gray-100">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 justify-items-center">
          
          {/* Column 1: Atendimento */}
          <div className="flex flex-col items-center">
            <h4 className="text-gray-900 font-semibold mb-6 text-sm uppercase tracking-wider">Atendimento</h4>
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded text-medical-800 text-sm font-medium">
               <Phone size={16} /> 0800 200 8022
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Segunda à Sexta<br/>
              08:00 às 18:00
            </p>
          </div>

          {/* Column 2: Formas de pagamento */}
          <div className="flex flex-col items-center">
            <h5 className="text-gray-900 font-semibold mb-6 text-sm uppercase tracking-wider">Formas de pagamento</h5>
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

          {/* Column 3: Segurança */}
          <div className="flex flex-col items-center">
             <h5 className="text-gray-900 font-semibold mb-6 text-sm uppercase tracking-wider">Segurança</h5>
             <a 
               href="https://transparencyreport.google.com/safe-browsing/search" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex flex-col items-center gap-2 group"
             >
                <img 
                  src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1769027153/selo-google-navegacao-segura_kcun8k.png" 
                  alt="Google Navegação Segura" 
                  className="w-32 object-contain hover:opacity-80 transition-opacity" 
                />
             </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 py-8 text-[11px] text-gray-400 text-center leading-relaxed bg-gray-50 -mx-4 px-4">
          <p className="font-medium tracking-wide">
            © 2026 - VMAC REPRESENTACOES E SERVICOS LTDA | CNPJ: 3.847.273/0001-25 | Todos os direitos reservados.
          </p>
          <p className="mt-2 font-semibold">
             Desenvolvido por <a href="https://altmakers.com.br" target="_blank" className="text-medical-600 hover:text-medical-800 transition-colors">ALTMAKERS</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;