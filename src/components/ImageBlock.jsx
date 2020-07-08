import React from "react"
import Img from 'gatsby-image'

const ImageBlock = ({ image }) => (
  <section className="ImageBlock">
    <Img fluid={image} className="ImageBlock__image" alt="full-width" />
  </section>
)

export default ImageBlock
