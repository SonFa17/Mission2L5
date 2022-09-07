import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import searchIcon from '../img/iconSearch.png';

const SearchBarComponent = (props) => {
  const { onSearch } = props;

  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    setSearch(text);
  };

  const handleOnClick = () => {
    onSearch(search);
  };

  
  return (

      <div className="search-bar-component-box">
        <div className="search-bar-component-container">
          <input
            className="search-bar-component"
            placeholder=" Search..."
            type="text"
            value={search}
            onChange={handleInput}
          />

          <button
            onClick={handleOnClick}
            className="search-bar-component-button"
            type="button"
          >
            <img src={searchIcon} alt="search icon" className="search-bar-component-icon"></img>
            Search
          </button>
        </div>
      </div>

  );
};

export default SearchBarComponent;