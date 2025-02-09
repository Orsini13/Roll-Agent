import { guide1, guide2, guide33, guide3 } from "../assets/icons"

const HowItWorks = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-[65px] px-7 ">

                <div className='self-stretch flex flex-col items-center gap-8 m-auto px-11'>
                    <h1 className='text-3xl leading-3.5 font-900 font-bold'>How it works</h1>
                    <h2 className="leading-3 text-md text-[#5C5C5C]">Simple setup, automated payroll, stress-free payouts.</h2>
                </div>

                <div className="flex flex-row space-x-10 p-5 h-[387px] ">

                    <div className="w-[490px] px-5  flex flex-col items-start bg-[#E8E8E8] gap-3 p-1.5 text-left rounded-lg border border-[#E8E8E8]">
                        <img src={guide1} alt="" />
                        
                        <div className="gap-2 p-5">
                            <h1 className="text-xl font-bold">.01</h1>
                            <h2 className="text-xl font-bold ">Setup your business</h2>
                            <h2 className="text-[#5C5C5C]">Enter business details and preferences, just how you like it.</h2>     
                        </div>

                    </div>

                    <div className="flex flex-col bg-[#E8E8E8] justify-start text-left p-4 space-y-2">
                        <img src={guide2} alt="" />
                        <h1>.02</h1>
                        <h2>Add Employees & Set Payroll</h2>
                        <h2>Add employee details and set payroll. Rika takes it from there.</h2>
                    </div>
                    <div className="flex flex-col bg-[#E8E8E8] text-left justify-start p-4 space-y-2">
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