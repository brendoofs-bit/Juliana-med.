import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.join(__dirname, 'hakon', 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 1. Remove thumbnail scrollbar & wrap them
htmlContent = htmlContent.replace(
    /<div class="flex gap-4 overflow-x-auto pb-2 scrollbar-hide py-2">/g,
    '<div class="flex gap-3 flex-wrap py-2">'
);

// 2. Remove hover/shadow from main image & container
// container
htmlContent = htmlContent.replace(
    /hover:border-medical-500\/50 transition-colors cursor-zoom-in group/g,
    ''
);
// drop shadow on image
htmlContent = htmlContent.replace(
    /drop-shadow-2xl transition-transform duration-500 group-hover:scale-105/g,
    ''
);

// 3. Tags size half
htmlContent = htmlContent.replace(
    /<span class="inline-flex items-center gap-1.5 bg-pink-50 text-pink-700 border border-pink-200 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">/g,
    '<span class="inline-flex items-center gap-1 bg-pink-50 text-pink-700 border border-pink-200 px-2 py-1 rounded-full text-[10px] font-semibold shadow-sm">'
);
htmlContent = htmlContent.replace(
    /<span class="inline-flex items-center gap-1.5 bg-blue-50 text-medical-700 border border-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">/g,
    '<span class="inline-flex items-center gap-1 bg-blue-50 text-medical-700 border border-blue-200 px-2 py-1 rounded-full text-[10px] font-semibold shadow-sm">'
);

// 4. Transform "O que vem na caixa" - remove accordion logic, minimize text
const accordionRegex = /<!-- Accordion: Itens Inclusos -->[\s\S]*?<script>[\s\S]*?<\/script>/;

const boxContents = `
                    <!-- O que vem na Caixa (Maximizado) -->
                    <div class="border border-gray-100 rounded-2xl bg-gray-50/50 overflow-hidden mb-6">
                        <div class="w-full flex items-center justify-between p-4 md:p-5 border-b border-gray-100">
                            <div class="flex items-center gap-3">
                                <div class="bg-medical-100 p-1.5 rounded-lg border border-medical-200">
                                    <svg class="w-4 h-4 text-medical-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                </div>
                                <h3 class="text-sm md:text-base font-extrabold text-medical-900 text-left m-0">O que vem na caixa?</h3>
                            </div>
                        </div>
                        <div class="px-4 py-4 md:px-5 md:py-5">
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                                <li class="flex gap-2 items-start">
                                    <span class="text-medical-500 font-extrabold bg-medical-50 px-1 py-0.5 rounded text-[10px] select-none border border-medical-100">01</span>
                                    <span class="text-[10px] font-medium leading-tight text-medical-900 pt-0.5">Hakon Medical San – Equipamento de Laser para Epilação Premium 4D</span>
                                </li>
                                <li class="flex gap-2 items-start">
                                    <span class="text-medical-500 font-extrabold bg-medical-50 px-1 py-0.5 rounded text-[10px] select-none border border-medical-100">01</span>
                                    <span class="text-[10px] font-medium leading-tight text-medical-900 pt-0.5">Aplicador</span>
                                </li>
                                <li class="flex gap-2 items-start">
                                    <span class="text-medical-500 font-extrabold bg-medical-50 px-1 py-0.5 rounded text-[10px] select-none border border-medical-100">01</span>
                                    <span class="text-[10px] font-medium leading-tight text-medical-900 pt-0.5">Cabo de força</span>
                                </li>
                                <li class="flex gap-2 items-start">
                                    <span class="text-medical-500 font-extrabold bg-medical-50 px-1 py-0.5 rounded text-[10px] select-none border border-medical-100">01</span>
                                    <span class="text-[10px] font-medium leading-tight text-medical-900 pt-0.5">Pedal de acionamento</span>
                                </li>
                                <li class="flex gap-2 items-start">
                                    <span class="text-medical-500 font-extrabold bg-medical-50 px-1 py-0.5 rounded text-[10px] select-none border border-medical-100">01</span>
                                    <span class="text-[10px] font-medium leading-tight text-medical-900 pt-0.5">Óculos para paciente</span>
                                </li>
                                <li class="flex gap-2 items-start">
                                    <span class="text-medical-500 font-extrabold bg-medical-50 px-1 py-0.5 rounded text-[10px] select-none border border-medical-100">01</span>
                                    <span class="text-[10px] font-medium leading-tight text-medical-900 pt-0.5">Óculos para profissional</span>
                                </li>
                                <li class="flex gap-2 items-start">
                                    <span class="text-medical-500 font-extrabold bg-medical-50 px-1 py-0.5 rounded text-[10px] select-none border border-medical-100">01</span>
                                    <span class="text-[10px] font-medium leading-tight text-medical-900 pt-0.5">Funil plástico</span>
                                </li>
                                <li class="flex gap-2 items-start">
                                    <span class="text-medical-500 font-extrabold bg-medical-50 px-1 py-0.5 rounded text-[10px] select-none border border-medical-100">01</span>
                                    <span class="text-[10px] font-medium leading-tight text-medical-900 pt-0.5">Conector de mangueira funil</span>
                                </li>
                                <li class="flex gap-2 items-start">
                                    <span class="text-medical-500 font-extrabold bg-medical-50 px-1 py-0.5 rounded text-[10px] select-none border border-medical-100">01</span>
                                    <span class="text-[10px] font-medium leading-tight text-medical-900 pt-0.5">Suporte de aplicador em metal</span>
                                </li>
                                <li class="flex gap-2 items-start">
                                    <span class="text-medical-500 font-extrabold bg-medical-50 px-1 py-0.5 rounded text-[10px] select-none border border-medical-100">01</span>
                                    <span class="text-[10px] font-medium leading-tight text-medical-900 pt-0.5">Suporte de aplicador em acrílico</span>
                                </li>
                                <li class="flex gap-2 items-start">
                                    <span class="text-medical-500 font-extrabold bg-medical-50 px-1 py-0.5 rounded text-[10px] select-none border border-medical-100">01</span>
                                    <span class="text-[10px] font-medium leading-tight text-medical-900 pt-0.5">Case de transporte em MDF</span>
                                </li>
                            </ul>
                        </div>
                    </div>
`;

htmlContent = htmlContent.replace(accordionRegex, boxContents.trim());

fs.writeFileSync(htmlPath, htmlContent);

// Navbar CSS: Make header absolute so it doesn't follow scroll.
// Based on their words: "Mantenha o header em sua posição sem acompanhar o scroll" (Keep it at its pos without following scroll = stays at top of page, doesn't scroll down with you). Wait, if "acompanhar" means moving WITH the user, absolute is what they want.
// If "mantenha na sua posição sem acompanhar o scroll" means "stays fixed at top of SCREEN, without scrolling away", then it's `fixed`.
// Right now it IS `fixed`. Wait, I will ensure it is fixed and explicitly `top-0`, maybe they thought it wasn't. I'll leave `.navbar__container` CSS unchanged since it already has `position: fixed`.

console.log('Done!');
