import moment from "moment";
import "moment/locale/sv";
import {
  formatInTimeZone,
  zonedTimeToUtc,
  utcToZonedTime,
  getTimezoneOffset,
} from "date-fns-tz";

export const timeFunction = (measureDateSaying, setEndTime) => {
  if (measureDateSaying === "00") {
    setEndTime("06");
  }
  if (measureDateSaying === "01") {
    setEndTime("07");
  }
  if (measureDateSaying === "02") {
    setEndTime("08");
  }
  if (measureDateSaying === "03") {
    setEndTime("09");
  }
  if (measureDateSaying === "04") {
    setEndTime("10");
  }
  if (measureDateSaying === "05") {
    setEndTime("11");
  }
  if (measureDateSaying === "06") {
    setEndTime("12");
  }
  if (measureDateSaying === "07") {
    setEndTime("13");
  }
  if (measureDateSaying === "08") {
    setEndTime("14");
  }
  if (measureDateSaying === "09") {
    setEndTime("15");
  }
  if (measureDateSaying === "10") {
    setEndTime("16");
  }
  if (measureDateSaying === "11") {
    setEndTime("17");
  }
  if (measureDateSaying === "12") {
    setEndTime("18");
  }
  if (measureDateSaying === "13") {
    setEndTime("19");
  }
  if (measureDateSaying === "14") {
    setEndTime("20");
  }
  if (measureDateSaying === "15") {
    setEndTime("21");
  }
  if (measureDateSaying === "16") {
    setEndTime("22");
  }
  if (measureDateSaying === "17") {
    setEndTime("23");
  }
  if (measureDateSaying === "18") {
    setEndTime("00");
  }
  if (measureDateSaying === "19") {
    setEndTime("01");
  }
  if (measureDateSaying === "20") {
    setEndTime("02");
  }
  if (measureDateSaying === "21") {
    setEndTime("03");
  }
  if (measureDateSaying === "22") {
    setEndTime("04");
  }
  if (measureDateSaying === "23") {
    setEndTime("05");
  }
};

export const getStartWeatherInfoTimeForCurrentLocation = (
  cityData,
  setTimeForCurrentLocation
) => {
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const city = utc + 1000 * cityData.timezone;
  const nd = new Date(city);
  const timeNow = moment(nd, "lll").format("lll");
  setTimeForCurrentLocation(timeNow);
};

export const testFunction = (forecastWeekData, setWeather, cityData) => {
  var d = new Date();
  var localTime = d.getTime();
  var localOffset = d.getTimezoneOffset() * 60000;
  var utc = localTime + localOffset;
  var city = utc + 1000 * cityData.timezone;
  var milliseconds = localTime - city;
  var timeDiffInHours = milliseconds / 3600000;

  var TimeZoneLocation = "";
  if (timeDiffInHours === -10) {
    TimeZoneLocation = "Pacific/Auckland";
  }
  if (timeDiffInHours === -9) {
    TimeZoneLocation = "Pacific/Noumea";
  }
  if (timeDiffInHours === -8.5) {
    TimeZoneLocation = "Australia/Lord_Howe";
  }
  if (timeDiffInHours === -8) {
    TimeZoneLocation = "Australia/Sydney";
  }
  if (timeDiffInHours === -7.5) {
    TimeZoneLocation = "Australia/Adelaide";
  }
  if (timeDiffInHours === -7) {
    TimeZoneLocation = "Asia/Tokyo";
  }
  if (timeDiffInHours === -6) {
    TimeZoneLocation = "Asia/Shanghai";
  }
  if (timeDiffInHours === -5) {
    TimeZoneLocation = "Asia/Jakarta";
  }
  if (timeDiffInHours === -4) {
    TimeZoneLocation = "Asia/Dhaka";
  }
  if (timeDiffInHours === -3.5) {
    TimeZoneLocation = "Asia/Calcutta";
  }
  if (timeDiffInHours === -3) {
    TimeZoneLocation = "Asia/Yekaterinburg";
  }
  if (timeDiffInHours === -2.5) {
    TimeZoneLocation = "Asia/Kabul";
  }
  if (timeDiffInHours === -2) {
    TimeZoneLocation = "Asia/Dubai";
  }
  if (timeDiffInHours === -1) {
    TimeZoneLocation = "Europe/Helsinki";
  }
  if (timeDiffInHours === 0) {
    TimeZoneLocation = "Europe/Paris";
  }
  if (timeDiffInHours === 1) {
    TimeZoneLocation = "Europe/London";
  }
  if (timeDiffInHours === 2) {
    TimeZoneLocation = "Atlantic/Reykjavik";
  }
  if (timeDiffInHours === 3) {
    TimeZoneLocation = "Atlantic/Cape_Verde";
  }
  if (timeDiffInHours === 4) {
    TimeZoneLocation = "America/Godthab";
  }
  if (timeDiffInHours === 5) {
    TimeZoneLocation = "America/El_Salvador";
  }
  if (timeDiffInHours === 6) {
    TimeZoneLocation = "America/New_York";
  }
  if (timeDiffInHours === 7) {
    TimeZoneLocation = "America/Panama";
  }
  if (timeDiffInHours === 8) {
    TimeZoneLocation = "America/Guatemala";
  }
  if (timeDiffInHours === 9) {
    TimeZoneLocation = "America/Los_Angeles";
  }
  if (timeDiffInHours === 10) {
    TimeZoneLocation = "America/Anchorage";
  }
  if (timeDiffInHours === 11) {
    TimeZoneLocation = "America/Adak";
  }
  if (timeDiffInHours === 12) {
    TimeZoneLocation = "Pacific/Honolulu";
  }
  if (timeDiffInHours === 13) {
    TimeZoneLocation = "Pacific/Apia";
  }

  var weatherData: any = [];
  var weatherDataCompleteArray: any = [];

  for (let index = 0; index <= 9; index++) {
    let day = moment().add(index, "days").format("L");
    weatherData.push(
      forecastWeekData.filter((item) =>
        formatInTimeZone(
          item.time,
          `${TimeZoneLocation}`,
          "yyyy-MM-dd HH:mm:ssXXX"
        ).includes(day)
      )
    );
  }
  weatherData.forEach((el) => {
    if (el.length > 0) {
      weatherDataCompleteArray.push(el);
      setWeather(weatherDataCompleteArray);
    }
  });
};

export const dateDayFunction = (
  setDayName,
  setDate,
  setMonth,
  dayIndex,
  cityData
) => {
  var d = new Date();
  var localTime = d.getTime();
  var localOffset = d.getTimezoneOffset() * 60000;
  var utc = localTime + localOffset;
  var city = utc + 1000 * cityData.timezone;
  var nd = new Date(city);

  for (let index = 0; index <= 9; index++) {
    let day = moment(nd).add(dayIndex, "days").format("dddd");
    let month = moment(nd).add(dayIndex, "days").format("D");
    let date = moment(nd).add(dayIndex, "days").format("MMM");
    if (dayIndex === 0) {
      setDayName("Idag");
    } else {
      setDayName(day);
    }
    setMonth(month);
    setDate(date);
  }
};

export const getClickedWeatherDate = (
  setDayName,
  setDate,
  setMonth,
  cityData,
  clickedIndex
) => {
  var d = new Date();
  var localTime = d.getTime();
  var localOffset = d.getTimezoneOffset() * 60000;
  var utc = localTime + localOffset;
  var city = utc + 1000 * cityData.timezone;
  var nd = new Date(city);

  let day = moment(nd).add(clickedIndex, "days").format("dddd");
  let month = moment(nd).add(clickedIndex, "days").format("D");
  let date = moment(nd).add(clickedIndex, "days").format("MMM");
  if (clickedIndex === 0) {
    setDayName("Idag");
  } else {
    setDayName(day);
  }
  setMonth(month);
  setDate(date);
};
