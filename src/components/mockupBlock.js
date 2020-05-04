import React from 'react';

const MockupBlock = ({ mobile, desktop }) => (
  <section className="MockupBlock">
    <img src={mobile} className="MockupBlock__mobile" alt="mockup mobile" />
    <img src={desktop} className="MockupBlock__desktop" alt="mockup desktop" />
  </section>
)

export default MockupBlock;