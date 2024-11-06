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
            <img src={logo} alt='TravelTrucks Logo' width='136' height='16' />
          </NavLink>
          <ul className={css.headerMenuList}>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? `${css.ListItemHome} ${css.activeLink}`
                  : css.ListItemHome
              }
              end
            >
              Home
            </NavLink>
            <li className={css.headerListItem}>
              <NavLink
                to='/catalog'
                className={({ isActive }) =>
                  isActive
                    ? `${css.ListItemHome} ${css.activeLink}`
                    : css.ListItemHome
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
