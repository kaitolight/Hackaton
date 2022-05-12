import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchBar() {
  const [cityName, setCityName] = useState("");
  const [pullResult, setPullResult] = useState([]);

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

  useEffect(() => {
    // eslint-disable-next-line no-restricted-syntax
    console.log(pullResult);
  }, [pullResult]);

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
