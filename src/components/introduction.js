import React from "react";
import { RichText } from 'prismic-reactjs';
import SignupButton from "./signupButton";
import Button from "./button";

const Introduction = ({title, subtitle, image, english}) => {
  return (
    <section className="introduction">
      <div className="introduction__container">
        <div className="introduction__text-wrapper">
          <h1 className="introduction__title">
            <RichText render={title} />
          </h1>
          <span className="introduction__subtitle">
            <RichText render={subtitle} />
          </span>
          {english ? (
            <a style={{display:'flex'}} target='__blank' href="https://williammartinsson.typeform.com/to/NM0RvQyP">
              <Button modifier="fat" text="Sign up for early access" arrow />
            </a>
          ) : (
            <SignupButton
              english={english}
              modifier="primary"
              text={english ? "Get started" : "Kom igång"}
            />
          )}
        </div>

        <img src={image.src} alt="Agenly hero" />
      </div>
    </section>
  )
};

export default Introduction;
