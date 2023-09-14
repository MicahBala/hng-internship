import './footer.css'
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className='footer-social'>
        <a href='https://www.facebook.com' className='fb'>
          <FaFacebookSquare />
        </a>
        <a href='https://www.instagram.com' className='ig'>
          <FaInstagram />
        </a>
        <a href='https://www.twitter.com' className='tw'>
          <FaTwitter />
        </a>
        <a href='https://www.youtube.com' className='yt'>
          <FaYoutube />
        </a>
      </div>
      <div className='footer-text'>
        <span>Conditions of Use</span>
        <span>Privacy &amp; Policy</span>
        <span>Press Room</span>
      </div>
      <div className='footer-copyright'>
        &copy; 2021 MovieBox by Adriana Eka Prayudha
      </div>
    </footer>
  )
}

export default Footer
