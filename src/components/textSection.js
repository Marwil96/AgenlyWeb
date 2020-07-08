import React from "react"
import { RichText } from 'prismic-reactjs';
import { Link } from "gatsby"
import Button from "./button"

const TextSection = ({img, title, text, button, modifier, link, loaded}) => {
  return (
    <section className={`TextSection ${modifier}`} style={loaded !== undefined ? !loaded ? {transform: `translateY(${100}px)`, opacity:0} : {transform: `translateY(${0}px)`, opacity:1} : null}>
      <div className="TextSection__textContainer">
        <h3 className="TextSection__title">{title}</h3>
        <span className="TextSection__text"><RichText render={text} /></span>
        
        {link !== undefined ? <Link to={link}>{button !== undefined ? <Button text={button} modifier={'primary'} /> : null}</Link> : button !== undefined ? <Button text={button} modifier={'primary'} /> : null}
      </div>
      <img className="TextSection__img" src={img} alt="Section Extra" />
    </section>
  )
}

export default TextSection
