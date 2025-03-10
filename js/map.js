function initMap() {
    const schoolLocation = { lat: 14.6255, lng: 121.1226 };  
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: schoolLocation,
    });

    new google.maps.Marker({
        position: schoolLocation,
        map: map,
        title: "ACNSTHS - Safe Zone",
    });
}
