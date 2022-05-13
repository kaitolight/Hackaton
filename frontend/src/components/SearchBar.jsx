import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import "../styles/SearchBar.css";

export default function SearchBar({ setPullResult }) {
  const [cityName, setCityName] = useState("");

  const getCity = (city) => {
    if (city.length >= 1) {
      axios
        .get(
          `https://api.waqi.info/feed/${cityName}/?token=46bdfa85cf04065de4cc0b08651742ae14c48256`
        )
        .then((result) => setPullResult(result.data.data));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getCity(cityName);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        id="searchbar"
        type="search"
        name="search"
        placeholder="                          Search for your City"
        onChange={(e) => setCityName(e.target.value)}
        pattern=".*\S.*"
        required
      />
      <button className="search-btn" type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  setPullResult: PropTypes.func.isRequired,
};
