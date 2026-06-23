// Create map centered on a location
const map = L.map('map').setView([42.65, -71.13], 10); // Lawrence, MA area

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add a marker
L.marker([42.65, -71.13]).addTo(map)
  .bindPopup('Hello from Lawrence!')
  .openPopup();

// Add another clickable marker
L.marker([42.7, -71.15]).addTo(map)
  .bindPopup('Another location');
