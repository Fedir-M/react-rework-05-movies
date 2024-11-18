import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { ProgressBar } from 'react-loader-spinner';

import { fetchMovieDetails } from '../../services/movies-services';
import defaultPoster from '../../images/lfc-logo.webp';

import s from './MovieDetails.module.css';

const MovieDetails = ({}) => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log('Fetching details for movie_id:', movie_id);
    // if (!movie) return setIsLoading(true); //не понял почуму все таки это мешало

    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieDetails(movie_id);
        setMovie(movieData);
      } catch (err) {
        console.error('Error fetching movie details:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movie_id]);

  if (error) return <p>Error: {error}</p>;

  return movie ? (
    <div className={s.wrapperMoviesDetails}>
      <ul className={s.listMovieDetails}>
        <li className={s.itemDetails} key={movie_id}>
          <img
            className={s.imagePosterDetails}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                : defaultPoster
            }
            alt={movie.title}
          />

          <h2 className={s.titleDetails}>{movie.title}</h2>
          <h3 className={s.scoreDetails}>Score: {movie.vote_average}/10</h3>
          <h3 className={s.overviewDetailsTitle}>Overview</h3>
          <p className={s.overviewDetailsDiscription}>{movie.overview}</p>
          <h3 className={s.genresDetailsTitle}>Genres</h3>
          <p className={s.genresDetailsDiscription}>
            {movie.genres && movie.genres.length > 0
              ? movie.genres.map(genre => genre.name).join(', ')
              : 'No genres available'}
          </p>
        </li>
      </ul>

      <div className={s.wrapper}>
        <NavLink
          to={'/movies/movie_id/cast'}
          className={({ isActive }) =>
            clsx(s.linkDetails, isActive && s.active)
          }
        >
          Cast
        </NavLink>

        <NavLink
          to={'/movies/movie_id/reviews'}
          className={({ isActive }) =>
            clsx(s.linkDetails, isActive && s.active)
          }
        >
          Reviews
        </NavLink>
      </div>
    </div>
  ) : (
    <div>
      <ProgressBar
        height="80"
        width="150"
        ariaLabel="progress-bar-loading"
        barColor="#dae962"
        borderColor="#125a1f"
        className={s.loader}
        wrapperClass={s.customProgressBar}
      />
      <p>Your movie is coming. Make a breath and enjoy your coffee.</p>
    </div>
  );
};

export default MovieDetails;
