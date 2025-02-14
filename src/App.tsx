
import ConnectModal from './Config';
import LandingPage from './Pages/LandingPage';

function App() {

  return (
    <ConnectModal>
      <div className=''>
        <LandingPage />
        {/* <Routes location={location} key={location.pathname}>
          <Route path='/Home' element={<AuthCard />} />
        </Routes> */}
      </div>

    </ConnectModal>
  )
}

export default App
