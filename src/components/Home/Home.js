import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import './Home.css'

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies("pirates"));
    dispatch(fetchAsyncShows("stranger"));
  }, [dispatch]);
  return (
    <div className="Movie-container">
      <MovieListing />
    </div>
  );
};

export default Home;
