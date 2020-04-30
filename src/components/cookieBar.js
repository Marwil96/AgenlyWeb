import React from 'react';
import { Link } from "gatsby"
import Button from './button';

const CookieBar = () => {
  const addCookie = () => {

  }
  
  return (
    <div className='CookieBar'>
      <div className='CookieBar__container'>
        <span>Vi använder oss av cookies för att förbättra din upplevelse. Genom att fortsätta använda hemsidan godkänner du användandet av cookies. <Link to='/legal/kakor'>Läs mer</Link></span>
        <Button onClick={addCookie} text='OK' />
      </div>
    </div>
  )
}

export default CookieBar;