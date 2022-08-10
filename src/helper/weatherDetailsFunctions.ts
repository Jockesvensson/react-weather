import { timeFunction } from "./timeFunctions";

export const weatherDetailsFunction = (weather, setWeatherMaxTemp, setWeatherMinTemp, setMaxWindSpeed, setSumRain) => {
    const getHighAndLowTemp = weather.map((item, index) =>
      item.data.instant.details.air_temperature.toFixed(0)
    );
    setWeatherMaxTemp(Math.max(...getHighAndLowTemp));
    setWeatherMinTemp(Math.min(...getHighAndLowTemp));
    const getWindspeed = weather.map((item, index) =>
      item.data.instant.details.wind_speed.toFixed(0)
    );
    setMaxWindSpeed(Math.max(...getWindspeed));
    const getSumRain = weather.map((item, index) =>
      item.data.next_6_hours ? item.data.next_6_hours.details.precipitation_amount : 0
    );
    setSumRain(getSumRain.reduce((a, b) => a + b, 0).toFixed(1));
}

export const specialWeatherDetailsFunction = (weather, setWeatherMaxTemp, setWeatherMinTemp, setMaxWindSpeed, setSumRain) => {
    const getHighAndLowTemp = weather.map((item, index) =>
      item.data.instant.details.air_temperature.toFixed(0)
    );
    setWeatherMaxTemp(Math.max(...getHighAndLowTemp));
    setWeatherMinTemp(Math.min(...getHighAndLowTemp));
    const getSumRain = weather
      .slice(0, 2)
      .map(
        (item, index) => item.data.next_1_hours.details.precipitation_amount
      );
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
}

export const otherWeatherDetailsFunction = (item, setIcons, setEndTime, measureDateSaying, setWindDirection, setWindSpeed) => {
    if (!item.data.next_1_hours) {
        setIcons(item.data.next_6_hours.summary.symbol_code);
        setEndTime("");
        timeFunction(measureDateSaying, setEndTime);
      } else {
        setIcons(item.data.next_1_hours.summary.symbol_code);
        setEndTime("");
      }
      setWindDirection(item.data.instant.details.wind_from_direction);
      setWindSpeed(item.data.instant.details.wind_speed.toFixed(0));
}
