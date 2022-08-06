import moment from "moment";
import "moment/locale/sv";

export const iconFunction = (todaysWeather, setNightIcon, setMorningIcon, setAfternoonIcon, setEveningIcon) => {
    var time = moment().format("L");
    const night = todaysWeather.filter((item) =>
      item.time.includes(time + "T06:00:00Z")
    );
    const morning = todaysWeather.filter((item) =>
      item.time.includes(time + "T11:00:00Z")
    );
    const afternoon = todaysWeather.filter((item) =>
      item.time.includes(time + "T15:00:00Z")
    );
    const evening = todaysWeather.filter((item) =>
      item.time.includes(time + "T21:00:00Z")
    );

    if (night.length > 0) {
      setNightIcon(night[0].data.next_1_hours.summary.symbol_code);
    } else {
      setNightIcon("");
    }
    if (morning.length > 0) {
      setMorningIcon(morning[0].data.next_1_hours.summary.symbol_code);
    } else {
      setMorningIcon("");
    }
    if (afternoon.length > 0) {
      setAfternoonIcon(afternoon[0].data.next_1_hours.summary.symbol_code);
    } else {
      setAfternoonIcon("");
    }
    if (evening.length > 0) {
      setEveningIcon(evening[0].data.next_1_hours.summary.symbol_code);
    } else {
      setEveningIcon("");
    }
}