import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import s from './MovieDetails.module.css';

const MovieDetails = () => {
  return (
    <div className={s.wrapperMoviesDetails}>
      <ul className={s.listMovieDetails}>
        <li className={s.itemDetails}>
          <img className={s.imagePosterDetails} src="" alt="" />

          <h2 className={s.titleDetails}></h2>
          <h3 className={s.scoreDetails}></h3>
          <h3 className={s.overviewDetailsTitle}></h3>
          <p className={s.overviewDetailsDiscription}></p>
          <h3 className={s.genresDetailsTitle}></h3>
          <p className={s.genresDetailsDiscription}></p>
        </li>
      </ul>

      <div className={s.wrapper}>
        <NavLink
          to={'/cast'}
          className={({ isActive }) =>
            clsx(s.linkDetails, isActive && s.active)
          }
        >
          Cast
        </NavLink>

        <NavLink
          to={'/reviews'}
          className={({ isActive }) =>
            clsx(s.linkDetails, isActive && s.active)
          }
        >
          Reviews
        </NavLink>
      </div>
    </div>
  );
};

export default MovieDetails;
