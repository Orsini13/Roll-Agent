import {HandCoins, Users } from "../assets/icons"


const PayCards = () => {
  return (
      <div className="flex p-[16px] items-start gap-[16px] self-stretch rounded-[32px] bg-[#F7F7F7]">

          {/* 1st caard */}
          <div className=" flex py-[8px] px-[24px] pb-[12px] flex-col items-start gap-[8px] flex-1 ">
              {/*  */}
              <div className="flex justify-between items-center self-stretch ">
                  <h1 className=" ">Total Active Payrolls</h1> <img src={HandCoins} alt="" className="w-[16px] h-[16px] aspect-[1/1]" />
              </div>

              <div className="flex flex-col items-start gap-[8px] self-stretch">
                  <h1 className="text-[20px] font-extrabold leading-[130%] tracking-[-0.05px] text-[#1A1A1A] font-hknova">
                      3
                  </h1>
                  <div className="flex justify-center items-start gap-[8px] self-stretch">
                      <img src={Users} alt="" />
                      <h2 className="text-[12px] font-normal leading-[170%] text-[#5C5C5C] font-inter flex-1">48 Employees</h2>
                  </div>

              </div>

          </div>

          {/* 2nd caard */}
          <div className=" flex py-[8px] px-[24px] pb-[12px] flex-col items-start gap-[8px] flex-1 ">
              {/*  */}
              <div className="flex justify-between items-center self-stretch ">
                  <h1 className=" ">Total Active Payrolls</h1> <img src={HandCoins} alt="" className="w-[16px] h-[16px] aspect-[1/1]" />
              </div>

              <div className="flex flex-col items-start gap-[8px] self-stretch">
                  <h1 className="text-[20px] font-extrabold leading-[130%] tracking-[-0.05px] text-[#1A1A1A] font-hknova">
                      3
                  </h1>
                  <div className="flex justify-center items-start gap-[8px] self-stretch">
                      <img src={Users} alt="" />
                      <h2 className="text-[12px] font-normal leading-[170%] text-[#5C5C5C] font-inter flex-1">48 Employees</h2>
                  </div>

              </div>

          </div>

          {/* 3rd card */}
          <div className=" flex py-[8px] px-[24px] pb-[12px] flex-col items-start gap-[8px] flex-1 ">
              {/*  */}
              <div className="flex justify-between items-center self-stretch ">
                  <h1 className=" ">Total Active Payrolls</h1> <img src={HandCoins} alt="" className="w-[16px] h-[16px] aspect-[1/1]" />
              </div>

              <div className="flex flex-col items-start gap-[8px] self-stretch">
                  <h1 className="text-[20px] font-extrabold leading-[130%] tracking-[-0.05px] text-[#1A1A1A] font-hknova">
                      3
                  </h1>
                  <div className="flex justify-center items-start gap-[8px] self-stretch">
                      <img src={Users} alt="" />
                      <h2 className="text-[12px] font-normal leading-[170%] text-[#5C5C5C] font-inter flex-1">48 Employees</h2>
                  </div>

              </div>

          </div>


      </div>
  )
}

export default PayCards