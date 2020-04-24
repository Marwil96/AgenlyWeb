import React from 'react';
import Img from 'gatsby-image'

const MockupBlock = ({ mobile, desktop }) => (
  <section className='MockupBlock'>
    <img src={mobile} className='MockupBlock__mobile' />
    <img src={desktop} className='MockupBlock__desktop' />
  </section>
)

export default MockupBlock;