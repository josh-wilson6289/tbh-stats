import React from "react";
import { DebounceInput } from "react-debounce-input";
import "../style.css";

const Search = ({ handleSearch }) => {

return (
  
  <div className="ui transparent icon input">
   
    <DebounceInput 
      type="text"
      placeholder="Search"
      minLength={2}
      debounceTimeout={300}
      onChange={handleSearch}
      />
  </div>

  );
};

export default Search;