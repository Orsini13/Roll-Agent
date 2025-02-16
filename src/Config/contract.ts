import { Contract } from 'ethers'
import RMABIs from './RMABis.json'
import RFABIs from './RFABIs.json'
import { JsonRpcProvider } from 'ethers'
import { ContractRunner } from 'ethers'

const rpc = new JsonRpcProvider('https://rpc.blaze.soniclabs.com')

const getReadManagement = () => {
  const address = import.meta.env.VITE_APP_RIKA_MANAGEMENT
  const contract = new Contract(address, RMABIs, rpc)
  return contract
}
const getReadFactory = () => {
  const address = import.meta.env.VITE_RIKA_FACTORY
  console.log(address)
  const contract = new Contract(address, RFABIs, rpc)
  return contract
}
const getWriteManagement = (signer: ContractRunner) => {
  const address = import.meta.env.VITE_APP_RIKA_MANAGEMENT
  const contract = new Contract(address, RMABIs, signer)
  return contract
}
const getWriteFactory = (signer: ContractRunner) => {
  const address = import.meta.env.VITE_RIKA_FACTORY
  const contract = new Contract(address, RFABIs, signer)
  return contract
}
export {
  getReadFactory,
  getReadManagement,
  getWriteFactory,
  getWriteManagement,
}