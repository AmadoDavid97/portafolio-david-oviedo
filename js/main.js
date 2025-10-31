        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header scroll effect
        let lastScroll = 0;
        const header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }

            lastScroll = currentScroll;
        });

        // Scroll reveal animation
        const revealElements = document.querySelectorAll('.reveal');

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const revealPoint = 100;

            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;

                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check

        // Form submission
        const contactForm = document.getElementById('contactForm');

        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value
                };

                // Aquí deberías implementar el envío real del formulario
                // Por ahora, solo mostramos un mensaje de confirmación
                alert('¡Gracias por tu mensaje! Te responderé pronto.');
                contactForm.reset();
            });
        }

        // Typing effect for hero subtitle (optional enhancement)
        const subtitle = document.querySelector('.hero-text h2');
        
        if (subtitle) {
            const text = subtitle.textContent;
            subtitle.textContent = '';
            let i = 0;

            function typeWriter() {
                if (i < text.length) {
                    subtitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            }

            setTimeout(typeWriter, 1000);
        }

        // Skill tags hover effect
        const skillTags = document.querySelectorAll('.skill-tag');

        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });

            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Project cards 3D effect
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });

            card.addEventListener('mouseleave', function() {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });

        // Active nav link on scroll
        const sections = document.querySelectorAll('section[id]');

        function highlightNavLink() {
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink?.classList.add('active');
                } else {
                    navLink?.classList.remove('active');
                }
            });
        }

        window.addEventListener('scroll', highlightNavLink);

        // Add active class style
        const style = document.createElement('style');
        style.textContent = `
            .nav-links a.active {
                color: var(--primary-color);
            }
            .nav-links a.active::after {
                width: 100%;
            }
        `;
        document.head.appendChild(style);

        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                if (scrolled < window.innerHeight) {
                    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
            });
        }

        // Console message
        console.log('%c¡Hola! 👋', 'font-size: 20px; font-weight: bold; color: #2563eb;');
        console.log('%c¿Interesado en trabajar juntos? Contactame!', 'font-size: 14px; color: #64748b;');