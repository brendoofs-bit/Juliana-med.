import React from 'react';
import { createRoot } from 'react-dom/client';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const footerElement = document.getElementById('global-footer');
if (footerElement) {
    createRoot(footerElement).render(
        <React.StrictMode>
            <Footer />
        </React.StrictMode>
    );
}

const whatsappElement = document.getElementById('global-whatsapp');
if (whatsappElement) {
    createRoot(whatsappElement).render(
        <React.StrictMode>
            <WhatsAppButton />
        </React.StrictMode>
    );
}
