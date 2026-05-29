function login(){

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if(user.trim() === "" || pass.trim() === ""){
        alert("Enter username & password");
        return;
    }

    // store user info
    localStorage.setItem("user", user);

    if(role === "user"){
        window.open("index.html", "_blank");   // USER PAGE
    }
    else{
        window.open("admin.html");   // ADMIN PAGE
    }
}