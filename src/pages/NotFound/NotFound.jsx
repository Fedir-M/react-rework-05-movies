import { Link } from 'react-router-dom';
import NotFoundPicture from '../../images/Klopp_Street_art.webp';

import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={s.wrapperNotFoundPage}>
      <h1 className={s.titleNotFoundPage}>
        Sorry for that, but this page does not exist.
      </h1>
      <img
        src={NotFoundPicture}
        alt="NotFound page"
        className={s.imageNotFoundPage}
      />
      <Link className={s.linkFromNotFoundPage} to={'/'}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
