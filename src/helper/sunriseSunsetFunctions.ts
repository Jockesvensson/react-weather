import moment from "moment";
import "moment/locale/sv";

export const sunriseSunsetFunction = (currentWeatherInformation, setSunDate) => {
    const date = currentWeatherInformation[0].time;
    const t = new Date(date);
    const newDate = moment(t, "YYYY-MM-DD").format("YYYY-MM-DD");
    setSunDate(newDate);
}

export const sunriseSunsetShorterFunction = (currentWeatherInformationShorter, setSunDate) => {
    const date = currentWeatherInformationShorter[0].time;
    const t = new Date(date);
    const newDate = moment(t, "YYYY-MM-DD").format("YYYY-MM-DD");
    setSunDate(newDate);
}