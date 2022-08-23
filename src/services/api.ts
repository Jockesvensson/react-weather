import moment from "moment";
import "moment/locale/sv";

const { REACT_APP_API_KEY } = process.env;
const BASE_URL_OPEN_WEATHER_MAP =
  "https://api.openweathermap.org/data/2.5/forecast";
const BASE_URL_OPEN_WEATHER_MAP_GEOLOCATION =
  "https://api.openweathermap.org/geo/1.0/direct";
const BASE_URL_YR =
  "https://api.met.no/weatherapi/locationforecast/2.0/complete";
const BASE_URL_YR_SUN = "https://api.met.no/weatherapi/sunrise/2.0/.json";
const OFFSET = "02:00";

const getCityData = async (setCityData, lat, lon, setCountryData) => {
  const url = `${BASE_URL_OPEN_WEATHER_MAP}?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}&units=metric`;
  await fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setCityData(json.city);
      setCountryData(json.city.country);
    });
};
const getGeolocationData = async (setLat, setLon, search) => {
  const url = `${BASE_URL_OPEN_WEATHER_MAP_GEOLOCATION}?q=${search}&limit=1&appid=${REACT_APP_API_KEY}`;
  await fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setLat(json[0].lat);
      setLon(json[0].lon);
    });
};

const getYrTwentyFourHoursData = async (
  lat,
  lon,
  setForecastTwentyFourHoursData
) => {
  const url = `${BASE_URL_YR}?lat=${lat}&lon=${lon}`;
  await fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setForecastTwentyFourHoursData(json.properties.timeseries.slice(0, 24));
    });
};

const getYrCurrentWeatherData = async (
  lat,
  lon,
  setCurrentWeatherData,
  setCurrentWeatherUVI
) => {
  const url = `${BASE_URL_YR}?lat=${lat}&lon=${lon}`;
  await fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setCurrentWeatherData(json.properties.timeseries.slice(0, 1));
      setCurrentWeatherUVI(
        json.properties.timeseries[0].data.instant.details
          .ultraviolet_index_clear_sky
      );
    });
};

const getYrWeekWeatherData = async (lat, lon, setForecastWeekData) => {
  const url = `${BASE_URL_YR}?lat=${lat}&lon=${lon}`;
  await fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setForecastWeekData(json.properties.timeseries);
    });
};

const getYrCurrentSunriseSunsetData = async (
  lat,
  lon,
  setTodaySunriseData,
  setTodaySunsetData,
  sunTodayDate,
  cityData
) => {
  const url = `${BASE_URL_YR_SUN}?lat=${lat}&lon=${lon}&date=${sunTodayDate}&offset=${OFFSET}`;
  await fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setTodaySunriseData(json.location.time[0].sunrise.time);
      setTodaySunsetData(json.location.time[0].sunset.time);
    });
};

const getYrSunriseSunsetData = async (
  lat,
  lon,
  setSunriseData,
  setSunsetData,
  sunDate,
  cityData
) => {
  const url = `${BASE_URL_YR_SUN}?lat=${lat}&lon=${lon}&date=${sunDate}&offset=${OFFSET}`;
  await fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setSunriseData(json.location.time[0].sunrise.time);
      setSunsetData(json.location.time[0].sunset.time);
    });
};

export {
  getCityData,
  getGeolocationData,
  getYrTwentyFourHoursData,
  getYrCurrentWeatherData,
  getYrWeekWeatherData,
  getYrCurrentSunriseSunsetData,
  getYrSunriseSunsetData,
};
