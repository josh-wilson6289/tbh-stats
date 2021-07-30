import React from "react";
import "../style.css";

const AdminDropdown = ({ cName, onClick, name, options }) => {

  const menu = options.map((option) => {
    return (
    <li><a className="dropdown-item">{option}</a></li>
    )
  });

  // console.log(options)
  // console.log(name)
  
  return (
    <React.Fragment>
  <button className={cName} dropdown type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {name}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {menu}
  </ul>
  </React.Fragment>
  );
};

export default AdminDropdown;