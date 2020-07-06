import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"

import Header from "./header"
import CookieBar from './cookieBar'
import "./layout.scss"
import Footer from "./footer"

const Layout = ({ children, english }) => {
  const [headerState, setHeaderFixed] = useState(false);
  const [windowY, setWindowY] = useState();
  const [cookieAccepted, setCookieAccepted] = useState(true);

  english = english === 'en' ? true : false;

  useEffect(() => {
    const cookieArray = document.cookie.split(';');
    const cookieValue = cookieArray !== null ? cookieArray.filter((cookie) => cookie === 'gatsby-gdpr-google-analytics=true') : false
  
    cookieValue[0] !== 'gatsby-gdpr-google-analytics=true' ? setCookieAccepted(false) : setCookieAccepted(true);
    window.addEventListener('scroll', (e) => {
      setWindowY(window.scrollY)
    });
  }, [])


  const updateHeader = (positionY) => {
    if (positionY > 400 & headerState === false) {
      setHeaderFixed(true)
    } else if (positionY === 0 & headerState === true) {
      setHeaderFixed(false)
    }
  }

  updateHeader(windowY)

  const closeCookie = () => {
    setCookieAccepted(true)
  }
  return (
    <>
      <Header fixed={headerState} english={english} />
      {cookieAccepted ? null : <CookieBar closeCookie={closeCookie} />}
      <div>
        <main>{children}</main>
      </div>
      <Footer english={english} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
