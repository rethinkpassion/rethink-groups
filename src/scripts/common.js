document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadHomeContent();
   const TOTAL_MS = 5500; // 13s approx

   setTimeout(() => {
     document.body.classList.add("is-ready");
   }, TOTAL_MS);
});

async function loadNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (!navbarPlaceholder) return;

    try {
        // Determine path to navbar.html based on current location
        // For root index.html, it's src/components/layout/navbar.html
        const response = await fetch('src/components/layout/navbar.html');
        if (response.ok) {
            const html = await response.text();
            navbarPlaceholder.innerHTML = html;

            // Set active state
            setActiveLink();

            // Initialize mobile menu if needed
            initMobileMenu();
        }
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

function setActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes(page)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('open');
        });
    }
}

async function loadHomeContent() {
    const homePlaceholder = document.getElementById('home-placeholder');
    if (!homePlaceholder) return;

    try {
        const response = await fetch('src/components/home/home.html');
        if (response.ok) {
            const html = await response.text();
            homePlaceholder.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading home content:', error);
    }
}

/* ===============================
   LOADER CONTROL
=================================*/

function hideLoader() {
    const loader = document.getElementById('loader');

    loader.style.transition = "opacity 0.5s ease";
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
}
