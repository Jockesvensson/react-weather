import React from "react";
import { FinalSixDaysItem } from "./FinalSixDaysItem";

const FinalSixDays = ({
  finalSixDaysWeatherData,
  setCurrentWeatherInformationShorter,
  setShowMoreInformationShorter,
  setCurrentDayInformation,
  setCurrentDateInformation,
  setCurrentMonthInformation,
}) => {
  return (
    <div>
      {finalSixDaysWeatherData.map((item, index) => {
        return (
          <FinalSixDaysItem
            key={index}
            item={item}
            dayIndex={index}
            setCurrentWeatherInformationShorter={
              setCurrentWeatherInformationShorter
            }
            setShowMoreInformationShorter={setShowMoreInformationShorter}
            setCurrentDayInformation={setCurrentDayInformation}
            setCurrentDateInformation={setCurrentDateInformation}
            setCurrentMonthInformation={setCurrentMonthInformation}
          />
        );
      })}
    </div>
  );
};

export default FinalSixDays;
