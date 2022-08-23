import moment from "moment";
import "moment/locale/sv";

export const iconFunction = (
  item,
  setNightIcon,
  setMorningIcon,
  setAfternoonIcon,
  setEveningIcon,
  cityData
) => {
  var night = item.filter((item) => item.time.includes("00:00:00Z"));
  var morning = item.filter((item) => item.time.includes("T06:00:00Z"));
  var afternoon = item.filter((item) => item.time.includes("T12:00:00Z"));
  var evening = item.map((item) => item);

  if (night.length > 0) {
    if (night[0].data.next_6_hours === undefined) {
      setNightIcon("");
    } else if (night[0].data.next_6_hours) {
      setNightIcon(night[0].data.next_6_hours.summary.symbol_code);
    } else if (night[0].data.next_1_hours) {
      setNightIcon(night[0].data.next_1_hours.summary.symbol_code);
    }
  }
  if (morning.length > 0) {
    if (morning[0].data.next_6_hours === undefined) {
      setMorningIcon("");
    } else if (morning[0].data.next_6_hours) {
      setMorningIcon(morning[0].data.next_6_hours.summary.symbol_code);
    } else if (morning[0].data.next_1_hours) {
      setMorningIcon(morning[0].data.next_1_hours.summary.symbol_code);
    }
  }
  if (afternoon.length > 0) {
    if (afternoon[0].data.next_6_hours === undefined) {
      setAfternoonIcon("");
    } else if (afternoon[0].data.next_6_hours) {
      setAfternoonIcon(afternoon[0].data.next_6_hours.summary.symbol_code);
    } else if (afternoon[0].data.next_1_hours) {
      setAfternoonIcon(afternoon[0].data.next_1_hours.summary.symbol_code);
    }
  }
  if (evening.length > 0) {
    if (evening[0].data.next_6_hours === undefined) {
      setEveningIcon("");
    } else if (evening[evening.length - 1].data.next_6_hours) {
      setEveningIcon(
        evening[evening.length - 1].data.next_6_hours.summary.symbol_code
      );
    } else if (evening[evening.length - 1].data.next_1_hours) {
      setEveningIcon(
        evening[evening.length - 1].data.next_1_hours.summary.symbol_code
      );
    }
  }
};

export const iconsFunction = (
  weather,
  setNightIcon,
  setMorningIcon,
  setAfternoonIcon,
  setEveningIcon
) => {
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
};
