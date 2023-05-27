import {React, useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import './Header.css'
import user from '../../images/user.png'

function Header() {
  const [ term,setTerm ] =useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  }
  return (
    <div className='header-section'>
      <h3>Movie App</h3>
      <form onSubmit={handleSubmit}>
        <input className='search' type='text' placeholder='Search' value={term} onChange={(e)=>setTerm(e.target.value)}></input>
      </form>
    </div>
  )
}

export default Header