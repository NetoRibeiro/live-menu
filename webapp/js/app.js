
document.addEventListener('DOMContentLoaded', () => {
    // --- State ---
    const state = {
        data: null,
        theme: null,
        history: [], // Stack of screen IDs
        currentCategory: null,
        currentSubCategory: null
    };

    // --- DOM Elements ---
    const els = {
        app: document.getElementById('app'),
        screens: {
            category: document.getElementById('category-screen'),
            subcategory: document.getElementById('subcategory-screen'),
            product: document.getElementById('product-screen')
        },
        lists: {
            category: document.getElementById('category-list'),
            subcategory: document.getElementById('subcategory-list'),
            product: document.getElementById('product-list')
        },
        titles: {
            page: document.getElementById('page-title'),
            sub: document.getElementById('selected-category-title'),
            prod: document.getElementById('selected-subcategory-title')
        },
        nav: {
            home: document.getElementById('home-btn'),
            back: document.getElementById('back-btn')
        }
    };

    // --- Initialization ---
    async function init() {
        try {
            await Promise.all([fetchTheme(), fetchMenu()]);
            setupNavigation();
            renderCategories();
            // Start at home
            showScreen('category');
        } catch (e) {
            console.error("Failed to initialize app:", e);
        }
    }

    async function fetchTheme() {
        const res = await fetch('data/theme.json');
        const json = await res.json();
        state.theme = json.theme;
        applyTheme(state.theme);
    }

    async function fetchMenu() {
        const res = await fetch('data/menu.json');
        const json = await res.json();
        state.data = json;
    }

    function applyTheme(theme) {
        const text = `
            :root {
                --primary: ${theme.colors.primary};
                --background: ${theme.colors.background};
                --surface: ${theme.colors.surface};
                --text-primary: ${theme.colors.text_primary};
                --text-secondary: ${theme.colors.text_secondary};
                --accent: ${theme.colors.accent};
                --font-heading: ${theme.fonts.heading};
                --font-body: ${theme.fonts.body};
                --radius: ${theme.borderRadius};
                --speed: ${theme.animationSpeed};
            }
        `;
        const style = document.createElement('style');
        style.textContent = text;
        document.head.appendChild(style);
    }

    // --- Navigation Logic ---
    function setupNavigation() {
        els.nav.home.addEventListener('click', () => {
            state.history = [];
            showScreen('category');
        });

        els.nav.back.addEventListener('click', () => {
            if (state.history.length > 0) {
                const prev = state.history.pop();
                // If we popped strictly to go back, we actually need to look at what's effectively "current" 
                // but our showScreen pushes to history. We need a way to go back without pushing.
                // Re-thinking history:
                // History stack should contain the *previous* screens.
                // Current screen is implicit.

                // Let's rely on built-in logic:
                // If I am at Product, Back goes to SubCat.
                // If I am at SubCat, Back goes to Category.

                // Keep it simple based on current visible screen
                if (els.screens.product.classList.contains('active')) {
                    showScreen('subcategory', null, true);
                } else if (els.screens.subcategory.classList.contains('active')) {
                    showScreen('category', null, true);
                }
            }
        });
    }

    function showScreen(screenName, contextId = null, isBack = false) {
        // Update History if moving forward
        const currentActive = document.querySelector('.screen.active');
        if (!isBack && currentActive && currentActive.id !== screenName + '-screen') {
            // Logic to track history could go here, but with strict hierarchy 
            // Cat -> Sub -> Prod, we can just infer back targets.
        }

        // Hide all screens
        Object.values(els.screens).forEach(el => el.classList.remove('active'));

        // Show target
        els.screens[screenName].classList.add('active');

        // Update Nav UI
        if (screenName === 'category') {
            els.nav.back.classList.add('hidden');
            els.titles.page.textContent = "Menu";
        } else {
            els.nav.back.classList.remove('hidden');
        }

        // Logic per screen
        if (screenName === 'category') {
            // No specific context needed, rendered at init
            state.currentCategory = null;
            state.currentSubCategory = null;
        } else if (screenName === 'subcategory') {
            const catId = contextId || state.currentCategory?.id;
            const category = state.data.categories.find(c => c.id === catId);
            if (category) {
                state.currentCategory = category;
                els.titles.page.textContent = category.name;
                els.titles.sub.textContent = category.name;
                renderSubCategories(category);
            }
        } else if (screenName === 'product') {
            const subId = contextId || state.currentSubCategory?.id;
            // Find subcategory inside current category
            const sub = state.currentCategory.subcategories.find(s => s.id === subId);
            if (sub) {
                state.currentSubCategory = sub;
                els.titles.page.textContent = sub.name;
                els.titles.prod.textContent = sub.name;
                renderProducts(sub);
            }
        }

        // Scroll to top
        els.screens[screenName].scrollTop = 0;
    }

    // --- Rendering ---
    function renderCategories() {
        els.lists.category.innerHTML = '';
        state.data.categories.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${cat.image}" class="card-image" loading="lazy" alt="${cat.name}">
                <div class="card-content">
                    <div class="card-title">${cat.name}</div>
                </div>
            `;
            card.addEventListener('click', () => showScreen('subcategory', cat.id));
            els.lists.category.appendChild(card);
        });
    }

    function renderSubCategories(category) {
        els.lists.subcategory.innerHTML = '';
        if (!category.subcategories || category.subcategories.length === 0) {
            els.lists.subcategory.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No sub-categories details available.</p>';
            return;
        }

        category.subcategories.forEach(sub => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${sub.image}" class="card-image" loading="lazy" alt="${sub.name}">
                <div class="card-content">
                    <div class="card-title">${sub.name}</div>
                </div>
            `;
            card.addEventListener('click', () => showScreen('product', sub.id));
            els.lists.subcategory.appendChild(card);
        });
    }

    function renderProducts(subCategory) {
        els.lists.product.innerHTML = '';
        if (!subCategory.products || subCategory.products.length === 0) {
            els.lists.product.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No items available.</p>';
            return;
        }

        subCategory.products.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card';

            // Generate star rating HTML
            const stars = generateStarRating(prod.averageRating || 0);

            // Format review count
            const reviewText = formatReviewCount(prod.reviewCount || 0);

            // Video Logic: Only autoplay if observer sees it
            card.innerHTML = `
                <div class="media-container loading-placeholder">
                    <img src="${prod.image}" alt="${prod.name}" loading="lazy">
                    <video src="${prod.video}" loop muted playsinline preload="none"></video>
                </div>
                <div class="product-details">
                    <div class="product-header">
                        <div class="product-name">${prod.name}</div>
                        <div class="product-price">${prod.price}</div>
                    </div>
                    <div class="product-meta">
                        <div class="product-rating">
                            <span class="stars">${stars}</span>
                            <span class="rating-value">${prod.averageRating || 0}</span>
                            <span class="review-count">${reviewText}</span>
                        </div>
                        <div class="price-range">${prod.priceRange || '$'}</div>
                    </div>
                    <div class="product-desc">${prod.description}</div>
                </div>
            `;
            els.lists.product.appendChild(card);

            // Setup Video Observer for this card
            observeVideo(card.querySelector('.media-container'));
        });
    }

    // Helper function to generate star rating HTML
    function generateStarRating(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        let stars = '';
        // Full stars
        for (let i = 0; i < fullStars; i++) {
            stars += '★';
        }
        // Half star
        if (hasHalfStar) {
            stars += '⯨';
        }
        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars += '☆';
        }

        return stars;
    }

    // Helper function to format review count
    function formatReviewCount(count) {
        if (count === 0) {
            return 'No reviews';
        } else if (count === 1) {
            return '(1 review)';
        } else if (count >= 1000) {
            return `(${(count / 1000).toFixed(1)}k reviews)`;
        } else {
            return `(${count} reviews)`;
        }
    }


    // --- Video Observation ---
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.6 // Play when 60% visible
    };

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const container = entry.target;
            const video = container.querySelector('video');

            if (entry.isIntersecting) {
                // Play
                container.classList.add('playing');
                if (video.paused) {
                    // Try to play logic
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            // Auto-play was prevented
                            console.log("Autoplay prevented");
                        });
                    }
                }
            } else {
                // Pause
                container.classList.remove('playing');
                if (!video.paused) {
                    video.pause();
                }
            }
        });
    }, observerOptions);

    function observeVideo(container) {
        if (container) videoObserver.observe(container);
    }

    // Start
    init();
});
