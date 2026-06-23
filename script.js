const map = L.map('map').setView([42.3, -71.8], 8);

// Base map
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap & CARTO',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// Example: towns you've run in
const runTowns = {
  "Boston": true,
  "Lowell": true,
  "Cambridge": true,
  "Lawrence": true
};

onEachFeature: function(feature, layer) {
  layer.on("mouseover", function () {
    layer.setStyle({ fillOpacity: 0.8 });
  });

  layer.on("mouseout", function () {
    layer.setStyle({ fillOpacity: 0.6 });
  });
}
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
