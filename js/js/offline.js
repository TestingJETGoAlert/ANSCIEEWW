async function loadOfflineData() {
    try {
        let response = await fetch('data/past_earthquakes.json');
        let earthquakes = await response.json();
        console.log("Offline Earthquake Data Loaded:", earthquakes);
    } catch (error) {
        console.error("Failed to load offline data", error);
    }
}
document.addEventListener("DOMContentLoaded", loadOfflineData);
