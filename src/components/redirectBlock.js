import React from 'react';
import Button from './button';
import { Link } from 'gatsby';

const RedirectBlock = ({ title, subtitle }) => (
  <section className='RedirectBlock'>
    <h3 className='RedirectBlock__title'>{title}</h3>
    <span className='RedirectBlock__subtitle'>{subtitle}</span>
    <Link to='features'><Button text='Se mer funktioner' arrow /></Link>
  </section>
)

export default RedirectBlock;