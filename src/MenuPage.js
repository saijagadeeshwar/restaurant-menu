import React, { useEffect, useState } from 'react';
import { fetchMenuData } from './services/menuService';
import Menu from './components/Menu';

const MenuPage = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const getMenuData = async () => {
      const data = await fetchMenuData();
      setMenuData(data);
    };

    getMenuData();
  }, []);

  return (
    <div>
      {menuData ? (
        <Menu menuData={menuData} />
      ) : (
        <p>Loading menu...</p>
      )}
    </div>
  );
};

export default MenuPage;
