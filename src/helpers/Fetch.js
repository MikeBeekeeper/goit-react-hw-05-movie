import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e921f15ae860f6e4269e7dedfe9b8c39';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCast = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data.results;
};
