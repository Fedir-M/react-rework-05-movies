import Button from 'components/Button/Button';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import { getMoviesByQuery } from 'services/movies-services';
import { ProgressBar } from 'react-loader-spinner';

import s from './MoviesPage.module.css';
import { useSearchParams } from 'react-router-dom';

// ../movies/?query=cat&page=2

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //
  const searchQuery = searchParams.get('query') ?? '';
  const page = Number(searchParams.get('page')) || 1;
  // const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      if (!searchQuery) return;

      setIsLoading(true);

      try {
        const result = await getMoviesByQuery(searchQuery, page);
        setMovies(prevMovies =>
          page === 1 ? result.results : [...prevMovies, ...result.results]
        );

        // setSearchQuery('');
      } catch (error) {
        throw new Error('Pizdec fse propalo');
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [searchQuery, page]);

  const onLoadMore = () => {
    setSearchParams({ query: searchQuery, page: page + 1 });
  };

  return (
    <div className={s.moviesPageWrapper}>
      {isLoading && (
        <ProgressBar
          height="80"
          width="150"
          ariaLabel="progress-bar-loading"
          barColor="#dae962"
          borderColor="#125a1f"
          className={s.loader}
          wrapperClass={s.customProgressBar}
        />
      )}
      <SearchBar />
      <MoviesList
        className={s.MoviesListOnMoviePage}
        data={movies}
        baseUrl="https://image.tmdb.org/t/p/w200"
      />
      {!isLoading && movies.length > 0 && (
        <Button
          onClick={onLoadMore}
          label="Load more..."
          type="button"
          className={s.loadMoreButton}
        />
      )}
    </div>
  );
};

export default MoviesPage;

// MoviePage -> (setQuery) <-SearchBar - input(string) - submit -> setQuery(string)
// useEffect(() => {}, [query])
// MoviePage -> (query) ([{}, {}])<-API
// MoviePage -> (data) MovieList(data) -> ul-li-li-li
