import React from 'react';

const Menu = ({ menuData }) => {
  return (
    <div className="menu-container">
      <h1 className="restaurant-title">{menuData.name}</h1>
      <div className="menu-content">
        {menuData.categories.map((category, index) => (
          <div key={index} className="menu-category">
            <h2 className="category-title">{category.name}</h2>
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-item-image" />
                <div className="menu-item-details">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-description">{item.description}</p>
                  <p className="menu-item-price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
