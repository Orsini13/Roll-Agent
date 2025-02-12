import { caretdown, CaretUpDown, PaperPlaneTilt, Robot } from "../assets/icons"
import QuestionCards from "./UIs/QuestionCards"


const PRInterface = () => {
    return (
        <div className="flex flex-col items-start gap-[24px] self-stretch">

            <div className="flex items-start gap-[16px] self-stretch">

                <div className="flex flex-col items-start gap-[8px] flex-1 self-stretch">
                    {/* header */}
                    <div className="flex py-[8px] items-center gap-[8px] self-stretch">
                        <h2 className="text-[20px] font-extrabold leading-[130%] tracking-[-0.05px] text-[#1A1A1A] font-hknova">
                            Payrolls
                        </h2>
                    </div>

                    {/* chat with rikka */}
                    <div className="flex pt-[8px] pr-[16px] pb-[16px] pl-[16px] flex-col items-start gap-[32px] flex-1 self-stretch">
                        <div className="flex justify-between items-center self-stretch">
                            {/* chaat wit rika text */}
                            <div className="flex h-[32px] p-[2px_4px] justify-center items-center gap-[8px]">
                                <h2 className="text-[12px] font-semibold leading-[150%] text-[#858585] font-inter">
                                    Chat with Rika
                                </h2>
                            </div>

                            <div className="flex justify-end items-center gap-[8px]">
                                <div className="flex p-[4px] px-[8px] justify-center items-center gap-[4px] rounded-[8px] border-[1px] border-[#B3C9F2]">
                                    <img src={Robot} alt="" /> <img src={caretdown} alt="" />
                                </div>
                                <div className="flex p-[8px] items-center gap-[8px]">
                                    <img src={CaretUpDown} alt="" />
                                </div>


                            </div>


                        </div>


                    </div>

                    {/* questions and input*/}
                    <div className="flex flex-col justify-end items-start gap-[12px] flex-1 self-stretch">
                        {/* Questions */}
                        <div className="flex items-start content-start gap-[12px] self-stretch flex-wrap">
                            <QuestionCards />
                            <QuestionCards />
                            <QuestionCards />
                            <QuestionCards />
                            <QuestionCards />
                            <QuestionCards />
                        </div>
                        {/* input */}
                        <div className="flex justify-center items-center gap-[4px] self-stretch">
                            <input type="text" placeholder="Ask Rika Anything..." className="flex p-[8px_16px] items-center gap-[8px] flex-1 self-stretch rounded-[8px] border-[1px] border-[#EEE] bg-[#FFF] placeholder:text-[#5C5C5C] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[170%] placeholder:font-inter" />
                            <button className="flex w-[40px] h-[40px] py-[16px] px-[32px] justify-center items-center gap-[12px] rounded-[8px] bg-[#2D6BE4] shadow-[0px_8px_32px_-12px_rgba(45,_107,_228,_0.10)]">
                                <img src={PaperPlaneTilt} alt="submit" className="z-9999" />
                            </button>
                        </div>




                    </div>


                </div>

                {/* payrol card */}
                <div></div>
            </div>



            {/* low footer */}
            <div></div>





        </div>

    )
}

export default PRInterface