import { controlYears } from "../ocean.js";
// Begin Chart.js deafult setup
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "bar",

  data: {
    labels: controlYears,
    datasets: [
      {
        label: "Weather Station",

        data: null,
        pointStyle: "rectRot",
        pointRadius: 4,
        borderColor: ["rgba(255, 135, 0, 0.5)"],
        backgroundColor: ["rgba(255, 135, 0, 0.3)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 15,
          },
          color: "rgba(200,200,200,0.8)",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          color: "white",
          borderColor: "transparent",
          tickColor: "transparent",
        },
        ticks: {
          color: "rgba(200,200,200,0.8)",
        },

        title: {
          color: "white",
          display: false,
          text: "Year",
        },
        beginAtZero: false,
      },
      y: {
        max: null,
        ticks: {
          color: "rgba(200,200,200,0.8)",
        },
        grid: {
          display: false,
          color: "transparent",
          borderColor: "transparent",
          tickColor: "transparent",
        },
        title: {
          color: "grey",
          display: true,
          text: " °C ",
        },
        beginAtZero: false,
      },
    },
  },
});

export {myChart};