import React, { useState, useRef, useEffect } from "react";
import { getGeolocationData } from "../services/api";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchLocation = ({ setLat, setLon }) => {
  const [search, setSearch] = useState<string>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  const customCss = searchOpen ? "search open" : "search";

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

  const handleClearInput = () => {
    setSearch("");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickedOutside, true);
  }, []);

  const handleClickedOutside = (e) => {
    if (ref.current! && !ref.current!.contains(e.target)) {
      setSearchOpen(false);
    }
  };

  const handleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      {!searchOpen ? (
        <div
          className="inline-flex items-center mt-12 px-2 py-2 mb-4 bg-white hover:bg-custom-blue shadow-md border-2 text-black cursor-pointer"
          onClick={() => handleSearch()}
        >
          <SearchIcon sx={{ fontSize: 25 }} />
          <span className="text-xl px-1">Sök</span>
        </div>
      ) : (
        <div
          ref={ref}
          className={`relative flex items-center mt-12 mb-4 shadow-md ${customCss}`}
        >
          <input
            className="w-full h-12 px-4 py-2  text-black text-xl"
            type="text"
            placeholder="Sök..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => handleKeyPress(e)}
            autoFocus
          />
          <div
            className="h-12 p-2 flex items-center text-black bg-white border-2 cursor-pointer hover:bg-gray-200"
            onClick={() => searchFilter()}
          >
            <SearchIcon sx={{ fontSize: 25, cursor: "pointer" }} />
          </div>
          <div className="absolute top-3 right-14">
            <CloseIcon
              sx={{ fontSize: 25, cursor: "pointer", color: "black" }}
              onClick={() => handleClearInput()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchLocation;
