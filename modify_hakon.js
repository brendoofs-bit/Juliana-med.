import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.join(__dirname, 'hakon', 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 1. Menu: Background white, Logo centralized, remove all the rest. Absolute position.
const navRegex = /<nav class="navbar__container".*?<\/nav>/s;
const newNav = `
    <nav class="absolute top-0 left-0 w-full bg-white z-50 flex items-center justify-center py-4 border-b border-gray-100">
        <a href="/" class="flex flex-col items-center leading-none select-none hover:opacity-80 transition-opacity" style="text-decoration: none;">
            <span class="text-2xl md:text-3xl font-extrabold tracking-tighter" style="color: #0B1E48;">
            MEDICAL<span class="font-light" style="font-weight: 300;">SAN</span>
            </span>
        </a>
    </nav>
`;
htmlContent = htmlContent.replace(navRegex, newNav.trim());

// We also need to remove global-footer just in case
htmlContent = htmlContent.replace(/<div id="global-footer"><\/div>/g, '');
htmlContent = htmlContent.replace(/<script type="module" src="\/src\/mountFooter\.tsx"><\/script>/g, '');

// Since nav is absolute, hero needs top margin. It already has pt-28.
// 2. Carousel for image cards.
const carouselImages = [
    "https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/01_-_Frente_jcq9n2.png",
    "https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/02_-_Diagonal_direito_osbdgr.png",
    "https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/03_-_Lateral_direito_f6ju8x.png",
    "https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/04_-_traseiro_fpgrbe.png",
    "https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/05_-_Lateral_esquerdo_cwqvvu.png",
    "https://res.cloudinary.com/doqw5aqcf/image/upload/v1778022679/06_-_Diagonal_esquerdo_hbbcax.png"
];

const newImagesSection = `
                <div class="w-full lg:w-[45%] flex flex-col gap-3 sticky top-10 self-start">
                    <div class="border border-gray-100 rounded-[2rem] bg-white p-10 flex items-center justify-center relative aspect-[4/3] overflow-hidden">
                        <img src="${carouselImages[0]}" class="max-h-full max-w-full object-contain" alt="Hakon Laser Principal" id="ecommerceMainImg">
                    </div>
                    
                    <!-- Carousel Row -->
                    <div class="relative flex items-center justify-center mt-2 px-8">
                        <button onclick="scrollCarousel(-1)" class="absolute left-0 z-10 bg-white shadow-sm rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:text-medical-600 border border-gray-200 transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        
                        <div id="thumbCarousel" class="flex gap-2 overflow-x-auto scroll-smooth w-full scrollbar-hide py-1 snap-x">
                            ${carouselImages.map((img, i) => `
                            <button onclick="changeImage(this, '${img}')" class="thumb-btn border-2 flex-shrink-0 w-16 h-16 rounded-xl ${i === 0 ? 'border-medical-500' : 'border-transparent hover:border-gray-300 opacity-60 hover:opacity-100'} bg-white p-1 overflow-hidden transition-all snap-start">
                                <img src="${img}" class="w-full h-full object-contain mix-blend-multiply">
                            </button>
                            `).join('')}
                        </div>

                        <button onclick="scrollCarousel(1)" class="absolute right-0 z-10 bg-white shadow-sm rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:text-medical-600 border border-gray-200 transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>

                    <script>
                        function changeImage(el, src) {
                            document.getElementById('ecommerceMainImg').src = src;
                            document.querySelectorAll('.thumb-btn').forEach(btn => {
                                btn.classList.remove('border-medical-500');
                                btn.classList.add('border-transparent', 'opacity-60');
                                btn.classList.remove('hover:border-gray-300'); // reset
                            });
                            el.classList.remove('border-transparent', 'opacity-60');
                            el.classList.add('border-medical-500');
                        }

                        function scrollCarousel(direction) {
                            const container = document.getElementById('thumbCarousel');
                            const scrollAmount = 80; // approx width of one thumb + gap
                            container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
                        }
                    </script>
                </div>
`;

// Replace left column
htmlContent = htmlContent.replace(/<div class="w-full lg:w-\[45%\].*?<\/script>\s*<\/div>/s, newImagesSection.trim());

// 4. Transform "O que vem na Caixa (Maximizado)" remove border and padding
const descricaoText = `O Hakon da Medical San é um avançado sistema de laser de diodo para depilação, unindo tecnologia microcontrolada e segurança. Seu exclusivo aplicador 4D combina quatro comprimentos de onda (695nm a 1064nm), permitindo tratamentos eficazes em diferentes tons de pele e tipos de pelo. É uma solução totalmente não invasiva, sem efeitos sistêmicos ou colaterais indesejados para o paciente.<br><br>Sua interface moderna facilita o ajuste preciso de energia, frequência e fototipo, garantindo sessões personalizadas e ágeis. Com 1500 VA de potência e sistema de refrigeração interno, o equipamento oferece alta performance e conforto durante a aplicação. Compacto e bivolt, o Hakon é o investimento ideal para clínicas que buscam resultados de excelência e tecnologia de ponta.`;

const contents = `
                    <div class="mb-8">
                        <h3 class="text-xs font-extrabold text-medical-900 mb-2 uppercase tracking-wider">Descrição do Produto</h3>
                        <p class="text-xs font-medium text-gray-500 leading-relaxed text-justify">
                            \${descricaoText}
                        </p>
                    </div>

                    <div class="mb-8 border border-gray-100 rounded-2xl p-4 bg-white shadow-sm">
                        <h3 class="text-xs font-extrabold text-medical-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                            <span class="text-medical-500">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                            </span>
                            O que vem na caixa?
                        </h3>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1">
                            <li class="flex gap-2 items-center">
                                <span class="text-medical-500 font-bold bg-medical-50 px-1 py-0.5 rounded text-[8px] border border-medical-100 leading-none">01</span>
                                <span class="text-[10px] text-gray-600 font-medium">Hakon Laser Premium 4D</span>
                            </li>
                            <li class="flex gap-2 items-center">
                                <span class="text-medical-500 font-bold bg-medical-50 px-1 py-0.5 rounded text-[8px] border border-medical-100 leading-none">01</span>
                                <span class="text-[10px] text-gray-600 font-medium">Aplicador</span>
                            </li>
                            <li class="flex gap-2 items-center">
                                <span class="text-medical-500 font-bold bg-medical-50 px-1 py-0.5 rounded text-[8px] border border-medical-100 leading-none">01</span>
                                <span class="text-[10px] text-gray-600 font-medium">Cabo de força</span>
                            </li>
                            <li class="flex gap-2 items-center">
                                <span class="text-medical-500 font-bold bg-medical-50 px-1 py-0.5 rounded text-[8px] border border-medical-100 leading-none">01</span>
                                <span class="text-[10px] text-gray-600 font-medium">Pedal de acionamento</span>
                            </li>
                            <li class="flex gap-2 items-center">
                                <span class="text-medical-500 font-bold bg-medical-50 px-1 py-0.5 rounded text-[8px] border border-medical-100 leading-none">01</span>
                                <span class="text-[10px] text-gray-600 font-medium">Óculos para paciente</span>
                            </li>
                            <li class="flex gap-2 items-center">
                                <span class="text-medical-500 font-bold bg-medical-50 px-1 py-0.5 rounded text-[8px] border border-medical-100 leading-none">01</span>
                                <span class="text-[10px] text-gray-600 font-medium">Óculos profissional</span>
                            </li>
                            <li class="flex gap-2 items-center">
                                <span class="text-medical-500 font-bold bg-medical-50 px-1 py-0.5 rounded text-[8px] border border-medical-100 leading-none">01</span>
                                <span class="text-[10px] text-gray-600 font-medium">Funil plástico</span>
                            </li>
                            <li class="flex gap-2 items-center">
                                <span class="text-medical-500 font-bold bg-medical-50 px-1 py-0.5 rounded text-[8px] border border-medical-100 leading-none">01</span>
                                <span class="text-[10px] text-gray-600 font-medium">Conector de mangueira</span>
                            </li>
                            <li class="flex gap-2 items-center">
                                <span class="text-medical-500 font-bold bg-medical-50 px-1 py-0.5 rounded text-[8px] border border-medical-100 leading-none">01</span>
                                <span class="text-[10px] text-gray-600 font-medium">Suporte: metal</span>
                            </li>
                            <li class="flex gap-2 items-center">
                                <span class="text-medical-500 font-bold bg-medical-50 px-1 py-0.5 rounded text-[8px] border border-medical-100 leading-none">01</span>
                                <span class="text-[10px] text-gray-600 font-medium">Suporte: acrílico</span>
                            </li>
                            <li class="flex gap-2 items-center">
                                <span class="text-medical-500 font-bold bg-medical-50 px-1 py-0.5 rounded text-[8px] border border-medical-100 leading-none">01</span>
                                <span class="text-[10px] text-gray-600 font-medium">Case transporte MDF</span>
                            </li>
                        </ul>
                    </div>
`;

htmlContent = htmlContent.replace(/<!-- O que vem na Caixa \(Maximizado\) -->.*<\/div>\s*<\/div>/s, contents.trim());

// Remove background classes from body/hero just in case for full white background
// Find anywhere there is bg-gray-50/50 and replace with bg-white
htmlContent = htmlContent.replace(/bg-gray-50\/50/g, 'bg-white');

fs.writeFileSync(htmlPath, htmlContent);
console.log("Modifications applied successfully.");

