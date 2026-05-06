import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'inject-global-components',
          transformIndexHtml(html) {
            if (!html.includes('global-footer')) {
              const injection = `\n    <div id="global-footer"></div>\n    <div id="global-whatsapp"></div>\n    <script type="module" src="/src/global.tsx"></script>\n  `;
              return html.replace(/<\/body>/i, injection + '</body>');
            }
            return html;
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            hakon: path.resolve(__dirname, 'hakon/index.html')
          }
        }
      }
    };
});
