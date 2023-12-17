function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const repassword = document.getElementById('signup-repassword').value;

    if (password !== repassword) {
        console.error('Passwords do not match');
        return;
    }

    // Store signup credentials in localStorage
    localStorage.setItem('signupEmail', email);
    localStorage.setItem('signupPassword', password);

    window.location.href = '/verification'; // Redirect to the verification page
}
let isFirstSignup = true;

function toggleVerification() {
    if (isFirstSignup) {
        isFirstSignup = false;
        document.getElementById("verificationSection").style.display = "block";
    } else {
        // Perform the signup after verification code entry
        const verificationCode = document.getElementById("verification-code").value;
        if (verificationCode !== "") {
            // Redirect to login page after successful verification
            window.location.href = "/login.html";
        } else {
            alert("Please enter the verification code.");
        }
    }
}

let verificationNumber = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
const verificationDisplay = document.createElement('div');
verificationDisplay.setAttribute('id', 'verification-number');
verificationDisplay.style.position = 'absolute';
verificationDisplay.style.top = '10px';
verificationDisplay.style.right = '10px';
verificationDisplay.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
verificationDisplay.style.padding = '5px 10px';
verificationDisplay.style.borderRadius = '5px';
verificationDisplay.style.fontWeight = 'bold';
verificationDisplay.textContent = verificationNumber;

document.body.appendChild(verificationDisplay);

function verifyCode() {
    const enteredCode = document.getElementById("verification-code").value;

    if (enteredCode === verificationNumber.toString()) {
        alert("Verification successful!");
        window.location.href = "/login.html"; // Redirect after successful verification
    } else {
        alert("Incorrect verification code. Please try again.");
    }
}

function saveUserData() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Get existing user data or initialize as an empty array
    const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];

    // Add new user data to the array
    existingUsers.push({ name, email, password });

    // Save the updated array back to localStorage
    localStorage.setItem('userData', JSON.stringify(existingUsers));
}


