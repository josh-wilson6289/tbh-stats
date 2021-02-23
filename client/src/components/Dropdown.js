import React from "react";
import "../style.css";

const Dropdown = () => {
  return (

<select className="ui selection dropdown">
  <input type="hidden" name="season"></input>
  <option valueName="">Season</option>
  <option valueName="Q1 2021">Q1 2021</option>
  <option valueName="Q1 2020">Q1 2020</option>
</select>
  );
};

export default Dropdown;