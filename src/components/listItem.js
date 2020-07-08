import React from 'react';

const ListItem = ({ text }) => (
  <li className="ListItem">
    <div className="ListItem__checkbox">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 13">
        <path
          d="M5.86 13a1 1 0 01-.73-.32L.27 7.51a1 1 0 111.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"
          fill="#000"
        />
      </svg>
    </div>

    <span className="ListItem__text">{text}</span>
  </li>
)

export default ListItem;