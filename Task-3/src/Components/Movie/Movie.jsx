import axios from 'axios'
import { useEffect, useState } from 'react'
import '../Movie/Movie.css'

const Movie = () => {
    const [movie, setMovie] = useState(null)
    const [search, setSearch] = useState('')

    const handeMovieSearch = () => {
        axios.get(`http://www.omdbapi.com/?apikey=7c866033&t=${search}`)
            .then((res) => { 
                setMovie(res.data)
            })
            .catch((err) => { console.log(err) })
    }


    return (
        <div>
            <input type="text" id='input' placeholder='Search movies here' onChange={(event) => { setSearch(event.target.value) }} />
            <button id='search' onClick={handeMovieSearch}>Search</button>
            {(movie == null) ? <div></div> : <div className='title'>{movie.Title}</div>}
            <div>
                {(movie == null) ? <div></div> : <div className='poster'><img src={movie.Poster} /></div>}
                
                {(movie == null) ? <div></div> : <div id='info-container'>
                    {(movie == null) ? <div></div> : <div className='year'>Release Year - {movie.Year}</div>}
                    {(movie == null) ? <div></div> : <div className='imdb'>IMDB Rating - {movie.imdbRating}</div>}
                    {(movie == null) ? <div></div> : <div className='actors'>Cast - {movie.Actors}</div>}
                </div>
                }
            </div>
        </div>
    )
}

export default Movie