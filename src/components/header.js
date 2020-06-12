import { Link } from "gatsby"
import React,{useState} from "react"
import Button from "./button"
import MobileMenu from "./mobileMenu"

const Header = (props) => {
  const [menuState, openMenu] = useState(false)
  const isEnglish = JSON.parse(process.env.GATSBY_IS_ENGLISH) ? true : false;
  

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
          <Link to="/pricing">{isEnglish ? 'Pricing' : 'Prissättning'}</Link>
          <Link to="/features">{isEnglish ? 'Features' : 'Funktioner'} </Link>
          <Link to="/why">{isEnglish ? 'Why' : 'Varför'}</Link>
        </div>

        <div className="Header__button-container">
          <a href='https://app.agenly.se'><Button modifier="outline" text={isEnglish ? 'Login' : 'Logga in'} /></a>
          <a href='https://app.agenly.se/createAccount'><Button text={isEnglish ? 'Get started' : 'Kom igång'} arrow /></a>
        </div>

        <button onClick={openMenuHelper} className='Header__hamburger'>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12">
            <path d="M0 12h18v-2H0v2zm0-5h18V5H0v2zm0-7v2h18V0H0z" fill="#000" />
          </svg>
        </button>
      </div>
      
      <MobileMenu menuState={menuState} isEnglish={isEnglish} />
    </header>
  )
}

export default Header
