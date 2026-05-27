import React from 'react';
import { createRoot } from 'react-dom/client';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

function mountGlobals() {
    console.log("Mounting global components...");
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
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountGlobals);
} else {
    mountGlobals();
}