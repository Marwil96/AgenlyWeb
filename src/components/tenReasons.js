import React from 'react';
import Flickity from 'react-flickity-component'

const TenReasons = ({title, reasons}) => {
  // Swedish
  // const reasons = [
  //   { title: 'Testa och betala sen.', text:'Testa och kör, vi tar inte pengar för första månaden. Finns det någon webbyrå i världen som har det erbjudandet?'},
  //   { title: 'Pressade priser.', text: 'Genom vår automatisering av hemsidebyggandet kan vi erbjuda prispressade hemsidor som även har blivit hårt testade.' },
  //   { title: 'Lyft inte ett finger.', text: 'Vi håller konstant sidan i teknologins framkant. För att ge en bra upplevelse för era kunder. ' },
  //   { title: 'Du äger hemsidan.', text: 'Om du vill säga upp prenumationen hos Agenly, kan du efterfråga kodbasen. Ingen annan hemsidebyggare på marknaden erbjuder det här.' },
  //   { title: 'Idiotsäker. ', text: 'Vi kräver inte att du har någon designkunskap. Det enda du behöver göra är att svara på några enkla frågor.' }
  // ]

  // English
  // const reasons = [
  //   { title: 'Try it first.', text: 'We do not take money for the first two weeks. Try it! Is there any web agency in the world that has that offer?' },
  //   { title: 'Dirt Cheap Prices.', text: 'Through our automation of website building, we can offer cheap websites that have been heavily tested.' },
  //   { title: "Don't lift a finger.", text: 'We are constantly on the cutting edge of technology. To provide a good experience for your customers.' },
  //   { title: 'You own the website.', text: "If you want to cancel Agenly's subscription, you can request the codebase.No other website builder in the market offers this." },
  //   { title: 'Custom Domain.. ', text: 'We take care of everything. Buy your domain and host your website with us.' }
  // ]

  const flickityOptions = {
    freeScroll: true,
    contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false,
  }

  return (
    <section className="TenReasons">
      <h3 className="TenReasons__title">{title[0].text}</h3>

      <div className="TenReasons__item-container">
      <Flickity
        className={"TenReasons__item-container"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {reasons.map((reason, index) => (
          <div className="TenReasons__item" key={index}>
            <span className="TenReasons__item-number">{index + 1}.</span>
            <h5 className="TenReasons__item-title">{reason.block_title[0].text}</h5>
            <span className="TenReasons__item-text">{reason.block_text[0].text}</span>
          </div>
        ))}
      </Flickity>
      </div>
    </section>
  )
}

export default TenReasons;