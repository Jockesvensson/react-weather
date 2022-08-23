import { timeFunction } from "./timeFunctions";
import "moment/locale/sv";

export const weatherDetailsFunction = (
  item,
  setWeatherMaxTemp,
  setWeatherMinTemp,
  setMaxWindSpeed,
  setSumRain
) => {
  const getHighAndLowTemp = item.map((item, index) =>
    item.data.instant.details.air_temperature.toFixed(0)
  );
  setWeatherMaxTemp(Math.max(...getHighAndLowTemp));
  setWeatherMinTemp(Math.min(...getHighAndLowTemp));
  const getWindspeed = item.map((item, index) =>
    item.data.instant.details.wind_speed.toFixed(0)
  );
  setMaxWindSpeed(Math.max(...getWindspeed));
  var rainNextSixHours = item.map((item) => item.data.next_6_hours);
  if (rainNextSixHours.length > 0) {
    const getSumRainSixHours = rainNextSixHours.map((item) =>
      item !== undefined ? item.details.precipitation_amount : 0
    );
    setSumRain(getSumRainSixHours.reduce((a, b) => a + b, 0).toFixed(1));
  }
};

export const specialWeatherDetailsFunction = (
  weather,
  setWeatherMaxTemp,
  setWeatherMinTemp,
  setMaxWindSpeed,
  setSumRain
) => {
  const getHighAndLowTemp = weather.map((item, index) =>
    item.data.instant.details.air_temperature.toFixed(0)
  );
  setWeatherMaxTemp(Math.max(...getHighAndLowTemp));
  setWeatherMinTemp(Math.min(...getHighAndLowTemp));
  const getSumRain = weather
    .slice(0, 2)
    .map((item, index) => item.data.next_1_hours.details.precipitation_amount);
  const getSumRainLastItem = weather
    .slice(-1)
    .map((item, index) =>
      item.data.next_6_hours
        ? item.data.next_6_hours.details.precipitation_amount
        : item.data.next_1_hours.details.precipitation_amount
    );
  const totalRain = [...getSumRain, ...getSumRainLastItem];
  setSumRain(totalRain.reduce((a, b) => a + b, 0).toFixed(1));
  const getWindspeed = weather.map((item, index) =>
    item.data.instant.details.wind_speed.toFixed(0)
  );
  setMaxWindSpeed(Math.max(...getWindspeed));
};

export const otherWeatherDetailsFunction = (
  item,
  setIcons,
  setEndTime,
  measureDateSaying,
  setWindDirection,
  setWindSpeed
) => {
  const weatherOneHours = item.data.next_1_hours;
  const weatherSixHours = item.data.next_6_hours;
  if (weatherOneHours !== undefined) {
    setIcons(item.data.next_1_hours.summary.symbol_code);
    setEndTime("");
  } else if (weatherSixHours !== undefined) {
    setIcons(item.data.next_6_hours.summary.symbol_code);
    setEndTime("");
    timeFunction(measureDateSaying, setEndTime);
  } else {
    setIcons("");
    setEndTime("");
  }
  setWindDirection(item.data.instant.details.wind_from_direction);
  setWindSpeed(item.data.instant.details.wind_speed.toFixed(0));
};
