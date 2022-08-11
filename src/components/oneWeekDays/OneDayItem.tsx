import React, { useEffect, useState } from "react";
import IconHelperNight from "../IconHelpers/IconHelperNight";
import IconHelperMorning from "../IconHelpers/IconHelperMorning";
import IconHelperAfternoon from "../IconHelpers/IconHelperAfternoon";
import IconHelperEvening from "../IconHelpers/IconHelperEvening";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const OneDayItem = ({
  dayName,
  date,
  month,
  nightIcon,
  morningIcon,
  afternoonIcon,
  eveningIcon,
  weatherMaxTemp,
  weatherMinTemp,
  sumRain,
  maxWindSpeed,
}) => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFetching(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isFetching) {
    return (
      <Box
        sx={{
          gridColumnStart: 1,
          gridColumnEnd: 12,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <div className="weather-item-date capitalize">
        {dayName} {date}. {month}
      </div>
      <div className="weather-item-icons">
        <div className="weather-item-symbol-0">
          <IconHelperNight nightIcon={nightIcon} />
        </div>
        <div className="weather-item-symbol-1">
          <IconHelperMorning morningIcon={morningIcon} />
        </div>
        <div className="weather-item-symbol-2">
          <IconHelperAfternoon afternoonIcon={afternoonIcon} />
        </div>
        <div className="weather-item-symbol-3">
          <IconHelperEvening eveningIcon={eveningIcon} />
        </div>
      </div>
      <div className="weather-item-forecast">
        <div className="text-lg">
          {weatherMaxTemp}°<span className="mx-1">/</span>
          {weatherMinTemp}°
        </div>
        {sumRain <= 0 ? (
          <div className=""></div>
        ) : (
          <div className="">{sumRain} mm</div>
        )}
        <div className="">{maxWindSpeed} m/s</div>
      </div>
      <div className="hidden lg:flex items-center justify-end text-sm">
        <div>Se tid för tid</div>
        <span className="ml-2">
          <ArrowForwardIosIcon sx={{ fontSize: 23 }} />
        </span>
      </div>
      <div className="weather-item-readmore text-sm">
        <ArrowForwardIosIcon />
      </div>
    </>
  );
};

export default OneDayItem;
