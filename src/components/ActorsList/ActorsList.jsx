import defaultProfile from '../../images/spy_1024x1024.webp';
import s from './ActorsList.module.css';

const ActorsList = ({ data, baseUrl }) => {
  return (
    <div className={s.wrapperActorList}>
      <h2>ActorsList</h2>
      <ul className={s.actorList}>
        {data.map(actor => (
          <li key={actor.id} className={s.actorItem}>
            <img
              src={
                actor.profile_path
                  ? `${baseUrl}${actor.profile_path}`
                  : { defaultProfile }
              }
              alt={actor.name}
              className={s.actorImage}
            />
            <h3 className={s.actorName}>{actor.name}</h3>
            <p className={s.actorPopularity}>
              Popularity: {actor.popularity.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActorsList;
