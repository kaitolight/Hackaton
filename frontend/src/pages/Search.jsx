import { useState } from "react";

import ResultCard from "../components/ResultCard";
import SearchBar from "../components/SearchBar";

function Search() {
  const [pullResult, setPullResult] = useState([]);

  return (
    <div>
      <SearchBar setPullResult={setPullResult} />
      <ResultCard pullResult={pullResult} />
    </div>
  );
}

export default Search;
