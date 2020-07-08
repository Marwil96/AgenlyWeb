import React from "react"
import Button from "./button";

const SubscribePanel = ({english}) => {
  return (
    <section className="SubscribePanel">
      <span className="SubscribePanel__title">
        {english
          ? "Apply for the early access program."
          : "Det är lätt att starta."}
      </span>
      <span className="SubscribePanel__subtitle">
        {english
          ? "If you get invited you recieve 20% off on Agenly."
          : "Kom igång, skapa din egna sida idag."}
      </span>
      {/* <div className="SubscribePanel__button-container">
        <Button modifier="grey-outline" text={english ? "Login" : "Logga in"} />
        <Button
          modifier="grey"
          text={english ? "Get started" : "Kom igång"}
          arrow
        />
      </div> */}

      {english ? (
        <div className="SubscribePanel__button-container">
          <a target='__blank' href="https://williammartinsson.typeform.com/to/NM0RvQyP">
            <Button modifier="fat" text="Sign up for early access" arrow />
          </a>
        </div>
      ) : (
        <div className="SubscribePanel__button-container">
          <a href="https://app.agenly.se">
            <Button
              modifier="grey-outline"
              text={english ? "Login" : "Logga in"}
            />
          </a>
          <a href="https://app.agenly.se/createAccount">
            <Button
              modifier="grey"
              text={english ? "Get started" : "Kom igång"}
              arrow
            />
          </a>
        </div>
      )}

      {/* <span className='SubscribePanel__text'>Be a part of the ride, sign up for the newsletter.</span> */}
      {/* <InputButton modifier={"SubscribePanel"} /> */}
    </section>
  )
}

export default SubscribePanel
