import React, { useRef, useImperativeHandle } from 'react';
import classes from "../../Login/Login.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activateFocus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activateFocus,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.title}</label>
      <input
        ref={inputRef}
        className={props.className}
        id={props.id}
        onBlur={props.onBlur}
        onChange={props.onChange}
        type={props.type}
        value={props.value}
      />
    </div>
  );
});

export default Input;
