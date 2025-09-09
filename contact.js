// Check if we've hit the Formspree limit (simulated with localStorage for demo)
// In a real scenario, you would detect this from Formspree's response
function checkSubmissionLimit() {
    // For demo purposes, we'll use a flag in localStorage to simulate reaching the limit
    // Remove this line in production - the limit should be detected from Formspree's response
    localStorage.setItem('formspreeLimitReached', 'false');

    const limitReached = localStorage.getItem('formspreeLimitReached') === 'true';
    if (limitReached) {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('limitReached').style.display = 'block';
    }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const submitBtn = document.getElementById('submitBtn');
    const notification = document.getElementById('notification');
    const form = this;

    // Simple validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }

    // Show loading state
    setButtonState(true);
    showNotification('Sending your message...', '');

    // Create a FormData object from the form
    const formData = new FormData(form);

    // Submit the form using fetch API
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showNotification('<strong>Thank you!</strong> Your message has been sent successfully. I will get back to you soon.', 'success');
            form.reset();
        } else if (response.status === 429) {
            // Formspree returns 429 when rate limit is exceeded
            throw new Error('LIMIT_REACHED');
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        if (error.message === 'LIMIT_REACHED') {
            // Show the limit reached message and hide the form
            document.getElementById('contactForm').style.display = 'none';
            document.getElementById('limitReached').style.display = 'block';

            // Store in localStorage that we've hit the limit
            localStorage.setItem('formspreeLimitReached', 'true');
        } else {
            showNotification('<strong>Error:</strong> Failed to send message. Please try again later or contact me directly at b.rudrasenareddy@gmail.com.', 'error');
            console.error('Form submission error:', error);
        }
    })
    .finally(() => {
        setButtonState(false);
    });
});

// Helper function to show notifications
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.innerHTML = message;
    notification.className = 'notification';
    notification.style.display = 'block';

    if (type) {
        notification.classList.add(type);
    }

    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000);
    }
}

// Helper function to set button state
function setButtonState(isLoading) {
    const submitBtn = document.getElementById('submitBtn');

    if (isLoading) {
        submitBtn.disabled = true;
        submitBtn.classList.add('sending');
    } else {
        submitBtn.disabled = false;
        submitBtn.classList.remove('sending');
    }
}

// Enhanced input field interactions
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', function() {
        // Add a class when the user starts typing
        if (this.value.length > 0) {
            this.classList.add('has-value');
        } else {
            this.classList.remove('has-value');
        }

        // Dynamic outline color based on character count
        const length = this.value.length;
        if (length > 0) {
            const hue = Math.min(220 + length * 2, 270); // Gradually shift color
            this.style.borderColor = `hsl(${hue}, 70%, 50%)`;
        } else {
            this.style.borderColor = '#e2e8f0';
        }
    });

    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
        this.style.boxShadow = '0 0 0 3px rgba(74, 111, 199, 0.2)';
    });

    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
        if (!this.value) {
            this.style.borderColor = '#e2e8f0';
        }
        this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
    });
});

// Enhanced button animation
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('mouseenter', function() {
    if (!this.classList.contains('sending')) {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    }
});

submitBtn.addEventListener('mouseleave', function() {
    if (!this.classList.contains('sending')) {
        this.style.transform = 'translateY(0) scale(1)';
    }
});

// Update the header text based on job search status
document.addEventListener('DOMContentLoaded', function() {
    checkSubmissionLimit();

    // Add staggered animation to link items
    document.querySelectorAll('.link-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
    });

    // You can modify this text based on your job search status
    const jobStatus = "Seeking Software Development Opportunities";
    const headerSubtitle = document.querySelector('.header-content p');

    // Animate the text change
    let charIndex = 0;
    const originalText = headerSubtitle.textContent;
    const newText = `${originalText} | ${jobStatus}`;

    headerSubtitle.textContent = "";

    function typeWriter() {
        if (charIndex < newText.length) {
            headerSubtitle.textContent += newText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
});

// Interactive Cursor Particles
let mouseX = 0;
let mouseY = 0;
let isMoving = false;
let moveTimeout;
let particleCount = 0;
const maxParticles = 15;

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMoving = true;

    // Clear existing timeout
    clearTimeout(moveTimeout);

    // Create particles while moving
    if (particleCount < maxParticles) {
        createCursorParticle(mouseX, mouseY);
    }

    // Set timeout to stop creating particles when movement stops
    moveTimeout = setTimeout(() => {
        isMoving = false;
        particleCount = 0;
    }, 100);
});

// Function to create cursor particles
function createCursorParticle(x, y) {
    const particleTypes = ['cursor-bubble', 'cursor-sparkle', 'cursor-dot'];
    const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)];

    const particle = document.createElement('div');
    particle.className = `cursor-particle ${randomType}`;

    // Random offset from cursor position
    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 40;

    particle.style.left = `${x + offsetX}px`;
    particle.style.top = `${y + offsetY}px`;

    // Random size variation
    const scale = 0.5 + Math.random() * 0.5;
    particle.style.transform = `scale(${scale})`;

    document.body.appendChild(particle);
    particleCount++;

    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            particleCount = Math.max(0, particleCount - 1);
        }
    }, 2000);
}

// Create floating particles periodically
setInterval(() => {
    if (!isMoving && Math.random() < 0.1) { // 10% chance when not moving
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createCursorParticle(x, y);
    }
}, 2000);

// Typing Animation for Header Subtitle
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.getElementById('typingText');
    const cursor = document.querySelector('.cursor');

    const messages = [
        "Software Developer & Competitive Programmer",
        "Seeking Opportunities",
        "Seeking Software Development Opportunities",
        "Passionate About Coding & Innovation",
        "Building Solutions for Tomorrow"
    ];

    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const currentMessage = messages[messageIndex];

        if (!isDeleting) {
            // Typing effect
            typingText.textContent = currentMessage.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentMessage.length) {
                // Pause at end of message
                isDeleting = true;
                typingSpeed = 2000; // Pause before deleting
            } else {
                typingSpeed = 100; // Normal typing speed
            }
        } else {
            // Deleting effect
            typingText.textContent = currentMessage.substring(0, charIndex);
            charIndex--;

            if (charIndex < 0) {
                // Move to next message
                isDeleting = false;
                messageIndex = (messageIndex + 1) % messages.length;
                charIndex = 0;
                typingSpeed = 500; // Pause before typing next message
            } else {
                typingSpeed = 50; // Fast deleting speed
            }
        }

        setTimeout(typeWriter, typingSpeed);
    }

    // Start the typing animation
    setTimeout(typeWriter, 1000);
});
