import React from "react";
import "../style.css";

const AdminDropdown = ({ cName, chooseSeason, name, options }) => {

  const menu = options.map((option) => {
    return (
    <li><a className="dropdown-item" onClick={chooseSeason} seasonValue={option}>{option}</a></li>
    )
  });

  return (
    <React.Fragment>

  <button className={cName} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {name}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {menu}
  </ul>

  </React.Fragment>
  );
};

export default AdminDropdown;