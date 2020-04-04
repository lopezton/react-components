import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AppMenu = (props) => {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu();
  }, [false]);

  function getMenu() {
    axios.get('showcase/resources/menu/menu.json', { headers: { 'Cache-Control': 'no-cache' } })
      .then(res => res.data.data)
      .then(data => setMenu(data));
  }

  function renderMenuItems() {
    if (!menu) {
      return null;
    }
    return (
      <>
        {
          menu.map((menuItem, i) => {
            return (
              <Link key={i} to={menuItem.to} role="menuitem">
                {menuItem.name}
              </Link>
            )
          })
        }
      </>
    );
  }

  const menuItems = renderMenuItems();

  return (
    <>
      {menuItems}
    </>
  );
}

export default AppMenu;