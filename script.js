// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a simple console greeting
console.log('Anta baka? - Asuka Langley Soryu');

// Add a subtle hover effect for post titles
document.querySelectorAll('.post h2 a').forEach(title => {
    title.addEventListener('mouseover', function() {
        this.style.color = '#a02020'; // Slightly darker red on hover
    });
    
    title.addEventListener('mouseout', function() {
        this.style.color = ''; // Revert to original color
    });
});

// Add current year to footer
const currentYear = new Date().getFullYear();
document.querySelector('footer p').textContent = `© ${currentYear} Asuka Langley Soryu. All rights reserved.`;
