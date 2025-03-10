async function checkForAlerts() {
    const apiURL = "https://earthquake.phivolcs.dost.gov.ph/api/latest";  // Example API URL
    const alertSound = new Audio('assets/alert.mp3');

    try {
        let response = await fetch(apiURL);
        let data = await response.json();

        if (data.earthquakes.length > 0) {
            const quake = data.earthquakes[0];
            const magnitude = quake.magnitude;
            const location = quake.location;

            let alertLevel = getAlertLevel(magnitude);
            showAlert(alertLevel, magnitude, location);
            alertSound.play();  // Play alert sound
        } else {
            alert("✅ No recent earthquake detected.");
        }
    } catch (error) {
        console.error("Error fetching earthquake data:", error);
    }
}

function getAlertLevel(magnitude) {
    if (magnitude < 4.0) return { level: "Blue", message: "Minor earthquake detected." };
    if (magnitude < 5.0) return { level: "Green", message: "Light earthquake detected." };
    if (magnitude < 6.0) return { level: "Yellow", message: "Moderate earthquake detected!" };
    if (magnitude < 7.0) return { level: "Orange", message: "Strong earthquake detected!" };
    return { level: "Red", message: "Major earthquake detected! Take cover!" };
}

function showAlert(alertLevel, magnitude, location) {
    const alertBox = document.createElement("div");
    alertBox.className = `alert ${alertLevel.level.toLowerCase()}`;
    alertBox.innerHTML = `<strong>${alertLevel.level} Alert:</strong> ${alertLevel.message} (M${magnitude}) near ${location}`;
    
    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 10000);
}
