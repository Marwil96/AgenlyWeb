import React from 'react';
import fik from "../images/logos/fik.png"
import pizzeria from "../images/logos/pizzeria.png"
import scifi from "../images/logos/scifi.png"

const ExampleSites = () => {
  const sites = [
    { image: fik, link: "https://gildas-186c8uw4p.now.sh/" },
    { image: pizzeria, link: "https://gildas-186c8uw4p.now.sh/" },
    { image: scifi, link: "https://sciencefiction.pw/" },
  ]

  return (
    <section className="ExampleSites">
      {sites.map((item, index) => (
        <div className="ExampleSites__item" key={index}>
          <a target='__blank' href={item.link}>
            <img className="ExampleSites__item-image" src={item.image} alt={item.image}/>
          </a>
        </div>
      ))}
    </section>
  )
}

export default ExampleSites;