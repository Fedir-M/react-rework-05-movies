import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/movies-services';
import ExpandableText from '../ExpandableText/ExpandableText';
import spyPhoto from '../../images/spy_1024x1024.webp';
import s from './Reviews.module.css';

const Reviews = () => {
  const { movie_id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews = await fetchMovieReviews(movie_id);
        setReviews(reviews.results);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError(err.message);
      }
    };

    getReviews();
  }, [movie_id]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className={s.wrapperReviews}>
      <h3 className={s.castListTitle}>REVIEWS</h3>
      <ul className={s.listReviews}>
        {reviews.map(review => (
          <li key={review.id} className={s.itemReviews}>
            <ExpandableText text={review.content} />
            <div className={s.autorDetailsContainer}>
              <img
                className={s.imageReviews}
                src={
                  review.author_details.avatar_path
                    ? `https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`
                    : spyPhoto
                }
                alt={review.username}
              />
              <div className={s.autorDetailsContainerTwo}>
                <p className={s.usernameReviews}>{review.username}</p>
                <p className={s.ratingReviews}>
                  Like:{' '}
                  {review.rating || <span className={s.spanNA}>'N/A'</span>}
                </p>
                <p className={s.dateAtReviews}>
                  Created at:{' '}
                  {new Date(review.created_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
