import React from "react";
import Img from "gatsby-image"
import InputButton from "./inputButton";
import { RichText } from 'prismic-reactjs';

const Introduction = ({title, subtitle, image}) => {
  console.log(title, subtitle)
  return (
    <section className="introduction">
      <div className='introduction__container'>
        <div className="introduction__text-wrapper">
          <h1 className="introduction__title">
            {/* Din personliga webbbyrå som bara blir bättre över <span className="Highlighted">tid.</span> */}
            <RichText render={title} />
          </h1>
          <span className="introduction__subtitle">
            {/* {subtitle[0].text} */}
            Du berättar för oss om ditt företag och vi tar hand om resten. Vi använder en kombination av konversationell UI och Ai för att skapa bästa lösningen för dig.
          </span>
          <InputButton modifier="primary" text='Kom igång'/>
        </div>

        {/* <Img alt='displays images when hovering over text' fluid={image} /> */}
        <img src={image.src}/>
      </div>
    </section>
  )
};

export default Introduction;
