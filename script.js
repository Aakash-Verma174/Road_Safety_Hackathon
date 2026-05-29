let userLocation = "";

const locationBtn = document.getElementById("locationBtn");
const locationText = document.getElementById("locationText");
const mapFrame = document.getElementById("mapFrame");


// SOS
document.getElementById("sosBtn").addEventListener("click", () => {

    if(!userLocation){
        showToast("Get location first!", "error");
        return;
    }

    localStorage.setItem("sosStatus", "🚨 SOS INITIATED");
    showToast("SOS Initiated", "error");

    setTimeout(() => {
        localStorage.setItem("sosStatus", "📡 Location Sent");
        showToast("Location Sent", "info");
    }, 2000);

    setTimeout(() => {
        localStorage.setItem("sosStatus", "🚑 Ambulance Dispatched");
        showToast("Ambulance Dispatched", "success");
    }, 4000);

    setTimeout(() => {
        localStorage.setItem("sosStatus", "👮 Police Notified");
        showToast("Police Notified", "success");
    }, 6000);

    setTimeout(() => {
        localStorage.setItem("sosStatus", "✅ Emergency Active");
        showToast("Help is on the way", "success");
    }, 8000);

});

// SHARE
document.getElementById("shareBtn").addEventListener("click", () => {
    navigator.clipboard.writeText("Emergency Location: " + userLocation);
    alert("Location Copied!");
});

// ACCIDENT SIMULATION
document.getElementById("accidentBtn").addEventListener("click", () => {
    alert("⚠ Accident Detected (Simulation)");
    localStorage.setItem("sosStatus", "⚠ Accident Detected");
});

locationBtn.addEventListener("click", () => {

    navigator.geolocation.getCurrentPosition((position) => {

        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        userLocation = `https://www.google.com/maps?q=${lat},${lon}`;

        locationText.innerHTML =
            `Lat: ${lat} <br> Lon: ${lon}`;

        // 🔥 THIS IS IMPORTANT (MAP UPDATE)
        document.getElementById("mapFrame").src =
            `https://www.google.com/maps?q=${lat},${lon}&output=embed`;

    });

});

function showToast(message, type="info"){

    const toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";

    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "10px";
    toast.style.color = "white";
    toast.style.zIndex = "9999";

    toast.style.background =
        type === "error" ? "#ef4444" :
        type === "success" ? "#22c55e" :
        "#3b82f6";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}

const chatBtn = document.getElementById("chatFloatBtn");

let isDragging = false;
let offsetX, offsetY;

// click → open chat page
chatBtn.addEventListener("click", () => {
    window.location.href = "chat.html";
});

// drag start
chatBtn.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - chatBtn.offsetLeft;
    offsetY = e.clientY - chatBtn.offsetTop;
});

// drag move
document.addEventListener("mousemove", (e) => {

    if(isDragging){

        chatBtn.style.left = (e.clientX - offsetX) + "px";
        chatBtn.style.top = (e.clientY - offsetY) + "px";

        chatBtn.style.right = "auto";
        chatBtn.style.bottom = "auto";
    }

});

// drag end
document.addEventListener("mouseup", () => {
    isDragging = false;
});

const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // SIMPLE VALIDATION
    if(username.trim() === "" || password.trim() === "") {
        alert("Enter username and password");
        return;
    }

    // FAKE LOGIN CHECK (for hackathon only)
    if(password.length < 3){
        alert("Password too weak");
        return;
    }

    // store user
    localStorage.setItem("roadUser", username);

    // hide login
    document.getElementById("loginOverlay").style.display = "none";

    alert("Login Successful 🚨");

});

function loginUser(){

    const user = document.getElementById("username").value;

    if(user === ""){
        alert("Enter username");
        return;
    }

    localStorage.setItem("role", "user");

    window.location.href = "chat.html";
}

function loginAdmin(){

    const user = document.getElementById("username").value;

    if(user === ""){
        alert("Enter username");
        return;
    }

    localStorage.setItem("role", "admin");

    window.location.href = "dashboard.html";
}

function sendSOS(){

    let user = localStorage.getItem("user") || "Unknown";

    let alert = {
        name: user,
        time: new Date(),
    }
}