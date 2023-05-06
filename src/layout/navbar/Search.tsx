import React from "react";
import styled from "styled-components";
import SearchPNG from "../../assets/icons/search.png";
import SearchIcon from "./SearchIcon";
import SearchInput from "./SearchInput";

const SearchContainer = styled.div`
  display: flex;
  padding: 3px;
  background-color: white;
  border-radius: 2rem;
  overflow: hidden;

  &:hover > input {
    width: 200px;
    padding-left: 10px;
  }
`;

function Search() {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search" />
      <SearchIcon src={SearchPNG} alt="Search" />
    </SearchContainer>
  );
}

export default Search;
