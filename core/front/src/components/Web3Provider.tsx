import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, base, scroll, polygon } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import type { ReactNode } from 'react'
import { getConfig } from '../utils'

// 1. Get projectId from environment
const projectId = getConfig("VITE_WALLET_CONNECT_PROJECT_ID")

// 2. Set up QueryClient
const queryClient = new QueryClient()

// 3. Set up metadata
const metadata = {
    name: 'Keep Up',
    description: 'Keep Up Application',
    url: `https://${getConfig("VITE_APP_DOMAIN")}`,
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// 4. Set up networks
const networks: any = [mainnet, arbitrum, base, scroll, polygon]

// 5. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
    networks,
    projectId,
    ssr: true
})

// 6. Create AppKit
createAppKit({
    adapters: [wagmiAdapter],
    networks,
    projectId,
    metadata,
    themeMode: 'dark',
    features: {
        analytics: true,
        email: false,
        socials: ['x']
    }
})

export function Web3Provider({ children }: { children: ReactNode }) {
    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}
