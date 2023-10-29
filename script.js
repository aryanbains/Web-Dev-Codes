document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const usernameInput = loginForm.querySelector('input[type="text"]');
        const passwordInput = loginForm.querySelector('input[type="password"]');
        const errorMessage = document.createElement("div");

        if (usernameInput.value === "aryanbains" && passwordInput.value === "login1234") {
            // Replace "your_username" and "your_password" with your actual login credentials.
            window.location.href = "page2.html"; // Redirect to Page 2 on successful login.
        } else {
            errorMessage.textContent = "Invalid username or password. Please try again.";
            errorMessage.style.color = "red";
            loginForm.appendChild(errorMessage);
        }
    });
});
