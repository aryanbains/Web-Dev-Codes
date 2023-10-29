document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const usernameInput = loginForm.querySelector('input[type="text"]');
        const passwordInput = loginForm.querySelector('input[type="password"]');

        if (usernameInput.value === "aryan" && passwordInput.value === "admin1234") {
            // Replace "your_username" and "your_password" with your actual login credentials.
            window.location.href = "Features/search-engine.html"; // Redirect to Page 2 on successful login.
        }
    });
});
