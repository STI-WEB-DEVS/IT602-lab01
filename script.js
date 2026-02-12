let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function saveToLocalStorage() {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

const form = document.getElementById("contactForm");
const messageCountSpan = document.getElementById("messageCount");

if (form) {
    function updateMessageCount() {
        if (messageCountSpan) messageCountSpan.textContent = contacts.length;
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

    updateMessageCount();
}


const tableBody = document.getElementById("messageTableBody");

if (tableBody) {
    function loadMessages() {
        contacts = JSON.parse(localStorage.getItem("contacts")) || [];

        if (contacts.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="4" class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">No messages found.</td></tr>`;
            return;
        }

        tableBody.innerHTML = contacts.map(c => `
            <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    ${new Date(c.createdAt).toLocaleDateString()}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                    ${c.name}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    ${c.email}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    ${c.message}
                </td>
            </tr>`).join('');
    }

    window.clearMessages = function() {
        if(confirm("Are you sure you want to delete all messages?")) {
            localStorage.removeItem("contacts");
            loadMessages();
        }
    }

    loadMessages();
}

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