import { Link } from "gatsby"
import React from "react"
import InputButton from "./inputButton"
import Button from "./button"

const Header = (props) => {
  return (
    <header
      className={
        props.fixed ? `Header Header__is-fixed` : `Header Header__relative`
      }
    >
      <div className="Header__container">
        <div className="Header__logo">
          <Link to="/">Agenly</Link>
        </div>
        <div className="Header__links">
          {/* <Link to='/why'>Why?</Link> */}
          <Link to="/pricing">Prissättning</Link>
          <Link to="/features">Funktioner</Link>
          <Link to="/why">Varför</Link>
          {/* <span>Newsletter</span> */}
          {/* <InputButton modifier={props.fixed ? null : 'primary'} small={true} /> */}
        </div>
        <div className="Header__button-container">
          <Button modifier="outline" text="Logga in" />
          <Button text="Kom igång" arrow />
        </div>
      </div>
    </header>
  )
}

export default Header
