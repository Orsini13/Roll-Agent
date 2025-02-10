import { caretdown } from "../assets/icons"


const FQA = () => {
  return (
    <div className="flex w-[1366px] p-[128px] flex-col justify-center items-center gap-[8px]">

      <div className="flex flex-col justify-center items-center gap-[64px] self-stretch">

        <div className="flex px-[182px] flex-col items-start gap-[8px] self-stretch">
          <h1 className="text-[32px] font-extrabold leading-[130%] tracking-[-0.08px] text-center text-[#1A1A1A] font-hknova self-stretch">
            Payroll, simplified. Questions, answered.
          </h1>
          <h2 className="text-[20px] font-normal leading-[170%] text-center text-[#5C5C5C] font-inter self-stretch">
            Clear, concise answers to keep you moving.
          </h2>
        </div>

        <div className="flex px-[182px] flex-col items-center gap-[24px] self-stretch">
          {/* Question1 */}
          <div className="flex p-[24px] items-center gap-[24px] self-stretch rounded-[24px] border border-[#B3C9F2] bg-[#FFF] ">

            <div className="flex items-center gap-[8px] flex-1 ">
              <div className="flex items-center gap-[8px] flex-1">
                <h1 className="text-[20px] font-semibold leading-[130%] tracking-[-0.05px] text-[#1A1A1A] font-hknova">What is Rika, and how does it simplify payroll?</h1>
              </div>
            </div>
            <img src={caretdown} alt="" />

          </div>
          {/* Question2 */}
          <div className="flex p-[24px] items-center gap-[24px] self-stretch rounded-[24px] border border-[#B3C9F2] bg-[#FFF] ">

            <div className="flex items-center gap-[8px] flex-1 ">
              <div className="flex items-center gap-[8px] flex-1">
                <h1 className="text-[20px] font-semibold leading-[130%] tracking-[-0.05px] text-[#1A1A1A] font-hknova">How does Rika ensure payroll security?</h1>
              </div>
            </div>
            <img src={caretdown} alt="" />

          </div>
            {/* Question3 */}
          <div className="flex p-[24px] items-center gap-[24px] self-stretch rounded-[24px] border border-[#B3C9F2] bg-[#FFF] ">

            <div className="flex items-center gap-[8px] flex-1 ">
              <div className="flex items-center gap-[8px] flex-1">
                <h1 className="text-[20px] font-semibold leading-[130%] tracking-[-0.05px] text-[#1A1A1A] font-hknova">Does Rika support different payroll schedules for employees?</h1>
              </div>
            </div>
            <img src={caretdown} alt="" />

          </div>
            {/* Question 4 */}
          <div className="flex p-[24px] items-center gap-[24px] self-stretch rounded-[24px] border border-[#B3C9F2] bg-[#FFF] ">

            <div className="flex items-center gap-[8px] flex-1 ">
              <div className="flex items-center gap-[8px] flex-1">
                <h1 className="text-[20px] font-semibold leading-[130%] tracking-[-0.05px] text-[#1A1A1A] font-hknova">Can I pay employees in fiat currency?</h1>
              </div>
            </div>
            <img src={caretdown} alt="" />

          </div>
          {/* Question 5 */}
          <div className="flex p-[24px] items-center gap-[24px] self-stretch rounded-[24px] border border-[#B3C9F2] bg-[#FFF] ">

            <div className="flex items-center gap-[8px] flex-1 ">
              <div className="flex items-center gap-[8px] flex-1">
                <h1 className="text-[20px] font-semibold leading-[130%] tracking-[-0.05px] text-[#1A1A1A] font-hknova">How do I get started with Rika?</h1>
              </div>
            </div>
            <img src={caretdown} alt="" />

          </div>

        </div>

      </div>

    </div>

  )
}

export default FQA