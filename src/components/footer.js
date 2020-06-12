import React from "react"
import { Link } from "gatsby"
import InputButton from "./inputButton"

const Footer = () => {
  const isEnglish = JSON.parse(process.env.GATSBY_IS_ENGLISH) ? true : false;

  return (
    <footer className="Footer">
      <section className="Footer__container">
        <div className="Footer__column">
          <span className="Footer__column-title">{isEnglish ? 'Contact us' : 'Kontakta oss'}</span>
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
          <span className="Footer__column-title">{isEnglish ? 'Links' : 'Länkar'}</span>
          <Link className="Footer__column-link" to="/pricing"> {isEnglish ? 'Pricing' : 'Prissättning'} </Link>
          <Link className="Footer__column-link" to="/features/uppstart"> {isEnglish ? 'Setup Process' : 'Uppstart'} </Link>
          <Link className="Footer__column-link" to="/features/moduler"> 
            {isEnglish ? 'Modules' : 'Moduler'}
          </Link> 
          <Link className="Footer__column-link" to="/features"> {isEnglish ? 'Features' : 'Funktioner'} </Link>
          <Link className="Footer__column-link" to="/why"> {isEnglish ? 'Why' : 'Varför'} </Link>
        </div>

        <div className="Footer__column">
          <span className="Footer__column-title">Agenly</span>
          <span className="Footer__column-text">
            {isEnglish ? "You tell us about your business and we handle the rest. We use a combination between conversational UI and AI to create the best solution for you." : 'Du berättar för oss om ditt företag och vi tar hand om resten. Vi använder en kombination av konversationell UI och Ai för att skapa bästa lösningen för dig.'}
          </span>
        </div>
      </section>
      <section className="Footer__container" style={{borderTop: 0}}>
        <h3>{isEnglish ? 'Be a part of the ride, sign up for the newsletter.' : 'Följ med på resan, skriv upp dig på nyhetsbrevet.'}</h3>
        <InputButton text='Subscribe for newsletter' modifier={'primary'} />
      </section>
      <span className="Footer__info">
        @Agenly 2020 · <Link to='/legal/allmanna-villkor'>Villkor</Link> · <Link to='/legal/integritetspolicy'>Integritetspolicy</Link> · <Link to='/legal/kakor'>Cookies</Link>
        {/* Agenly 2020 */}
      </span>
    </footer>
  )
}

export default Footer;
