import React from "react"
import { Link } from "gatsby"
import InputButton from "./inputButton"

const Footer = () => {
  return (
    <footer className="Footer">
      <section className="Footer__container">
        <div className="Footer__column">
          <span className="Footer__column-title">Kontakta oss</span>
          {/* <span className="Footer__column-title">Contact us</span> */}
          {/* <span className="Footer__column-link">+46768023804</span> */}
          <a className="Footer__column-link" href='mailto:william@agenly.se'>william@agenly.se</a>
        </div>

        {/* <div className="Footer__column"> */}
          {/* <span className="Footer__column-title">Följ oss</span> */}
          {/* <span className="Footer__column-title">Follow</span>
          <a className="Footer__column-link">Facebook</a>
          <a className="Footer__column-link">Twitter</a>
        </div> */}

        <div className="Footer__column">
          {/* <span className="Footer__column-title">Links</span> */}
          <span className="Footer__column-title">Länkar</span>
          <Link className="Footer__column-link" to="/pricing"> Prissättning </Link>
          <Link className="Footer__column-link" to="/features/uppstart"> Uppstart </Link>
          <Link className="Footer__column-link" to="/features/modules"> 
            Moduler
          </Link> 
          <Link className="Footer__column-link" to="/features"> Funktioner </Link>
          <Link className="Footer__column-link" to="/why"> Varför </Link>
          {/* <Link className="Footer__column-link" to="/why"> Why </Link> */}
          {/* <span className="Footer__column-link">Uppdateringar</span> */}
        </div>

        <div className="Footer__column">
          <span className="Footer__column-title">Agenly</span>
          {/* <span className="Footer__column-text">
            You tell us about your business and we handle the rest. We use a
            combination between conversational UI and AI to create the best
            solution for you.
          </span> */}
          <span className="Footer__column-text">
            Du berättar för oss om ditt företag och vi tar hand om resten. Vi använder en kombination av konversationell UI och Ai för att skapa bästa lösningen för dig.
          </span>
        </div>
      </section>
      <section className="Footer__container" style={{borderTop: 0}}>
        <h3>Följ med på resan, skriv upp dig på nyhetsbrevet.</h3>
        <InputButton text='Gå med' modifier={'primary'} />
      </section>
      <span className="Footer__info">
        @Agenly 2020 · <Link to='/legal/allmanna-villkor'>Villkor</Link> · <Link to='/legal/integritetspolicy'>Integritetspolicy</Link> · <Link to='/legal/kakor'>Cookies</Link>
        {/* Agenly 2020 */}
      </span>
    </footer>
  )
}

export default Footer;
