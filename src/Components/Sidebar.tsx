import { CaretDoubleLeft, HandCoins, house, SidebarSimple, Users } from "../assets/icons"


const Sidebar = () => {
  return (
      <div className="flex w-[280px] pt-[16px] pb-[0px] px-[24px] flex-col items-start gap-[8px] flex-shrink-0 self-stretch">
        
         {/* //menu */}
          <div className="flex h-[56px] py-[12px] justify-between items-center self-stretch ">
              <h1 className="text-[16px] font-semibold leading-[130%] tracking-[-0.04px] text-[#5C5C5C] font-hknova">
                  MENU
              </h1>
              <div className="flex justify-end items-center gap-[8px]">
                <img src={SidebarSimple} alt="" />
                <img src={CaretDoubleLeft} alt="" />
              </div>        
          </div>


          {/* nav */}
          <div className="flex pt-[24px] pr-[24px] pb-[32px] pl-[24px] flex-col items-start gap-[20px] flex-1 self-stretch">
              <div className="flex py-[8px] px-[24px] items-center gap-[12px] self-stretch">
                  <img src={house} alt="" />
                  <h2>Home</h2>
              </div>
              <div className="flex py-[8px] px-[24px] items-center gap-[12px] self-stretch">
                  <img src={HandCoins} alt="" />
                  <h2>Payroll</h2>
              </div>
              <div className="flex py-[8px] px-[24px] items-center gap-[12px] self-stretch">
                  <img src={Users} alt="" />
                  <h2>Employee</h2>
              </div>
              <div className="flex py-[8px] px-[24px] items-center gap-[12px] self-stretch">
                  <img src={house} alt="" />
                  <h2>Help & Docs</h2>
              </div>

              
          </div>

      </div>
  )
}

export default Sidebar