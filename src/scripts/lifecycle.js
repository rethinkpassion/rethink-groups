/**
 * Lifecycle section - reveal on scroll
 */
window.initLifecycleComponents = function () {
    const section = document.querySelector('.lifecycle-section');
    if (!section) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add('reveal-active');
                    observer.unobserve(section);
                }
            });
        },
        { threshold: 0.15 }
    );

    observer.observe(section);
};
