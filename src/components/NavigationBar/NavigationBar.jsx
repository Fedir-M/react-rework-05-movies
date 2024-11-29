import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import s from './NavigationBar.module.css';

const NavigationBar = () => {
  const location = useLocation();

  console.log(location);
  return (
    <div className={s.navWrapper}>
      <NavLink
        end
        to={'/'}
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        state={location}
      >
        Home
      </NavLink>
      <NavLink
        to={'/movies'}
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        state={location}
        search
      >
        Movies
      </NavLink>
      <NavLink
        to={'/actors'}
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        state={location}
      >
        Actors
      </NavLink>
    </div>
  );
};

export default NavigationBar;
