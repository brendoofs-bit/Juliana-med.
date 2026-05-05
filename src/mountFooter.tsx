import React from 'react';
import { createRoot } from 'react-dom/client';
import Footer from '../components/Footer';

const footerElement = document.getElementById('global-footer');
if (footerElement) {
    createRoot(footerElement).render(
        <React.StrictMode>
            <Footer />
        </React.StrictMode>
    );
}
