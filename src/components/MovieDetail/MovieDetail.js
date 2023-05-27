import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import './MovieDetail.css'
import 'bootstrap/dist/css/bootstrap.css';


const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return ()=>{
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID]);
  return (
  
    <div className="movie-section row p-3 m-5 mt-3">
      {Object.keys(data).length===0?
      <div>Loading....</div>
        :<>
          <div className="col section-left col-md-8 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column gap-3">
              <div className="movie-title">{data.Title}</div>
              <div className="movie-rating d-flex justify-content-between ">
                <span>
                  IMDB Rating <i className="fa fa-star" ></i> : {data.imdbRating}
                </span>
                <span>
                  IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                  {data.imdbVotes}
                </span>
                <span>
                  Runtime <i className="fa fa-film"></i> : {data.Runtime}
                </span>
                <span>
                  Year <i className="fa fa-calendar"></i> : {data.Year}
                </span>
              </div>
              <div className="movie-plot">{data.Plot}</div>
              <div className="movie-info d-flex flex-column gap-2">
                <div className="d-flex justify-content-between">
                  <span>Director</span>
                  <span className="blue">{data.Director}</span>
                </div>
                <div  className="d-flex justify-content-between">
                  <span>Stars</span>
                  <span className="blue">{data.Actors}</span>
                </div>
                <div  className="d-flex justify-content-between">
                  <span>Generes</span>
                  <span className="blue">{data.Genre}</span>
                </div>
                <div  className="d-flex justify-content-between">
                  <span>Languages</span>
                  <span className="blue">{data.Language}</span>
                </div>
                <div  className="d-flex justify-content-between">
                  <span>Awards</span>
                  <span className="blue">{data.Awards}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col section-right col-md-4 d-flex justify-content-end">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      }
      
    </div>
  );
};

export default MovieDetail;
