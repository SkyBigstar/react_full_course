import './App.css';
import { useState, useEffect } from 'react';
import searchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=79513750'

const App = () => {
 const [moviecontent, setMoviecontent] = useState([]);
 const [toogleItem, setToogleItem] = useState('');
 const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMoviecontent(data.Search);
 }

  useEffect(() => {
    searchMovies('Spiderman');
  },[]);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='Search for Movies' value={toogleItem} onChange={(e)=> setToogleItem(e.target.value)} />
        <img src={searchIcon} alt="search" onClick={() => searchMovies(toogleItem)}/>
      </div>

      {
        moviecontent?.length > 0
          ? (
            <div className='container'>
              {moviecontent.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
             
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
