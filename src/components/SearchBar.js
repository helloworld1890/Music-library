import { useState } from "react";

function SearchBar(props) {
  let [term, handleSearch ] = useState("");

  return (
    <form>
      <input
        ref={term}
        type="text"
        placeholder="Enter a search term here"
        onChange={(e) => handleSearch(e, term)}
      />
      <input type="submit" />
    </form>
  );
}

export default SearchBar;
