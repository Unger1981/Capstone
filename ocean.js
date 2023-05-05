
// !!! ALL IMPORTS IN OCEAN FOLDER !!!
// Import Navigation Functions
import * as navigationMenu from "./navigationMenu.js";
// Import Dom Elements and Event Listener
import * as domAndEvent from "./ocean/domEvent.js";
// Mapbox Api and Configuration
import * as mapbox from "./ocean/mapbox.js";
// Import Data Fetches as Array from NOAA Server
import * as fetchElemets from "./ocean/fetchElements.js";
// NOAA Access Token
import * as token from "./ocean/noaaToken.js";

import * as controlYears from "./ocean/controlYears.js";
// Chart.js Api and Configuration
import * as chartJS from "./ocean/chartJS.js";
// Functions for NOAA Api Fetch
import {mainFetch,urlFetch} from "./ocean/functions.js";

mainFetch();

//   DATA CONVERSION FOR CHART.JS



let WeatherArray = JSON.parse(localStorage.getItem("WeatherData"));

// object destructuring for relevant values in result array
let ArrayOne = WeatherArray[0]["results"];
let ArrayTwo = WeatherArray[1]["results"];
let ArrayThree = WeatherArray[2]["results"];
let ArrayFour = WeatherArray[3]["results"];
let ArrayFive = WeatherArray[4]["results"];

// creating one object array with all values for formating
let MainArray = ArrayOne.concat(ArrayTwo)
  .concat(ArrayThree)
  .concat(ArrayFour)
  .concat(ArrayFive);

//object destructuring for local station data

let NOE00134778 = MainArray.filter(
  ({ station }) => station === "GHCND:NOE00134778"
);
let GME00111445 = MainArray.filter(
  ({ station }) => station === "GHCND:GME00111445"
);
let SPE00120458 = MainArray.filter(
  ({ station }) => station === "GHCND:SPE00120458"
);
let USW00012836 = MainArray.filter(
  ({ station }) => station === "GHCND:USW00012836"
);
let USW00022521 = MainArray.filter(
  ({ station }) => station === "GHCND:USW00022521"
);
let USW00026533 = MainArray.filter(
  ({ station }) => station === "GHCND:USW00026533"
);

// creating array for data type change and sort for chronological years
let stationArray = [
  NOE00134778,
  GME00111445,
  SPE00120458,
  USW00012836,
  USW00022521,
  USW00026533,
];

for (let i = 0; i < stationArray.length; i++) {
  for (let j = 0; j < stationArray[i].length; j++) {
    let value = stationArray[i][j]["date"];

    value = value.slice(0, 4);

    value = Number(value);

    stationArray[i][j]["date"] = value;
  }
  stationArray[i].sort(function (a, b) {
    return a.date - b.date;
  });
}
// object destructuring for data visualisation

let NOE00134778date = [];
let NOE00134778value = [];

let GME00111445date = [];
let GME00111445value = [];

let SPE00120458date = [];
let SPE00120458value = [];

let USW00012836date = [];
let USW00012836value = [];

let USW00022521date = [];
let USW00022521value = [];

let USW00026533date = [];
let USW00026533value = [];

for (let i = 0; i < NOE00134778.length; i++) {
  NOE00134778date[i] = NOE00134778[i]["date"];
  NOE00134778value[i] = NOE00134778[i]["value"];
}

for (let i = 0; i < GME00111445.length; i++) {
  GME00111445date[i] = GME00111445[i]["date"];
  GME00111445value[i] = GME00111445[i]["value"];
}

for (let i = 0; i < SPE00120458.length; i++) {
  SPE00120458date[i] = SPE00120458[i]["date"];
  SPE00120458value[i] = SPE00120458[i]["value"];
}

for (let i = 0; i < USW00012836.length; i++) {
  USW00012836date[i] = USW00012836[i]["date"];
  USW00012836value[i] = USW00012836[i]["value"];
}

for (let i = 0; i < USW00022521.length; i++) {
  USW00022521date[i] = USW00022521[i]["date"];
  USW00022521value[i] = USW00022521[i]["value"];
}

for (let i = 0; i < USW00026533.length; i++) {
  USW00026533date[i] = USW00026533[i]["date"];
  USW00026533value[i] = USW00026533[i]["value"];
}
let valueArray = [
  USW00026533value,
  NOE00134778value,
  USW00022521value,
  GME00111445value,
  SPE00120458value,
];
let labelArray = [
  "Alaska, Bettles Air ",
  "Norway, Spitzbergen",
  "Pacific US, Hawaii",
  "Germany, Berlin",
  "Spain, Teneriffe",
];



let historicData = [
  { year: 1900, level: 0 },
  { year: 1920, level: 0.35 },
  { year: 1940, level: 0.5 },
  { year: 1960, level: 0.95 },
  { year: 1980, level: 1.1 },
  { year: 2000, level: 1.45 },
  { year: 2020, level: 2.1 },
];
let arrayYear = [];
let arrayLevel = [];
for (let i = 0; i < historicData.length; i++) {
  arrayYear[i] = historicData[i]["year"];
  arrayLevel[i] = historicData[i]["level"];
}

let predictionData = [
  { year: 2020, interLow: 0, interhigh: 0, extreme: 0 },
  { year: 2050, interLow: 0.25, interhigh: 0.6, extreme: 1.0 },
  { year: 2075, interLow: 0.35, interhigh: 1.0, extreme: 1.5 },
  { year: 2100, interLow: 0.5, interhigh: 1.5, extreme: 2.5 },
];

let predictionYear = [];
let predictionLevelLow = [];
let predictionLevelHigh = [];
let predictionLevelExtreme = [];

for (let i = 0; i < predictionData.length; i++) {
  predictionYear[i] = predictionData[i]["year"];
  predictionLevelLow[i] = predictionData[i]["interLow"];
  predictionLevelHigh[i] = predictionData[i]["interhigh"];
  predictionLevelExtreme[i] = predictionData[i]["extreme"];
}
let predictionArray = [
  predictionLevelLow,
  predictionLevelHigh,
  predictionLevelExtreme,
];



export { valueArray,labelArray,arrayLevel,arrayYear,predictionYear,predictionArray };