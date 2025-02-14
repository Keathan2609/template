// Function to update loading counter
let loadingCounter = document.getElementById("loading-counter");
let count = 0;
let loadingInterval = setInterval(() => {
    if (count < 100) {
        count++;
        loadingCounter.textContent = count + "%";
    } else {
        clearInterval(loadingInterval);
        loadingCounter.style.display = "none";  // Hide counter when done
    }
}, 30);

// Show or hide the "Scroll to Top" button based on scroll position
window.onscroll = function() {
    const button = document.getElementById("scroll-to-top");  
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Smooth scrolling
    });
}

// Fade-in effect for sections when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const fadeInSections = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    // Function to check if section is in view
    const checkFadeIn = () => {
        fadeInSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight - 100) {
                section.classList.add('fade-in-visible');
            } else {
                section.classList.remove('fade-in-visible');
            }
        });
    };

    // Trigger the fade-in check on scroll
    window.addEventListener('scroll', checkFadeIn);

    // Trigger the fade-in check on page load
    checkFadeIn();
});

// nav links active state
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// hero section
const hero = document.querySelector('.hero');

// gradient cursor position
function updateGradient(e) {
    const x = e.clientX;
    const y = e.clientY;

    // gradient around cursor
    const gradient = `radial-gradient(circle at ${x}px ${y}px, rgba(206, 161, 225, 1) 1%, rgba(128, 127, 173, 1) 10%)`;

    // hero section gradient
    hero.style.background = gradient;
}

// event listener for mouse movement
window.addEventListener('mousemove', updateGradient);
