import BackLinkBtn from 'components/backLinkBtn/BackLinkBtn';
import { MovieLink } from 'components/trendingMoviesList/TrendingMoviesList.styled';
import { fetchMovieDetails } from 'helpers/Fetch';
import { getImage } from 'helpers/GetImage';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  const getGenres = () => {
    if (genres) return genres.map(el => el.name).join(', ');
  };

  useEffect(() => {
    fetchMovieDetails(movieId).then(response => setMovieDetails(response));
  }, [movieId]);

  const location = useLocation();

  return (
    <>
      <BackLinkBtn state={{ from: location }}></BackLinkBtn>
      <div style={{ display: 'flex', gap: '10px' }}>
        <img src={getImage(poster_path)} alt="poster" width="240px" />

        <div>
          <h1>{title}</h1>
          <p>User score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{getGenres()}</p>
        </div>
      </div>

      <ul>
        <li>
          <MovieLink to={'cast'}>Cast</MovieLink>
        </li>
        <li>
          <MovieLink to={'reviews'}>Reviews</MovieLink>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetailsPage;
