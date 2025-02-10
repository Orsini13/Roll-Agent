import { Home, HowItWorks,Grow,Sonic,FQA } from './Pages';
// import { AnimatePresence } from 'framer-motion';
// import { Routes, Route, useLocation } from 'react-router-dom'

function App() {

  return (
    <>
    <div className='flex flex-col items-center justify-center gap-5'>

      <Home />
      <HowItWorks/>
      <Grow />
      <Sonic />
      <FQA />


    </div>
    </>
  )
}

export default App
