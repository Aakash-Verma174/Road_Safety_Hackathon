let userLocation = "";

/* -----------------------------
   LOCATION SYSTEM (FIXED)
----------------------------- */

const locationBtn = document.getElementById("locationBtn");
const locationText = document.getElementById("locationText");

if(locationBtn){
    locationBtn.addEventListener("click", getLocation);
}

let locationEnabled = false;

function getLocation(){

    const btn = document.getElementById("locationBtn");
    const locationText = document.getElementById("locationText");

    locationEnabled = !locationEnabled;

    if(locationEnabled){

        const fakeLat = 23.0225;
        const fakeLng = 72.5714;

        btn.innerHTML = "📍 Location Detected";
        btn.classList.add("location-active");

        locationText.innerHTML =
        `✅ Location Enabled (Demo Mode)<br>Lat: ${fakeLat}<br>Lng: ${fakeLng}`;

        addActivity("📍 Location ENABLED");

    }else{

        btn.innerHTML = "📍 Get Current Location";
        btn.classList.remove("location-active");

        locationText.innerHTML =
        "❌ Location Disabled";

        addActivity("📍 Location DISABLED");
    }
}

/* -----------------------------
   ACTIVITY SYSTEM
----------------------------- */

function addActivity(text){

    const log = document.getElementById("activityLog");

    if(!log) return;

    const item = document.createElement("div");
    item.className = "activity-item";

    item.innerHTML = `
        <span>⚡</span>
        <p>${text}</p>
    `;

    log.prepend(item);
}
/* -----------------------------
   SOS POPUP SYSTEM (CLEAN)
----------------------------- */

function openSOSPopup(){
    document.getElementById("sosPopup").style.display = "flex";
}

function closeSOSPopup(){

    const popup = document.getElementById("sosPopup");

    if(!popup) return;

    popup.style.display = "none";

    const main = document.getElementById("mainGrid");
    const success = document.getElementById("successBox");

    if(main) main.style.display = "grid";
    if(success) success.style.display = "none";
}

/* -----------------------------
   SOS SEND (SINGLE FINAL LOGIC)
----------------------------- */

function sendSOS(type){

    if(!userLocation){
        alert("⚠ Please enable location first");
        return;
    }

    const main = document.getElementById("mainGrid");
    const success = document.getElementById("successBox");

    if(main) main.style.display = "none";
    if(success) success.style.display = "block";

    const title = document.getElementById("selectedEmergency");
    const desc = document.getElementById("emergencyDescription");

    if(title) title.innerText = type;

    let description = "";

    switch(type){

        case "🚗 Road Accidents":
            description = "Car/bike crash, hit-and-run, pedestrian accident.";
            break;

        case "🚑 Medical Emergencies":
            description = "Heart attack, fainting, serious injury.";
            break;

        case "🚧 Vehicle Breakdown":
            description = "Engine failure, tyre burst, stuck vehicle.";
            break;

        case "🚓 Crime / Safety Threats":
            description = "Robbery, harassment, suspicious activity.";
            break;

        case "🌧️ Road Hazards":
            description = "Flood, fog, blocked road, landslide.";
            break;

        case "🧍 Missing / Stranded":
            description = "Lost location, no contact, stranded alone.";
            break;
    }

    if(desc) desc.innerText = description;

    localStorage.setItem("lastAlert", type);

    addActivity("🚨 SOS sent: " + type);
}

/* -----------------------------
   SIMPLE LOGIN DISPLAY FIX
----------------------------- */

window.onload = () => {

    const username = localStorage.getItem("roadUser");

    const welcome = document.getElementById("welcomeUser");

    if(username && welcome){
        welcome.innerText = "Welcome, " + username;
    }
};

function sendSOS(type){

    const messages = {
        "Road Accident": "🚗 Accident reported",
        "Medical": "🚑 Medical emergency reported",
        "Breakdown": "🚧 Vehicle breakdown reported",
        "Crime": "🚓 Crime or threat reported",
        "Hazard": "🌧️ Road hazard reported",
        "Stranded": "🧍 User is stranded"
    };

    // HIDE OPTIONS
    document.getElementById("sosOptions").style.display = "none";

    // SHOW RESULT (CENTERED)
    document.getElementById("sosResult").style.display = "block";

    document.getElementById("sosMessage").innerText =
    messages[type];

    addActivity("🚨 SOS: " + type);
}

function closeSOSPopup(){

    document.getElementById("sosPopup").style.display = "none";

    // RESET
    document.getElementById("sosOptions").style.display = "block";
    document.getElementById("sosResult").style.display = "none";
}

function closeSOSPopup(){

    document.getElementById("sosPopup").style.display = "none";
}

function closeSOSPopup(){

    document.getElementById("sosPopup").style.display = "none";

    document.getElementById("mainGrid").style.display = "grid";

    document.getElementById("resultBox").style.display = "none";
}