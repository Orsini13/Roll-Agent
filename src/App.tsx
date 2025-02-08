import { Home } from './Pages'
// import { AnimatePresence } from 'framer-motion';
// import { Routes, Route, useLocation } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      <Home />

      {/* <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </AnimatePresence> */}

    </>
  )
}

export default App
