function initMap() {
  const bronzeville = { lat: 41.8123, lng: -87.6173 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: bronzeville,
    zoom: 15,
  });
  new google.maps.Marker({
    position: bronzeville,
    map: map,
    title: "Bronzeville",
  });
}
