const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');

  menuBtn.innerHTML = menu.classList.contains('hidden')
    ? '<i class="fa-solid fa-bars"></i>'
    : '<i class="fa-solid fa-xmark"></i>';
});


const contactForm = document.querySelector('#contact form');
const viewSubmissionBtn = contactForm.querySelector('button:last-child');


contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('#message').value;
  
    const submission = {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toISOString()
    };
    
 
    let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];

    submissions.push(submission);
   
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    console.log('Saved submissions:', submissions); 
    
    
    alert('Message sent successfully!');
    
    contactForm.reset();
});


viewSubmissionBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
  
    window.location.href = 'submission.html';
});