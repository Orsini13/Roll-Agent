import { logo, wallett, listframe, bellframe, HandCoins, Users, caretdown, Robot, CaretUpDown } from "../assets/icons"
import { PayCards, PayrollCards, PRInterface, Sidebar } from "../Components"
import QuestionCards from "../Components/UIs/QuestionCards"


const Home = () => {
  return (
    <div className="flex flex-row w-[1366px] h-[768px] p-[16px] items-start bg-[#FAFAFA]">
      <Sidebar />
      <div className="flex pt-[16px] pr-[48px] pb-[0px] pl-[48px] flex-col justify-center items-center gap-[8px] flex-1 self-stretch rounded-[24px] bg-[#FFFFFF]">

        {/* 1st frame */}
        <div className="flex justify-between items-center gap-auto self-stretch bg-[#FFFF]">
          {/* rika and logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <h1 className="text-[20px] my-auto font-bold leading-[170%] tracking-[3.2px] text-center text-[#1A1A1A] font-orbitron">Rika</h1>
          </div>


          <div className="flex py-[4px] pr-[4px] pb-[4px] pl-[2px] justify-end items-center gap-[32px] self-stretch bg-[#FFFFFF]">
            {/* bell frame */}
            <img src={bellframe} alt="" />


            <div className="flex py-[4px] pr-[4px] pb-[4px] pl-[32px] justify-end items-center gap-[32px]">
              <img src={listframe} alt="" />
              <div className="flex h-[48px] py-[16px] px-[28px] justify-center items-center gap-[12px] rounded-[12px] border border-[#E8E8E8] bg-[#FAFAFA]">
                <img src={wallett} alt="" />
                <h1 className="rounded-[12px] border border-[#E8E8E8] bg-[#FAFAFA]">Ox70F1b...c8A8</h1>
              </div>
            </div>

          </div>

        </div>

        {/* 2nd frame */}
        <div className="flex pt-[24px] pr-[24px] pb-[32px] pl-[24px] flex-col items-center gap-[20px] flex-1 self-stretch rounded-[32px] bg-[#FFF]">
          <PayCards />

       {/* PayRollInterface */}
          <PRInterface />
        
        </div>

      </div>

    </div>
  )
}

export default Home