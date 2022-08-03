import moment from "moment";
import "moment/locale/sv";

export const iconFunction = (todaysWeather, setNightIcon, setMorningIcon, setAfternoonIcon, setEveningIcon) => {
    var time = moment().format("L");
    const night = todaysWeather.filter((item) =>
      item.time.includes(time + "T00:00:00Z")
    );
    const morning = todaysWeather.filter((item) =>
      item.time.includes(time + "T06:00:00Z")
    );
    const afternoon = todaysWeather.filter((item) =>
      item.time.includes(time + "T12:00:00Z")
    );
    const evening = todaysWeather.filter((item) =>
      item.time.includes(time + "T18:00:00Z")
    );

    if (night.length > 0) {
      setNightIcon(night[0].data.next_6_hours.summary.symbol_code);
    } else {
      setNightIcon("");
    }
    if (morning.length > 0) {
      setMorningIcon(morning[0].data.next_6_hours.summary.symbol_code);
    } else {
      setMorningIcon("");
    }
    if (afternoon.length > 0) {
      setAfternoonIcon(afternoon[0].data.next_6_hours.summary.symbol_code);
    } else {
      setAfternoonIcon("");
    }
    if (evening.length > 0) {
      setEveningIcon(evening[0].data.next_6_hours.summary.symbol_code);
    } else {
      setEveningIcon("");
    }
}