document.querySelectorAll('.icon').forEach((icon) => {
    icon.addEventListener('mousemove', (event) => {
        const iconRect = icon.getBoundingClientRect();
        const x = ((event.clientX - iconRect.left) / iconRect.width - 0.5) * 20; // Calculate horizontal movement
        const y = ((event.clientY - iconRect.top) / iconRect.height - 0.5) * 20; // Calculate vertical movement
        icon.style.setProperty('--x', `${x}px`);
        icon.style.setProperty('--y', `${y}px`);
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.setProperty('--x', '0px');
        icon.style.setProperty('--y', '0px');
    });
});






// Show and hide dropdown on hover
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.navbar-light .dmenu').forEach(function (el) {
        el.addEventListener('mouseover', function () {
            let dropdown = el.querySelector('.sm-menu');
            if (dropdown) dropdown.classList.add('show');
        });

        el.addEventListener('mouseleave', function () {
            let dropdown = el.querySelector('.sm-menu');
            if (dropdown) dropdown.classList.remove('show');
        });
    });
});

// Prevent megamenu from closing on click inside
document.querySelectorAll('.megamenu').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll('.dynamic-underline');
    
    headings.forEach(h2 => {
        const width = h2.scrollWidth; // Get the width of the heading text
        h2.style.setProperty('--underline-width', `${width}px`); // Set the width as a CSS variable
    });

    // Add event listener for hover effect
    headings.forEach(h2 => {
        h2.addEventListener('mouseenter', () => {
            h2.style.setProperty('--underline-width', `${h2.scrollWidth * 0.73}px`);
        });

        h2.addEventListener('mouseleave', () => {
            h2.style.setProperty('--underline-width', '0px');
        });
    });
});


