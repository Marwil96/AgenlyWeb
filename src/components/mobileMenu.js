import React from 'react';
import { Link } from "gatsby"
import Button from "./button"

const MobileMenu = ({menuState, isEnglish}) => {
  return (
    <div className={`MobileMenu MobileMenu__${menuState ? 'open' : 'closed'}`}>
      <div className="MobileMenu__links">
        <Link to={`/${isEnglish ? 'en/' : ''}pricing`}>{isEnglish ? 'Pricing' : 'Prissättning'}
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
            <path
              d="M0 7.62h12.67l-4.6 4.63 1.23 1.23L16 6.74 9.3 0 8.07 1.24l4.6 4.63H0v1.75z"
              fill="#fff"
            />
          </svg>
        </Link>
        <Link to={`/${isEnglish ? 'en/' : ''}features`}>{isEnglish ? 'Features' : 'Funktioner'} 
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
          <path
            d="M0 7.62h12.67l-4.6 4.63 1.23 1.23L16 6.74 9.3 0 8.07 1.24l4.6 4.63H0v1.75z"
            fill="#fff"
          />
          </svg>
        </Link>
        <Link to={`/${isEnglish ? 'en/' : ''}why`}>{isEnglish ? 'Why' : 'Varför'}
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
            <path
              d="M0 7.62h12.67l-4.6 4.63 1.23 1.23L16 6.74 9.3 0 8.07 1.24l4.6 4.63H0v1.75z"
              fill="#fff"
            />
          </svg>
        </Link>
      </div>

      <div className="MobileMenu__button-container" style={isEnglish ? {display:'none'} : {}}>
        <a href='https://app.agenly.se'><Button modifier="outline" text={isEnglish ? 'Login' : 'Logga in'} /></a>
        <a href='https://app.agenly.se/createAccount'><Button text={isEnglish ? 'Get started' : 'Kom igång'} arrow /></a>
      </div>
    </div>
  )
}

export default MobileMenu;