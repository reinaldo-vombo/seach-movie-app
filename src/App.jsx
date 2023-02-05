import { useEffect, useState } from 'react'
import SeachIcon from './search.svg'
import MovieCard from './MovieCard'
import './app.css'

const API_URL = 'http://www.omdbapi.com?apikey=3d1e06a8'

const App = () => {
  const [movies, setMovies] = useState([])
  const [seachTerm, setSeachTerm] = useState('')

  const seachMovies = async title => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }
  useEffect(() => {
    seachMovies('Batman')
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={seachTerm}
          onChange={e => setSeachTerm(e.target.value)}
        />
        <img
          src={SeachIcon}
          alt="search"
          onClick={() => seachMovies(seachTerm)}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie, i) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App
