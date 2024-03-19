import React from 'react'
import ReactDOM from 'react-dom/client'
console.log("second line")
import { Buffer } from 'buffer'
console.log("buffer importted")

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
console.log("tanstack importted")
import '@fontsource/mulish/latin-400.css'; // normal
import '@fontsource/mulish/latin-500.css'; // medium
import '@fontsource/mulish/latin-600.css'; // semibold
import '@fontsource/mulish/latin-700.css'; // bold
import '@fontsource-variable/anybody/wdth.css';
console.log("all the fonts importted")

import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import { WagmiProvider } from 'wagmi'
import { wagmiConfig } from './utils/wagmiConfig.ts';
import { Provider } from 'react-redux';
import { store } from './store';
console.log("upto store importted")



const queryClient = new QueryClient()
// console.log("queryClient: ", queryClient)
globalThis.Buffer = Buffer


console.log("inside app component ")


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <WagmiProvider config={wagmiConfig}>
    {/* <QueryClientProvider client={queryClient}> */}
      <Provider store={store}>
        <BrowserRouter>
          {/* <PrivacyPassLayer> */}
          <App />
          {/* </PrivacyPassLayer> */}
        </BrowserRouter>
      </Provider>
    {/* </QueryClientProvider> */}
  </WagmiProvider>,
  // </React.StrictMode>,
)
