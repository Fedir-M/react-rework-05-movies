import defaultProfile from '../../images/green-ava2.webp';

import s from './ActorProfile.module.css';

const ActorProfile = ({ baseUrl, data }) => {
  return (
    <div className={s.wrapperImageAndText}>
      <div className={s.wrapperImageOnly}>
        <img
          src={
            data.profile_path
              ? `${baseUrl}${data.profile_path}`
              : defaultProfile
            //* fucking pictures and async loading
          }
          alt={data.name}
          className={
            data.profile_path ? s.actorImage : `${s.actorImage} ${s.default}`
          }
        />
      </div>

      <div className={s.wrapperImageTexts}>
        <h2 className={s.actorNameAllMovies}>{data.name}</h2>
        <p className={s.knownForAllMovies}>
          <span className={s.spanText}>Known for: </span>
          {Array.isArray(data.also_known_as)
            ? data.also_known_as.join(', ')
            : 'Unknown'}
        </p>
        <p className={s.actorPopularityAllMovies}>
          <span className={s.spanText}>Place of birth: </span>
          {data.place_of_birth}
        </p>
        <p className={s.actorPopularityAllMovies}>
          <span className={s.spanText}>Birthday : </span>
          {data.birthday}
          <p className={s.actorPopularityAllMovies}>
            <span className={s.spanText}>Deathday: </span>
            {data.deathday || 'Still alive =)'}
          </p>
        </p>

        <p className={s.actorPopularityAllMovies}>
          <span className={s.spanText}>Popularity: </span>

          {typeof data.popularity === 'number'
            ? data.popularity.toFixed(2)
            : 'Unknown'}
        </p>
      </div>
    </div>
  );
};

export default ActorProfile;
