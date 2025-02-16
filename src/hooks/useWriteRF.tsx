// import { ZeroAddress } from "ethers";
import { getWriteFactory } from "../Config/contract"
import { useAppKitProvider } from "@reown/appkit/react";
import { BrowserProvider } from "ethers";
import { Eip1193Provider } from "ethers";


const useWriteRF = () => {
    const { walletProvider } = useAppKitProvider('eip155');


    const getAddAiAgent = async (agent: string) => {
        console.log(walletProvider);
        if (walletProvider) {

            const provider = new BrowserProvider(walletProvider as Eip1193Provider)
            const signer = await provider.getSigner()
            const contract = await getWriteFactory(signer);
            const response = await contract.addAiAgent(agent);
            console.log(response);
            return response
        }
    }
    return { getAddAiAgent }
}

export default useWriteRF