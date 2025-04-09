function Click() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const pass = '123';
    const emailcon = '123@gmail.com';

    // Check for empty fields
    if (!email || !password) 
        {
        alert("Please fill out all fields.");
        return; // Exit early
    }

    // Check username, email, and password
    if (email === emailcon && password === pass) {
        
        // Redirecting to the specified URL
        window.location.assign('http://127.0.0.1:5500/home.html');
        alert("Login Success");
    } else {
        alert("Login failed");
    }


    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
