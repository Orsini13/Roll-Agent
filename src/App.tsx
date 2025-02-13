import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthCard, AuthSigned, Sidebar } from './Components';
import ConnectModal from './Config';
import { Home, Hero, HowItWorks, Grow, Sonic, FQA, ConactSupport } from './Pages';
// import { Routes, Route, useLocation } from 'react-router-dom'

function App() {

  return (
    <ConnectModal>

      <div className='flex flex-col items-center justify-center gap-2'>
        <Home />
        <Hero />
        <HowItWorks />
        <Grow />
        <Sonic />
        <FQA />
        <ConactSupport />
        <AuthCard />
        <AuthSigned />
        <Sidebar />
        
      <BrowserRouter>
        <Routes location={location} key={location.pathname}>
        <Route path='/Home' element={<Home />} />
        </Routes>
        </BrowserRouter> 


      </div>
    </ConnectModal>
  )
}

export default App
