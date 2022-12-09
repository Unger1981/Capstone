import {fetchArrays} from "./fetchElements.js"
import {token} from "./noaaToken.js"

function urlFetch(element) {
    return fetch(element, {
      method: "GET",
      headers: { token: token },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Successful");
  
          return response;
        } else {
          console.log(response.status);
        }
      })
      .then((response) => response.json())
      .then((data) => {
        let WeatherArray;
        WeatherArray = JSON.parse(localStorage.getItem("WeatherData"));
        if (WeatherArray === null) {
          WeatherArray = [];
          WeatherArray.push(data);
        } else {
          WeatherArray.push(data);
        }
        localStorage.setItem("WeatherData", JSON.stringify(WeatherArray));
      });
  };

  function mainFetch() {
    fetchArrays.forEach((element) => urlFetch(element));
  };

  export {urlFetch,mainFetch};