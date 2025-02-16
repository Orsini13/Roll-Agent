import { Routes, Route, useLocation } from 'react-router-dom';
import ConnectModal from './Config';
import LandingPage from './Pages/LandingPage';
import { Navbar } from './Components';
import { Home } from './Pages';

function App() {
  const location = useLocation();

  return (
    <ConnectModal>
      <div className=''>
        <Navbar />
        
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/LandingPage' element={<LandingPage />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </div>
    </ConnectModal>
  )
}

export default App;
