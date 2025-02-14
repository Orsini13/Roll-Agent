
import { getReadManagement } from "../Config/contract"

const useRM = () => {

    const getUsdcToken = async () => {
        const contract = await getReadManagement();
        const response = await contract.usdcToken();
        console.log(response);
    }
    const getPaused = async () => {
        const contract = await getReadManagement();
        const response = await contract.paused();
        console.log(response);
    }
    const getSupportsInterface = async () => {
        const contract = await getReadManagement();
        const response = await contract.supportsInterface();
        console.log(response);
    }
    const getHasSufficientBalanceForPayroll = async () => {
        const contract = await getReadManagement();
        const response = await contract.hasSufficientBalanceForPayroll();
        console.log(response);
    }
    const getHasRole = async () => {
        const contract = await getReadManagement();
        const response = await contract.hasRole();
        console.log(response);
    }
    //get ones
    const getTotalEmployees = async () => {
        const contract = await getReadManagement();
        const response = await contract.getTotalEmployees();
        console.log(response);
    }
    const getRoleAdmin = async () => {
        const contract = await getReadManagement();
        const response = await contract.getRoleAdmin();
        console.log(response);
    }
    const getTotalPayrollLiability = async () => {
        const contract = await getReadManagement();
        const response = await contract.getTotalPayrollLiability();
        console.log(response);
    }
    const getNextPayrollDate = async () => {
        const contract = await getReadManagement();
        const response = await contract.getNextPayrollDate();
        console.log(response);
    }
    const getEmployerBalance = async () => {
        const contract = await getReadManagement();
        const response = await contract.getEmployerBalance();
        console.log(response);
    }
    const getEmployer = async () => {
        const contract = await getReadManagement();
        const response = await contract.getEmployer();
        console.log(response);
    }
    const getEmployeeDetailsByNameAndAddress = async () => {
        const contract = await getReadManagement();
        const response = await contract.getEmployeeDetailsByNameAndAddress();
        console.log(response);
    }
    const getEmployeeDetails = async () => {
        const contract = await getReadManagement();
        const response = await contract.getEmployeeDetails();
        console.log(response);
    }
    const getAllEmployeeWithDetails = async () => {
        const contract = await getReadManagement();
        const response = await contract.getAllEmployeeWithDetails();
        console.log(response);
    }
    //end of get ones
    const getEmployerEmployees = async () => {
        const contract = await getReadManagement();
        const response = await contract.employerEmployees();
        console.log(response);
    }
    const getEmployerBalances = async () => {
        const contract = await getReadManagement();
        const response = await contract.employerBalances();
        console.log(response);
    }
    const getEmployeesByEmployers = async () => {
        const contract = await getReadManagement();
        const response = await contract.employeesByEmployers();
        console.log(response);
    }
    const getEmployeeSchedules = async () => {
        const contract = await getReadManagement();
        const response = await contract.employeeSchedules();
        console.log(response);
    }
   


    return { getPaused, getUsdcToken, getSupportsInterface, getHasSufficientBalanceForPayroll, getHasRole, getTotalEmployees, getRoleAdmin, getTotalPayrollLiability, getNextPayrollDate, getEmployerBalance, getEmployer, getEmployeeDetailsByNameAndAddress, getEmployeeDetails, getAllEmployeeWithDetails, getEmployerEmployees, getEmployeesByEmployers, getEmployeeSchedules, getEmployerBalances  }
}

export default useRM