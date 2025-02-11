import { debridge,  dwf, heyAnon } from "../assets/icons"

const Sonic = () => {
  return (
      <div className="flex flex-col justify-center items-center gap-[64px] self-stretch">
        <div>
             <h1 className="text-[32px] font-extrabold leading-[130%] tracking-[-0.08px] text-center text-[#1A1A1A] self-stretch">
              Advancing finance in the Sonic ecosystem
          </h1>
          <h2 className="text-[20px] font-normal leading-[170%] text-center text-[#5C5C5C] font-inter self-stretch">
              Partnering with industry leaders to build the future of scalable financial management.
          </h2>
        </div>

          <div className="flex px-[270px] justify-center items-center content-center gap-[64px] self-stretch">
              {/* <img src={sonic} alt="" /> */}
              {/* <img src={dorahacks} alt="" /> */}
              {/* <img src={zerobro} alt="" /> */}
              {/* <img src={allora} alt="" /> */}
              <img src={heyAnon} alt="" />
              <img src={debridge} alt="" />
              <img src={dwf} alt="" />
          </div>

         


    </div>
  )
}

export default Sonic