import { Link } from "react-router-dom";
import { logo, Animation, arrowup } from "../assets/icons";

const HeroComponent = () => {
    return (
        <div className="m-auto items-center bg-red-700 flex flex-row relative ">

            <img src={Animation} alt="" />


            <div className="text-center absolute z-999 items-center flex flex-col space-y-14 p-20 ">
                <img src={logo} alt="logo" className="w-[96px]" />
                <h1 className="font-900 text-4xl font-extrabold leading-4">Effortless Payroll. AI-Powered</h1>
                <h2 className="font-400 leading-3">
                    Focus on growing your business while Rika ensures every paycheck is accurate and on time. No delays. No errors. Blockchain secured</h2>
                <div className="flex flex-row bg-white space-x-1 p-2 border border-solid border-blue-700 rounded-lg">
                    <Link to="/Home">
                        <button className="text-blue-600" >Get Started </button>
                        <img src={arrowup} alt="Get Started" />
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default HeroComponent;