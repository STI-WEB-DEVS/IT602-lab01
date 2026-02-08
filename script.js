const form = document.getElementById("contactForm");
const messageCountSpan = document.getElementById("messageCount");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function updateMessageCount() {
    messageCountSpan.textContent = contacts.length;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
    }

    const contactData = { 
        name, 
        email, 
        message,
        createdAt: new Date().toISOString()
    };

    contacts.push(contactData);
    saveToLocalStorage();
    updateMessageCount();
    
    alert("Message sent successfully!");
    form.reset();
});

function saveToLocalStorage() {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

updateMessageCount();

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

function saveToLocalStorage() {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

updateMessageCount();

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