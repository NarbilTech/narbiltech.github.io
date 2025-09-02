
        // DOM Elements
        const header = document.getElementById('header');
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.getElementById('nav');
        const contactForm = document.getElementById('contactForm');
        
        // Scroll Event Listener
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Animate elements on scroll
            animateOnScroll();
        });
        
        // Mobile Menu Toggle
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after click
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            });
        });
        
        // Contact Form Submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // Here you would normally send the form data to a server
                alert('Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
                contactForm.reset();
            } else {
                alert('Lütfen tüm alanları doldurun.');
            }
        });
        
        // Animate elements on scroll
        function animateOnScroll() {
            const scrollElements = document.querySelectorAll('.service-card, .blog-card');
            
            const elementInView = (el, dividend = 1) => {
                const elementTop = el.getBoundingClientRect().top;
                return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
            };
            
            const displayScrollElement = (element) => {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            };
            
            const hideScrollElement = (element) => {
                element.style.opacity = "0";
                element.style.transform = "translateY(20px)";
            };
            
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.2)) {
                    displayScrollElement(el);
                }
            });
        }
        
        // Initialize animations
        document.addEventListener('DOMContentLoaded', () => {
            // Initially hide elements that will be animated on scroll
            const scrollElements = document.querySelectorAll('.service-card, .blog-card');
            scrollElements.forEach(el => {
                el.style.opacity = "0";
                el.style.transform = "translateY(20px)";
                el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            });
            
            // Trigger scroll once to check initial position
            setTimeout(animateOnScroll, 100);
        });
