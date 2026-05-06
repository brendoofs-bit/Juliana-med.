import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Auto-discover all index.html files to configure build inputs and generate sitemap
    const getHtmlFiles = (dir: string, fileList: string[] = []) => {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
          if (file !== 'node_modules' && file !== 'dist' && file !== 'public' && file !== 'src' && !file.startsWith('.')) {
            getHtmlFiles(filePath, fileList);
          }
        } else if (file === 'index.html') {
          fileList.push(filePath);
        }
      }
      return fileList;
    };

    const htmlFiles = getHtmlFiles(path.resolve(__dirname, '.'));
    const inputOptions: Record<string, string> = {};
    
    htmlFiles.forEach(file => {
      let relativePath = path.relative(path.resolve(__dirname, '.'), file);
      // Determine the key for rollup config input
      let name = relativePath.replace(/\/index\.html|\\index\.html/, '') || 'main';
      if (name === 'index.html') name = 'main';
      inputOptions[name] = file;
    });

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
        },
        {
          name: 'generate-sitemap',
          buildStart() {
            const baseUrl = 'https://medicalsanonline.com.br';
            let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
            sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
            
            for (const file of htmlFiles) {
              let relativePath = path.relative(path.resolve(__dirname, '.'), file);
              let route = relativePath.replace(/index\.html$/, '').replace(/\\/g, '/');
              if (route !== '' && !route.startsWith('/')) {
                route = '/' + route;
              } else if (route === '') {
                route = '/';
              }
              
              sitemap += '  <url>\n';
              sitemap += `    <loc>${baseUrl}${route}</loc>\n`;
              sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
              sitemap += `    <changefreq>weekly</changefreq>\n`;
              sitemap += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
              sitemap += '  </url>\n';
            }
            sitemap += '</urlset>\n';
            
            const publicDir = path.join(__dirname, 'public');
            if (!fs.existsSync(publicDir)) {
              fs.mkdirSync(publicDir);
            }
            fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
            console.log('Sitemap generated successfully at public/sitemap.xml');
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
          input: inputOptions
        }
      }
    };
});
