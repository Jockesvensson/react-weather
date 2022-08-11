import React, { useState } from "react";
import RoomIcon from "@mui/icons-material/Room";
import SearchIcon from "@mui/icons-material/Search";
import moment from "moment";
import "moment/locale/sv";
import SearchLocation from "./SearchLocation";
import CloseIcon from "@mui/icons-material/Close";
import IconHelperStartWeatherInfo from "./IconHelpers/IconHelperStartWeatherInfo";
import SouthIcon from "@mui/icons-material/South";
import {useRef} from 'react';

const StartWeatherInfo = ({
  cityData,
  forecastCurrentDayMaxTemp,
  currentWeatherTemp,
  setLat,
  setLon,
  currentWeatherIcon,
  currentWeatherWindSpeed,
  currentWeatherGust,
  currentWeatherRain,
  currentWindDirection,
}) => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  moment.locale("sv");
  var t = new Date();
  var day = moment(t, "dddd").format("dddd");
  var time = moment(t, "hh:mm").format("HH:mm");


  const handleSearch = () => {
    setSearchOpen(!searchOpen);
    inputRef.current!.focus();
  };

  return (
    <div className="mt-8 px-4 text-white">
      <div className="relative mb-4">
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
          inputRef={inputRef}
        />
      </div>
      <div className="flex justify-between lg:justify-start items-center">
        <div className="text-5xl lg:mr-2">{currentWeatherTemp}°</div>
        <IconHelperStartWeatherInfo icons={currentWeatherIcon} />
      </div>
      <div className="flex items-center mt-4">
        <div className="text-2xl">{cityData.name}</div>
        <div className="ml-1">
          <RoomIcon />
        </div>
      </div>
      <div className=" capitalize text-xl">
        {day}, {time}
      </div>
      <div className="mt-4 flex items-end ">
        <div className="mr-2 text-3xl ">{forecastCurrentDayMaxTemp}°</div>
        <div>
          {" "}
          <span className="text-white">Känns som</span>{" "}
          <span className="">{currentWeatherTemp}</span>°
        </div>
      </div>
      <div className="flex items-end ">
        <div className="mr-2 text-3xl">{currentWeatherRain} </div>
        <span>mm</span>
      </div>
      <div className="flex items-end mb-10">
        <div className="mr-1 text-3xl">{currentWeatherWindSpeed}</div>
        <div>({currentWeatherGust}) m/s</div>
        <div
          className="ml-1 self-end"
          style={{ transform: `rotate(${currentWindDirection}deg)` }}
        >
          <SouthIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default StartWeatherInfo;
