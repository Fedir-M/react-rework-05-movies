import { Suspense, useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import clsx from 'clsx';
import { ProgressBar } from 'react-loader-spinner';
import { BarLoader } from 'react-spinners';
import Button from 'components/Button/Button';

import { fetchMovieDetails } from '../../services/movies-services';
import defaultPoster from '../../images/lfc-logo.webp';

import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  //   const [isLoading, setIsLoading] = useState(false);

  const handleGoBack = () => {
    const { state: lastLocation } = location;
    // console.log('lastLocation>>', lastLocation);
    navigate(lastLocation ? lastLocation : '/');
  };

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
        // setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movie_id]);

  if (error) return <p>Error: {error}</p>;

  return movie ? (
    <>
      <div className={s.wrapperMoviesDetails}>
        <Button
          onClick={handleGoBack}
          label=" << Back"
          type="button"
          className={s.goBackButton}
        />
        <ul className={s.listMovieDetails}>
          <li className={s.itemDetails} key={movie_id}>
            <img
              className={s.imagePosterDetails}
              src={
                movie?.poster_path
                  ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                  : defaultPoster
              }
              alt={movie.title}
            />

            <div className={s.textWrapperDetails}>
              <h2 className={s.titleDetails}>" {movie.title} "</h2>
              <h3 className={s.scoreDetails}>
                <span className={s.scoreDetailsSpan}>Score: </span>
                {(movie.vote_average || 0).toFixed(1)}/10
              </h3>
              <h3 className={s.overviewDetailsTitle}>Overview</h3>
              <p className={s.overviewDetailsDiscription}>{movie.overview}</p>
              <h3 className={s.genresDetailsTitle}>Genres</h3>
              <p className={s.genresDetailsDiscription}>
                {movie.genres && movie.genres.length > 0
                  ? movie.genres.map(genre => genre.name).join(', ')
                  : 'No genres available'}
              </p>
            </div>
          </li>
        </ul>

        <div className={s.wrapperCastReview}>
          <NavLink
            to={'cast'}
            state={location.state}
            className={({ isActive }) =>
              clsx(s.linkDetails, isActive && s.active)
            }
          >
            CAST
          </NavLink>

          <NavLink
            to={'reviews'}
            state={location.state}
            className={({ isActive }) =>
              clsx(s.linkDetails, isActive && s.active)
            }
          >
            REVIEWS
          </NavLink>
        </div>
      </div>
      <Suspense
        fallback={
          <BarLoader
            color="#800f0f"
            cssOverride={null}
            height={8}
            width={200}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  ) : (
    <div className={s.wrapperProgressBar}>
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
