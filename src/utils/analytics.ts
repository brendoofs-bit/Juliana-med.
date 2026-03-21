export const trackLead = () => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event: 'generate_lead' });
  }
};
