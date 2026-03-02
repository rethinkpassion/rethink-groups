// About-specific scripts
window.initSectorsComponents = () => {
    initSectorsReveal();
    initSectorHoverPreview();
};

function initSectorsReveal() {
    const aboutSection = document.querySelector('.sectors-section');
    if (!aboutSection) return;

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('reveal-active');
            }
        });
    }, observerOptions);

    observer.observe(aboutSection);

    // Dynamic translation on scroll
    window.addEventListener('scroll', () => {
        const rect = aboutSection.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

        if (scrollPercent > 0 && scrollPercent < 1) {
            const icon = aboutSection.querySelector('.floating-abstract-icon');
            if (icon) {
                const translateY = (1 - scrollPercent) * 50;
                const rotate = (1 - scrollPercent) * 15;
                icon.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
            }
        }
    });
}

/* ===========================
   SECTOR HOVER IMAGE PREVIEW
=========================== */

function initSectorHoverPreview() {

    const preview = document.getElementById("sector-hover-preview");
    const items = document.querySelectorAll(".primary-sectors-list p");

    if (!preview || items.length === 0) return;

    items.forEach(item => {

        item.addEventListener("mouseenter", function () {

            const imageSrc = this.getAttribute("data-image");
            if (!imageSrc) return;

            preview.src = imageSrc;
            preview.style.opacity = "1";

            const rect = this.getBoundingClientRect();

            preview.style.top =
                rect.top + window.scrollY + (rect.height / 2 - 51) + "px";

            preview.style.right =
                rect.right + 4 + "px";   // 10px gap
        });

        item.addEventListener("mouseleave", function () {
            preview.style.opacity = "0";
        });

    });
}
