import { Link } from 'react-router-dom';
import defaultProfile from '../../images/spy_1024x1024.webp';
import s from './ActorsList.module.css';

const ActorsList = ({ data, baseUrl, sortedPopularity }) => {
  return (
    <div className={s.wrapperActorList}>
      <ul className={s.actorList}>
        {sortedPopularity.map(actor => (
          <Link
            className={s.linkActorItem}
            to={`/actors/${actor.id}/movies?page=1`}
          >
            <li key={actor.id} className={s.actorItem}>
              <div className={s.imgWrapper}>
                <img
                  src={
                    actor.profile_path
                      ? `${baseUrl}${actor.profile_path}`
                      : defaultProfile
                  }
                  alt={actor.name}
                  className={
                    actor.profile_path
                      ? s.actorImage
                      : `${s.actorImage} ${s.default}`
                  }
                />
              </div>
              <div className={s.actorTitleBlock}>
                <h3 className={s.actorName}>{actor.name}</h3>
                <p className={s.actorPopularity}>
                  Popularity: {actor.popularity.toFixed(2)}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ActorsList;
