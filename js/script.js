// Initialize the Google Map
function initMap() {
    const centerCoordinates = { lat: 37.7749, lng: -122.4194 }; // Example: San Francisco
    const mapOptions = {
        zoom: 10,
        center: centerCoordinates,
        mapTypeId: 'roadmap' // Roadmap type
    };

    // Create a new map instance
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // 1. Add a Custom Marker
    const marker = new google.maps.Marker({
        position: centerCoordinates,
        map: map,
        title: "Center Marker"
    });

    // 2. Add an Info Window
    const infoWindow = new google.maps.InfoWindow({
        content: "<h3>Welcome to San Francisco!</h3><p>This is the center location on the map.</p>"
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });

    // 3. Add a Drawing Tool for marking additional points
    const drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
        }
    });
    drawingManager.setMap(map);
}

// Event listener to ensure no uncaught errors during initialization
window.addEventListener('error', (event) => {
    console.error('Error occurred:', event.error);
});