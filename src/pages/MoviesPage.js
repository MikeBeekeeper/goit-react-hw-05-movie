import { fetchMoviesByQuery } from 'helpers/Fetch';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const location = useLocation();

  const sp = searchParams.get('query');

  const onHandleChange = e => {
    const value = e.target.value.trim();
    setInputValue(value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (inputValue === '') return alert('Please enter request');
    setSearchParams({ query: inputValue });
  };

  useEffect(() => {
    if (sp === '') return;
    setInputValue(sp ?? '');
    const fetchMovies = async sp => {
      const moviesList = await fetchMoviesByQuery(sp);
      setMovies(moviesList);
    };
    fetchMovies(sp);
  }, [sp]);

  return (
    <>
      <div style={{ margin: '10px' }}>
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={onHandleChange}
            style={{ width: '300px' }}
          />
          <button type="submit" style={{ cursor: 'pointer' }}>
            Search
          </button>
        </form>
      </div>

      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
