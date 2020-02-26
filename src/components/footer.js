import React from "react"
import { Link } from "gatsby"
import InputButton from "./inputButton"

const Footer = () => {
  return (
    <footer className="Footer">
      <section className="Footer__container">
        <div className="Footer__column">
          <span className="Footer__column-title">Kontakta oss</span>
          {/* <span className="Footer__column-link">+46768023804</span> */}
          <a className="Footer__column-link" href='mailto:william@agenly.se'>william@agenly.se</a>
        </div>

        <div className="Footer__column">
          <span className="Footer__column-title">Följ oss</span>
          <a className="Footer__column-link">Facebook</a>
          <a className="Footer__column-link">Twitter</a>
        </div>

        <div className="Footer__column">
          <span className="Footer__column-title">Länkar</span>
          <Link className="Footer__column-link" to="/modules">
            Moduler
          </Link>
          <Link className="Footer__column-link" to="/why"> Varför </Link>
          <span className="Footer__column-link">Uppdateringar</span>
        </div>

        <div className="Footer__column">
          <span className="Footer__column-title">Agenly</span>
          <span className="Footer__column-text">
            You tell us about your business and we handle the rest. We use a
            combination between conversational UI and AI to create the best
            solution for you.
          </span>
        </div>
      </section>
      <span className="Footer__info">
        © Agenly 2020 · Villkor · Integritetspolicy · Cookies
      </span>
    </footer>
  )
}

export default Footer;
