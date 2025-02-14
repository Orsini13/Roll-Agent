import { useEffect } from "react";
import { hamburger, logo } from "../assets/icons"
import useRF from "../hooks/useRF";

const Navbar = () => {
      
const { getPaused } = useRF();
useEffect(() => {
  getPaused();
}, []);
const { getIsPayrollContract } = useRF();
useEffect(() => {
  getIsPayrollContract();
}, []);
// const { getSupportsInterface } = useRF();
// useEffect(() => {
//   getSupportsInterface();
// }, []);
// const { getUsdcToken } = useRF();
// useEffect(() => {
//   getUsdcToken();
// }, []);
// const { getImplimentationContract } = useRF();
// useEffect(() => {
//   getImplimentationContract();
// }, []);
// const { getHasRole } = useRF();
// useEffect(() => {
//   getHasRole();
// }, []);
// const { getTotalEmployees } = useRF();
// useEffect(() => {
//   getTotalEmployees();
// }, []);
//   const { getRoleAdmin } = useRF();
// useEffect(() => {
//   getRoleAdmin();
// }, []);
// const { getEmployerPayrollDetails } = useRF();
// useEffect(() => {
//   getEmployerPayrollDetails();
// }, []);
// const { getEmployeeDetails } = useRF();
// useEffect(() => {
//   getEmployeeDetails();
// }, []);
// const { getAllPayrollContractsWithEmployers } = useRF();
// useEffect(() => {
//   getAllPayrollContractsWithEmployers();
// }, []);
// const { getEmployerToPayroll } = useRF();
// useEffect(() => {
//   getEmployerToPayroll();
// }, []);
//   const { getAllPayrollContracts } = useRF();
// useEffect(() => {
//   getAllPayrollContracts();
// }, []);






return (

  <div>
    <nav className="w-full px-[128px] py-[16px] flex flex-row  justify-between items-center  bg-white text-black">
      <div className="flex flex-row space-x-2 justify-center items-center p-2 cursor-pointer">
        <img src={logo} alt="Rikka" />
        <h2 className="font-orbitron">RIKA</h2>
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


