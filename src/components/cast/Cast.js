import { fetchCast } from 'helpers/Fetch';
import { getImage } from 'helpers/GetImage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(res => setCast(res));
  }, [movieId]);
  return (
    <>
      {cast.length === 0 && (
        <div>We don't have information about this film</div>
      )}
      {cast.length > 0 && (
        <ul>
          {cast.map(({ name, id, profile_path, character }) => (
            <li key={id}>
              <img src={getImage(profile_path)} alt={name} width="80px" />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
