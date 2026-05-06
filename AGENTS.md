# System Instructions

## Product Page Template Workflow

The user has defined `hakon/index.html` as the **Standard Product Page Template**.
Whenever the user requests the creation of a **new product page**, you MUST:
1. Replicate the EXACT HTML structure from `hakon/index.html`.
2. Include the exact same sections: Hero, Product Images, CTA/Benefits, Brief Description, Ficha Técnica, Itens Inclusos, FAQ, and Global Components.
3. Keep the Tailwind CSS classes unchanged for the layout.
4. Replace only the specific content (texts, image `src`, product names, specific tech specs, and list of included items).
5. Add the new page to `vite.config.ts` if needed (the vite config currently uses an auto-discover script, so just create the folder with an `index.html` inside it, and `vite.config.ts` will pick it up automatically).

Remember to maintain consistency with the HAKON page design.
