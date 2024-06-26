document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#form");
    const inputs = form.querySelectorAll("#username, #email, #password, #cpassword");

    form.addEventListener("submit", function(event) {
        // Run all validation functions
        const isRequiredValid = checkRequired(inputs);

        // Check if all validations pass
        if (isRequiredValid) {
            alert("Form submitted successfully!");
        } else {
            event.preventDefault();
            alert("Please complete all fields before submitting the form.");
            console.log("Form submission is prevented due to invalid input(s)");
        }
    });
 const password=document.querySelector("#password");
    function checkRequired(inputs) {
        let allValid = true;
        inputs.forEach((input) => {
            const value = input.value.trim();
            if (value === "") {
                errorMessage(input,` Please enter your ${getName(input)}`);
                allValid = false;
            } else if (input.id === 'email' && !isValidEmail(value)) {
                errorMessage(input, "Please enter a valid Email or Gmail");
                allValid = false;
            } else if (input.id === 'password' && !isValidPassword(value)) {
                errorMessage(input, 'Password must be at least 8 characters');
                allValid = false;
            } else if (input.id === 'cpassword' && value !== password.value) {
                errorMessage(input, 'Passwords do not match');
                allValid = false;
            } else {
                successMessage(input);
            }
        });
        return allValid;
    }

    function getName(input) {
        return input.getAttribute("name");
    }

    function errorMessage(input, message) {
        const field = input.parentElement;
        field.classList.remove("success");
        field.classList.add("error");
        const errorElement = field.querySelector(".error");
        errorElement.textContent = message;
    }

    function successMessage(input) {
        const field = input.parentElement;
        field.classList.remove("error");
        field.classList.add("success");
        const errorElement = field.querySelector(".error");
        errorElement.textContent = "";
    }

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        return password.length >= 8;
    }
});