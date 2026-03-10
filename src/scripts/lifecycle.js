/**
 * Lifecycle section - reveal on scroll + mobile horizontal scroll (middle card active)
 */
window.initLifecycleComponents = function () {
    const section = document.querySelector('.lifecycle-section');
    const cardsContainer = document.querySelector('.lifecycle-cards');
    const cards = document.querySelectorAll('.lifecycle-card');
    if (!section) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add('reveal-active');
                    observer.unobserve(section);
                    initMobileLifecycleScroll();
                }
            });
        },
        { threshold: 0.15 }
    );

    observer.observe(section);

    function initMobileLifecycleScroll() {
        if (!cardsContainer || cards.length === 0) return;
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (!isMobile) return;

        const middleIndex = Math.floor(cards.length / 2);
        cards.forEach((c) => c.classList.remove('active'));
        cards[middleIndex]?.classList.add('active');

        // Scroll to middle card so it's centered and active on load
        const cardWidth = cards[0]?.offsetWidth ?? 280;
        const gap = 16;
        const padding = 24;
        const scrollLeft = (cardWidth + gap) * middleIndex - (cardsContainer.offsetWidth / 2) + (cardWidth / 2) + padding;
        cardsContainer.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'auto' });

        // Update active card on scroll (center card gets .active)
        let scrollTimeout;
        cardsContainer.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const containerRect = cardsContainer.getBoundingClientRect();
                const centerX = containerRect.left + containerRect.width / 2;
                let closestIdx = 0;
                let closestDist = Infinity;
                cards.forEach((card, i) => {
                    const rect = card.getBoundingClientRect();
                    const cardCenter = rect.left + rect.width / 2;
                    const dist = Math.abs(cardCenter - centerX);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closestIdx = i;
                    }
                });
                cards.forEach((c) => c.classList.remove('active'));
                cards[closestIdx]?.classList.add('active');
            }, 80);
        });
    }
};
