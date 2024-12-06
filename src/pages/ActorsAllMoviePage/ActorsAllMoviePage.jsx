import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {
  getActorPhotoAndInfo,
  getMoviesByActor,
} from 'services/movies-services';

import ActorProfile from 'components/ActorProfile/ActorProfile';
import Button from 'components/Button/Button';
import MoviesList from 'components/MoviesList/MoviesList';

import s from './ActorsAllMoviePage.module.css';

const ActorsAllMoviePage = () => {
  const { actor_id } = useParams(); // считываем через useParams() --> actorId из URL
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  //
  const [actorPhotoAndInfo, setActorPhotoAndInfo] = useState({});
  const [movies, setMovies] = useState([]);
  const [moviesCount, setMoviesCount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    const fetchActorPhotoAndInfo = async () => {
      try {
        const result = await getActorPhotoAndInfo(actor_id);
        // console.log('PhotoAndInfo from Api :>>', result);
        setActorPhotoAndInfo(result);
      } catch (error) {
        console.error('Error fetching photo and info:', error);
      }
    };

    fetchActorPhotoAndInfo();
  }, [actor_id]);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const result = await getMoviesByActor(actor_id, page);
        // console.log('getMoviesByActor from Api :>>', result);
        setMovies(prevMovies =>
          page === 1 ? result.results : [...prevMovies, ...result.results]
        );
        setMoviesCount(result.results.length);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
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
      {actorPhotoAndInfo.name && (
        <ActorProfile
          actor_id={actor_id}
          baseUrl={baseUrl}
          data={actorPhotoAndInfo}
        />
      )}

      <MoviesList data={movieYearRealiseSorted} baseUrl={baseUrl} />
      {!isLoading && movies.length > 0 && moviesCount === 20 && (
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
