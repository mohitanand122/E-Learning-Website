function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validate username (not empty)
    if (username.trim() === '') {
        alert('Please enter a username.');
        return false;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate password length
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    // Validate password and confirm password match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // If validation passes, submit the form
    return true;
}
