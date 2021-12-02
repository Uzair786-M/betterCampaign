import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <>
      <button className={classes[props.btnType]}>{props.children}</button>
    </>
  );
};

export default Button;
