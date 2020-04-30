import React from "react"
import InputButton from "./inputButton"
import Button from "./button";

const SubscribePanel = () => {
  // const isEnglish = window.location.hostname.split(".").slice(-2)[1]  === "site"? true  : false;
  return (
    <section className="SubscribePanel">
      <span className="SubscribePanel__title">
        {process.env.GATSBY_IS_ENGLISH
          ? "Be a part of the ride, sign up for the newsletter."
          : "Det är lätt att starta."}
      </span>
      <span className="SubscribePanel__subtitle">
        {process.env.GATSBY_IS_ENGLISH
          ? "Be a part of the ride, sign up for the newsletter."
          : "Kom igång, skapa din egna sida idag."}
      </span>
      <div className="SubscribePanel__button-container">
        <Button modifier="grey-outline" text={process.env.GATSBY_IS_ENGLISH ? "Login" : "Logga in"} />
        <Button modifier="grey" text={process.env.GATSBY_IS_ENGLISH ? "Get started" : "Kom igång"} arrow />
      </div>

      {/* <span className='SubscribePanel__text'>Be a part of the ride, sign up for the newsletter.</span> */}
      {/* <InputButton modifier={"SubscribePanel"} /> */}
    </section>
  )
}

export default SubscribePanel
