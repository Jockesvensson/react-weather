import moment from "moment";
import "moment/locale/sv";

export const timeFunction = (measureDateSaying, setEndTime) => {
    if (measureDateSaying === "02") {
        setEndTime("08");
    }
    if (measureDateSaying === "08") {
        setEndTime("14");
    }
    if (measureDateSaying === "14") {
        setEndTime("20");
    }
    if (measureDateSaying === "20") {
        setEndTime("02");
    }
}

export const finalSixDaysDateFunction = (dayIndex, setDayName, setDate, setMonth, item, setWeather) => {
    var currentDay = moment().add(dayIndex + 3, "days").format("L");
    moment.locale("sv");
    setDayName(moment().add(dayIndex + 3, "days").format("dddd"));
    setDate(moment().add(dayIndex + 3, "days").format("D"));
    setMonth(moment().add(dayIndex + 3, "days").format("MMM "));
    const weatherData = item.filter((item) =>
      item.time.includes(currentDay)
    );
    setWeather(weatherData);
}

export const todayDateFunction = (setDate, setMonth, setDayName, forecastWeekData, setWeather) => {
    moment.locale("sv");
    var today = moment().format("L");
    setDate(moment().format("D"));
    setMonth(moment().format("MMM "));
    if (today) {
      setDayName("Idag");
    }
    const todaysData = forecastWeekData.filter((item) =>
      item.time.includes(today)
    );
    setWeather(todaysData.slice(0, -2));
}

export const tomorrowDateFunction = (setDayName, setDate, setMonth, setWeather, tomorrowWeatherData) => {
    moment.locale("sv");
    setDayName(moment().add(1, "days").format("dddd"));
    setDate(moment().add(1, "days").format("D"));
    setMonth(moment().add(1, "days").format("MMM "));
    setWeather(tomorrowWeatherData);
}

export const twoDaysDateFunction = (setDayName, setDate, setMonth, setWeather, twoDaysForwardWeatherData) => {
    moment.locale("sv");
    setDayName(moment().add(2, "days").format("dddd"));
    setDate(moment().add(2, "days").format("D"));
    setMonth(moment().add(2, "days").format("MMM "));
    setWeather(twoDaysForwardWeatherData);
}