// Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const html = document.documentElement;

    // Check for saved theme or prefer-dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    if (initialTheme === 'dark') {
        html.classList.add('dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        html.classList.remove('dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeIcon.classList.toggle('fa-moon', !isDark);
        themeIcon.classList.toggle('fa-sun', isDark);
    });

    // Update current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Form submission (placeholder)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            // In a real project, you'd send this to a backend
            alert('Thanks for your message! This is a demo – in a real site, the form would send an email.');
            this.reset();
        });
    }

    // Smooth scroll for anchor links (already handled by Tailwind)
    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');

    function highlightNavLink() {
        let scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('text-primary', 'dark:text-secondary');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('text-primary', 'dark:text-secondary');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Mobile menu toggle (placeholder)
    const mobileMenuBtn = document.querySelector('.md\\:hidden');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            alert('Mobile menu would open here. For simplicity, this demo uses a desktop‑first layout.');
        });
    }

    // Add subtle parallax to hero background elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-bg');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
    });

    // Console greeting
    console.log('%c👋 Hello! This site was hand‑coded with Tailwind CSS and vanilla JavaScript.', 'color: #3b82f6; font-size: 1.1em;');
    console.log('%cNo bloated frameworks, no AI‑generated slop.', 'color: #8b5cf6;');
});