
document.addEventListener('DOMContentLoaded', () => {
    letterBox();
});
function letterBox() {
    const container = document.getElementById('letter-box');

    if (!container) {
        setTimeout(letterBox, 50);
        return;
    }

    const letters = ["R","E","T","H","I","N","K","space","G","R","O","U","P","S"];

    container.innerHTML = '';

    letters.forEach((char) => {

        if (char === "space") {
            const space = document.createElement('div');
            space.style.width = "40px";
            container.appendChild(space);
            return;
        }
        const wrapper = document.createElement('div');
        wrapper.classList.add('letter-wrapper');
        const gradientEl = document.createElement('div');
        gradientEl.classList.add('letter-gradient');
        const maskUrl = 'url("public/assets/images/mask/Vector-' + char + '.svg")';
        gradientEl.style.webkitMaskImage = maskUrl;
        gradientEl.style.maskImage = maskUrl;
        gradientEl.style.webkitMaskSize = 'contain';
        gradientEl.style.maskSize = 'contain';
        gradientEl.style.webkitMaskRepeat = 'no-repeat';
        gradientEl.style.maskRepeat = 'no-repeat';
        gradientEl.style.webkitMaskPosition = 'center';
        gradientEl.style.maskPosition = 'center';
        wrapper.appendChild(gradientEl);
        const img = document.createElement('img');
        img.src = `public/assets/images/Vector-${char}.svg`;
        img.classList.add('letter-img');
        wrapper.appendChild(img);
        container.appendChild(wrapper);

        //    wrapper.style.webkitMaskImage = `url(../../public/assets/images/Vector-${char}.svg)`;
        // wrapper.style.maskImage = `url(../../public/assets/images/Vector-${char}.svg)`;
        // wrapper.style.webkitMaskSize = "contain";
        // wrapper.style.maskSize = "contain";
        // wrapper.style.webkitMaskRepeat = "no-repeat";
        // wrapper.style.maskRepeat = "no-repeat";
        // wrapper.style.webkitMaskPosition = "center";
        // wrapper.style.maskPosition = "center";
    });
}
letterBox();
