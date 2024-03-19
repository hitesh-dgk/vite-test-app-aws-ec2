import { createWeb3Modal } from '@web3modal/wagmi/react'
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors'
import { bellecour } from './walletConnection.ts';


// Wagmi Client initialization
if (!import.meta.env.VITE_APP_WALLET_CONNECT_PROJECT_ID) {
    throw new Error(
        'You need to provide VITE_APP_WALLET_CONNECT_PROJECT_ID env variable'
    );
}


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = import.meta.env.VITE_APP_WALLET_CONNECT_PROJECT_ID

// 2. Create wagmiConfig
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}


console.log("inside wagmi config")
export const wagmiConfig = createConfig({
    chains: [mainnet, sepolia, bellecour],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http()
    },
    connectors: [
        walletConnect({ projectId, metadata, showQrModal: false }),
        injected({ shimDisconnect: true }),
        coinbaseWallet({
            appName: metadata.name,
            appLogoUrl: metadata.icons[0]
        })
    ]
})

// 3. Create modal
createWeb3Modal({
    wagmiConfig: wagmiConfig,
    projectId,
    enableAnalytics: true // Optional - defaults to your Cloud configuration
})

declare module 'wagmi' {
    interface Register {
        config: typeof wagmiConfig
    }
}