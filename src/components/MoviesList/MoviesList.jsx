import s from './MoviesList.module.css';

const MoviesList = ({ data, baseUrl, sortedMovies }) => {
  return (
    <ul className={s.listTrendingFilmsWrapper}>
      {data?.map(movie => (
        <li key={movie.id} className={s.itemMovie}>
          <img
            className={s.imageTrendingMovie}
            src={`${baseUrl}/${movie.poster_path}`}
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
      ))}
    </ul>
  );
};

export default MoviesList;
