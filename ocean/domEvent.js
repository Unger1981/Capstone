import {myChart} from "./chartJS.js";
import { valueArray,labelArray,arrayLevel,arrayYear,predictionYear,predictionArray } from "../ocean.js";
import { controlYears } from "./controlYears.js";

// Eventlistener for local stations trigger related datavisualisation in Chart.js Canvas

let mapStations = document.querySelectorAll(".mapboxgl-marker");

for (let i = 0; i < mapStations.length; i++) {
  mapStations[i].addEventListener("click", () => {
    myChart.data.datasets[0].data = valueArray[i];
    myChart.data.datasets[0].label = labelArray[i];
    myChart.update("active");
  });
}
// EventListener for Button in Chart.js Canvas changes between line and bar charts
let chartToggle = document.querySelector(".chartToggle");
let toggleIcon = document.querySelector(".lni-bar-chart");
chartToggle.addEventListener("click", () => {
  if (myChart.config.type === "bar") {
    myChart.config.type = "line";
    myChart.update();
    toggleIcon.className = "lni lni-bar-chart";
  } else {
    myChart.config.type = "bar";
    myChart.update();
    toggleIcon.className = "lni lni-stats-up";
  }
});

// Event listener for Tiles shift tiles in viewport and triggers changes in chart.js

let tile3on = document.querySelector(".tile3on");
let chartTile2on = document.querySelector(".chartTile2on");
let tile4on = document.querySelector(".tile4on");
let mapTileoff = document.querySelector(".mapTileoff");

let chartTileoff = document.querySelector(".chartTileoff");
let chartTileThreeOff = document.querySelector(".chartTileThreeOff");
let backButtonOff = document.querySelector(".backButtonOff");

tile3on.addEventListener("click", () => {
 
  tile3on.classList.toggle("tile3on");
  tile3on.classList.toggle("tile3off");
  chartTile2on.classList.toggle("chartTile2on");
  chartTile2on.classList.toggle("chartTile2off");
  tile4on.classList.toggle("tile4on");
  tile4on.classList.toggle("tile4off");
  mapTileoff.classList.toggle("mapTileoff");
  mapTileoff.classList.toggle("mapTileon");
  chartTileoff.classList.toggle("chartTileoff");
  chartTileoff.classList.toggle("chartTileon");
  backButtonOff.classList.toggle("backButtonOff");
  backButtonOff.classList.toggle("backButtonOn");
  myChart.data.datasets[0].label = "Station";
  myChart.data.datasets[0].data = 0;
  myChart.config.data.labels = controlYears;
  myChart.config.options.scales.y.title.text = "°C";
  myChart.config.options.scales.y.max = null;
  myChart.update("active");
});

tile4on.addEventListener("click", () => {

  tile3on.classList.toggle("tile3on");
  tile3on.classList.toggle("tile3off");
  chartTile2on.classList.toggle("chartTile2on");
  chartTile2on.classList.toggle("chartTile2off");
  tile4on.classList.toggle("tile4on");
  tile4on.classList.toggle("tile4off");
  chartTileThreeOff.classList.toggle("chartTileThreeOff");
  chartTileThreeOff.classList.toggle("chartTileThreeOn");
  chartTileoff.classList.toggle("chartTileoff");
  chartTileoff.classList.toggle("chartTileon");
  backButtonOff.classList.toggle("backButtonOff");
  backButtonOff.classList.toggle("backButtonOn");
  myChart.data.datasets[0].label = "Historic global sealevel";
  myChart.data.datasets[0].data = arrayLevel;
  myChart.config.data.labels = arrayYear;
  myChart.config.options.scales.y.title.text = "m";
  myChart.config.options.scales.y.max = 2.5;
  myChart.config.type = "line";
  myChart.update("active");
});

backButtonOff.addEventListener("click", () => {
  if (chartTileThreeOff.className === "chartTileThreeOn") {
    chartTileThreeOff.classList.toggle("chartTileThreeOff");
    chartTileThreeOff.classList.toggle("chartTileThreeOn");
    chartTile2on.classList.toggle("chartTile2on");
    chartTile2on.classList.toggle("chartTile2off");
    chartTileoff.classList.toggle("chartTileoff");
    chartTileoff.classList.toggle("chartTileon");
    backButtonOff.classList.toggle("backButtonOff");
    backButtonOff.classList.toggle("backButtonOn");
    tile3on.classList.toggle("tile3on");
    tile3on.classList.toggle("tile3off");
    tile4on.classList.toggle("tile4on");
    tile4on.classList.toggle("tile4off");
    backgroundVideo.classList.toggle("backgroundVideo");
    backgroundVideo.classList.toggle("backgroundVideo2");
  } else {
    tile3on.classList.toggle("tile3on");
    tile3on.classList.toggle("tile3off");
    chartTile2on.classList.toggle("chartTile2on");
    chartTile2on.classList.toggle("chartTile2off");
    tile4on.classList.toggle("tile4on");
    tile4on.classList.toggle("tile4off");
    mapTileoff.classList.toggle("mapTileoff");
    mapTileoff.classList.toggle("mapTileon");
    chartTileoff.classList.toggle("chartTileoff");
    chartTileoff.classList.toggle("chartTileon");
    backButtonOff.classList.toggle("backButtonOff");
    backButtonOff.classList.toggle("backButtonOn");
  }
});

let scenarioButtons = document.querySelectorAll(".scenarioButton");

for (let i = 0; i < scenarioButtons.length; i++) {
  scenarioButtons[i].addEventListener("click", () => {
    myChart.data.datasets[0].data = predictionArray[i];
    myChart.data.labels = predictionYear;
    myChart.update("active");
  });
}

// Paragraph changes by timeot function
let dataInfoPara = document.querySelector(".dataInfoPara");

setTimeout(function () {
  dataInfoPara.textContent =
    "Please click on any tile below to enter data visualisation ";
}, 9000);