import React from "react";

const Popup = () => {
  return (
<div>
    <a className="browse item">
    Season
    <i className="dropdown icon"></i>
    </a>

<div className="ui fluid popup bottom left transition hidden">
  <div className="ui four column relaxed equal height divided grid">
    <div className="column">
      <h4 className="ui header">2021</h4>
      <div className="ui link list">
        <a className="item">Q1</a>
      </div>
    </div>
    
    <div className="column">
      <h4 className="ui header">2020</h4>
      <div className="ui link list">
        <a className="item">Q1</a>
        <a className="item">Q2</a>
        <a className="item">Q3</a>
        <a className="item">Q4</a>
      </div>
    </div>

    <div className="column">
      <h4 className="ui header">2019</h4>
      <div className="ui link list">
        <a className="item">Q1</a>
        <a className="item">Q2</a>
        <a className="item">Q3</a>
        <a className="item">Q4</a>
      </div>
    </div>
    
    <div className="column">
      <h4 className="ui header">2018</h4>
      <div className="ui link list">
        <a className="item">Q3</a>
        <a className="item">Q4</a>
      </div>
    </div>

  </div>
</div>
</div>
  );
};

export default Popup;