document.addEventListener("DOMContentLoaded", () => {
    // =========================================================================
    // NAVBAR LOGIC & SMOOTH SCROLL & FAQ
    // =========================================================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll mapping
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile drawer if active
                if (document.getElementById('mobileDrawer').classList.contains('active')) {
                    document.getElementById('mobileDrawer').classList.remove('active');
                    document.getElementById('navOverlay').classList.remove('active');
                }
            }
        });
    });

    // Mobile Nav
    const navToggle = document.getElementById('navToggle');
    const navClose = document.getElementById('navClose');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const navOverlay = document.getElementById('navOverlay');

    const toggleMenu = () => {
        mobileDrawer.classList.toggle('active');
        navOverlay.classList.toggle('active');
    };

    if (navToggle) navToggle.addEventListener('click', toggleMenu);
    if (navClose) navClose.addEventListener('click', toggleMenu);
    if (navOverlay) navOverlay.addEventListener('click', toggleMenu);

    // FAQ AutoClose Accordion
    const faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq__question');
        questionBtn.addEventListener('click', () => {
            // Close others
            faqItems.forEach(sibling => {
                if(sibling !== item && sibling.classList.contains('active')) {
                    sibling.classList.remove('active');
                    sibling.querySelector('.faq__icon').textContent = '+';
                }
            });
            
            // Toggle this
            item.classList.toggle('active');
            const icon = item.querySelector('.faq__icon');
            if (item.classList.contains('active')) {
                icon.textContent = '×'; // Close icon equivalent
            } else {
                icon.textContent = '+';
            }
        });
    });

    // Referências do DOM
    const heroSection = document.querySelector("#hero");
    const visual = document.querySelector(".hero__visual");
    const content = document.querySelector(".hero__content");

    // Acionar a animação de entrada adicionando a classe hero--loaded
    // Colocamos um leve timeout para garantir que o render inicie suavemente
    setTimeout(() => {
        if(heroSection) {
            heroSection.classList.add("hero--loaded");
        }
    }, 100);

    // Variáveis de estado do Parallax
    let isMobile = window.innerWidth <= 768;
    let lastScrollY = window.scrollY;
    let ticking = false;

    // Atualiza status de mobile no resize da tela, restaurando transforms se for mobile
    window.addEventListener("resize", () => {
        isMobile = window.innerWidth <= 768;
        if (isMobile) {
            if (visual) visual.style.transform = `translateY(0px)`;
            if (content) content.style.transform = `translateY(0px)`;
        }
    });

    // Função para calcular e aplicar o Parallax via requestAnimationFrame
    const updateParallax = () => {
        // Aplica o parallax apenas se for maior que 768px (Desktop)
        if (!isMobile) {
            // Imagem move a uma velocidade 0.3x (sobe mais suave e lentamente)
            if (visual) {
                visual.style.transform = `translateY(${lastScrollY * 0.3}px)`;
            }

            // Texto tem leve contramovimento (desce mais rápido)
            if (content) {
                content.style.transform = `translateY(${lastScrollY * -0.1}px)`;
            }
        }
        ticking = false;
    };

    // Escutamos o evento de scroll da página
    window.addEventListener("scroll", () => {
        lastScrollY = window.scrollY;

        // Evita múltiplas chamadas por frame otimizando a performance
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true }); // passive: true melhora o scrolling performance
    
    // =========================================================================
    // SOCIAL BAR - Animated Counter
    // =========================================================================
    const counters = document.querySelectorAll('.counter-val');
    const animationDuration = 1800; // 1.8s

    const formatNumber = (num) => {
        return new Intl.NumberFormat('pt-BR').format(Math.floor(num));
    };

    // Easing function: easeOutQuart
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / animationDuration, 1);
            
            const currentVal = target * easeOutQuart(progress);
            counter.innerText = formatNumber(currentVal);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = formatNumber(target);
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // =========================================================================
    // BENEFITS ANIMATION (Staggered fade-up)
    // =========================================================================
    const benefitCards = document.querySelectorAll('.benefits__card');
    
    const benefitsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(benefitCards).indexOf(entry.target);
                // Stagger delay based on index
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    benefitCards.forEach(card => {
        benefitsObserver.observe(card);
    });

    // =========================================================================
    // PROCESS TABS LOGIC
    // =========================================================================
    const processTabBtns = document.querySelectorAll('.process__tab-btn');
    const processTabContents = document.querySelectorAll('.process__tab-content');

    processTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            processTabBtns.forEach(b => b.classList.remove('active'));
            processTabContents.forEach(c => c.classList.remove('active'));

            // Add active to clicked
            btn.classList.add('active');
            const targetId = 'tab-' + btn.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // =========================================================================
    // TESTIMONIALS SLIDER LOGIC
    // =========================================================================
    const track = document.getElementById('testimonialsTrack');
    const cards = document.querySelectorAll('.testimonials__card');
    const prevBtn = document.getElementById('testiPrev');
    const nextBtn = document.getElementById('testiNext');
    const pagination = document.getElementById('testiPagination');
    
    if (track && cards.length > 0) {
        let currentIndex = 0;
        let cardsPerView = window.innerWidth <= 968 ? 2 : 3;
        
        // Disable script on mobile (handled by CSS scroll-snap)
        let isMobileSlider = window.innerWidth <= 768;

        const maxIndex = () => Math.max(0, cards.length - cardsPerView);

        // Setup dots
        const renderDots = () => {
            if (isMobileSlider) return; // dots are decorative or handled by scroll event if we wanted, but let's keep it simple
            pagination.innerHTML = '';
            const totalDots = maxIndex() + 1;
            for(let i=0; i<totalDots; i++){
                const dot = document.createElement('div');
                dot.className = `testimonials__dot ${i === currentIndex ? 'active' : ''}`;
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateSlider();
                });
                pagination.appendChild(dot);
            }
        };

        const updateSlider = () => {
            if (isMobileSlider) return;
            const cardWidth = cards[0].offsetWidth;
            const gap = parseFloat(window.getComputedStyle(cards[0]).marginRight);
            const moveAmt = (cardWidth + gap) * currentIndex;
            track.style.transform = `translateX(-${moveAmt}px)`;

            // Update dots
            const dots = pagination.querySelectorAll('.testimonials__dot');
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentIndex);
            });
        };

        const moveNext = () => {
            if (isMobileSlider) return;
            if (currentIndex < maxIndex()) {
                currentIndex++;
            } else {
                currentIndex = 0; // loop
            }
            updateSlider();
        };

        const movePrev = () => {
            if (isMobileSlider) return;
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = maxIndex();
            }
            updateSlider();
        };

        if (prevBtn) prevBtn.addEventListener('click', movePrev);
        if (nextBtn) nextBtn.addEventListener('click', moveNext);

        window.addEventListener('resize', () => {
            isMobileSlider = window.innerWidth <= 768;
            cardsPerView = window.innerWidth <= 968 ? 2 : 3;
            if (!isMobileSlider) {
                if (currentIndex > maxIndex()) currentIndex = maxIndex();
                renderDots();
                updateSlider();
            } else {
                track.style.transform = 'none';
                pagination.innerHTML = '';
            }
        });

        // Autoplay
        let autoplay = setInterval(moveNext, 5000);
        
        const sliderWrapper = document.getElementById('testimonialsSliderWrapper');
        if (sliderWrapper) {
            sliderWrapper.addEventListener('mouseenter', () => clearInterval(autoplay));
            sliderWrapper.addEventListener('mouseleave', () => {
                clearInterval(autoplay);
                autoplay = setInterval(moveNext, 5000);
            });
        }

        // Init
        if (!isMobileSlider) {
            renderDots();
            updateSlider();
        }
    }

    // =========================================================================
    // GALLERY LOGIC
    // =========================================================================
    const galleryItems = [
        { id: 1, type: 'produto', src: '[IMG_PRODUTO_1]', alt: '[NOME DO PRODUTO] — Vista frontal' },
        { id: 2, type: 'produto', src: '[IMG_PRODUTO_2]', alt: '[NOME DO PRODUTO] — Ângulo 45 graus' },
        { id: 3, type: 'produto', src: '[IMG_PRODUTO_3]', alt: '[NOME DO PRODUTO] — Visão de cima' },
        { id: 4, type: 'produto', src: '[IMG_PRODUTO_4]', alt: '[NOME DO PRODUTO] — Visão Traseira' },
        
        { id: 5, type: 'clinica', src: '[IMG_PRODUTO_5]', alt: '[NOME DO PRODUTO] — Em Clínica Setup 1' },
        { id: 6, type: 'clinica', src: '[IMG_PRODUTO_6]', alt: '[NOME DO PRODUTO] — Detalhe Decorativo' },
        { id: 7, type: 'clinica', src: '[IMG_PRODUTO_7]', alt: '[NOME DO PRODUTO] — Vista da sala' },
        { id: 8, type: 'clinica', src: '[IMG_PRODUTO_8]', alt: '[NOME DO PRODUTO] — Fundo de clínica' },

        { id: 9, type: 'uso', src: '[IMG_PRODUTO_9]', alt: '[NOME DO PRODUTO] — Aplicação no paciente' },
        { id: 10, type: 'uso', src: '[IMG_PRODUTO_10]', alt: '[NOME DO PRODUTO] — Detalhe da aplicação' },
        { id: 11, type: 'uso', src: '[IMG_PRODUTO_11]', alt: '[NOME DO PRODUTO] — Close no paciente' },
        { id: 12, type: 'uso', src: '[IMG_PRODUTO_12]', alt: '[NOME DO PRODUTO] — Foco na ponteira' }
    ];

    const galleryMainImg = document.getElementById('galleryMainImg');
    const gallerySide1 = document.getElementById('gallerySide1');
    const gallerySide2 = document.getElementById('gallerySide2');
    const galleryThumbnails = document.getElementById('galleryThumbnails');
    const galleryMobileSlider = document.getElementById('galleryMobileSlider');
    const galleryMobilePagination = document.getElementById('galleryMobilePagination');
    const galleryTabs = document.querySelectorAll('.gallery__tab');

    let currentFilter = 'produto';
    let filteredItems = [];

    const renderGallery = () => {
        filteredItems = galleryItems.filter(item => item.type === currentFilter);
        
        // Render Desktop Images
        if(filteredItems.length > 0) {
            updateMainImage(filteredItems[0].src, filteredItems[0].alt);
        }
        if(gallerySide1 && filteredItems.length > 1) {
            gallerySide1.src = filteredItems[1].src;
            gallerySide1.alt = filteredItems[1].alt;
            gallerySide1.dataset.index = 1;
        }
        if(gallerySide2 && filteredItems.length > 2) {
            gallerySide2.src = filteredItems[2].src;
            gallerySide2.alt = filteredItems[2].alt;
            gallerySide2.dataset.index = 2;
        }

        // Render Thumbnails (max 4)
        galleryThumbnails.innerHTML = '';
        const thumbsCount = Math.min(filteredItems.length, 4);
        for(let i=0; i<thumbsCount; i++){
            const thumbDiv = document.createElement('div');
            thumbDiv.className = `gallery__thumb ${i === 0 ? 'active' : ''}`;
            thumbDiv.innerHTML = `<img src="${filteredItems[i].src}" alt="Thumb ${i}">`;
            thumbDiv.addEventListener('click', () => {
                // Update active state
                document.querySelectorAll('.gallery__thumb').forEach(t => t.classList.remove('active'));
                thumbDiv.classList.add('active');
                
                // Swap main image
                updateMainImage(filteredItems[i].src, filteredItems[i].alt, i);
            });
            galleryThumbnails.appendChild(thumbDiv);
        }

        // Render Mobile Slider
        galleryMobileSlider.innerHTML = '';
        galleryMobilePagination.innerHTML = '';
        filteredItems.slice(0, 4).forEach((item, index) => {
            // Slide
            const slide = document.createElement('div');
            slide.className = 'gallery__slide';
            slide.innerHTML = `<img src="${item.src}" alt="${item.alt}" onclick="openLightbox(${index})">
                               <div class="gallery__badge" style="top: 8px; left: 8px;">📍 Foto Real — Clínica Parceira</div>`;
            galleryMobileSlider.appendChild(slide);

            // Dot
            const dot = document.createElement('span');
            dot.className = `gallery__dot ${index === 0 ? 'active' : ''}`;
            galleryMobilePagination.appendChild(dot);
        });
    };

    const updateMainImage = (src, alt, index = 0) => {
        if(!galleryMainImg) return;
        
        // Fade effect
        galleryMainImg.classList.add('fade');
        setTimeout(() => {
            galleryMainImg.src = src;
            galleryMainImg.alt = alt;
            galleryMainImg.dataset.index = index;
            galleryMainImg.classList.remove('fade');
        }, 200); 
    };

    // Tabs functionality
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            galleryTabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.getAttribute('data-filter');
            renderGallery();
        });
    });

    // Event listeners to open Lightbox
    if(galleryMainImg) {
        galleryMainImg.parentElement.addEventListener('click', () => {
            openLightbox(parseInt(galleryMainImg.dataset.index || 0));
        });
    }
    if(gallerySide1) {
        gallerySide1.parentElement.addEventListener('click', () => {
            openLightbox(parseInt(gallerySide1.dataset.index || 1));
        });
    }
    if(gallerySide2) {
        gallerySide2.parentElement.addEventListener('click', () => {
            openLightbox(parseInt(gallerySide2.dataset.index || 2));
        });
    }

    // Mobile scroll logic for dots
    if(galleryMobileSlider) {
        galleryMobileSlider.addEventListener('scroll', () => {
            const scrollPos = galleryMobileSlider.scrollLeft;
            const slideWidth = galleryMobileSlider.clientWidth * 0.85; 
            const activeIndex = Math.round(scrollPos / slideWidth);
            
            const dots = galleryMobilePagination.querySelectorAll('.gallery__dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === activeIndex);
            });
        }, { passive: true });
    }

    // Lightbox Logic
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    let currentLightboxIndex = 0;

    window.openLightbox = (index) => {
        currentLightboxIndex = index;
        lightboxImg.src = filteredItems[index].src;
        lightboxImg.alt = filteredItems[index].alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent scrolling
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    const showNextImage = (e) => {
        if(e) e.stopPropagation();
        currentLightboxIndex = (currentLightboxIndex + 1) % Math.min(filteredItems.length, 4);
        lightboxImg.src = filteredItems[currentLightboxIndex].src;
        lightboxImg.alt = filteredItems[currentLightboxIndex].alt;
    };

    const showPrevImage = (e) => {
        if(e) e.stopPropagation();
        const maxIndex = Math.min(filteredItems.length, 4) - 1;
        currentLightboxIndex = currentLightboxIndex === 0 ? maxIndex : currentLightboxIndex - 1;
        lightboxImg.src = filteredItems[currentLightboxIndex].src;
        lightboxImg.alt = filteredItems[currentLightboxIndex].alt;
    };

    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    document.getElementById('lightboxNext')?.addEventListener('click', showNextImage);
    document.getElementById('lightboxPrev')?.addEventListener('click', showPrevImage);

    // Close lightbox on click outside image
    lightbox?.addEventListener('click', (e) => {
        if(e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard support for Lightbox
    window.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
    });

    // Initial render
    renderGallery();

});
