import React from "react";
import SearchIcon from "@material-ui/icons/Search";

//STYLES
import { SearchBarContainer } from "./search-bar.styles.js";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIcon />
      <input placeholder='Search iKishi...' />
    </SearchBarContainer>
  );
};

export default SearchBar;
