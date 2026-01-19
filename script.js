// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        document.getElementById('main-content').style.opacity = '1';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500);
    }, 1500);
});

// Fade in animation on scroll
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        document.getElementById('main-content').style.opacity = '1';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500);
    }, 1500);
});

// Fade in animation on scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Navbar background and text color on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        const navLinks = nav.querySelectorAll('a');
        const navTitle = nav.querySelector('h1');
        const mobileMenuIcon = nav.querySelector('#mobile-menu-btn i');
        
        if (window.scrollY > 100) {
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-black');
            });
            if (navTitle) {
                navTitle.classList.remove('text-white');
                navTitle.classList.add('text-black');
            }
            if (mobileMenuIcon) {
                mobileMenuIcon.classList.remove('text-white');
                mobileMenuIcon.classList.add('text-black');
            }
        } else {
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-black');
            });
            if (navTitle) {
                navTitle.classList.remove('text-white');
                navTitle.classList.add('text-black');
            }
            if (mobileMenuIcon) {
                mobileMenuIcon.classList.remove('text-white');
                mobileMenuIcon.classList.add('text-black');
            }
        }
    });
});