document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const signupForm = document.getElementById("signup-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const usernameInput = loginForm.querySelector('input[type="text"]');
        const passwordInput = loginForm.querySelector('input[type="password"]');

        if (usernameInput.value === "your_username" && passwordInput.value === "your_password") {
            // Replace "your_username" and "your_password" with your actual login credentials.
            window.location.href = "Features\search-engine.html"; // Redirect to Page 2 on successful login.
        }
    });

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const usernameInput = signupForm.querySelector('input[type="text"]');
        const passwordInput = signupForm.querySelector('input[type="password"]');

        // Here you would handle user registration, e.g., sending data to the server.
        // You can replace the following line with your actual registration logic.
        console.log("New user registered: " + usernameInput.value);

        // After successful registration, you can redirect to a different page or display a success message.
        // For example, you can redirect to a "Registration Successful" page.
        // window.location.href = "registration_successful.html";
    });
});
