import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';

const ModulesLibrary = ({cards}) => {
  return (
    <section className="ModulesLibrary">
      <div className="ModulesLibrary__container">
        {cards.map((item, index) => (
          <div className="ModulesLibrary__item" key={index}>
            <img
              className="ModulesLibrary__image"
              src={item.module_card_image.url}
              alt={item.title}
            />
            <h3 className="ModulesLibrary__title">{item.module_card_title[0].text}</h3>
            <span className="ModulesLibrary__text">{item.module_card_subtitle[0].text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ModulesLibrary;