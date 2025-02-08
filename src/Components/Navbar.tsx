import { hamburger, logo } from "../assets/icons"

const Navbar = () => {
  return (
    <div>
        <nav className="w-full px-[128px] py-[16px] flex flex-row  justify-between items-center  bg-white text-black">
          <div className="flex flex-row space-x-2 justify-center items-center p-2 cursor-pointer"> 
            <img src={logo} alt="Rikka" />
             <h2 className="font-orbitron">RIKA</h2>
          </div> 

              <div className="flex flex-row space-x-3 p-1 justify-center bg-[#FAFAFA] rounded-[12px]  ">
                <img src={hamburger} alt="Menu"  />
                  <button className="rounded-lg px-5 py-3 bg-[#2D6BE4]"> <h1>SIgn In</h1> </button>
            </div>

        </nav>
    </div>
  )
}

export default Navbar;


