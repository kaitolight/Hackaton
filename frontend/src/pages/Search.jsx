import { useState } from "react";
import ActionsSlider from "../components/ActionsSlider";
import SliderData from "../components/SliderData";

import ResultCard from "../components/ResultCard";
import SearchBar from "../components/SearchBar";
import Legende from "../components/Legende";

function Search() {
  const [pullResult, setPullResult] = useState([]);

  return (
    <div>
      <SearchBar setPullResult={setPullResult} />
      <ResultCard pullResult={pullResult} />
      <Legende pullResult={pullResult} />
      <ActionsSlider slides={SliderData} pullResult={pullResult} />
    </div>
  );
}

export default Search;
