import React from "react"
import { Link } from "gatsby"
import Button from "./button"

const TextSection = ({img, title, text, button, modifier, link, loaded}) => {
  return (
    <section className={`TextSection ${modifier}`} style={loaded ? {transform: `translateY(${0}px)`, opacity:1} : {transform: `translateY(${100}px)`, opacity:0}}>
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
