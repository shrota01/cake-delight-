
document.addEventListener("DOMContentLoaded", function () {
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
        heroContent.classList.add("loaded");
    }
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


function handleScrollAnimations() {
    const animatedElems = document.querySelectorAll('.animate-on-scroll, .card, .delivery-info, .partner-form');
    const triggerBottom = window.innerHeight * 0.92;
    animatedElems.forEach(elem => {
        const rect = elem.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            elem.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('DOMContentLoaded', handleScrollAnimations);


document.getElementById('contactForm').addEventListener('submit', function (e) {
    let valid = true;
    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const message = document.getElementById('contactMessage');

    
    if (!name.value.trim()) {
        valid = false;
        name.style.borderColor = '#ba2d65';
    } else {
        name.style.borderColor = '#ffb3c6';
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        valid = false;
        email.style.borderColor = '#ba2d65';
    } else {
        email.style.borderColor = '#ffb3c6';
    }

    if (!message.value.trim()) {
        valid = false;
        message.style.borderColor = '#ba2d65';
    } else {
        message.style.borderColor = '#ffb3c6';
    }

    if (!valid) {
        e.preventDefault();
    }
});


const passwordInput = document.getElementById('loginPassword');
const toggleBtn = document.getElementById('togglePassword');
if (toggleBtn && passwordInput) {
    toggleBtn.addEventListener('click', function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleBtn.innerHTML = "&#128068;";
        } else {
            passwordInput.type = "password";
            toggleBtn.innerHTML = "&#128065;";
        }
    });
}

document.getElementById('partnerForm').addEventListener('submit', function (e) {
    let valid = true;
    const name = document.getElementById('partnerName');
    const phone = document.getElementById('partnerPhone');
 
    if (!name.value.trim()) {
        valid = false;
        name.style.borderColor = '#ba2d65';
    } else {
        name.style.borderColor = '#ffb3c6';
    }
    
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value.trim())) {
        valid = false;
        phone.style.borderColor = '#ba2d65';
    } else {
        phone.style.borderColor = '#ffb3c6';
    }
    if (!valid) {
        e.preventDefault();
    }
});