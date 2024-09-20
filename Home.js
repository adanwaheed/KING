document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.querySelector('.scroll-text');
  const text = textElement.textContent;
  textElement.textContent = '';

  // Split the text into spans for each character
  text.split('').forEach(letter => {
      const span = document.createElement('span');
      span.textContent = letter;
      textElement.appendChild(span);
  });

  const spans = textElement.querySelectorAll('span');
  let lastScrollY = 0;

  // Function to handle the scroll animation
  const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const revealPoint = 100; // adjust this value as needed
      spans.forEach((span, index) => {
          const delay = index * 2; // decrease this value to make the animation faster
          if (scrollPosition > delay + revealPoint) {
              span.style.transition = 'opacity 0.1s ease-out, transform 0.1s ease-out';
              span.style.opacity = 1;
              span.style.transform = 'translateY(0)';
          } else {
              span.style.transition = 'opacity 0.1s ease-out, transform 0.1s ease-out';
              span.style.opacity = 0;
              span.style.transform = 'translateY(30px)';
          }
      });
  };

  // Use requestAnimationFrame for optimized scrolling
  const optimizedScroll = () => {
      if (lastScrollY !== window.scrollY) {
          handleScroll();
          lastScrollY = window.scrollY;
      }
      requestAnimationFrame(optimizedScroll);
  };

  optimizedScroll();
});



const slider = document.getElementById('slider');
const image = document.getElementById('image');
const container = document.querySelector('.container5');

let containerWidth = container.offsetWidth;

// Function to adjust the image filter and slider position based on mouse movement
function slideMove(e) {
    // Calculate slider position relative to the container
    let xPos = e.clientX - container.getBoundingClientRect().left;
    
    // Ensure slider doesn't go outside the container
    if (xPos < 0) xPos = 0;
    if (xPos > containerWidth) xPos = containerWidth;

    // Calculate the filter grayscale percentage based on slider position
    let filterValue = 100 - (xPos / containerWidth) * 100;

    // Apply grayscale filter to the image (0% when slider is fully right)
    image.style.filter = `grayscale(${filterValue}%)`;

    // Move the slider with the mouse
    slider.style.left = `${xPos}px`;
}

// Add mouse events to move the slider
slider.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', slideMove);
});

// Stop moving the slider when mouse button is released
document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', slideMove);
});

// Recalculate container width on window resize for responsiveness
window.addEventListener('resize', () => {
    containerWidth = container.offsetWidth;
});





// Function to show the small image with smooth transition
function showImage(id) {
    const image = document.getElementById(id);
    image.style.opacity = '1';
    image.style.transform = 'scale(1.1)'; // Slight zoom effect on hover
}

// Function to hide the small image with smooth transition
function hideImage(id) {
    const image = document.getElementById(id);
    image.style.opacity = '0';
    image.style.transform = 'scale(1)'; // Return to original size
}

// Hover functionality for dot 1
document.getElementById("dot1").addEventListener("mouseover", function() {
    showImage("image1");
});
document.getElementById("dot1").addEventListener("mouseout", function() {
    hideImage("image1");
});

// Hover functionality for dot 2
document.getElementById("dot2").addEventListener("mouseover", function() {
    showImage("image2");
});
document.getElementById("dot2").addEventListener("mouseout", function() {
    hideImage("image2");
});



function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const toggleSign = element.querySelector('.faq-toggle');

    if (answer.classList.contains('open')) {
        answer.classList.remove('open');
        toggleSign.textContent = "+";
    } else {
        answer.classList.add('open');
        toggleSign.textContent = "-";
    }
}


document.querySelector('.container-deals').addEventListener('wheel', function (e) {
    if (e.deltaY > 0) {
        this.scrollLeft += 100; // Scroll right
    } else {
        this.scrollLeft -= 100; // Scroll left
    }
});
