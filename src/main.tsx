import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'
import { Buffer } from 'buffer'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.tsx'
import './index.css'
import { wagmiConfig } from './utils/wagmiConfig.ts'

const queryClient = new QueryClient()
globalThis.Buffer = Buffer

ReactDOM.createRoot(document.getElementById('root')!).render(
  <WagmiProvider config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </WagmiProvider>,
)
