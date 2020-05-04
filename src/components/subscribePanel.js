import React from "react"
import Button from "./button";

const SubscribePanel = () => {
  const isEnglish = JSON.parse(process.env.GATSBY_IS_ENGLISH) ? true : false;

  return (
    <section className="SubscribePanel">
      <span className="SubscribePanel__title">
        {isEnglish
          ? "Be a part of the ride, sign up for the newsletter."
          : "Det är lätt att starta."}
      </span>
      <span className="SubscribePanel__subtitle">
        {isEnglish
          ? "Be a part of the ride, sign up for the newsletter."
          : "Kom igång, skapa din egna sida idag."}
      </span>
      <div className="SubscribePanel__button-container">
        <Button modifier="grey-outline" text={isEnglish ? "Login" : "Logga in"} />
        <Button modifier="grey" text={isEnglish ? "Get started" : "Kom igång"} arrow />
      </div>

      {/* <span className='SubscribePanel__text'>Be a part of the ride, sign up for the newsletter.</span> */}
      {/* <InputButton modifier={"SubscribePanel"} /> */}
    </section>
  )
}

export default SubscribePanel
