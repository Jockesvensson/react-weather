import moment from "moment";
import "moment/locale/sv";

export const iconFunction = (weather, setNightIcon, setMorningIcon, setAfternoonIcon, setEveningIcon) => {
    var time = moment().format("L");
    const night = weather.filter((item) =>
      item.time.includes(time + "T06:00:00Z")
    );
    const morning = weather.filter((item) =>
      item.time.includes(time + "T11:00:00Z")
    );
    const afternoon = weather.filter((item) =>
      item.time.includes(time + "T15:00:00Z")
    );
    const evening = weather.filter((item) =>
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

export const iconsFunction = (weather, setNightIcon, setMorningIcon, setAfternoonIcon, setEveningIcon) => {
  if (weather.length <= 6) {
    const nightIcon = weather
      .slice(2, 3)
      .map((item) =>
        item.data.next_6_hours !== undefined
          ? item.data.next_6_hours.summary.symbol_code
          : item.data.next_1_hours.summary.symbol_code
      );
    const morningIcon = weather
      .slice(3, 4)
      .map((item) =>
        item.data.next_6_hours !== undefined
          ? item.data.next_6_hours.summary.symbol_code
          : item.data.next_1_hours.summary.symbol_code
      );
    const afternoonIcon = weather
      .slice(4, 5)
      .map((item) =>
        item.data.next_6_hours !== undefined
          ? item.data.next_6_hours.summary.symbol_code
          : item.data.next_1_hours.summary.symbol_code
      );
    const eveningIcon = weather
      .slice(5, 6)
      .map((item) =>
        item.data.next_6_hours !== undefined
          ? item.data.next_6_hours.summary.symbol_code
          : item.data.next_1_hours.summary.symbol_code
      );
    setNightIcon(nightIcon[0]);
    setMorningIcon(morningIcon[0]);
    setAfternoonIcon(afternoonIcon[0]);
    setEveningIcon(eveningIcon[0]);
  }
  if (weather.length > 6) {
    const nightIcon = weather
      .slice(0, 1)
      .map((item) =>
        item.data.next_6_hours !== undefined
          ? item.data.next_6_hours.summary.symbol_code
          : item.data.next_1_hours.summary.symbol_code
      );
    const morningIcon = weather
      .slice(6, 7)
      .map((item) =>
        item.data.next_6_hours !== undefined
          ? item.data.next_6_hours.summary.symbol_code
          : item.data.next_1_hours.summary.symbol_code
      );
    const afternoonIcon = weather
      .slice(14, 15)
      .map((item) =>
        item.data.next_6_hours !== undefined
          ? item.data.next_6_hours.summary.symbol_code
          : item.data.next_1_hours.summary.symbol_code
      );
    const eveningIcon = weather
      .slice(-1)
      .map((item) =>
        item.data.next_6_hours !== undefined
          ? item.data.next_6_hours.summary.symbol_code
          : item.data.next_1_hours.summary.symbol_code
      );
    setNightIcon(nightIcon[0]);
    setMorningIcon(morningIcon[0]);
    setAfternoonIcon(afternoonIcon[0]);
    setEveningIcon(eveningIcon[0]);
  }
}

export const iconsFunctionShorter = (weather, setNightIcon, setMorningIcon, setAfternoonIcon, setEveningIcon) => {
  var icons = weather.map(
    (item, index) => item.data.next_6_hours.summary.symbol_code
  );
  var nightIcon = icons[0];
  var morningIcon = icons[1];
  var afternoonIcon = icons[2];
  var eveningIcon = icons[3];
  setNightIcon(nightIcon);
  setMorningIcon(morningIcon);
  setAfternoonIcon(afternoonIcon);
  setEveningIcon(eveningIcon);
}