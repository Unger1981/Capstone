//  Fetch Url for NOAA Data access  5 seperate fetches necesssary duo to server restricion (max 10 years)

let oneOfFive =
  "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GSOY&units=METRIC&startdate=1975-01-01&enddate=1984-12-31&datatypeid=TAVG&limit=1000&sortfield=station&stationid=GHCND:NOE00134778&stationid=GHCND:USW00026533&stationid=GHCND:USW00022521&stationid=GHCND:USW00012836&stationid=GHCND:SPE00120458&stationid=GHCND:GME00111445";

let twoOfFive =
  "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GSOY&units=METRIC&startdate=1985-01-01&enddate=1994-12-31&datatypeid=TAVG&limit=1000&sortfield=station&stationid=GHCND:NOE00134778&stationid=GHCND:USW00026533&stationid=GHCND:USW00022521&stationid=GHCND:USW00012836&stationid=GHCND:SPE00120458&stationid=GHCND:GME00111445";

let threeOfFive =
  "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GSOY&units=METRIC&startdate=1995-01-01&enddate=2004-12-31&datatypeid=TAVG&limit=1000&sortfield=station&stationid=GHCND:NOE00134778&stationid=GHCND:USW00026533&stationid=GHCND:USW00022521&stationid=GHCND:USW00012836&stationid=GHCND:SPE00120458&stationid=GHCND:GME00111445";

let fourOfFive =
  "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GSOY&units=METRIC&startdate=2005-01-01&enddate=2014-12-31&datatypeid=TAVG&limit=1000&sortfield=station&stationid=GHCND:NOE00134778&stationid=GHCND:USW00026533&stationid=GHCND:USW00022521&stationid=GHCND:USW00012836&stationid=GHCND:SPE00120458&stationid=GHCND:GME00111445";

let fiveOfFive =
  "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GSOY&units=METRIC&startdate=2015-01-01&enddate=2020-12-31&datatypeid=TAVG&limit=1000&sortfield=station&stationid=GHCND:NOE00134778&stationid=GHCND:USW00026533&stationid=GHCND:USW00022521&stationid=GHCND:USW00012836&stationid=GHCND:SPE00120458&stationid=GHCND:GME00111445";

let fetchArrays = [oneOfFive, twoOfFive, threeOfFive, fourOfFive, fiveOfFive];

export {fetchArrays};