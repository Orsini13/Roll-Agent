import { caretright,  metamaskFrame, transferlogo, trustwalletframe, walletconnectframe } from "../assets/icons"


const AuthCard = () => {
    return (
        <div className="flex w-[512px] px-[48px] py-[32px] flex-col items-start gap-[32px]">
            <div className="flex flex-col items-center gap-[16px] self-stretch">

                <div className="">
                    <img src={transferlogo} alt="" />

                </div>

                <div className="flex px-[12px] flex-col items-center gap-[8px] self-stretch">

                    <h2 className="text-[24px] font-extrabold leading-[130%] tracking-[-0.06px] text-center text-[#1A1A1A] font-hknova"> Connect with Rika </h2>
                    <h2 className="text-[16px] font-normal leading-[170%] text-center text-[#5C5C5C] font-inter"> Connect your wallet to set up payroll effortlessly.</h2>
                </div>

                {/* wallet */}
                <div className="flex flex-col items-start gap-[8px] self-stretch">
                    {/* //metamask */}
                    <div className="flex px-[16px] pt-[4px] pb-[4px] pl-[4px] items-center gap-[12px] self-stretch rounded-[8px] bg-[#F7F7F7]">
                        <img src={metamaskFrame} alt="" />
                        <h2 className="text-[12px] font-normal leading-[170%] text-[#1A1A1A] font-inter flex-1">
                            MetaMask
                        </h2>
                        <div className="flex p-[4px] rounded-[8px] items-center gap-[32px] justify-center">
                             <img src={caretright} alt="" /></div>
                    </div>
                    {/* //trustwalet */}
                    <div className="flex px-[16px] pt-[4px] pb-[4px] pl-[4px] items-center gap-[12px] self-stretch rounded-[8px] bg-[#F7F7F7]">
                        <img src={trustwalletframe} alt="" />
                        <h2 className="text-[12px] font-normal leading-[170%] text-[#1A1A1A] font-inter flex-1">
                            Trust Wallet
                        </h2>
                        <div className="flex p-[4px] rounded-[8px] items-center gap-[32px] justify-center">
                            <img src={caretright} alt="" /></div>
                    </div>
                    {/* //walletConnect */}
                    <div className="flex px-[16px] pt-[4px] pb-[4px] pl-[4px] items-center gap-[12px] self-stretch rounded-[8px] bg-[#F7F7F7]">
                        <img src={walletconnectframe} alt="" />
                        <h2 className="text-[12px] font-normal leading-[170%] text-[#1A1A1A] font-inter flex-1">
                            WalletConnect
                        </h2>
                        <div className="flex p-[4px] rounded-[8px] items-center gap-[32px] justify-center">
                            <img src={caretright} alt="" /></div>
                    </div>

                </div>

                <h2 className="text-[12px] font-normal leading-[170%] flex-1 text-center text-[#5C5C5C] font-inter">
                    By connecting your wallet, you agree to our Terms of Service and Privacy Policy
                </h2>


            </div>


        </div>
    )
}

export default AuthCard