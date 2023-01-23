import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';

import { MenuItems } from './MenuItems';
import { SubMenuItems } from './SubMenuItems';

export const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar" id={navbarClasses.join('_')}>
        <div className="navbar__container">
          <div className="navbar__test">
            <Link to="Home" className="navbar__logo" onClick={closeMobileMenu}>
              <img src="images/svg/logo.svg" alt="Logo" />
            </Link>
            <div className="menu__icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav__menu active' : 'nav__menu'}>
              <li className="nav__item">
                <Link
                  spy={true}
                  className="nav__links"
                  activeClass="active"
                  offset={10}
                  onClick={closeMobileMenu}
                >
                  Администрирование
                </Link>
                <ul className="nav__submenu">
                  {SubMenuItems.map((item, index) => {
                    return (
                      <li key={index} className={item.cName}>
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
              </li>
              {MenuItems.map((item, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <Link
                      to={item.to}
                      spy={true}
                      className={item.cName}
                      activeClass={item.activeClass}
                      offset={item.offset}
                      onClick={closeMobileMenu}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

        
        </div>
      </nav>
    </>
  );
};

export default Navbar;
