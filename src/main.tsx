import React from 'react'
import ReactDOM from 'react-dom/client'
import { Buffer } from 'buffer'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@fontsource/mulish/latin-400.css'; // normal
import '@fontsource/mulish/latin-500.css'; // medium
import '@fontsource/mulish/latin-600.css'; // semibold
import '@fontsource/mulish/latin-700.css'; // bold
import '@fontsource-variable/anybody/wdth.css';
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import { WagmiProvider } from 'wagmi'
import { wagmiConfig } from './utils/wagmiConfig.ts';
import { Provider } from 'react-redux';
import { store } from './store';


const queryClient = new QueryClient()
globalThis.Buffer = Buffer



ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <WagmiProvider config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          {/* <PrivacyPassLayer> */}
            <App />
          {/* </PrivacyPassLayer> */}
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </WagmiProvider>,
  // </React.StrictMode>,
)
