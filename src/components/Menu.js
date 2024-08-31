import React from 'react';

const Menu = ({ menuData }) => {
  return (
    <div>
      <h1>{menuData.name}</h1>
      {menuData.categories.map((category, index) => (
        <div key={index}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
