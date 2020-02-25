import React from "react"
import Button from "./button"

const TextSection = ({img, title, text, button, modifier}) => {
  return (
    <section className={`TextSection ${modifier}`}>
      <div className="TextSection__textContainer">
        <h3 className="TextSection__title">{title}</h3>
        <span className="TextSection__text">{text}</span>
        {button !== undefined ? <Button text={button} modifier={'primary'} /> : null}
      </div>
      <img className="TextSection__img" src={img} alt="Section Extra" />
    </section>
  )
}

export default TextSection
