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

// iiiiiiii

// function adjustPseudoElement() {
//     const header = document.querySelector('header');
//     const headerHeight = header.offsetHeight;
//     const sections = document.querySelectorAll('section');

//     // Set the --header-height variable on the :root element
//     document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
// }

// // Call the function once to set the initial height
// adjustPseudoElement();

// // Update the --header-height variable whenever the window is resized
// window.addEventListener('resize', adjustPseudoElement);