import React from "react";

const GoogleButton = props => {
  return (
    <button onClick={props.onClick} className="ui red google button">
      <i className="google icon" />
      {props.buttonText}
    </button>
  );
};

export default GoogleButton;
