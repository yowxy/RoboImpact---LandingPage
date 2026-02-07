import { useEffect } from 'react'
import Navbar from './components/navbar'
import './index.css'
import LandingPage from './pages/landingPage'
import AOS from 'aos';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      once: false,   // animasi hanya sekali atau berulang
    });
  }, [])

  return (
    <>
        <Navbar />
      <div>
        <LandingPage />
      </div>
    </>
  )
}

export default App
