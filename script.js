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