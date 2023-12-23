window.addEventListener('resize', adjustPseudoElement);

function adjustPseudoElement() {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.setProperty('--header-height', `${headerHeight}px`);
    });
}

// Call the function once to set the initial height
adjustPseudoElement();