// function login(){

//     const user = document.getElementById("username").value;
//     const pass = document.getElementById("password").value;
//     const role = document.getElementById("role").value;

//     if(user.trim() === "" || pass.trim() === ""){
//         alert("Enter username & password");
//         return;
//     }

//     // store user info
//     localStorage.setItem("user", user);

//     if(role === "user"){
//         window.open("index.html", "_blank");   // USER PAGE
//     }
//     else if (role === "admin"){
//         window.open("admin.html");   // ADMIN PAGE
//     } else {
//         alert("Enter Valid Input");
//     }
// }

function login(){

    const user = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if(user === "" || email === "" || pass === ""){
        alert("Please fill all fields");
        return;
    }

    // SAVE DATA (IMPORTANT)
    localStorage.setItem("username", user);
    localStorage.setItem("email", email);

    if(role === "user"){
        window.open("index.html", "_blank");
    }
    else if(role === "admin"){
        window.open("admin.html", "_blank");
    }
}

localStorage.setItem("email", document.getElementById("email").value);
document.getElementById("adminEmail").innerText = localStorage.getItem("email");