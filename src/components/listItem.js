import React from 'react';

const ListItem = ({text}) => (
  <li className='ListItem'><div className='ListItem__checkbox'></div> <span className='ListItem__text'>{text}</span></li>
)

export default ListItem;