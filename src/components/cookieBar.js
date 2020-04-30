import React from 'react';
import { Link } from "gatsby"
import ReactGA from 'react-ga';
import Button from './button';

const CookieBar = ({closeCookie}) => {
  const addCookie = () => {
    console.log('ADD COOKIE')
    document.cookie = "gatsby-gdpr-google-analytics=true"
    ReactGA.initialize("UA-37970043-4");
    closeCookie()
  }
  
  return (
    <div className='CookieBar'>
      <div className='CookieBar__container'>
        <span>Vi använder oss av cookies för att förbättra din upplevelse. Genom att fortsätta använda hemsidan godkänner du användandet av cookies. <Link to='/legal/kakor'>Läs mer</Link></span>
        <button onClick={addCookie}><Button text='OK' /></button>
      </div>
    </div>
  )
}

export default CookieBar;