// script.js - Complete Fixed Version with New Typing Animation
document.addEventListener('DOMContentLoaded', function() {
    // ===== CONFIGURATION DATA =====
    const projectsData = [
        {
            icon: '🧠',
            title: 'AI Resume Builder',
            description: 'Generates professional resumes using artificial intelligence with customizable templates and content suggestions.',
            tech: ['Python', 'AI/ML', 'Flask'],
            links: [
                { type: 'demo', url: '#', text: 'Live Demo' },
                { type: 'github', url: '#', text: 'GitHub' }
            ]
        },
        {
            icon: '🏙️',
            title: 'Travel Guide Website',
            description: 'A comprehensive city guide showing famous places, nearby restaurants, and local attractions with real-time data.',
            tech: ['HTML5', 'CSS3', 'JavaScript'],
            links: [
                { type: 'demo', url: 'https://oggyjack07.github.io/City-Guide-website-Project/', text: 'Live Demo' },
                { type: 'github', url: '#', text: 'GitHub' }
            ]
        },
        {
            icon: '🎮',
            title: 'BGMI Tournament Website',
            description: 'Complete tournament management system for BGMI with team registration, scheduling, and live updates.',
            tech: ['PHP', 'MySQL', 'JavaScript'],
            links: [
                { type: 'demo', url: '#', text: 'Live Demo' },
                { type: 'github', url: '#', text: 'GitHub' },
                { type: 'progress', url: '#', text: 'In Progress' }
            ]
        },
        {
            icon: '🎨',
            title: 'Color Prediction Game',
            description: 'Educational color prediction web application demonstrating frontend development concepts and algorithms.',
            tech: ['PHP', 'MySQL', 'JavaScript'],
            links: [
                { type: 'demo', url: '#', text: 'Live Demo' },
                { type: 'github', url: '#', text: 'GitHub' }
            ]
        },
        {
            icon: '🏫',
            title: 'College Management System',
            description: 'Complete college management website with student portal, faculty dashboard, and admin panel.',
            tech: ['PHP', 'MySQL', 'JavaScript'],
            links: [
                { type: 'demo', url: '#', text: 'Live Demo' },
                { type: 'github', url: '#', text: 'GitHub' }
            ]
        },
        {
            icon: '🖼️',
            title: 'Image Predictor',
            description: 'Advanced image classification system using CLIP model to identify objects in photos with high accuracy.',
            tech: ['Pytorch', 'CLIP Model', 'TensorFlow'],
            links: [
                { type: 'demo', url: '#', text: 'Live Demo' },
                { type: 'github', url: '#', text: 'GitHub' }
            ]
        }
    ];

    const educationData = [
        {
            icon: '🎓',
            title: 'Diploma in Computer Science',
            institute: 'Polytechnic College, Dewas',
            affiliation: 'RGPV University',
            duration: '2022-2025 (Completed)',
            grades: 'CGPA: 6.67/10'
        },
        {
            icon: '💻',
            title: 'B.Tech in Computer Science',
            institute: 'MIT College, Ujjain',
            affiliation: 'RGPV University',
            duration: '2025 - 2028 (Currently in 2nd Year)',
            grades: 'Pursuing'
        }
    ];

    const certificationsData = [
        {
            icon: '🌐',
            title: 'Web Development',
            issuer: 'Offline Platform',
            date: '2023',
            download: 'certificates/web-development.pdf',
            image: 'certificates/web-development.jpg'
        },
        {
            icon: '⚡',
            title: 'C Programming',
            issuer: 'Offline Platform',
            date: '2024',
            download: 'certificates/c-programming.pdf',
            image: 'certificates/c-programming.jpg'
        },
        {
            icon: '🔷',
            title: 'C++ Programming',
            issuer: 'Offline Platform',
            date: '2024',
            download: 'certificates/cpp-programming.pdf',
            image: 'certificates/cpp-programming.jpg'
        },
        {
            icon: '🐍',
            title: 'Python Programming',
            issuer: 'Offline Platform',
            date: '2024',
            download: 'certificates/python-programming.pdf',
            image: 'certificates/python-programming.jpg'
        }
    ];

    // ===== LOGO TYPING ANIMATION =====
    function initLogoTyping() {
        const logoElements = document.querySelectorAll('.typing-logo, .typing-logo-small');
        
        logoElements.forEach(logo => {
            const texts = ['</>', '<\\>', '</>', 'SV'];
            let currentIndex = 0;
            
            function updateLogo() {
                logo.textContent = texts[currentIndex];
                currentIndex = (currentIndex + 1) % texts.length;
            }
            
            // Initial update
            updateLogo();
            
            // Change every 2 seconds
            setInterval(updateLogo, 2000);
        });
    }

    // ===== NEW TYPING ANIMATION WITH DOTS =====
    function initNameAnimation() {
        const nameElement = document.querySelector('.name-animation');
        const cursorElement = document.querySelector('.blinking-cursor');
        
        if (!nameElement || !cursorElement) return;

        const fullText = "Suraj Verma";
        let currentState = 'typing'; // typing -> waiting -> deleting -> waiting -> typing
        let charIndex = 0;
        let dotCount = 0;
        let maxDots = 3;
        let animationSpeed = 100;

        function animate() {
            switch(currentState) {
                case 'typing':
                    // Typing the name
                    if (charIndex <= fullText.length) {
                        nameElement.textContent = fullText.substring(0, charIndex);
                        charIndex++;
                        setTimeout(animate, charIndex === 1 ? 500 : animationSpeed);
                    } else {
                        // Finished typing, wait then start dots
                        currentState = 'waiting-before-dots';
                        setTimeout(animate, 60000);
                    }
                    break;

                case 'waiting-before-dots':
                    // Show blinking dots
                    currentState = 'showing-dots';
                    dotCount = 0;
                    animate();
                    break;

                case 'showing-dots':
                    // Animate dots (....)
                    if (dotCount <= maxDots) {
                        let dots = '.'.repeat(dotCount);
                        nameElement.textContent = fullText + dots;
                        dotCount++;
                        setTimeout(animate, 400);
                    } else {
                        // Finished dots, wait then start deleting
                        currentState = 'waiting-before-delete';
                        setTimeout(animate, 1000);
                    }
                    break;

                case 'waiting-before-delete':
                    // Wait before deleting
                    currentState = 'deleting';
                    charIndex = fullText.length;
                    setTimeout(animate, 500);
                    break;

                case 'deleting':
                    // Deleting the text with dots
                    if (charIndex >= 0) {
                        let currentText = fullText.substring(0, charIndex);
                        let dots = '.'.repeat(Math.min(dotCount, charIndex === fullText.length ? maxDots : 0));
                        nameElement.textContent = currentText + dots;
                        charIndex--;
                        setTimeout(animate, animationSpeed);
                    } else {
                        // Finished deleting, wait then restart
                        currentState = 'waiting-before-restart';
                        setTimeout(animate, 1000);
                    }
                    break;

                case 'waiting-before-restart':
                    // Wait 1 minute (60000ms) before restarting
                    nameElement.textContent = '';
                    currentState = 'typing';
                    charIndex = 0;
                    setTimeout(animate, 1000); // 1 minute wait
                    break;
            }
        }

        // Start the animation
        setTimeout(animate, 1000);
    }

    // ===== REUSABLE COMPONENT FUNCTIONS =====
    
    function createProjectCard(project) {
        return `
            <div class="project-card">
                <div class="project-icon">${project.icon}</div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.links.map(link => 
                        link.type === 'progress' 
                            ? `<a href="${link.url}" class="project-link in-progress">
                                 <i class="fas fa-tools"></i> ${link.text}
                               </a>`
                            : `<a href="${link.url}" class="project-link" target="_blank">
                                 <i class="${link.type === 'demo' ? 'fas fa-external-link-alt' : 'fab fa-github'}"></i> ${link.text}
                               </a>`
                    ).join('')}
                </div>
            </div>
        `;
    }

    function createEducationCard(education) {
        return `
            <div class="education-card">
                <div class="edu-icon">${education.icon}</div>
                <h3>${education.title}</h3>
                <p class="institute">${education.institute}</p>
                <p class="institute-affiliation">${education.affiliation}</p>
                <p class="duration">${education.duration}</p>
                <p class="grades">${education.grades}</p>
            </div>
        `;
    }

    function createCertificationCard(cert, index) {
        const mobileHidden = index >= 2 ? 'mobile-hidden' : '';
        return `
            <div class="cert-card ${mobileHidden}">
                <div class="cert-icon">${cert.icon}</div>
                <h3>${cert.title}</h3>
                <p class="cert-issuer">${cert.issuer}</p>
                <span class="cert-date">${cert.date}</span>
                <div class="cert-actions">
                    <button class="cert-view-btn" data-cert-index="${index}">
                        <i class="fas fa-eye"></i> View Certificate
                    </button>
                    <a href="${cert.download}" download class="cert-download-btn">
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;
    }

    // ===== INITIALIZE SECTIONS =====
    function initializeSections() {
        // Load Projects
        const projectsGrid = document.querySelector('.projects-grid');
        projectsGrid.innerHTML = projectsData.map(createProjectCard).join('');

        // Load Education
        const educationGrid = document.querySelector('.education-grid');
        educationGrid.innerHTML = educationData.map(createEducationCard).join('');

        // Load Certifications
        const certsGrid = document.querySelector('.certs-grid');
        certsGrid.innerHTML = certificationsData.map(createCertificationCard).join('');
    }

    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
    }
    
    themeToggle.addEventListener('click', function() {
        let theme = 'light';
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            theme = 'dark';
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    // ===== MOBILE MENU =====
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===== SMOOTH SCROLLING =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== NAVBAR SCROLL EFFECT =====
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== VIEW MORE FUNCTIONALITY =====
    const viewMoreBtn = document.getElementById('view-more-btn');
    const projectsGrid = document.querySelector('.projects-grid');
    
    if (viewMoreBtn && projectsGrid) {
        viewMoreBtn.addEventListener('click', function() {
            projectsGrid.classList.toggle('show-all');
            
            if (projectsGrid.classList.contains('show-all')) {
                viewMoreBtn.innerHTML = '<i class="fas fa-chevron-up"></i> View Less Projects';
            } else {
                viewMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> View More Projects';
            }
        });
    }

    const viewMoreCertsBtn = document.getElementById('view-more-certs-btn');
    const certsGrid = document.querySelector('.certs-grid');
    
    if (viewMoreCertsBtn && certsGrid) {
        viewMoreCertsBtn.addEventListener('click', function() {
            certsGrid.classList.toggle('show-all-certs');
            
            if (certsGrid.classList.contains('show-all-certs')) {
                viewMoreCertsBtn.innerHTML = '<i class="fas fa-chevron-up"></i> View Less Certificates';
            } else {
                viewMoreCertsBtn.innerHTML = '<i class="fas fa-chevron-down"></i> View More Certificates';
            }
        });
    }

    // ===== CERTIFICATE MODAL WITH IMAGE VIEW =====
    const certModal = document.querySelector('.cert-modal');
    const closeModalBtn = certModal.querySelector('.close-modal');
    const closeCertBtn = certModal.querySelector('.close-cert-btn');
    const downloadCertBtn = certModal.querySelector('.download-cert-btn');
    const certificateImage = certModal.querySelector('.certificate-image');
    const certificatePlaceholder = certModal.querySelector('.certificate-placeholder');
    const certName = certModal.querySelector('.cert-name');
    const certIssuer = certModal.querySelector('.cert-issuer');
    const certDate = certModal.querySelector('.cert-date');

    // Add event listeners to view buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('cert-view-btn') || e.target.closest('.cert-view-btn')) {
            const btn = e.target.classList.contains('cert-view-btn') ? e.target : e.target.closest('.cert-view-btn');
            const certIndex = btn.getAttribute('data-cert-index');
            const cert = certificationsData[certIndex];
            
            if (cert) {
                // Try to load certificate image
                if (cert.image) {
                    certificateImage.src = cert.image;
                    certificateImage.alt = `${cert.title} Certificate`;
                    
                    // Show image when loaded, show placeholder if error
                    certificateImage.onload = function() {
                        certificateImage.style.display = 'block';
                        certificatePlaceholder.style.display = 'none';
                    };
                    
                    certificateImage.onerror = function() {
                        certificateImage.style.display = 'none';
                        certificatePlaceholder.style.display = 'block';
                        certificatePlaceholder.querySelector('p').textContent = 'Certificate Image Not Available';
                    };
                } else {
                    certificateImage.style.display = 'none';
                    certificatePlaceholder.style.display = 'block';
                }
                
                // Update modal details
                certName.textContent = cert.title;
                certIssuer.textContent = cert.issuer;
                certDate.textContent = cert.date;
                
                // Update download link
                downloadCertBtn.href = cert.download;
                
                // Show modal
                certModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    });

    function closeModal() {
        certModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeModalBtn.addEventListener('click', closeModal);
    closeCertBtn.addEventListener('click', closeModal);
    
    certModal.addEventListener('click', function(e) {
        if (e.target === certModal) {
            closeModal();
        }
    });

    // ===== FORM SUBMISSION =====
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        });
    }

    // ===== NOTIFICATION FUNCTION =====
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    // ===== SCROLL INDICATOR =====
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }

    // ===== INITIALIZE ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.skill-category, .project-card, .education-card, .cert-card, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== INITIALIZE EVERYTHING =====
    initLogoTyping();
    initNameAnimation();
    initializeSections();
});
