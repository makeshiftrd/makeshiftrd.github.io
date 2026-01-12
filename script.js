document.addEventListener('DOMContentLoaded', () => {
    console.log('Lorem Ipsum page loaded successfully!');

    // Update the copyright year dynamically in the footer
    const footerParagraph = document.querySelector('footer p');
    if (footerParagraph) {
        footerParagraph.textContent = `© ${new Date().getFullYear()} Lorem Ipsum Generator. All rights reserved.`;
    }
});