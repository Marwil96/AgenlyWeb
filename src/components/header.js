import { Link } from "gatsby"
import React,{useState} from "react"
import InputButton from "./inputButton"
import Button from "./button"
import MobileMenu from "./mobileMenu"

const Header = (props) => {
  const [menuState, openMenu] = useState(false)

  const openMenuHelper = () => {
    openMenu(!menuState)
  }

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
          <Link to="/features">Funktioner </Link>
          <Link to="/why">Varför</Link>
          {/* <span>Newsletter</span> */}
          {/* <InputButton modifier={props.fixed ? null : 'primary'} small={true} /> */}
        </div>
        <div className="Header__button-container">
          <Button modifier="outline" text="Logga in" />
          <Button text="Kom igång" arrow />
        </div>
        <button onClick={openMenuHelper} className='Header__hamburger'><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12">
          <path d="M0 12h18v-2H0v2zm0-5h18V5H0v2zm0-7v2h18V0H0z" fill="#000" />
        </svg></button>
      </div>
      <MobileMenu menuState={menuState} />
    </header>
  )
}

export default Header
