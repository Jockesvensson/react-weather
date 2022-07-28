const { REACT_APP_API_KEY } = process.env;

const getCityData = (setCityData, lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}&units=metric`
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            // console.log(json.city);
            setCityData(json.city);
        })
}

const getCurrentWeatherData = (setCurrentWeatherData, setCurrentWeatherIcon, setCurrentWeatherIconDescription, lat, lon) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${REACT_APP_API_KEY}&units=metric`
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            // console.log("logg i backlog: ", json.current);
            setCurrentWeatherData(json.current);
            setCurrentWeatherIcon(json.current.weather[0].icon)
            setCurrentWeatherIconDescription(json.current.weather[0].description)
        })
}

const getForecastDailyData = (setForecastCurrentDayData, setForecastCurrentDayMaxTemp, setForecastCurrentDaySunrise, 
    setForecastCurrentDaySunset, setForecastCurrentDayHumidity, setForecastCurrentDayWindSpeed, setForecastCurrentDayUVI, lat, lon) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,current,alerts&appid=${REACT_APP_API_KEY}&units=metric`
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            // console.log("logg i backlog: ", json.daily);
            setForecastCurrentDayData(json.daily[0].temp.min);
            setForecastCurrentDayMaxTemp(json.daily[0].temp.max);
            setForecastCurrentDaySunrise(json.daily[0].sunrise);
            setForecastCurrentDaySunset(json.daily[0].sunset);
            setForecastCurrentDayHumidity(json.daily[0].humidity);
            setForecastCurrentDayWindSpeed(json.daily[0].wind_speed);
            setForecastCurrentDayUVI(json.daily[0].uvi);
        })
}

const getForecastTwentyFourHoursData = (setForecastTwentyFourHoursData, lat, lon) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,Daily,current,alerts&appid=${REACT_APP_API_KEY}&units=metric`
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            // console.log("logg i backlog: ", json.hourly.slice(0, 24));
            setForecastTwentyFourHoursData(json.hourly.slice(0, 24));
        })
}

const getForecastWeekData = (setForecastWeekData, lat, lon) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,current,alerts&appid=${REACT_APP_API_KEY}&units=metric`
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            // console.log("logg i backlog: ", json.daily);
            setForecastWeekData(json.daily);
        })
}

const getGeolocationData = (setLat, setLon, search) => {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${REACT_APP_API_KEY}`
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            // console.log("logg i backlog: ", json[0]);
            setLat(json[0].lat);
            setLon(json[0].lon);
        })
}

export { getCityData, getCurrentWeatherData, getForecastDailyData, getForecastTwentyFourHoursData, getForecastWeekData, getGeolocationData }