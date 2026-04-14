import axios from "axios";

const API_KEY = "cf721fb39598ff23c1ecb867774e5832";
const BASE_URL = "https://api.themoviedb.org/3";


export const getTrendingTV = async () => {
  const res = await axios.get(`${BASE_URL}/trending/tv/day`, {
    params: {
      api_key: API_KEY,
    },
  });

  return res.data;
};



export const getTrendingMovies = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
  });

  return res.data;
};

export const getPopular = async () => {
  const res = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
    },
  });

  return res.data;
};
export const getUpcoming = async () => {
  const res = await axios.get(`${BASE_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
    },
  });

  return res.data;
};
export const getTrending = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/week`, {
    params: {
      api_key: API_KEY,
    },
  });

  return res.data;
};
