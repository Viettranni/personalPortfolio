gsap.registerPlugin(ScrollTrigger);

// Animate code background
const codeBackground = document.querySelector('.code-background');
const codeSnippets = [
    'const softwareEngineer = {',
    '  name: "Viet Tran",',
    '  skills: ["JavaScript", "React (Vite)", "Node.js", "Express.js", "MongoDB Atlas"],',
    '  passion: "Building amazing web apps"',
    '};',
    '',
    'function createAwesomeProject(idea) {',
    '  return idea + developer.skills.map(skill => {',
    '    return skill.toLowerCase();',
    '  }).join(" + ");',
    '}',
    '',
    'console.log(createAwesomeProject("Innovation"));'
];

function animateCodeBackground() {
    let content = '';
    for (let i = 0; i < 50; i++) {
        content += codeSnippets[Math.floor(Math.random() * codeSnippets.length)] + '\n';
    }
    codeBackground.textContent = content;
}

animateCodeBackground();
setInterval(animateCodeBackground, 1500);

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate sections on scroll
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            markers: false  // Use markers for debugging, set to `true` if necessary
        }
    });
});

// Animate skill items
gsap.from('.skill-item', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '#skills',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    }
});

// Animate project items
gsap.from('.project-item', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    }
});

// Animate terminal text typing
const terminalBody = document.querySelector('.terminal-body');
const terminalText = terminalBody.innerHTML;
terminalBody.innerHTML = '';
let charIndex = 0;

function typeText() {
    if (charIndex < terminalText.length) {
        terminalBody.innerHTML += terminalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 20); // Fine-tune this delay to adjust typing speed
    }
}

ScrollTrigger.create({
    trigger: '.terminal',
    start: 'top 80%',
    onEnter: () => typeText()
});

// Header fade-in animation
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.style.opacity = "0";
    setTimeout(() => {
        header.style.opacity = "1";
        header.style.transition = "opacity 1.5s ease-in-out";
    }, 100); // Delay to ensure animation on reload
});

// MODAL PART

// Get elements for TaskMaster
const viewDemoBtn1 = document.getElementById('viewDemoBtn1');
const modal1 = document.getElementById('demoModal1');
const closeBtn1 = document.getElementById('closeBtn1');

// Get elements for WeatherNow
const viewDemoBtn2 = document.getElementById('viewDemoBtn2');
const modal2 = document.getElementById('demoModal2');
const closeBtn2 = document.getElementById('closeBtn2');

// Get elements for CodeCollab
const viewDemoBtn3 = document.getElementById('viewDemoBtn3');
const modal3 = document.getElementById('demoModal3');
const closeBtn3 = document.getElementById('closeBtn3');

// Show the respective modal when the button is clicked
viewDemoBtn1.addEventListener('click', () => {
  modal1.style.display = 'flex';
});
viewDemoBtn2.addEventListener('click', () => {
  modal2.style.display = 'flex';
});
viewDemoBtn3.addEventListener('click', () => {
  modal3.style.display = 'flex';
});

// Close the modal when the close button is clicked
closeBtn1.addEventListener('click', () => {
  modal1.style.display = 'none';
});
closeBtn2.addEventListener('click', () => {
  modal2.style.display = 'none';
});
closeBtn3.addEventListener('click', () => {
  modal3.style.display = 'none';
});

// Optionally, close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal1) {
    modal1.style.display = 'none';
  }
  if (event.target === modal2) {
    modal2.style.display = 'none';
  }
  if (event.target === modal3) {
    modal3.style.display = 'none';
  }
});

// MODAL PART ENDS