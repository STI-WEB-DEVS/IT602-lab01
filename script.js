// Loader
 const loader = document.getElementById("loader");

  window.addEventListener("DOMContentLoaded", () => {
    loader.style.transition = "opacity 0.8s ease";
    loader.style.opacity = "1";
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.style.display = "none";
      }, 800);

    }, 1000);
  });


// Dark & Light Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  toggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // dark mode icon
} else {
  html.classList.remove("dark");
  toggleBtn.innerHTML = '<i class="fas fa-lightbulb"></i>'; // light mode icon
}

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // dark mode icon
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.innerHTML = '<i class="fas fa-lightbulb"></i>'; // light mode icon
  }
});


// Contact form handling
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name1 = form.elements["name1"].value;
    const email1 = form.elements["email1"].value;
    const message1 = form.elements["message1"].value;

   console.log("Name:", name1);
    console.log("Email:", email1);
    console.log("Message:", message1);

    
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

 
    const name = this.name1.value;
    const email = this.email1.value;
    const message = this.message1.value;
    const date = new Date().toLocaleString();

   
    const newSubmission = {
        date: date,
        name: name,
        email: email,
        message: message
    };

 
    const submissions = JSON.parse(localStorage.getItem('allSubmissions')) || [];
    submissions.push(newSubmission);
    localStorage.setItem('allSubmissions', JSON.stringify(submissions));

   

    this.reset();
});
