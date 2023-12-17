
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Check if the entered email and password match any user data
    const user = userData.find(user => user.email === email && user.password === password);

    if (user) {
        // Redirect to xthe dashboard or perform necessary actions for successful login
        window.location.href = "index.html";
    } else {
        // Handle invalid credentials
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Invalid email or password. Please try again.';
        errorMessage.style.color = 'red';
        const form = document.getElementById('loginForm');
        form.appendChild(errorMessage);
    }
}