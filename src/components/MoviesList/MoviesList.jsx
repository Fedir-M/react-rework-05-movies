import { Link, useLocation } from 'react-router-dom';

import defaultPoster from '../../images/lfc-logo.webp';

import s from './MoviesList.module.css';

const MoviesList = ({ data, baseUrl }) => {
  const location = useLocation();

  return (
    <ul className={s.listTrendingFilmsWrapper}>
      {data?.map(movie => (
        <Link
          className={s.linkMovieList}
          to={`/movies/${movie.id}`}
          state={location}
        >
          <li key={movie.id} className={s.itemMovie}>
            <img
              className={s.imageTrendingMovie}
              src={
                movie.poster_path
                  ? `${baseUrl}/${movie.poster_path}`
                  : defaultPoster
              }
              alt={movie.title}
            />
            <div className={s.wrapperTrendingMovieTexts}>
              <h3 className={s.titleTrendMovie}>''{movie.title}''</h3>
              <div className={s.pWrapperTrendMovie}>
                <p>Rate:{movie.vote_average}/10</p>
                <p>Year: {movie.release_date}</p>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;
