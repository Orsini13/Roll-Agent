import { guide1, guide2, guide33, guide3 } from "../assets/icons"

const HowItWorks = () => {
    return (
        <>
            <div className="flex w-[1366px] px-[128px] pt-[96px] pb-[56px] flex-col justify-center items-center gap-[64px] ">

                <div className='self-stretch flex flex-col items-center gap-8 m-auto px-11'>
                    <h1 className='text-3xl leading-3.5 font-900 font-bold'>How it works</h1>
                    <h2 className="leading-3 text-md text-[#5C5C5C]">Simple setup, automated payroll, stress-free payouts.</h2>
                </div>

                <div className=" flex flex-row justify-center items-center gap-[64px] self-stretch ">

                    <div className="flex w-[490px] h-[387px] p-[24px] flex-col items-start gap-[48px]  rounded-[36px] border border-solid border-[#E8E8E8] bg-[#FAFAFA]">
                        <img src={guide1} alt="" />
                        
                        <div className="gap-2 p-5">
                            <h1 className="text-xl font-bold">.01</h1>
                            <h2 className="text-xl font-bold ">Setup your business</h2>
                            <h2 className="text-[#5C5C5C]">Enter business details and preferences, just how you like it.</h2>     
                        </div>

                    </div>

                    <div className=" flex p-[24px] flex-col items-start gap-[24px] flex-1 self-stretch rounded-[36px] border border-solid border-[#E8E8E8] bg-[#FAFAFA]">
                        <img src={guide2} alt="" />
                        <h1>.02</h1>
                        <h2>Add Employees & Set Payroll</h2>
                        <h2>Add employee details and set payroll. Rika takes it from there.</h2>
                    </div>

                    <div className="flex p-[24px] flex-col items-start gap-[24px] flex-1 self-stretch rounded-[36px] border border-solid border-[#E8E8E8] bg-[#FAFAFA]">
                        <img src={guide3} alt="" />
                        <img src={guide33} alt="" />
                        <h1>.03</h1>
                        <h2>Automate & Pay</h2>
                        <h2>Never worry about late or missed payments 🤗. Rika ensures everyone gets paid on time with full visibility.</h2>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HowItWorks