import React from 'react';

const Menu = ({ menuData }) => {
  return (
    <div>
      <h1 className="menu-title">{menuData.name}</h1>
      <div className="menu-items">
        {menuData.categories.map((category, index) => (
          <div key={index} className="menu-category">
            <h2 className="category-name">{category.name}</h2>
            <ul className="category-items">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="menu-item">
                  <div className="item-name">
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                  </div>
                  <div className="item-price">
                    <span>{item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <footer className="menu-footer">
        <p>1111 C St, San Diego, CA 92103 - (610) 888-1111</p>
        <p>www.yourwebpagehere.com - @yourprofilehere</p>
      </footer>
    </div>
  );
};

export default Menu;
