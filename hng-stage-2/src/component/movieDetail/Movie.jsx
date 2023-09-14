import { BsPlayCircleFill } from 'react-icons/bs'

function movie({ movie }) {
  return (
    <>
      {!movie ? (
        <h1 className='loading-detail'>Loading...</h1>
      ) : (
        <>
          <div className='detail-img'>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt=''
            />
          </div>
          <div className='movie-detail'>
            <h1 className='title' data-testid='movie-title'>
              {movie.original_title}
            </h1>
            <div className='date-time'>
              <span className='date' data-testid='movie-release-date'>
                Release date: {movie.release_date}
              </span>
              <span className='time' data-testid='movie-runtime'>
                Runtime: {movie.runtime} minutes
              </span>
            </div>
            <p className='overview' data-testid='movie-overview'>
              {movie.overview}
            </p>
          </div>
          <div className='watch-trailer watch-movie'>
            <BsPlayCircleFill /> Watch Movie
          </div>
        </>
      )}
    </>
  )
}

export default movie
