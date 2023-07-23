import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
export default function Navigation() {
  return (
    <nav className={css.mainnav}>
      <NavLink
        className={({ isActive }) =>
          isActive ? css.active : css.navitem
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? css.active : css.navitem
        }
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}