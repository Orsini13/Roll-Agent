import { Navbar, HeroComponent } from "../Components";

const Hero = () => {
  return (
      <div className="w-full h-screen flex flex-col bg-white text-black">

        <Navbar />

        <HeroComponent />
        
    </div>
  )
}

export default Hero;