import React, { useState } from "react";
import { getGeolocationData } from "../services/api";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const SearchLocation = ({ searchOpen, setSearchOpen, setLat, setLon }) => {
  const [search, setSearch] = useState<string>("");

  const setClass = searchOpen ? "search open" : "search";
  const setInputclass = searchOpen ? "searchinput open" : "searchinput";
  const setPlayclass = searchOpen ? "playicon open" : "playicon";

  const searchFilter = () => {
    getGeolocationData(setLat, setLon, search);
    setSearchOpen(false);
    setSearch("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchFilter();
    }
  };

  return (
    <div className={` ${setClass}`}>
        <div className="relative">
      <input
        className={`h-10 px-4 py-2 ml-2 rounded-lg text-black ${setInputclass}`}
        type="text"
        placeholder="Sök..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <PlayArrowIcon
        className={`absolute top-1/2 left-60 xsm:left-76 -translate-y-1/2 text-black ${setPlayclass}`}
        sx={{ fontSize: 30, cursor: "pointer" }}
        onClick={() => searchFilter()}
      />
      </div>
    </div>
  );
};

export default SearchLocation;
