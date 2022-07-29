import React, { useState } from "react";
import RoomIcon from "@mui/icons-material/Room";
import SearchIcon from "@mui/icons-material/Search";
import moment from "moment";
import "moment/locale/sv";
import SearchLocation from "./SearchLocation";
import CloseIcon from "@mui/icons-material/Close";

const StartWeatherInfo = ({
  cityData,
  forecastCurrentDayMinTemp,
  forecastCurrentDayMaxTemp,
  currentWeatherData,
  currentWeatherIcon,
  currentWeatherIconDescription,
  setLat,
  setLon,
}) => {
  moment.locale("sv");
  var t = new Date();
  var day = moment(t, "dddd").format("dddd");
  var time = moment(t, "hh:mm").format("HH:mm");

  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const handleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="mt-8 text-white">
      <div className="relative">
        {searchOpen ? (
          <CloseIcon
            sx={{ fontSize: 40, cursor: "pointer" }}
            onClick={() => handleSearch()}
          />
        ) : (
          <SearchIcon
            sx={{ fontSize: 40, cursor: "pointer" }}
            onClick={() => handleSearch()}
          />
        )}
        <SearchLocation
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
          setLat={setLat}
          setLon={setLon}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-5xl">
            {currentWeatherData.temp ? currentWeatherData.temp.toFixed(0) : ""}°
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png`}
            alt={currentWeatherIconDescription}
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-2xl">{cityData.name}</div>
        <div className="ml-1">
          <RoomIcon />
        </div>
      </div>
      <div className="mt-8 flex">
        <div>
          {forecastCurrentDayMaxTemp
            ? forecastCurrentDayMaxTemp.toFixed(0)
            : ""}
          ° /{" "}
        </div>
        <div className="mx-1">
          {forecastCurrentDayMinTemp
            ? forecastCurrentDayMinTemp.toFixed(0)
            : ""}
          °
        </div>
        <div>
          {" "}
          Känns som{" "}
          {currentWeatherData.feels_like
            ? currentWeatherData.feels_like.toFixed(0)
            : ""}
          °
        </div>
      </div>
      <div className="mb-12">
        {day}, {time}
      </div>
    </div>
  );
};

export default StartWeatherInfo;
