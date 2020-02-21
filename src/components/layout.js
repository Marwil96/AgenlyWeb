import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.scss"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [headerState, setHeaderFixed] = useState(false);
  const [windowY, setWindowY] = useState();

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setWindowY(window.scrollY)
    });
  }, [])


  const updateHeader = (positionY) => {
    if (positionY > 400 & headerState === false) {
      setHeaderFixed(true)
      console.log('FIXED', positionY, headerState)
    } else if (positionY === 0 & headerState === true) {
      setHeaderFixed(false)
      console.log('relative', positionY, headerState)
    }
  }

  updateHeader(windowY)

  return (
    <>
      <Header fixed={headerState} />
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
