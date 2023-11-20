emailjs.init("KE9ScwdBc8C6voKRk");

function sendEmail() {
    emailjs.send("service_biov9hc", "template_ks6eujv", {
        to_name: "Recipient Name",
        from_name: "Your Name",
        message: "This is a test message."
    })
    .then(function(response) {
        console.log("Email sent successfully:", response);
    }, function(error) {
        console.error("Error sending email:", error);
    });
}

function submitForm(event){
     console.log("Form submitted");
// Prevent the default form submission
event.preventDefault();

// Get form data
var formData = {

to_name: document.getElementById("name").value,
name: document.getElementById("name").value,
email: document.getElementById("email").value,
from_name: document.getElementById("email").value,
mobile: document.getElementById("mobile").value,
message: document.getElementById("message").value
};
console.log("Form Data:", formData); 

emailjs.send("service_biov9hc", "template_ks6eujv", formData)
.then(function(response) {
console.log("Email sent successfully:", response);
alert("Form submitted successfully!"); // Add an alert for testing
})
.catch(function(error) {
console.error("Error sending email:", error);
alert("Error submitting form. Please try again."); // Add an alert for testing
});
}