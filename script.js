document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button clicked!');
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var genderValue = gender ? gender.value : "";
    var subscribe = document.getElementById("subscribe").checked;

    // Construct message
    var message = "Name: " + name + "\n";
    message += "Email: " + email + "\n";
    message += "Subject: " + subject + "\n";
    message += "Gender: " + genderValue + "\n";
    message += "Subscribe: " + (subscribe ? "Yes" : "No") + "\n";

    // Show alert with message
    alert("Thank you for your message!\n\n" + message);

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("subscribe").checked = false;
});
