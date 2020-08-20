import React from 'react';
import Flickity from 'react-flickity-component'

const TenReasons = ({title, reasons}) => {
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