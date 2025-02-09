import { Navbar } from "../Components";
import { Hero } from "../Components";

const Home = () => {
  return (
      <div className="w-full h-screen flex flex-col bg-white text-black">

        <Navbar />

        <Hero />
        
    </div>
  )
}

export default Home;