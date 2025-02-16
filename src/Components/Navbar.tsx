import { useEffect } from "react";
import { hamburger, logo } from "../assets/icons"
// import useRF from "../hooks/useRF";
import useWriteRF from "../hooks/useWriteRF";
// import { ZeroAddress } from "ethers";
import { useAppKitProvider } from "@reown/appkit/react";


const Navbar = () => {

  // const { getPaused, getIsPayrollContract, getSupportsInterface, getUsdcToken, getImplimentationContract, getHasRole, getTotalEmployees, getRoleAdmin, getEmployerPayrollDetails, getEmployeeDetails, getAllPayrollContractsWithEmployers, getEmployerToPayroll, getAllPayrollContracts } = useRF();

  // useEffect(() => {
  //   console.log(ZeroAddress);
  //   getPaused();
  //   getAllPayrollContracts(0);
  //   getAllPayrollContractsWithEmployers();
  //   getEmployeeDetails(ZeroAddress, ZeroAddress);
  //   getEmployerPayrollDetails(ZeroAddress)
  //   getEmployerToPayroll(0, ZeroAddress) 
  //   getHasRole(ZeroAddress, ZeroAddress);
  //   getIsPayrollContract(ZeroAddress);
  //   getSupportsInterface(ZeroAddress);
  //   getUsdcToken();
  //   getImplimentationContract();
  //   getTotalEmployees(ZeroAddress);
  //   getRoleAdmin(ZeroAddress);
  // }, []);

  const { walletProvider } = useAppKitProvider('eip155');


  const { getAddAiAgent } = useWriteRF();
  useEffect(() => {
    getAddAiAgent('0x379beF16d52ec8B2B033497287Ec911A777A1917');
  }, [walletProvider])

  return (

    <div>
      <nav className="w-full px-[128px] py-[16px] flex flex-row  justify-between items-center  bg-white text-black">
        <div className="flex flex-row space-x-2 justify-center items-center p-2 cursor-pointer">
          <img src={logo} alt="Rikka" />
          <h2 className="font-orbitron"> RIKA </h2>
        </div>

        <div className="flex flex-row space-x-3 p-1 justify-center bg-[#FAFAFA] rounded-[12px]  ">
          <img src={hamburger} alt="Menu" />
          {/* <button className="rounded-lg px-5 py-3 bg-[#2D6BE4]"> <h1>SIgn In</h1> </button> */}
          {/* @ts-expect-error msg */}
          <appkit-button />
        </div>

      </nav>
    </div>
  )
}

export default Navbar;


