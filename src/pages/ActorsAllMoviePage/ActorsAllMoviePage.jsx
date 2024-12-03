import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  getActorPhotoAndInfo,
  getMoviesByActor,
} from 'services/movies-services';
import { ProgressBar } from 'react-loader-spinner';
import Button from 'components/Button/Button';
import defaultProfile from '../../images/green-ava2.webp';

import s from './ActorsAllMoviePage.module.css';

const ActorsAllMoviePage = () => {
  const { actor_id } = useParams(); // считываем через useParams() --> actorId из URL
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  //
  const [movies, setMovies] = useState([]);
  const [actorPhotoAndInfo, setActorPhotoAndInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    // console.log('Actor ID :>>', actor_id);

    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const result = await getMoviesByActor(actor_id, page);
        console.log('getMoviesByActor from Api :>>', result);
        setMovies(result.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchActorPhotoAndInfo = async () => {
      try {
        const result = await getActorPhotoAndInfo(actor_id);
        // console.log('PhotoAndInfo from Api :>>', result);
        setActorPhotoAndInfo(result);
      } catch (error) {
        console.error('Error fetching photo and info:', error);
      }
    };

    fetchMovies();
    fetchActorPhotoAndInfo();
  }, [actor_id, page]);

  const movieYearRealiseSorted = [...movies].sort((a, b) => {
    const dateA = new Date(a.release_date);
    const dateB = new Date(b.release_date);
    return dateB - dateA;
  });

  const onLoadMoreActorAllMovies = () => {
    setSearchParams({ page: page + 1 });
  };

  return (
    <div className={s.wrapperActorsAllMoviePage}>
      {isLoading && (
        <ProgressBar
          height="80"
          width="150"
          ariaLabel="progress-bar-loading"
          barColor="#dae962"
          borderColor="#125a1f"
          className={s.loader}
        />
      )}
      <div className={s.wrapperImageAndText}>
        <img
          src={
            actorPhotoAndInfo.profile_path
              ? `${baseUrl}${actorPhotoAndInfo.profile_path}`
              : defaultProfile
          }
          alt={actorPhotoAndInfo.name}
          className={
            actorPhotoAndInfo.profile_path
              ? s.actorImage
              : `${s.actorImage} ${s.default}`
          }
        />
        <div className={s.wrapperImageTexts}>
          <h2 className={s.actorNameAllMovies}>{actorPhotoAndInfo.name}</h2>
          <p className={s.knownForAllMovies}>
            <span className={s.spanText}>Known for: </span>
            {Array.isArray(actorPhotoAndInfo.also_known_as)
              ? actorPhotoAndInfo.also_known_as.join(', ')
              : 'Unknown'}
          </p>
          <p className={s.actorPopularityAllMovies}>
            <span className={s.spanText}>Place of birth: </span>
            {actorPhotoAndInfo.place_of_birth}
          </p>
          <p className={s.actorPopularityAllMovies}>
            <span className={s.spanText}>Birthday : </span>
            {actorPhotoAndInfo.birthday}
            <p className={s.actorPopularityAllMovies}>
              <span className={s.spanText}>Deathday: </span>
              {actorPhotoAndInfo.deathday || 'Still alive =)'}
            </p>
          </p>

          <p className={s.actorPopularityAllMovies}>
            <span className={s.spanText}>Popularity: </span>

            {typeof actorPhotoAndInfo.popularity === 'number'
              ? actorPhotoAndInfo.popularity.toFixed(2)
              : 'Unknown'}
          </p>
        </div>
      </div>

      <ul className={s.listAllActorMovies}>
        {movieYearRealiseSorted.map(movie => (
          <li key={movie.id} className={s.itemAllMovies}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className={s.movieImage}
            />
            <h3 className={s.titleAllMovies}>{movie.title}</h3>
            <p className={s.textAllMovies}>
              Release date: {movie.release_date}
            </p>
            <p className={s.textAllMovies}>
              Vote average: {movie.vote_average}
            </p>
          </li>
        ))}
      </ul>
      {!isLoading && movies.length > 0 && (
        <Button
          onClick={onLoadMoreActorAllMovies}
          label="Load more..."
          type="button"
          className={s.loadMoreButtonActorAllMovies}
        />
      )}
    </div>
  );
};

export default ActorsAllMoviePage;
