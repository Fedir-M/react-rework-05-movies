import { useEffect, useState } from 'react';

import MoviesList from 'components/MoviesList/MoviesList';

import { fetchTrendingMovies } from 'services/movies-services';

import s from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => {
        // Это срабатывает при успешном получении данных
        setMovies(data.slice(0, 10));
      })
      .catch(error => {
        // Этот блок ловит все ошибки, включая те, что происходят в любом из then
        console.error('Error fetching trending movies:', error);
      });
  }, []);

  const sortedMovies = movies.sort((a, b) => b.vote_average - a.vote_average);

  return (
    <div className={s.home}>
      <h1 className={s.TitleTopTen}>
        TOP-10: Trending <span className={s.titleSpanTopTen}>this week</span>
      </h1>
      <MoviesList
        data={movies}
        baseUrl="https://image.tmdb.org/t/p/w200"
        sortedMovies={sortedMovies}
      />
    </div>
  );
};

export default HomePage;
