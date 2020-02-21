import { Link } from "gatsby"
import React from "react"
import InputButton from "./inputButton"

const Header = (props) => {
  return (
    <header className={props.fixed ? `Header Header__is-fixed` : `Header Header__relative` }>
      <div className='Header__container'>
        <div className='Header__logo'>
          <Link to="/">
            Agenly
          </Link>
        </div>
        <div className='Header__links'>
          <Link to='/why'>Why?</Link>
          {/* <span>Newsletter</span> */}
          <InputButton modifier={props.fixed ? null : 'primary'} />
        </div>
      </div>
    </header>
  )
}

export default Header
