function Click() {

    const res = {
        name : "",
        emailx : "",
        passwordx : "",
        confirmPassx : ""
    };

    const userName = document.getElementById("userName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPass = document.getElementById("confirmPass").value.trim();

    // Check for empty fields
    if (!userName || !email || !password || !confirmPass) 
        {
        alert("Please fill out all fields.");
        
        return; // Exit early
    }else{
        alert("Register Succesful")
        window.location.assign('http://127.0.0.1:5500/index.html');
        res.name = userName;
        res.emailx = email;
        res.passwordx = password;
        res.confirmPassx = confirmPass;

        console.log(res)
    }

    document.getElementById("userName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPass").value = "";
}
