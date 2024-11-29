import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import ActorsList from 'components/ActorsList/ActorsList';
import { ProgressBar } from 'react-loader-spinner';
import { getActorsByQuery } from '../../services/movies-services';

import s from './ActorsPage.module.css';

const ActorsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const actorsQuery = searchParams.get('query') ?? '';
  const page = Number(searchParams.get('page')) || 1;
  //
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getActors = async () => {
      if (!actorsQuery) return;

      setIsLoading(true);

      try {
        const result = await getActorsByQuery(actorsQuery, page);
        setActors(prevActors =>
          page === 1 ? result.results : [...prevActors, ...result.results]
        );
      } catch (error) {
        console.error('Error fetching actors:', error);
      } finally {
        setIsLoading(false);
      }
    };
    getActors();
  }, [actorsQuery, page]);

  const onLoadMoreActors = () => {
    setSearchParams({ query: actorsQuery, page: page + 1 });
  };
  return (
    <div>
      <h2>Actors</h2>
      <SearchBar
        paramQuery="actorQuery"
        placeholder="Search your actor"
        className={s.SearchBarActors}
      />
      <ActorsList
        data={actors}
        baseUrl="https://image.tmdb.org/t/p/w200"
        className={s.actorsList}
      />
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
      {!isLoading && actors.length > 0 && (
        <button onClick={onLoadMoreActors} className={s.loadMoreButton}>
          Load more...
        </button>
      )}
    </div>
  );
};

export default ActorsPage;
