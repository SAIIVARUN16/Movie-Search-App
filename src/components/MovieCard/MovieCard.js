import React from "react";
import { Link } from "react-router-dom";
import './MovieCard.css'

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div>
      <div className="card-item mt-5 mb-5">
      <Link className='link' to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
    </div>
  );
};

export default MovieCard;