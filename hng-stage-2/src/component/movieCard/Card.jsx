/* eslint-disable react/prop-types */
import './card.css'

import { Link } from 'react-router-dom'
function Card({ movies }) {
  return (
    <>
      {movies.length === 0 ? (
        <h1>Oops!!! Movie not found, try another</h1>
      ) : (
        movies.slice(0, 10).map((movie) => {
          const { id, poster_path, original_title, release_date } = movie
          return (
            <Link
              to={`/movies/${id}`}
              className='movie-container'
              data-testid='movie-card'
              key={id}
            >
              <div className='image'>
                {poster_path ? (
                  <img
                    data-testid='movie-poster'
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt='movie poster'
                  />
                ) : (
                  <h1>No Image for this movie</h1>
                )}
              </div>
              <div className='details'>
                <span className='details-header' data-testid='movie-title'>
                  {original_title}
                </span>
                <span
                  className='details-status'
                  data-testid='movie-release-date'
                >
                  Release Date: {new Date(`${release_date}`).toDateString()}
                </span>
              </div>
            </Link>
          )
        })
      )}
    </>
  )
}

export default Card
