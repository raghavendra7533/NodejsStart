function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    let isValid = true;

    if (name.trim() === "") {
        showErrorMessage("name", "Please enter your name");
        isValid = false;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        showErrorMessage("email", "Please enter a valid email address");
        isValid = false;
    }

    return isValid;
}

function showErrorMessage(fieldId, message) {
    const errorElement = document.querySelector(`#${fieldId} + .error-message`);
    errorElement.textContent = message;
    errorElement.classList.add("show");
}