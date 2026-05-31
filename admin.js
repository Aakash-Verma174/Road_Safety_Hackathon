function showSection(id){

    let sections = document.querySelectorAll(".section");

    sections.forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById(id).style.display = "block";

    // Load analytics charts only when needed
    if(id === "analytics"){
        setTimeout(() => {
            loadCharts();
        }, 100);
    }

    // Load map when needed (if you already added this)
    if(id === "map"){
        setTimeout(() => {
            initMap();
        }, 100);
    }
}

// AUTO OPEN DASHBOARD ON LOAD
window.onload = function(){

    showSection("dashboard");

    let name = localStorage.getItem("username");
    let email = localStorage.getItem("email");

    if(name){
        document.getElementById("adminName").innerText = name;
    }

    if(email){
        document.getElementById("adminEmail").innerText = email;
    }
};

// let map;

// function initMap(){

//     map = L.map('map').setView([21.1702, 72.8311], 12);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; OpenStreetMap contributors'
//     }).addTo(map);

// }

// window.onload = function(){
//     showSection("dashboard");
//     initMap();
// };

function addAlert(data){

    let container = document.getElementById("alertList");

    let card = document.createElement("div");
    card.className = "alert-card";

    card.innerHTML = `
        <h3>🚨 SOS Alert</h3>
        <p><b>User:</b> ${data.name}</p>
        <p><b>Location:</b> ${data.location}</p>
        <p><b>Time:</b> ${data.time}</p>

        <span class="status pending">PENDING</span>
    `;

    container.prepend(card);
}

addAlert({
    name: "Test User",
    location: "Ahmedabad",
    time: new Date().toLocaleString()
});

function animateCounter(id, target){

    let el = document.getElementById(id);
    let count = 0;

    let interval = setInterval(() => {

        count++;

        el.innerText = count;

        if(count >= target){
            clearInterval(interval);
        }

    }, 20);
}

animateCounter("sosCount", 128);

let lineChart, pieChart;

function loadCharts(){

    // LINE CHART (SOS TREND)
    let ctx1 = document.getElementById("lineChart");

    lineChart = new Chart(ctx1, {
        type: "line",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [{
                label: "SOS Requests",
                data: [12, 19, 8, 15, 22, 30, 25],
                borderColor: "#082bee",
                backgroundColor: "rgb(255, 255, 255)",
                tension: 0.4
            }]
        },
        options: {
            responsive: true
        }
    });

    // PIE CHART (CASE STATUS)
    let ctx2 = document.getElementById("pieChart");

    pieChart = new Chart(ctx2, {
        type: "pie",
        data: {
            labels: ["Resolved", "Active", "Pending"],
            datasets: [{
                data: [60, 25, 15],
                backgroundColor: ["#08f300", "#facc15", "#ff3b3b"]
            }]
        }
    });
}

const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");

function filterRequests(){

    const search = searchInput.value.toLowerCase();
    const status = statusFilter.value;

    document.querySelectorAll(".request-card").forEach(card=>{

        const name = card.querySelector("h4").innerText.toLowerCase();

        const matchesSearch = name.includes(search);

        const matchesStatus =
            status === "all" ||
            card.classList.contains(status);

        card.style.display =
            matchesSearch && matchesStatus
            ? "flex"
            : "none";
    });
}

searchInput.addEventListener("keyup", filterRequests);
statusFilter.addEventListener("change", filterRequests);