import { AuthCard, AuthSigned, Sidebar } from './Components';
import { Home, HowItWorks,Grow,Sonic,FQA, ConactSupport } from './Pages';
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
      <ConactSupport />
      <AuthCard/>
      <AuthSigned />
      <Sidebar />


    </div>
    </>
  )
}

export default App
