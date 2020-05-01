import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"

import Header from "./header"
import CookieBar from './cookieBar'
import "./layout.scss"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [headerState, setHeaderFixed] = useState(false);
  const [windowY, setWindowY] = useState();
  const [cookieAccepted, setCookieAccepted] = useState(true);

  useEffect(() => {
    const cookieValue = document.cookie.split('=')[1];
    cookieValue !== 'true' ? setCookieAccepted(false) : setCookieAccepted(true);
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
      <Header fixed={headerState} />
      {cookieAccepted ? null : <CookieBar closeCookie={closeCookie}/>}
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
