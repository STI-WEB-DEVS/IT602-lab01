document.addEventListener('DOMContentLoaded', () => {
    console.log('Joshua Arabejo Hero loaded');
    
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if(scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        });
    }

    const menuTrigger = document.querySelector('.menu-placeholder');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuText = document.querySelector('.menu-text');
    const menuIconSvg = document.querySelector('.menu-icon-svg');

    const svgMenuToClose = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 5l14 14M5 19l14 -14"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5l14 0M5 19l14 0;M5 5l14 14M5 19l14 -14"/></path><path d="M12 12h0"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12h14;M12 12h0"/><set fill="freeze" attributeName="opacity" begin="0.4s" to="0"/></path></g></svg>`;

    const svgCloseToMenu = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5l14 0M5 19l14 0M5 12h14"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5l14 14M5 19l14 -14M12 12h0;M5 5l14 0M5 19l14 0M5 12h14"/></path></svg>`;

    if (menuTrigger && menuOverlay) {
        menuTrigger.addEventListener('click', () => {
            menuTrigger.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            
            if (menuTrigger.classList.contains('active')) {
                document.body.classList.add('no-scroll');
                if(menuText) menuText.textContent = 'CLOSE';
                if(menuIconSvg) menuIconSvg.innerHTML = svgMenuToClose;
            } else {
                document.body.classList.remove('no-scroll');
                if(menuText) menuText.textContent = 'MENU';
                if(menuIconSvg) menuIconSvg.innerHTML = svgCloseToMenu;
            }
        });
    }

   
    const heroSection = document.querySelector('.hero-section');
    const brandLogo = document.querySelector('.brand-logo');
    
    if (heroSection && brandLogo) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    brandLogo.style.opacity = '0';
                    brandLogo.style.visibility = 'hidden';
                } else {
                    brandLogo.style.opacity = '1';
                    brandLogo.style.visibility = 'visible';
                    brandLogo.textContent = 'Joshua Arabejo';
                    brandLogo.classList.remove('logo-minimized');
                }
            });
        }, { threshold: 0.1 }); 
        
        heroObserver.observe(heroSection);
    }

    
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.visibility = 'hidden';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.visibility = 'visible';
            }
        });
    }
});


        }
    });
});


const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

window.addEventListener('DOMContentLoaded', () => {
    const ctaDescription = document.querySelector('.cta-description');
    const ctaFormWrapper = document.querySelector('.cta-form-wrapper');
    
    if (ctaDescription) observer.observe(ctaDescription);
    if (ctaFormWrapper) observer.observe(ctaFormWrapper);
    

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            

            console.log('Form submitted:', formData);
            

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.querySelector('span').textContent;
            submitBtn.querySelector('span').textContent = 'Message Sent!';
            submitBtn.style.backgroundColor = 'rgba(100, 255, 150, 0.2)';
            submitBtn.style.borderColor = 'rgba(100, 255, 150, 0.5)';
            

            setTimeout(() => {
                contactForm.reset();
                submitBtn.querySelector('span').textContent = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.style.borderColor = '';
            }, 2000);
        });
    }
});


function smoothScrollTo(target, duration = 1000) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function easeInOutCubic(t) {
        return t < 0.5 
            ? 4 * t * t * t 
            : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}



let ticking = false;
function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.decorative-plus');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const ctaSection = document.getElementById('cta-section');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && scrollIndicator) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.visibility = 'hidden';
            } else if (scrollIndicator) {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.visibility = 'visible';
            }
        });
    }, { threshold: 0.3 });
    
    if (ctaSection) {
        ctaObserver.observe(ctaSection);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    
    const submitBtn = form.querySelector('.submit-btn');
    const formStatus = document.getElementById('form-status');
    
    function validateName() {
        const value = nameInput.value.trim();
        if (value.length < 2) {
            showError(nameInput, nameError, 'Name must be at least 2 characters');
            return false;
        }
        showSuccess(nameInput, nameError);
        return true;
    }
    
    function validateEmail() {
        const value = emailInput.value.trim().toLowerCase();
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!emailRegex.test(value)) {
            showError(emailInput, emailError, 'Please enter a valid email address');
            return false;
        }
        showSuccess(emailInput, emailError);
        return true;
    }
    
    function validateMessage() {
        const value = messageInput.value.trim();
        if (value.length < 10) {
            showError(messageInput, messageError, 'Message must be at least 10 characters');
            return false;
        }
        showSuccess(messageInput, messageError);
        return true;
    }
    
    // UI Helpers
    function showError(input, errorElement, message) {
        input.classList.add('error');
        input.classList.remove('success');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }
    
    function showSuccess(input, errorElement) {
        input.classList.remove('error');
        input.classList.add('success');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }
    
    function clearValidation(input, errorElement) {
        input.classList.remove('error', 'success');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }
    
    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        
        if (type === 'success') {
            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 5000);
        }
    }
    
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);
    
    nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('error') || nameInput.classList.contains('success')) {
            clearValidation(nameInput, nameError);
        }
    });
    
    emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('error') || emailInput.classList.contains('success')) {
            clearValidation(emailInput, emailError);
        }
    });
    
    messageInput.addEventListener('input', () => {
        if (messageInput.classList.contains('error') || messageInput.classList.contains('success')) {
            clearValidation(messageInput, messageError);
        }
    });
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (!isNameValid || !isEmailValid || !isMessageValid) {
            showFormStatus('Please fix the errors above', 'error');
            return;
        }
        
       
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        formStatus.textContent = '';
        formStatus.className = 'form-status';
        
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            showFormStatus('✓ Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
            clearValidation(nameInput, nameError);
            clearValidation(emailInput, emailError);
            clearValidation(messageInput, messageError);
            
        } catch (error) {
            showFormStatus('✗ Something went wrong. Please try again later.', 'error');

        } finally {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    });
});

