import React from "react"
import InputButton from "./inputButton"

const Footer = () => {
  return (
    <footer className="Footer">
      <section className="Footer__container">
        <div className="Footer__column">
          <span className="Footer__column-title">Kontakta oss</span>
          <span className="Footer__column-link">+46768023804</span>
          <span className="Footer__column-link">contact@agenly.se</span>
        </div>

        <div className="Footer__column">
          <span className="Footer__column-title">Följ oss</span>
          <a className="Footer__column-link">Facebook</a>
          <a className="Footer__column-link">Twitter</a>
        </div>

        <div className="Footer__column">
          <span className="Footer__column-title">Länkar</span>
          <span className="Footer__column-link">Moduler</span>
          <span className="Footer__column-link">Varför</span>
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
