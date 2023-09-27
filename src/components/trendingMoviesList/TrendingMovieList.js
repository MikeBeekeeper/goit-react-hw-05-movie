import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../helpers/Fetch';
import { ListItem, List, MovieLink } from './TrendingMoviesList.styled';
import { useLocation } from 'react-router-dom';

const TrendingMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(response => setMovies(response));
  }, []);

  return (
    <>
      <List>
        {movies.map(({ id, title }) => (
          <ListItem key={id}>
            <MovieLink to={`movies/${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TrendingMoviesList;
