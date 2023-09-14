import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import MovieDetail from './component/movieDetail/MovieDetail'
import Series from './component/series/Series'
import Upcoming from './component/upcoming/Upcoming'

function App() {
  return (
    <>
      <div className='main-content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/movies/:id' element={<MovieDetail />} />
          <Route path='/series' element={<Series />} />
          <Route path='/upcoming' element={<Upcoming />} />
        </Routes>
      </div>
    </>
  )
}

export default App
