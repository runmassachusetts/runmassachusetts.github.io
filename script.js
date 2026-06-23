const map = L.map('map').setView([42.3, -71.8], 8);

// Base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example: towns you've run in
const runTowns = {
  "Boston": true,
  "Lowell": true,
  "Cambridge": true,
  "Lawrence": true
};

// GoDaddy base URL (CHANGE THIS)
const baseUrl = "https://runmassachusetts/";

// Load MA towns
fetch("massachusetts.geojson")
  .then(res => res.json())
  .then(data => {

    L.geoJSON(data, {
      style: function (feature) {
        const name = feature.properties.name;

        const hasRun = runTowns[name];

        return {
          color: "#333",
          weight: 1,
          fillColor: hasRun ? "green" : "#cccccc",
          fillOpacity: hasRun ? 0.6 : 0.2
        };
      },

      onEachFeature: function (feature, layer) {
        const town = feature.properties.name;

        layer.on("click", function () {
          const url = `${baseUrl}/${town.toLowerCase()}`;
          window.location.href = url;
        });

        layer.bindPopup(town);
      }
    }).addTo(map);
  });
