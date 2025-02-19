
import { emptysFrame } from "../assets/icons";
import PayCards from "./PayCards";
import PRInterface from "./PRInterface";


const HomeDisplay = () => {
    const payroll = false;

    return (
        <>

            {payroll ? (<div className="flex flex-col justify-center items-center gap-[20px] p-[24px_24px_32px_24px] flex-[1_0_0] self-stretch">
                <div className="flex w-[444px] flex-col items-center gap-[40px]">
                    <img src={emptysFrame} alt="" />
                    <h1 className="self-stretch text-center text-secondary font-inter text-md font-normal leading-[170%]">
                        Welcome aboard! Rika’s got your back—set up your first payroll and keep your team paid effortlessly.
                    </h1>
                </div>
            </div>) :
                (
                    <div>
                        <PayCards />
                        <PRInterface />
                    </div>
                )}

                <div>
                    
                </div>


        </>

    )
}

export default HomeDisplay