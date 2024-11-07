import React from "react"
import { NavLink } from "react-router-dom"
import css from "./Header.module.css"
import logo from "../../images/logo.svg"

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <nav className={css.navHeader}>
          <NavLink to='/' className={css.headerLogo}>
            <img
              className={css.navImg}
              src={logo}
              alt='TravelTrucks Logo'
              width='136'
              height='16'
            />
          </NavLink>
          <ul className={css.headerMenuList}>
            <li className={css.headerListItem}>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive
                    ? `${css.headerLink} ${css.activeLink}`
                    : css.headerLink
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className={css.headerListItem}>
              <NavLink
                to='/catalog'
                className={({ isActive }) =>
                  isActive
                    ? `${css.headerLink} ${css.activeLink}`
                    : css.headerLink
                }
              >
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
