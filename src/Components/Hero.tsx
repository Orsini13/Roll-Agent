import { logo } from "../assets/icons";
import { Animation } from "../assets/icons";

const Hero = () => {
    return (
        <div className="m-auto flex flex-row relative ">
            <img src={Animation} alt="" className="" />

            <div className="text-center absolute z-999 items-center flex flex-col space-y-16 ">
                <img src={logo} alt="logo" className="w-[96px]" />
                <h1 className="font-900 text-4xl font-extrabold leading-4">Effortless Payroll. AI-Powered</h1>
                <h2 className="font-400 leading-3">Focus on growing your business while Rika ensures every paycheck is accurate and on time. No delays. No errors. Blockchain secured</h2>
            </div>

            <div></div>

        </div>
    )
}

export default Hero;