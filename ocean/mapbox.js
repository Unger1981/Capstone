//  MAPBOX API and Configuration 
mapboxgl.accessToken =
  "pk.eyJ1Ijoib3dudG9vbWFueW1vbnN0ZXIiLCJhIjoiY2tvNzMwMGpuMjk4ZDJvbXZqaHBqanlpbSJ9.DHukChuKakMnzj-mieZ1Og";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/owntoomanymonster/ckorbgpvm41v417o8c5n3savc", // style URL
  center: [-10, 0], // starting position [lng, lat]
  pitch: 30,
  bearing: 0.5,
  zoom: -0.2, // starting zoom
});

//Coordinates and Infos for Mapbox Marker

let geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-151.518, 66.917],
      },
      properties: {
        title: "Station",
        description: "Bettles Airport, Alaska",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [11.933, 78.923],
      },
      properties: {
        title: "Station",
        description: "Spitzbergen, Norway",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-157.929, 21.324],
      },
      properties: {
        title: "Station",
        description: "Hawaii, USA",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [13.403, 52.468],
      },
      properties: {
        title: "Station",
        description: "Berlin, Germany",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-16.255, 28.463],
      },
      properties: {
        title: "Station",
        description: "Tenerife, Spain",
      },
    },
  ],
};
//add markers to map
geojson.features.forEach(function (marker) {
  // create a HTML element for each feature
  var el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 20 }) // add popups
        .setHTML(
          "<h3>" +
            marker.properties.title +
            "</h3><h4>" +
            marker.properties.description +
            "</h4>"
        )
    )
    .addTo(map);
});




