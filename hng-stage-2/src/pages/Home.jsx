/* eslint-disable react-hooks/exhaustive-deps */
import logo from '../assets/logo.png'
import { FaSearch } from 'react-icons/fa'
import { HiMenuAlt4 } from 'react-icons/hi'
import { BsPlayCircleFill } from 'react-icons/bs'
import Card from '../component/movieCard/Card'
import Footer from '../component/footer/Footer'
import { useEffect, useRef, useState } from 'react'

function Home() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')

  const ref = useRef(null)

  const setFocus = () => {
    ref.current.focus()
  }

  const searchMovies = (e) => {
    e.preventDefault()
    const searchTerm = query.split(' ').join('%20')
    setIsLoading(true)
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzU5NDJiZDEzNjJkN2M4ZGUwNWJiMDc4MmE2YjcxZSIsInN1YiI6IjYzODFiMWQyZDY1OTBiMDA3ZjgxMzRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HsVx_2LGP_T-1__NQRFt01zxeL-gVg15BbxlrjZCfzU',
      },
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`,
      options,
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results)
        setIsLoading(false)
        ref.current.blur()
        ref.current.value = ''
      })
      .catch((err) => {
        console.error(err)
        setIsLoading(false)
      })
  }

  const fetchMovies = () => {
    setIsLoading(true)
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzU5NDJiZDEzNjJkN2M4ZGUwNWJiMDc4MmE2YjcxZSIsInN1YiI6IjYzODFiMWQyZDY1OTBiMDA3ZjgxMzRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HsVx_2LGP_T-1__NQRFt01zxeL-gVg15BbxlrjZCfzU',
      },
    }

    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      options,
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setIsLoading(false)
      })
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div>
      <div className='hero-section'>
        <div className='container hero-content'>
          <nav>
            <div className='logo-section'>
              <img src={logo} alt='' />
              <h1>MovieBox</h1>
            </div>

            <form onSubmit={searchMovies} className='form'>
              <input
                type='search'
                name='input-query'
                placeholder='What do you want to watch?'
                className='search-input'
                onChange={(e) => handleChange(e)}
                ref={ref}
              />
              <FaSearch className='search-icon' onClick={setFocus} />
            </form>

            <div className='menu-section'>
              <span className='signin'>Sign in</span>
              <span className='menu-icon-container'>
                <HiMenuAlt4 />
              </span>
            </div>
          </nav>
          <div className='hero-text-content'>
            <h1>
              John Wick 3 :
              <br /> Parabellum
            </h1>
            <p className='rating'>
              <span className='badge'>IMOb</span> 86.0/100{' '}
              <span className='percentage'> 97%</span>
            </p>
            <p>
              John Wick is on the run after killing a member of the
              intercontinental assasins guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere
            </p>
            <div className='watch-trailer'>
              <BsPlayCircleFill /> Watch Trailer
            </div>
          </div>
        </div>
      </div>
      <main className='main'>
        <div className='container main-content'>
          <div className='main-content-header'>
            <h1>Featured Movies</h1>
          </div>
          {isLoading ? (
            <h1 className='loading'>Loading</h1>
          ) : (
            <div className='main-content-movies'>
              <Card movies={movies} />
            </div>
          )}
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default Home
