// Embedded projects data as fallback
const embeddedProjectsData = {
  "projects": [
    {
      "title": "Student Activity Monitoring AI",
      "description": "A smart and AI-enhanced Python system for monitoring student activity in computer labs. It tracks keystrokes, application usage, and unauthorized software behavior in real-time. The system automatically generates reports and sends alerts via email to educators, helping maintain a productive and focused digital learning environment.",
      "techStack": ["Python", "Sklearn","smtplib","matplotlib","Collections","subprocess"],
      "githubUrl": "https://github.com/RudrasenaReddy87/Student-Activity-Monitoring-Ai",
      "demoUrl": "",
      "lastUpdated": "2025-03-05",
      "created": "2025-04-24",
      "featured": true
    },
    {
      "title": "LinkedIn Automation Tool",
      "description": "Automates LinkedIn interactions like connections, messages, and endorsements with smart rate limiting to avoid account restrictions.",
      "techStack": ["Python", "Playwright", "Web Automation", "REST API"],
      "githubUrl": "https://github.com/RudrasenaReddy87/Linkedin-Automation",
      "demoUrl": "",
      "lastUpdated": "2025-09-03",
      "created": "2025-07-25",
      "featured": false
    },
    {
      "title": "CSS Button Generator",
      "description": "Generates custom CSS buttons with different styles, gradients, and hover effects with real-time preview and code export.",
      "techStack": ["HTML", "Tailwind", "Vite","React", "Autoprefixer","PostCSS"],
      "githubUrl": "https://github.com/RudrasenaReddy87/CSS-Button-Generator",
      "demoUrl": "https://rudrasenareddy87.github.io/CSS-Button-Generator/",
      "lastUpdated": "2025-08-02",
      "created": "2025-07-27",
      "featured": true
    },
    {
      "title": "Weather Forecasting App",
      "description": "Weather Forecasting App is a responsive web application that allows users to search for any city and view real-time weather information, including temperature, humidity, wind speed, and weather conditions. This project is built using HTML, CSS, JavaScript (Frontend) and Node.js (Backend), and is deployed on Render",
      "techStack": ["HTML","Node.js","React.js", "Weather API", "CSS", "Render","Git"],
      "githubUrl": "https://github.com/RudrasenaReddy87/Weather-forecasting-app",
      "demoUrl": "https://weather-forecasting-app-7m71.onrender.com/",
      "lastUpdated": "2025-08-05",
      "created": "2025-08-05",
      "featured": false
    },
    {
      "title": "Chrome Custom Home Page",
      "description": "A fully customized Chrome-style home page built with HTML, CSS, and JavaScript. Features include quick-access shortcuts, dynamic search bar, uploadable background, and a responsive design for both desktop and mobile.",
      "techStack": ["HTML", "CSS", "JavaScript", "Chrome Extensions"],
      "githubUrl": "https://github.com/RudrasenaReddy87/chrome-custom-home-page",
      "demoUrl": "https://rudrasenareddy87.github.io/chrome-custom-home-page/",
      "lastUpdated": "2025-08-14",
      "created": "2025-08-14",
      "featured": false
    },
    {
      "title": "WhatsApp Clone",
      "description": "A full-stack WhatsApp Web clone built with React and Node.js, featuring real-time messaging and modern UI/UX",
      "techStack": ["HTML","Node.js","React.js", "Express.js", "Socket.IO", "MongoDB","Git","Render"],
      "githubUrl": "https://github.com/RudrasenaReddy87/whatsapp-clone",
      "demoUrl": "https://whatsapp-clone-1-7uzd.onrender.com/",
      "lastUpdated": "2025-08-14",
      "created": "2025-08-11",
      "featured": true
    }
  ]
};

// Global variable to store projects data
let projectsData = {};
let currentThemeIndex = 1;
const totalThemes = 5;

// Initialize particles.js with custom configuration
// Initialize particles.js with custom configuration and color transition
function initParticles() {
    // Define color schemes to toggle between
    const colorSchemes = [
        { particle: "#6a11cb", line: "#6a11cb" }, // Blue-purple
        { particle: "#ff4e50", line: "#ff4e50" }, // Pink-red
        { particle: "#0cebeb", line: "#0cebeb" }, // Cyan
        { particle: "#f9d423", line: "#f9d423" }  // Yellow
    ];
    
    let currentColorIndex = 0;
    
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 120,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: colorSchemes[currentColorIndex].particle
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#f4f4f4ff"
                }
            },
            opacity: {
                value: 0.9,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 9,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: colorSchemes[currentColorIndex].line,
                opacity: 0.8,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    });

    // Function to change particle colors
    function changeParticleColors() {
        currentColorIndex = (currentColorIndex + 1) % colorSchemes.length;
        const newColor = colorSchemes[currentColorIndex];
        
        if (typeof pJSDom !== 'undefined' && pJSDom.length > 0 && pJSDom[0].pJS) {
            // Smooth transition for particle colors
            pJSDom[0].pJS.particles.color.value = newColor.particle;
            pJSDom[0].pJS.particles.line_linked.color = newColor.line;
            pJSDom[0].pJS.fn.particlesRefresh();
            
            // Add a subtle glow effect
            const canvas = document.querySelector('#particles-js canvas');
            if (canvas) {
                canvas.style.boxShadow = `0 0 20px ${newColor.particle}40`;
                setTimeout(() => {
                    canvas.style.boxShadow = 'none';
                }, 1000);
            }
        }
    }

    // Add click event to canvas for color change
    const canvas = document.querySelector('#particles-js canvas');
    if (canvas) {
        canvas.style.cursor = 'pointer';
        canvas.style.transition = 'box-shadow 1s ease';
        canvas.addEventListener('click', changeParticleColors);
    }
    
    // Add lightning effect on first load
    setTimeout(triggerLightningEffect, 1000);
}

// Function to trigger lightning effect
function triggerLightningEffect(e) {
    // Create lightning flash effect
    const lightning = document.createElement('div');
    lightning.className = 'lightning active';
    document.body.appendChild(lightning);
    
    // Create sparks flying from click point
    createSparksEffect(e.clientX, e.clientY);
    
    // Remove after animation completes
    setTimeout(() => {
        document.body.removeChild(lightning);
    }, 500);
    
    // Create ripple effect from click point
    createRippleEffect(e.clientX, e.clientY);
    
    // Discharge effect after a short delay
    setTimeout(() => {
        createDischargeEffect();
    }, 300);
}

// Create sparks flying from click point
function createSparksEffect(x, y) {
    const sparkCount = 30;
    
    for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        
        // Random direction and distance
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 200;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        // Set initial position
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        
        // Set CSS variables for animation
        spark.style.setProperty('--tx', `${tx}px`);
        spark.style.setProperty('--ty', `${ty}px`);
        
        // Random size and color
        const size = 2 + Math.random() * 4;
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;
        
        // Random color from current theme
        const colors = [
            getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim(),
            getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim(),
            getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim(),
            '#ffffff'
        ];
        spark.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Add animation
        spark.style.animation = `sparkMove ${0.5 + Math.random() * 0.5}s ease-out forwards`;
        
        document.body.appendChild(spark);
        
        // Remove after animation completes
        setTimeout(() => {
            if (spark.parentNode) {
                document.body.removeChild(spark);
            }
        }, 1000);
    }
}

// Create ripple effect from click point
function createRippleEffect(x, y) {
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.zIndex = '5';
    ripple.style.pointerEvents = 'none';
    
    document.body.appendChild(ripple);
    
    // Animate the ripple
    const startTime = Date.now();
    const duration = 1000;
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const size = progress * Math.max(window.innerWidth, window.innerHeight) * 1.5;
        const opacity = 1 - progress;
        
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.opacity = opacity;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            document.body.removeChild(ripple);
        }
    }
    
    requestAnimationFrame(animate);
}

// Create discharge effect (particles moving away from center)
function createDischargeEffect() {
    if (typeof pJSDom !== 'undefined' && pJSDom.length > 0 && pJSDom[0].pJS) {
        const particles = pJSDom[0].pJS.particles.array;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        particles.forEach(p => {
            const dx = p.x - centerX;
            const dy = p.y - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const force = Math.min(30, 1000 / distance);
            
            p.vx += (dx / distance) * force;
            p.vy += (dy / distance) * force;
        });
    }
}

// Function to load projects from JSON file with fallback
async function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '<div class="loading">Loading projects...</div>';
    
    try {
        // First try to load from external JSON file
        const response = await fetch('details_projects.json');
        
        if (!response.ok) {
            throw new Error('External JSON file not found or inaccessible');
        }
        
        const externalData = await response.json();
        
        // Validate the external data structure
        if (externalData && externalData.projects && Array.isArray(externalData.projects)) {
            projectsData = externalData;
            console.log('Projects loaded from external JSON file');
        } else {
            throw new Error('External JSON has invalid structure');
        }
    } catch (error) {
        console.warn('Could not load external JSON, using embedded data:', error);
        // Fall back to embedded data
        projectsData = embeddedProjectsData;
    }
    
    renderProjects();
}

// Function to render projects based on sort order
function renderProjects(sortBy = 'newest') {
    const projectsContainer = document.getElementById('projects-container');
    
    // Check if projects data is loaded
    if (!projectsData || !projectsData.projects || projectsData.projects.length === 0) {
        projectsContainer.innerHTML = '<div class="error-message"><p>No projects to display</p></div>';
        return;
    }
    
    projectsContainer.innerHTML = '';
    
    // Sort the projects based on the selected option
    let sortedProjects = [...projectsData.projects];
    
    switch(sortBy) {
        case 'newest':
            sortedProjects.sort((a, b) => new Date(b.created) - new Date(a.created));
            break;
        case 'oldest':
            sortedProjects.sort((a, b) => new Date(a.created) - new Date(b.created));
            break;
        case 'modified':
            sortedProjects.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
            break;
        case 'name':
            sortedProjects.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }
    
    // Create project cards
    sortedProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        if (project.featured) {
            projectCard.classList.add('featured');
        }
        
        projectCard.innerHTML = `
            <div class="card-content">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <div class="tech-tags">
                    ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="card-links">
                    <a href="${project.githubUrl}" target="_blank">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                </div>
                <div class="date-info">
                    <span>Created: ${formatDate(project.created)}</span>
                    <span>Updated: ${formatDate(project.lastUpdated)}</span>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
    
    // Trigger animation after a short delay
    setTimeout(revealCards, 50);
}

// Format date to more readable format
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Scroll animation for project cards
function revealCards() {
    const cards = document.querySelectorAll('.project-card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

// Add parallax effect to background elements
function updateParallax() {
    const scrollY = window.scrollY;
    const bg1 = document.querySelector('.bg-gradient-1');
    const bg2 = document.querySelector('.bg-gradient-2');
    
    if (bg1 && bg2) {
        bg1.style.transform = `translate(${scrollY * 0.02}px, ${scrollY * 0.02}px)`;
        bg2.style.transform = `translate(-${scrollY * 0.02}px, -${scrollY * 0.02}px)`;
    }
}

// Change color theme
function changeTheme() {
    // Remove previous theme class
    document.body.classList.remove(`theme-${currentThemeIndex}`);
    
    // Increment theme index
    currentThemeIndex = currentThemeIndex % totalThemes + 1;
    
    // Add new theme class
    document.body.classList.add(`theme-${currentThemeIndex}`);
    
    // Update particles color to match new theme
    updateParticlesColor();
}

// Update particles color to match current theme
function updateParticlesColor() {
    if (typeof pJSDom !== 'undefined' && pJSDom.length > 0 && pJSDom[0].pJS) {
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        pJSDom[0].pJS.particles.color.value = primaryColor;
        pJSDom[0].pJS.particles.line_linked.color = primaryColor;
        pJSDom[0].pJS.fn.particlesRefresh();
    }
}

// Event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles
    initParticles();
    
    // Load projects from JSON file
    loadProjects();
    
    // Add event listener for sort selection
    document.getElementById('sort').addEventListener('change', (e) => {
        renderProjects(e.target.value);
    });
    
    // Add event listener for color cycle button
    document.getElementById('color-cycle-btn').addEventListener('click', changeTheme);
    
    // Add scroll event listener for reveal animation
    window.addEventListener('scroll', () => {
        revealCards();
        updateParallax();
    });
    
    // Initial check for elements in viewport
    revealCards();
    
    // Add mouse move effect for cards
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const angleY = (x - centerX) / 20;
                const angleX = (centerY - y) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
            } else {
                card.style.transform = '';
            }
        });
    });
    
    // Auto cycle colors every 10 seconds 
    setInterval(changeTheme, 10000);
});