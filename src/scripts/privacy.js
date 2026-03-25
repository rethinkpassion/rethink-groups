function initPrivacyComponents() {
  const links = document.querySelectorAll('.privacy-nav-link');
  if (!links.length) return;

  function setActiveFromHash() {
    const hash = (window.location.hash || '').replace('#', '');
    if (!hash.startsWith('privacy-')) return;

    const suffix = hash.replace('privacy-', ''); // introduction, data-collection, etc.
    links.forEach(l => {
      const matches = l.dataset && l.dataset.privacyNav === suffix;
      l.classList.toggle('active', matches);
    });
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // Ensure we scroll the inner privacy container (not just the document).
      const href = link.getAttribute('href') || '';
      const targetId = href.startsWith('#') ? href.slice(1) : null;

      if (targetId) {
        e.preventDefault();
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Keep URL/hash in sync for refresh/back/forward.
          window.location.hash = '#' + targetId;
        }
      }

      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Initial active state (e.g. when navigating back/forward)
  setActiveFromHash();
  window.addEventListener('hashchange', setActiveFromHash);
}

window.initPrivacyComponents = initPrivacyComponents;

