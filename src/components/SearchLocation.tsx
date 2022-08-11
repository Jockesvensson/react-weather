import React, { useState, forwardRef } from "react";
import { getGeolocationData } from "../services/api";
import SearchIcon from "@mui/icons-material/Search";

const SearchLocation = ({
  searchOpen,
  setSearchOpen,
  setLat,
  setLon,
  inputRef,
}) => {
  const [search, setSearch] = useState<string>("");
  const setClass = searchOpen ? "search open" : "search";
  const setInputclass = searchOpen ? "searchinput open" : "searchinput";
  const setSearchclass = searchOpen ? "searchGo open" : "searchGo";

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
          ref={inputRef}
          className={`h-10 px-4 py-2 rounded-lg text-black ${setInputclass}`}
          type="text"
          placeholder="Sök..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <span
          className={`absolute h-10 px-4 py-2 text-black cursor-pointer ${setSearchclass}`}
          onClick={() => searchFilter()}
        >
          <SearchIcon sx={{ fontSize: 20, cursor: "pointer" }} />
        </span>
      </div>
    </div>
  );
};

export default SearchLocation;
