function showSection(id){

    let sections = document.querySelectorAll(".section");

    sections.forEach(sec => {
        sec.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

<div id="map" class="card section">

    <h1>🚨 Live Emergency Map</h1>

    <p>Real-time monitoring of active locations</p>

    <div class="map-container">

        <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.8000%2C21.1500%2C72.9000%2C21.2500&layer=mapnik"
            style="border:0; width:100%; height:450px;">
        </iframe>

    </div>

</div>
