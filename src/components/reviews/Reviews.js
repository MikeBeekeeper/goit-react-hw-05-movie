import { fetchReviews } from 'helpers/Fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(res => {
      if (res.length === 0) setReviews(null);
      if (res.length > 0) setReviews(res);
    });
  }, [movieId]);

  return (
    <>
      {!reviews && <div>We don't have any reviews for this cinema</div>}
      {reviews && (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
