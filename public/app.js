// Create map:
const myMap = L.map("map", {
  center: [48.868672, 2.34213],
  zoom: 12,
});

// Add OpenStreetMap tiles:
L.tileLayer("https://.tile.openstreetmap.org///.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  minZoom: "15",
}).addTo(myMap);

// Create and add a geolocation marker:
const marker = L.marker([48.87007, 2.346453]);
marker.addTo(myMap).bindPopup("<p1><b>The Hoxton, Paris</b></p1>").openPopup();

// draw the 2nd arrondissement
var polygon = L.polygon([
  [48.863368120198004, 2.3509079846928516][
    (48.86933262048345, 2.3542531602919805)
  ][(48.87199261164275, 2.3400569901592183)][
    (48.86993336274516, 2.3280142476578813)
  ][(48.86834104280146, 2.330308418109664)],
]).addTo(map);

// create red pin marker

// metro station markers
