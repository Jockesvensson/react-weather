import moment from "moment";
import "moment/locale/sv";

const { REACT_APP_API_KEY } = process.env;

const getCityData = async (setCityData, lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}&units=metric`
    await fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setCityData(json.city);
        })
}
const getGeolocationData = async (setLat, setLon, search) => {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${REACT_APP_API_KEY}`
    await fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setLat(json[0].lat);
            setLon(json[0].lon);
        })
}

const getYrTwentyFourHoursData = async (lat, lon, setForecastTwentyFourHoursData) => {
    const url = `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lon}`
    await fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setForecastTwentyFourHoursData(json.properties.timeseries.slice(1, 25));
        })
}

const getYrCurrentWeatherData = async (lat, lon, setCurrentWeatherTemp, setForecastCurrentDayMaxTemp, 
    setCurrentWeatherData, setCurrentWeatherIcon, setCurrentWeatherWindSpeed, setCurrentWeatherGust, setCurrentWeatherRain, 
    setCurrentWindDirection, setCurrentWeatherUVI, setCurrentWeatherHumidity) => {
    const url = `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lon}`
    await fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setCurrentWeatherTemp(json.properties.timeseries[0].data.instant.details.air_temperature.toFixed(0));
            setForecastCurrentDayMaxTemp(json.properties.timeseries[0].data.instant.details.air_temperature_percentile_90.toFixed(0))
            setCurrentWeatherData(json.properties.timeseries[0].data.instant.details);
            setCurrentWeatherIcon(json.properties.timeseries[0].data.next_1_hours.summary.symbol_code)
            setCurrentWeatherWindSpeed(json.properties.timeseries[0].data.instant.details.wind_speed.toFixed(0))
            setCurrentWeatherGust(json.properties.timeseries[0].data.instant.details.wind_speed_of_gust.toFixed(0))
            setCurrentWeatherRain(json.properties.timeseries[0].data.next_1_hours.details.precipitation_amount.toFixed(0))
            setCurrentWindDirection(json.properties.timeseries[0].data.instant.details.wind_from_direction)
            setCurrentWeatherData(json.properties.timeseries[0].data);
            setCurrentWeatherUVI(json.properties.timeseries[0].data.instant.details.ultraviolet_index_clear_sky)
            setCurrentWeatherHumidity(json.properties.timeseries[0].data.instant.details.relative_humidity.toFixed(0))
        })
}

const getYrWeekWeatherData = async (lat, lon, setForecastWeekData) => {
    const url = `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lon}`
    await fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setForecastWeekData(json.properties.timeseries);
        })
}

const getYrTomorrowWeatherData = async (lat, lon, setTomorrowWeatherData) => {
    const url = `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lon}`
    await fetch(url)
        .then((res) => res.json())
        .then((json) => {
            moment.locale("sv");
            var today = moment().format("L");
            var tomorrow = moment().add(1, "days").format("L");
            const tomorrowFirstTwoValuesData = json.properties.timeseries.filter((item) =>
            item.time.includes(today)
            );
            const tomorrowRemainingValuesData = json.properties.timeseries.filter((item) =>
            item.time.includes(tomorrow)
            );
            setTomorrowWeatherData([...tomorrowFirstTwoValuesData.slice(-2), ...tomorrowRemainingValuesData.slice(0, 22)])
        })
}

const getYrTwoDaysForwardWeatherData = async (lat, lon, setTwoDaysForwardWeatherData) => {
    const url = `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lon}`
    await fetch(url)
        .then((res) => res.json())
        .then((json) => {
            moment.locale("sv");
            var tomorrow = moment().add(1, "days").format("L");
            var twoDaysForward = moment().add(2, "days").format("L");
            const twoDaysForwardFirstTwoValuesData = json.properties.timeseries.filter((item) =>
            item.time.includes(tomorrow)
            );
            const twoDaysForwardRemainingValuesData = json.properties.timeseries.filter((item) =>
            item.time.includes(twoDaysForward)
            );
            setTwoDaysForwardWeatherData([...twoDaysForwardFirstTwoValuesData.slice(-2), ...twoDaysForwardRemainingValuesData.slice(0, 22)])
        })
}

const getYrCurrentSunriseSunsetData = async (lat, lon, setTodaySunriseData, setTodaySunsetData, sunTodayDate) => {
    const url = `https://api.met.no/weatherapi/sunrise/2.0/.json?lat=${lat}&lon=${lon}&date=${sunTodayDate}&offset=02:00`
    await fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setTodaySunriseData(json.location.time[0].sunrise.time);
            setTodaySunsetData(json.location.time[0].sunset.time);
        })
}

const getYrSunriseSunsetData = async (lat, lon, setSunriseData, setSunsetData, sunDate) => {
    const url = `https://api.met.no/weatherapi/sunrise/2.0/.json?lat=${lat}&lon=${lon}&date=${sunDate}&offset=02:00`
    await fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setSunriseData(json.location.time[0].sunrise.time);
            setSunsetData(json.location.time[0].sunset.time);
        })
}

export { 
    getCityData,
    getGeolocationData, 
    getYrTwentyFourHoursData, 
    getYrCurrentWeatherData, 
    getYrWeekWeatherData, 
    getYrTomorrowWeatherData, 
    getYrTwoDaysForwardWeatherData,
    getYrCurrentSunriseSunsetData,
    getYrSunriseSunsetData
}