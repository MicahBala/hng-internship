/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, useParams } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { GoHome } from 'react-icons/go'
import { BiCameraMovie } from 'react-icons/bi'
import { MdAirplay, MdOutlineDateRange } from 'react-icons/md'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { HiMenuAlt4 } from 'react-icons/hi'
import Movie from './Movie'
import './movieDetail.css'
import { useEffect, useState } from 'react'

function MovieDetail() {
  const [movie, setMovie] = useState(null)
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const { id } = useParams()

  const fetchMovieDetail = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzU5NDJiZDEzNjJkN2M4ZGUwNWJiMDc4MmE2YjcxZSIsInN1YiI6IjYzODFiMWQyZDY1OTBiMDA3ZjgxMzRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HsVx_2LGP_T-1__NQRFt01zxeL-gVg15BbxlrjZCfzU',
      },
    }

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchMovieDetail()
  }, [])

  return (
    <div className='detail-page'>
      <span className='icon-container' onClick={toggleMenu}>
        <HiMenuAlt4 />
      </span>
      {!showMenu && (
        <NavLink className='logo-outside' to='#'>
          <img src={logo} alt='logo' /> <span>MovieBox</span>
        </NavLink>
      )}
      <aside className={showMenu ? 'show' : null}>
        <NavLink className='logo-movie-detail' to='#'>
          <img src={logo} alt='logo' /> <span>MovieBox</span>
        </NavLink>
        <NavLink className='menu-link' to='/'>
          <GoHome /> <span>Home</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-link menu-link' : 'menu-link'
          }
          to='/movies'
        >
          <BiCameraMovie /> <span>Movies</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-link menu-link' : 'menu-link'
          }
          to='/series'
        >
          <MdAirplay /> <span>TV Series</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-link menu-link' : 'menu-link'
          }
          to='/upcoming'
        >
          <MdOutlineDateRange /> <span>Upcoming</span>
        </NavLink>
        <NavLink className='menu-link' to='#'>
          <RiLogoutBoxRLine /> <span>Logout</span>
        </NavLink>
      </aside>
      <div className='detail-content'>
        <Movie movie={movie} />
      </div>
    </div>
  )
}

export default MovieDetail
