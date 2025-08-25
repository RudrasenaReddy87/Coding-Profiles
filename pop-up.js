const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopup");
const darkModeToggle = document.getElementById("darkModeToggle");
const aboutMeBtn = document.getElementById("aboutMeBtn");
const countdownTooltip = document.getElementById("countdownTooltip");
const body = document.body;

let countdownInterval;
let remainingSeconds = 5;

// Create background particles
function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  document.body.appendChild(particlesContainer);
  
  const particleCount = 20;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 20 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    
    particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    particlesContainer.appendChild(particle);
  }
}

// Start countdown for close tooltip
function startCountdown() {
  clearInterval(countdownInterval);
  remainingSeconds = 5;
  updateCountdownTooltip();
  
  countdownInterval = setInterval(() => {
    remainingSeconds--;
    updateCountdownTooltip();
    
    if (remainingSeconds <= 0) {
      clearInterval(countdownInterval);
      // Auto-close the popup after countdown
      closePopup();
    }
  }, 1000);
}

// Update countdown tooltip text
function updateCountdownTooltip() {
  countdownTooltip.textContent = `Auto-close in: ${remainingSeconds}s`;
}

// Close popup function
function closePopup() {
  clearInterval(countdownInterval);
  popup.classList.remove("active");
  setTimeout(() => {
    popup.style.display = "none";
  }, 300);
}

// Auto open popup on page load
window.addEventListener("load", () => {
  createParticles();
  
  setTimeout(() => {
    popup.style.display = "flex";
    setTimeout(() => {
      popup.classList.add("active");
      // Start countdown for auto-close
      startCountdown();
    }, 10);
  }, 500);
});

// About Me button
aboutMeBtn.addEventListener("click", () => {
  alert("For more details about me, please contact via email or check out my coding profiles!");
});

// Close popup
closePopupBtn.addEventListener("click", closePopup);

// Dark mode toggle
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const icon = darkModeToggle.querySelector("i");
  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});