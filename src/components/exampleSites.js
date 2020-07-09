import React from 'react';
import fik from "../images/logos/fik.png"
import ffss from "../images/logos/FFSS.png"
import scifi from "../images/logos/scifi.png"

const ExampleSites = ({english}) => {
  const sites = [
    { image: fik, link: "https://vasakatten.agenly.se/" },
    { image: ffss, link: "https://agenly.website/" },
    { image: scifi, link: "https://sciencefictionforeningen.agenly.se/" },
  ]

  return (
    <section className="ExampleSites">
      <h3 className='ExampleSites__title'>{english ? 'Example websites' : 'Exempel sidor'}</h3>
      <div className='ExampleSites__container'>
      {sites.map((item, index) => (
        <div className="ExampleSites__item" key={index}>
          <a target='__blank' href={item.link}>
            <img className="ExampleSites__item-image" src={item.image} alt={item.image}/>
          </a>
        </div>
      ))}
      </div>
    </section>
  )
}

export default ExampleSites;