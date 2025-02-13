import { caretdown, CaretUpDown, pharm, plus, Users } from "../assets/icons"


const PayrollCards = () => {
  return (
    <div className="flex w-[256px] flex-col items-start gap-[8px]">
      {/* numbering */}
      <div className="flex p-[5px] px-[8px] justify-end items-center gap-[20px] self-stretch border-b-[1px] border-[#F0F0F0]">
        {/* numbbering and create */}
        <div className="flex justify-between items-center flex-1">
          {/* numbering */}
          <div className="flex items-center gap-[8px]">
            {/* number */}
            <div className="flex p-[2px_8px] flex-col justify-center items-center gap-[8px] rounded-[4px] border-[1px] border-[#2D6BE4] bg-[#FFF]">
              <h3 className="text-[#858585] text-[12px] font-normal leading-[150%] font-inter">1</h3>
            </div>
            <div className="flex p-[2px_8px] flex-col justify-center items-center gap-[8px] rounded-[4px] border-[1px] border-[#2D6BE4] bg-[#FFF]">
              <h3 className="text-[#858585] text-[12px] font-normal leading-[150%] font-inter">1</h3>
            </div>
            <div className="flex p-[2px_8px] flex-col justify-center items-center gap-[8px] rounded-[4px] border-[1px] border-[#2D6BE4] bg-[#FFF]">
              <h3 className="text-[#858585] text-[12px] font-normal leading-[150%] font-inter">1</h3>
            </div>
          </div>
          {/* create */}
          <div className="flex h-[32px] p-[16px_12px] justify-center items-center gap-[4px] rounded-[8px] border-[1px] border-[#2D6BE4] opacity-80">
            <img src={plus} alt="" /> <h1 className="text-[#2D6BE4] text-center text-[12px] font-semibold leading-[150%] font-inter">Create Payroll</h1>
          </div>


        </div>

      </div>


      <div className="flex w-[240px] p-[12px_20px_16px_20px] flex-col items-start gap-[16px]">
        {/* owned box */}
        <div className="flex justify-between items-start self-stretch">
          <div>
            <h2 className="text-[#5C5C5C] text-[12px] font-normal leading-[150%] font-inter">
              Owned By
            </h2>
            <h2 className="text-[#1A1A1A] text-[14px] font-semibold leading-[150%] font-inter">
              Ox70F1b...c8A8
            </h2>
          </div>

          <div className="flex flex-col justify-between items-end self-stretch">
            <img src={caretdown} alt="" />
          </div>
        </div>

      {/* pharm pic */}
        <div>
          <img src={pharm} alt="" />
        </div>

        <div className="flex flex-col items-start gap-[4px] self-stretch">
          <h1 className="self-stretch overflow-hidden text-[#5C5C5C] text-ellipsis text-[16px] font-extrabold leading-[130%] tracking-[-0.04px] font-hkNova">
            My Pharmacist Shop
          </h1>

          <div className="flex items-center justify-center gap-[8px] flex-1 ">
            <img src={Users} alt="" />
            <div className="flex ">
               <h1 className="text-[var(--Color-Text-Secondary,#5C5C5C)] font-[Inter] text-[14px] font-normal font-[400] leading-[170%]">16 employees</h1>
            <img src={CaretUpDown} alt="" />
            </div>
           
          </div>

        </div>


      </div>





    </div>

  )
}

export default PayrollCards