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
    for (let i = 0; i < 150; i++) {
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
            markers: false  
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
const terminalContent = terminalBody.innerHTML.trim();
terminalBody.innerHTML = '';
let charIndex = 0;

const cursor = document.createElement('span');
cursor.classList.add('cursor');
terminalBody.appendChild(cursor);

function typeText() {
    if (charIndex < terminalContent.length) {
        let char = terminalContent[charIndex];
        if (char === '<') {
            let closingIndex = terminalContent.indexOf('>', charIndex);
            if (closingIndex !== -1) {
                let tag = terminalContent.slice(charIndex, closingIndex + 1);
                let element = document.createElement('div');
                element.innerHTML = tag;
                terminalBody.insertBefore(element.firstChild, cursor);
                charIndex = closingIndex + 1;
            } else {
                charIndex++;
            }
        } else if (char === '&') {
            let semicolonIndex = terminalContent.indexOf(';', charIndex);
            if (semicolonIndex !== -1) {
                let entity = terminalContent.slice(charIndex, semicolonIndex + 1);
                let decodedEntity = document.createElement('div');
                decodedEntity.innerHTML = entity;
                terminalBody.insertBefore(document.createTextNode(decodedEntity.textContent), cursor);
                charIndex = semicolonIndex + 1;
            } else {
                let textNode = document.createTextNode(char);
                terminalBody.insertBefore(textNode, cursor);
                charIndex++;
            }
        } else if (char === '\n' || (char === '\r' && terminalContent[charIndex + 1] === '\n')) {
            terminalBody.insertBefore(document.createElement('br'), cursor);
            charIndex += char === '\r' ? 2 : 1;
        } else {
            let textNode = document.createTextNode(char);
            terminalBody.insertBefore(textNode, cursor);
            charIndex++;
        }
        setTimeout(typeText, 15);
    }
}

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

// Get elements for JobScout
const viewDemoBtn1 = document.getElementById('viewDemoBtn1');
const modal1 = document.getElementById('demoModal1');
const closeBtn1 = document.getElementById('closeBtn1');

// Get elements for JobScout Mobile
const viewDemoBtn2 = document.getElementById('viewDemoBtn2');
const modal2 = document.getElementById('demoModal2');
const closeBtn2 = document.getElementById('closeBtn2');

// Get elements for Car Bidder
const viewDemoBtn3 = document.getElementById('viewDemoBtn3');
const modal3 = document.getElementById('demoModal3');
const closeBtn3 = document.getElementById('closeBtn3');
// Private Repo
const viewPrivateRepo = document.getElementById('viewPrivateRepo');
const modal4 = document.getElementById('carBidderPrivateRepo');
const closeBtn4 = document.getElementById('closeBtn4');

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
viewPrivateRepo.addEventListener('click', () => {
    modal4.style.display = 'flex';
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
closeBtn4.addEventListener('click', () => {
    modal4.style.display = 'none';
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
  if (event.target === carBidderPrivateRepo) {
    carBidderPrivateRepo.style.display = 'none';
  }
});

// MODAL PART ENDS

// HANDLING FORM 
const form = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');
const thankYouText = "Thank you for your message! I'll get back to you soon! :)";

function typeThankYouMessage() {
    let charIndex = 0;
    thankYouMessage.textContent = '';
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    thankYouMessage.appendChild(cursor);

    function typeChar() {
        if (charIndex < thankYouText.length) {
            let textNode = document.createTextNode(thankYouText[charIndex]);
            thankYouMessage.insertBefore(textNode, cursor);
            charIndex++;
            setTimeout(typeChar, 50); // Adjust speed as needed
        }
    }

    typeChar();
}

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const formData = new FormData(form);

    // Send data to Formspree
    const response = await fetch('https://formspree.io/f/mrbbezve', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
    });

    if (response.ok) {
        // Hide form and display thank-you message with typing effect
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
        typeThankYouMessage();
    } else {
        alert('Oops! There was a problem submitting your form.');
    }
});
// HANDLING ENDS

// Remove excess logo 
window.onload = function () {
  var splineElement = document.querySelectorAll("spline-viewer");

  for (let pas = 0; pas < splineElement.length; pas++) {
    var shadowRoot = splineElement[pas].shadowRoot;
    shadowRoot.querySelector("#logo").remove();
  }

  ScrollTrigger.create({
    trigger: '.terminal',
    start: 'top 80%',
    onEnter: () => typeText()
});
};

// Animate the FAB options
document.addEventListener('DOMContentLoaded', function() {
    const fabContainer = document.querySelector('.fab-container');
    const fabButton = fabContainer.querySelector('.fab-button');

    // Function to toggle the active state
    function toggleActive(e) {
        e.preventDefault(); // Prevent default touch behavior
        e.stopPropagation(); // Prevent the event from bubbling up
        fabContainer.classList.toggle('active');
    }

    // Add event listeners for both click and touch events
    fabButton.addEventListener('click', toggleActive);
    fabButton.addEventListener('touchstart', toggleActive);

    // Close the menu when clicking or touching outside
    function closeMenu(e) {
        if (!fabContainer.contains(e.target)) {
            fabContainer.classList.remove('active');
        }
    }

    document.addEventListener('click', closeMenu);
    document.addEventListener('touchstart', closeMenu);

    // Prevent clicks on the options from closing the menu
    const fabOptions = fabContainer.querySelector('.fab-options');
    function stopPropagation(e) {
        e.stopPropagation();
    }

    fabOptions.addEventListener('click', stopPropagation);
    fabOptions.addEventListener('touchstart', stopPropagation);
});

// Scroll down Effect for Skills
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (window.scrollY > 800) { 
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '1';
    }
});

scrollIndicator.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Skills animation
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        gsap.fromTo(item, 
            {
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom-=100',
                    end: 'bottom center',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', animateSkills);