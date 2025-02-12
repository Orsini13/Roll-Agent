// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthCard, AuthSigned, Sidebar } from './Components';
import { Home, Hero, HowItWorks,Grow,Sonic,FQA, ConactSupport } from './Pages';
// import { Routes, Route, useLocation } from 'react-router-dom'

function App() {

  return (
    <>
    <div className='flex flex-col items-center justify-center gap-5'>
      <Home />
      <Hero />
      <HowItWorks/>
      <Grow />
      <Sonic />
      <FQA />
      <ConactSupport />
      <AuthCard/>
      <AuthSigned />
      <Sidebar />
{/* 
      <BrowserRouter>
        <Routes location={location} key={location.pathname}>
          <Route path='/Home' element={<Home />} />
        </Routes>
      </BrowserRouter> */}


    </div>
    </>
  )
}

export default App
