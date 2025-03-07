import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Grow from './Grow'
import Sonic from './Sonic'
import FQA from './FQA'
import ContactSupport from './ContactSupport'
import { Navbar } from '../Components'

const LandingPage = () => {
  return (
      <div className='flex flex-col items-center justify-center '>
        <Navbar />
          <Hero />
          <HowItWorks />
          <Grow />
          <Sonic />
          <FQA />
          <ContactSupport />
      </div>
  )
}

export default LandingPage