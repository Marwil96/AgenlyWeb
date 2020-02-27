import React from 'react';

const Button = (props) => {
  return (
    <button className={props.modifier !== undefined ? `Button Button__${props.modifier}` : `Button`}>
      {props.text}
    </button>
  )
}

export default Button;