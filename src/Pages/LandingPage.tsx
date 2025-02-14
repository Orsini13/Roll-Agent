import Home from './Home'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Grow from './Grow'
import Sonic from './Sonic'
import FQA from './FQA'
import ContactSupport from './ContactSupport'

const LandingPage = () => {
  return (
      <div className='flex flex-col items-center justify-center gap-2'>
          <Home />
          <Hero />
          <HowItWorks />
          <Grow />
          <Sonic />
          <FQA />
          <ContactSupport />

          {/* <Routes location={location} key={location.pathname}>
            <Route path='/Home' element={<AuthCard />} />
          </Routes> */}

      </div>
  )
}

export default LandingPage