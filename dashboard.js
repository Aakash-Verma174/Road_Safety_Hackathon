document.addEventListener("DOMContentLoaded", () => {

    const timeline = document.getElementById("timeline");
    const statusBox = document.getElementById("sosStatus");

    const messages = [
        "🚨 SOS Triggered",
        "📡 Sending Location",
        "🚑 Ambulance Dispatched",
        "👮 Police Notified",
        "✅ Emergency Response Active"
    ];

    let index = 0;

    function showMessage(){

        // update main status
        statusBox.innerText = messages[index];

        // replace old message (NOT append)
        timeline.innerHTML = `
            <div class="timeline-item">
                ${messages[index]}
            </div>
        `;

        index++;

        if(index === messages.length){
            index = 0;
        }
    }

    // first run
    showMessage();

    // repeat cycle
    setInterval(showMessage, 2000);

});