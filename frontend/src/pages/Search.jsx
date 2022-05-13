import { useState } from "react";
import ActionsSlider from "../components/ActionsSlider";
import SliderData from "../components/SliderData";
import Nav from "../components/Nav";
import ResultCard from "../components/ResultCard";
import SearchBar from "../components/SearchBar";

function Search() {
  const [pullResult, setPullResult] = useState([]);

  return (
    <div>
      <Nav />
      <SearchBar setPullResult={setPullResult} />
      <ResultCard pullResult={pullResult} />
      <ActionsSlider slides={SliderData} pullResult={pullResult} />
    </div>
  );
}

export default Search;
