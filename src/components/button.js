import React from 'react';

const Button = (props) => {
  return (
    <button
      className={
        props.modifier !== undefined
          ? `Button Button__${props.modifier}`
          : `Button`
      }
    >
      {props.text}
      {props.arrow ? (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
          <path
            d="M0 7.62h12.67l-4.6 4.63 1.23 1.23L16 6.74 9.3 0 8.07 1.24l4.6 4.63H0v1.75z"
            fill="#fff"
          />
        </svg>
      ) : null}
    </button>
  )
}

export default Button;