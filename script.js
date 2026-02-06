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