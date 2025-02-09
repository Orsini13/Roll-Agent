import { Home, HowItWorks,Grow } from './Pages';
// import { AnimatePresence } from 'framer-motion';
// import { Routes, Route, useLocation } from 'react-router-dom'

function App() {

  return (
    <>
    <div className='flex flex-col items-center justify-center gap-5'>

      <Home />
      <HowItWorks/>
      <Grow />


    </div>
    </>
  )
}

export default App
