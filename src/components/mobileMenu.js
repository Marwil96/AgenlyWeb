import React from 'react';
import { Link } from "gatsby"
import Button from "./button"

const MobileMenu = ({menuState}) => {
  return (
    <div className={`MobileMenu MobileMenu__${menuState ? 'open' : 'closed'}`}>
      <div className="MobileMenu__links">
        <Link to="/pricing">Prissättning
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
            <path
              d="M0 7.62h12.67l-4.6 4.63 1.23 1.23L16 6.74 9.3 0 8.07 1.24l4.6 4.63H0v1.75z"
              fill="#fff"
            />
          </svg>
        </Link>
        <Link to="/features">Funktioner 
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
          <path
            d="M0 7.62h12.67l-4.6 4.63 1.23 1.23L16 6.74 9.3 0 8.07 1.24l4.6 4.63H0v1.75z"
            fill="#fff"
          />
          </svg>
        </Link>
        <Link to="/why">Varför
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
            <path
              d="M0 7.62h12.67l-4.6 4.63 1.23 1.23L16 6.74 9.3 0 8.07 1.24l4.6 4.63H0v1.75z"
              fill="#fff"
            />
          </svg>
        </Link>
      </div>

      <div className="MobileMenu__button-container">
        <Button modifier="outline" text="Logga in" />
        <Button text="Kom igång" arrow />
      </div>
    </div>
  )
}

export default MobileMenu;