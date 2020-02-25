import React from 'react';
import fik from "../images/logos/fik.png"
import pizzeria from "../images/logos/pizzeria.png"
import scifi from "../images/logos/scifi.png"

const ExampleSites = () => {
  const sites = [
    { image: fik, link: "www.swedroid.se" },
    { image: pizzeria, link: "www.swedroid.se" },
    { image: scifi, link: "www.swedroid.se" },
  ]

  return (
    <section className="ExampleSites">
      {sites.map(item => (
        <div className="ExampleSites__item">
          <a href={item.link}>
            <img className="ExampleSites__item-image" src={item.image} />
          </a>
        </div>
      ))}
    </section>
  )
}

export default ExampleSites;