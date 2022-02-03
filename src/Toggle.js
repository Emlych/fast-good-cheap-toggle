import React from "react";

const Toggle = (props) => {
  return (
    <div className="toggle">
      <div className="toggle__button">
        <button
          className={
            props.active ? `switch switch-active-${props.color}` : "switch "
          }
        ></button>
        <button
          onClick={props.handleToggle}
          className={
            props.active ? `slider slider-active-${props.color}` : "slider"
          }
        ></button>
      </div>
      <div className="toggle__text">{props.text}</div>
    </div>
  );
};

export default Toggle;
