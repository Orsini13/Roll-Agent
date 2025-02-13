import { getReadFactory } from "../Config/contract"

const useRF = () => {

    const getPaused = async () => {
        const contract = await getReadFactory();
        const response = await contract.paused();
        console.log(response);
    }
    return {getPaused}
}

export default useRF