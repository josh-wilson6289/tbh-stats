import React from "react";

const Caret = ({ handleSort, value, sortDirection, sortField }) => {
  
  let direction;
  let d;
  

  const pointDirection = (sortDirection, sortField) => {
    if (sortDirection === "ascending" && value===sortField) {
      direction="up";
      d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z";    
      // console.log("ascending, value = " + value)
    }
    else {
      direction="down";
      d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z";
      // console.log("descending, value = " + value)
    }
  }

  pointDirection(sortDirection, sortField);

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" height="16" 
      fill="currentColor" 
      className={`bi bi-caret-${direction}-fill`} 
      viewBox="0 0 16 16">
    <path 
      d={d}
      onClick={handleSort} 
      value={value}/>
    </svg>
  );
};

export default Caret;