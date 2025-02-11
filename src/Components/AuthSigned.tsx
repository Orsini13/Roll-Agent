import { signedinperson, transferlogo, } from "../assets/icons"


const AuthCard = () => {
    return (
        <div className="flex w-[512px] px-[48px] py-[32px] flex-col items-start gap-[32px]">
            <div className="flex flex-col items-center gap-[16px] self-stretch rounded-md">

                <div className="">
                    <img src={transferlogo} alt="" />
                </div>

                
                <div className="flex px-[24px] flex-col items-center gap-[24px] flex-1 self-stretch">
                    <img src={signedinperson} alt="" />
                </div>

                    
        

                <div className="flex h-[40px] px-[12px] justify-center items-start gap-[8px] flex-shrink-0 self-stretch">
                    <div className="font-inter text-[12px] font-normal flex-1 leading-[170%] text-center text-[#5C5C5C]">
                        Redirecting to Dashboard...
                    </div>

                </div>







            </div>


        </div>
    )
}

export default AuthCard