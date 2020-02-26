import React from "react"
import { Link } from "gatsby"
import Button from "./button"

const TextSection = ({img, title, text, button, modifier, link}) => {
  return (
    <section className={`TextSection ${modifier}`}>
      <div className="TextSection__textContainer">
        <h3 className="TextSection__title">{title}</h3>
        <span className="TextSection__text">{text}</span>
        
        {link !== undefined ? <Link to={link}>{button !== undefined ? <Button text={button} modifier={'primary'} /> : null}</Link> : button !== undefined ? <Button text={button} modifier={'primary'} /> : null}
      </div>
      <img className="TextSection__img" src={img} alt="Section Extra" />
    </section>
  )
}

export default TextSection
