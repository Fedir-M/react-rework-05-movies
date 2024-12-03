import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/movies-services';

import defaultCastPhoto from '../../images/green-ava2 (1).webp';
import s from './Cast.module.css';

const Cast = () => {
  const { movie_id } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const credits = await fetchMovieCredits(movie_id);
        setCast(credits.cast);
      } catch (err) {
        console.error('Error fetching cast:', err);
        setError(err.message);
      }
    };

    getCast();
  }, [movie_id]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className={s.wrapperCast}>
      <h3 className={s.castListTitle}>CAST</h3>
      <ul className={s.castList}>
        {cast.map(actor => (
          <Link className={s.linkMovieList} to={`/actors/${actor.id}/movies`}>
            <li key={actor.id} className={s.castItem}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : defaultCastPhoto
                }
                alt={actor.name}
                className={
                  actor.profile_path
                    ? s.actorImage
                    : `${s.actorImage} ${s.default}`
                }
              />
              <p className={s.actorName}>{actor.name}</p>
              <p className={s.characterName}>
                as {actor.character || 'Unknown'}
              </p>
              <p className={s.characterPopularity}>
                Popularity: {actor.popularity || 'Unknown'}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
