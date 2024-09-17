// Simulated user data
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

// Handle login form submission
document.getElementById("login-form")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    // Check user credentials
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        messageDiv.textContent = "Login successful!";
        messageDiv.style.color = "green";
        window.location='home.html';
        // Redirect to main page after a delay
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        messageDiv.textContent = "Invalid username or password.";
        messageDiv.style.color = "red";
    }
});