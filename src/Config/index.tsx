import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { defineChain } from '@reown/appkit/networks';

// 1. Get projectId from env
const projectId = import.meta.env.VITE_APP_PROJECTID;

const sonicBlazeTestnet = defineChain({
  id: 57054,
  caipNetworkId: 'eip155:57054',
  chainNamespace: 'eip155',
  name: 'Sonic Blaze Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Sonic',
    symbol: 'S',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.blaze.soniclabs.com'],
      webSocket: ['wss://sonic-blaze-rpc.publicnode.com'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://testnet.soniclabs.com/' },
  },
  contracts: {
    // Add the contracts here
  }
});
// 2. Set the networks

// 3. Create a metadata object - optional
const metadata = {
  name: 'RIKA',
  description: 'RIKA AI AGENT FOR PAYROLL',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/'],
}
// 4. Create a AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks: [sonicBlazeTestnet],
  metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
})

export default function ConnectModal({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
