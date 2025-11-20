// Typing animation for hero section
const typingText = document.getElementById('typing-text');
const text = "Full Stack Java & MERN Developer — AI Enthusiast";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.setAttribute('data-theme', body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    themeToggle.innerHTML = body.getAttribute('data-theme') === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Set initial icon to sun since default is dark
themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu';
mobileMenu.innerHTML = navLinks.outerHTML;
document.body.appendChild(mobileMenu);

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuToggle.innerHTML = mobileMenu.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        mobileMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        if (body.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.95)';
        }
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        if (body.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.8)';
        }
    }
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section > .container').forEach(section => {
    observer.observe(section);
});

// Back to top button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Parallax scrolling for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.getElementById('hero');
    const rate = scrolled * -0.5;

    hero.style.transform = `translateY(${rate}px)`;
});

// Enhanced scroll-based fade/slide animations
const sections = document.querySelectorAll('section');

const fadeOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, fadeOptions);

sections.forEach(section => {
    section.style.opacity = '1'; // Make sections visible by default
    section.style.transform = 'translateY(0)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(section);
});



// Gradient color changes for floating shapes
const floatingShapes = document.querySelectorAll('.floating-shape');
let colorIndex = 0;
const gradientColors = [
    'linear-gradient(45deg, #6A5AE0, #4CC3FF)',
    'linear-gradient(45deg, #B470FF, #5CFAFF)',
    'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
    'linear-gradient(45deg, #45B7D1, #96CEB4)',
    'linear-gradient(45deg, #FECA57, #FF9FF3)'
];

setInterval(() => {
    floatingShapes.forEach((shape, index) => {
        setTimeout(() => {
            shape.style.background = gradientColors[colorIndex % gradientColors.length];
        }, index * 500);
    });
    colorIndex++;
}, 3000);

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Contact Form Submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
});
