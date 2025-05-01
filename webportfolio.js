document.addEventListener('DOMContentLoaded', () => {
    const navlinksEl = document.querySelector('.navlinks');
    const hambargerElement = document.querySelector('.hambarger');

    if (hambargerElement && navlinksEl) {
        hambargerElement.addEventListener('click', () => {
            console.log('Hamburger clicked'); // Debugging log
            navlinksEl.classList.toggle('navlinks--open');
        });
    } else {
        console.error('Elements not found: Check class names or HTML structure.');
    }
});

