import React from "react";
import { RichText } from 'prismic-reactjs';
import SignupButton from "./signupButton";

const Introduction = ({title, subtitle, image}) => {
  return (
    <section className="introduction">
      <div className='introduction__container'>
        <div className="introduction__text-wrapper">
          <h1 className="introduction__title">
            <RichText render={title} />
          </h1>
          <span className="introduction__subtitle">
            Du berättar för oss om ditt företag och vi tar hand om resten. Vi använder en kombination av konversationell UI och Ai för att skapa bästa lösningen för dig.
          </span>
          <SignupButton modifier="primary" text='Kom igång'/>
        </div>

        <img src={image.src} alt='Agenly hero'/>
      </div>
    </section>
  )
};

export default Introduction;
