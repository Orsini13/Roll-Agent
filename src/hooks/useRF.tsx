import { getReadFactory } from "../Config/contract"

const useRF = () => {

    const getPaused = async () => {
        const contract = await getReadFactory();
        const response = await contract.paused();
        console.log(response);
    }
    const getIsPayrollContract = async () => {
        const contract = await getReadFactory();
        const response = await contract.isPayrollContract();
        console.log(response);
    }
    const getSupportsInterface = async () => {
        const contract = await getReadFactory();
        const response = await contract.supportsInterface();
        console.log(response);
    }
    const getUsdcToken = async () => {
        const contract = await getReadFactory();
        const response = await contract.usdcToken();
        console.log(response);
    }
    const getImplimentationContract = async () => {
        const contract = await getReadFactory();
        const response = await contract.implimentationContract();
        console.log(response);
    }
    const getHasRole = async () => {
        const contract = await getReadFactory();
        const response = await contract.hasRole();
        console.log(response);
    }
    //get ones
    const getTotalEmployees = async () => {
        const contract = await getReadFactory();
        const response = await contract.getTotalEmployees();
        console.log(response);
    }
    const getRoleAdmin = async () => {
        const contract = await getReadFactory();
        const response = await contract.getRoleAdmin();
        console.log(response);
    }
    const getEmployerPayrollDetails = async () => {
        const contract = await getReadFactory();
        const response = await contract.getEmployerPayrollDetails();
        console.log(response);
    }
    const getEmployeeDetails = async () => {
        const contract = await getReadFactory();
        const response = await contract.getEmployeeDetails();
        console.log(response);
    }
    const getAllPayrollContractsWithEmployers = async () => {
        const contract = await getReadFactory();
        const response = await contract.getAllPayrollContractsWithEmployers();
        console.log(response);
    }
    //end of get ones
    const getEmployerToPayroll = async () => {
        const contract = await getReadFactory();
        const response = await contract.employerToPayroll();
        console.log(response);
    }
    const getAllPayrollContracts = async () => {
        const contract = await getReadFactory();
        const response = await contract.allPayrollContracts();
        console.log(response);
    }
    // const getAllPayrollContracts = async () => {
    //     const contract = await getReadFactory();
    //     const response = await contract.allPayrollContracts();
    //     console.log(response);
    // }


    

    return { getPaused, getIsPayrollContract, getSupportsInterface, getUsdcToken, getImplimentationContract, getHasRole, getTotalEmployees, getRoleAdmin, getEmployerPayrollDetails, getEmployeeDetails, getAllPayrollContractsWithEmployers, getEmployerToPayroll, getAllPayrollContracts  }


}

export default useRF
