

const PayrollCards = () => {
  return (
    <div className="flex w-[256px] flex-col items-start gap-[8px]">
      {/* numbering */}
      <div className="flex p-[5px] px-[8px] justify-end items-center gap-[20px] self-stretch border-b-[1px] border-[#F0F0F0]">
        {/* numbbering and create */}
        <div className="flex justify-between items-center flex-1">
          {/* numbering */}
          <div className="fex items-center gap-[8px]">
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
            
          </div>

          
        </div>

      </div>

      <div className="flex p-[8px] items-center self-stretch rounded-[24px] bg-[#FAFAFA]">

      </div>


    </div>

  )
}

export default PayrollCards