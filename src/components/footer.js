import React from "react"
import { Link } from "gatsby"
import InputButton from "./inputButton"

const Footer = ({english}) => {

  return (
    <footer className="Footer">
      <section className="Footer__container">
        <div className="Footer__column">
          <span className="Footer__column-title">{english ? 'Contact us' : 'Kontakta oss'}</span>
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
          <span className="Footer__column-title">{english ? 'Links' : 'Länkar'}</span>
          <Link className="Footer__column-link" to={`/${english ? 'en/' : ''}pricing`}> {english ? 'Pricing' : 'Prissättning'} </Link>
          <Link className="Footer__column-link" to={english ? `/en/features/unique-startup-process` : '/features/uppstart'}> {english ? 'Setup' : 'Uppstart'} </Link>
          <Link className="Footer__column-link" to={english ? `/en/features/modules` : '/features/moduler'}> 
            {english ? 'Modules' : 'Moduler'}
          </Link> 
          <Link className="Footer__column-link" to={`/${english ? 'en/' : ''}features`}> {english ? 'Features' : 'Funktioner'} </Link>
          <Link className="Footer__column-link" to={`/${english ? 'en/' : ''}why`}> {english ? 'Why' : 'Varför'} </Link>
        </div>

        <div className="Footer__column">
          <span className="Footer__column-title">Agenly</span>
          <span className="Footer__column-text">
            {english ? "You tell us about your business and we handle the rest. We use a combination between conversational UI and AI to create the best solution for you." : 'Istället för trassliga hemsidebyggare använder vi ett unikt chattsystem där du enbart behöver svara på några enkla frågor om ditt företag. Med den informationen kan vi skapa en grym skräddarsydd hemsida till dig.'}
          </span>
        </div>
      </section>
      <section className="Footer__container" style={{borderTop: 0}}>
        <h3>{english ? 'Be a part of the ride, sign up for the newsletter.' : 'Följ med på resan, skriv upp dig på nyhetsbrevet.'}</h3>
        <InputButton text={english ? 'Subscribe for newsletter' : 'Gå med i nyhetsbrevet'} modifier={'primary'} english />
      </section>
      <span className="Footer__info" style={english ? {display:'none'} : {}}>
        @Agenly 2020 · <Link to='/legal/allmanna-villkor'>Villkor</Link> · <Link to='/legal/integritetspolicy'>Integritetspolicy</Link> · <Link to='/legal/kakor'>Cookies</Link>
        {/* Agenly 2020 */}
      </span>
    </footer>
  )
}

export default Footer;
