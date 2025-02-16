import { getReadFactory } from "../Config/contract"

const useRF = () => {

    const getPaused = async () => {
        const contract = await getReadFactory();
        const response = await contract.paused();
        console.log(response);
        return response
    }
    const getIsPayrollContract = async (address: string) => {
        const contract = await getReadFactory();
        const response = await contract.isPayrollContract(address);
        console.log(response);
        return response;
    }
    const getSupportsInterface = async (interfaceId : string) => {
        const contract = await getReadFactory();
        const response = await contract.supportsInterface(interfaceId);
        console.log(response);
    }
    const getUsdcToken = async () => {
        const contract = await getReadFactory();
        const response = await contract.usdcToken();
        console.log(response);
    }
    const getImplimentationContract = async () => {
        const contract = await getReadFactory();
        const response = await contract.implementationContract();
        console.log(response);
        return response;
    }
    const getHasRole = async (role : string, account : string) => {
        const contract = await getReadFactory();
        const response = await contract.hasRole(role, account);
        console.log(response);
        return response;
    }
    //get ones
    const getTotalEmployees = async (employer : string) => {
        const contract = await getReadFactory();
        const response = await contract.getTotalEmployees(employer);
        console.log(response);
    }
    const getRoleAdmin = async (role : string) => {
        const contract = await getReadFactory();
        const response = await contract.getRoleAdmin(role);
        console.log(response);
    }
    const getEmployerPayrollDetails = async (employer : string) => {
        const contract = await getReadFactory();
        const response = await contract.getEmployerPayrollDetails(employer);
        console.log(response);
    }
    const getEmployeeDetails = async (employer: string, employee: string) => {
        const contract = await getReadFactory();
        const response = await contract.getEmployeeDetails(employer, employee);
        console.log(response);
        return response;
    }
    const getAllPayrollContractsWithEmployers = async () => {
        const contract = await getReadFactory();
        const response = await contract.getAllPayrollContractsWithEmployers();
        console.log(response);
    }
    //end of get ones
    const getEmployerToPayroll = async (payroll: number, employer: string) => {
        const contract = await getReadFactory();
        const response = await contract.employerToPayroll(employer, payroll);
        console.log(response);
    }
    const getAllPayrollContracts = async (input: number) => {
        const contract = await getReadFactory();
        const response = await contract.allPayrollContracts(input);
        console.log(response);
        return response;
    }





    return { getPaused, getIsPayrollContract, getSupportsInterface, getUsdcToken, getImplimentationContract, getHasRole, getTotalEmployees, getRoleAdmin, getEmployerPayrollDetails, getEmployeeDetails, getAllPayrollContractsWithEmployers, getEmployerToPayroll, getAllPayrollContracts }


}

export default useRF
