import React from 'react';
import classes from '../../Login/Login.module.css'

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.title}</label>
      <input
        className={props.className}
        id={props.id}
        onBlur={props.onBlur}
        onChange={props.onChange}
        type={props.type}
        value={props.value}
      />
    </div>
  );
}

export default Input;
