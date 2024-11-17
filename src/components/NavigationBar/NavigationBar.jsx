import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import s from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <div className={s.navWrapper}>
      <NavLink
        end
        to={'/'}
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Home
      </NavLink>
      <NavLink
        to={'/movies'}
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Movies
      </NavLink>
      <NavLink
        to={'/actors'}
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Actors
      </NavLink>
    </div>
  );
};

export default NavigationBar;
