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


const queryClient = new QueryClient()
globalThis.Buffer = Buffer



ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
        <BrowserRouter>
          {/* <PrivacyPassLayer> */}
            <App />
          {/* </PrivacyPassLayer> */}
        </BrowserRouter>
  // </React.StrictMode>,
)
