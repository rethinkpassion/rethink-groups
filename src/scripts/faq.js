/**
 * FAQ accordion - expand/collapse answers
 */
window.initFaqComponents = function () {
    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach((item) => {
        const btn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        if (!btn || !answer) return;

        btn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            items.forEach((other) => {
                other.classList.remove('active');
                const otherBtn = other.querySelector('.faq-question');
                const otherAnswer = other.querySelector('.faq-answer');
                if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                if (otherAnswer) otherAnswer.style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
};
