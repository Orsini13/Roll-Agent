import {
    grow1,
    grow2,
    grow3,
    grow4,
    RocketLauncher,
    MagicWand,
    Target,
    Trend
} from "../assets/icons";

const Grow = () => {
    return (
        <div className="flex w-[1366px] p-[96px_128px] flex-col justify-center items-center gap-[65px] ">
           <div className="flex flex-col items-center gap-6">
                <h1 className="font-extrabold text-4xl font-900 leading-3 tracking-[-0.08px]">Grow your business. Rika handles payroll</h1>
                <h1 className="font-extrabold text-4xl font-900 leading-3 tracking-[-0.08px] font-orbitron">Grow your business. Rika handles payroll</h1>
            <h2 className="text-[#5C5C5C] text-center font-[Inter] text-[20px] font-medium leading-[170%]">Spend less time on payroll and more on your vision.</h2>
           </div>
          

            <div className="flex flex-col gap-1.5">
                {/* grow 1&2 */}
                <div className="flex flex-row gap-1.5">
                    {/* grow 1 */}
                    <div className="p-2 flex flex-col items-start gap-2 flex-1 rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA]">
                        <div>  <img src={grow1} alt="" /> </div>
                        <div className="flex flex-row gap-0.5">
                            <img src={RocketLauncher} alt="" />
                            <h2>Fastest</h2>
                        </div>
                        <h2>Instant transaction settlement. Every time, no delays.</h2>
                    </div>


                    {/* grow 2*/}
                    <div className="p-2 flex flex-col items-start gap-2 flex-1 rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA]">
                        <div> <img src={grow2} alt="" /> </div>
                        <div className="flex flex-row gap-0.5">
                            <img src={MagicWand} alt="" />
                            <h2>Effortless</h2>
                        </div>
                        <h2>Payroll at your command. Chat, review, done.</h2>
                    </div>

                </div>

                {/* grow 3&4 */}

                <div className="flex flex-row gap-1.5">
                    {/* //   grow 3 */}
                    <div className="p-2 flex flex-col items-start gap-2 flex-1 rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA]">
                        <div> <img src={grow3} alt="" /> </div>
                        <div className="flex flex-row gap-0.5">
                            <img src={Target} alt="" />
                            <h2>Accurate</h2>
                        </div>
                        <h2>AI-powered. Error-free payroll secured by blockchain.</h2>
                    </div>

                    {/* //   grow 4 */}
                    <div className="p-2 flex flex-col items-start gap-2 flex-1 rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA]">
                        <div> <img src={grow4} alt="" /></div>
                        <div className="flex flex-row gap-0.5">
                            <img src={Trend} alt="" />
                            <h2>Scalable</h2>
                        </div>
                        <h2>Effortlessly scales. No payroll challenge is too big.</h2>
                    </div>

</div>

                </div>
            </div>
            )
}

            export default Grow