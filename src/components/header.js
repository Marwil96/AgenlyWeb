import { Link } from "gatsby"
import React,{useState} from "react"
import Button from "./button"
import MobileMenu from "./mobileMenu"

const Header = ({fixed, english}) => {
  const [menuState, openMenu] = useState(false)
  

  const openMenuHelper = () => {
    openMenu(!menuState)
  }

  return (
    <header
      className={
        fixed ? `Header Header__is-fixed` : `Header Header__relative`
      }
    >
      <div className="Header__container">

        <div className="Header__logo">
          <Link to={english ? '/en' : '/'}>agenly.</Link>
        </div>

        <div className="Header__links">
          <Link to={`/${english ? 'en/' : ''}pricing`}>{english ? 'Pricing' : 'Prissättning'}</Link>
          <Link to={`/${english ? 'en/' : ''}features`}>{english ? 'Features' : 'Funktioner'} </Link>
          <Link to={`/${english ? 'en/' : ''}why`}>{english ? 'Why' : 'Varför'}</Link>
        </div>

          { english ?
           <div className="Header__button-container">
             <a target='__blank' href='https://williammartinsson.typeform.com/to/NM0RvQyP'><Button modifier='light' text='Early access signup' arrow /></a>
            </div>
           :
           <div className="Header__button-container">
            <a href='https://app.agenly.se'><Button modifier="outline" text={english ? 'Login' : 'Logga in'} /></a>
            <a href='https://app.agenly.se/createAccount'><Button text={english ? 'Get started' : 'Kom igång'} arrow /></a>
          </div>
          }

        <button onClick={openMenuHelper} className='Header__hamburger'>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12">
            <path d="M0 12h18v-2H0v2zm0-5h18V5H0v2zm0-7v2h18V0H0z" fill="#000" />
          </svg>
        </button>
      </div>
      
      <MobileMenu menuState={menuState} isEnglish={english} />
    </header>
  )
}

export default Header
