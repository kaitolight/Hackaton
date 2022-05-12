import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

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
    <form onSubmit={handleSubmit}>
      <input
        id="searchbar"
        type="search"
        name="search"
        placeholder="Search for your City"
        onChange={(e) => setCityName(e.target.value)}
      />
    </form>
  );
}

SearchBar.propTypes = {
  setPullResult: PropTypes.func.isRequired,
};
