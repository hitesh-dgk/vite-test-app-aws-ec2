import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import {
  cleanDataProtectorSDK,
  initDataProtectorSDK,
} from '../externals/dataProtectorClient.ts';
import { setAddress, setChainId, setConnector, setIsConnected, setIsConnecting, setIsReconnecting, setProtectedData } from '../store/slices/userSlice.ts';
import { useAppDispatch } from '../store/hooks/index.tsx';
import { getExistingProtectedEmails } from '../externals/getExistingProtectedEmails.ts';

export function useWatchWagmiAccount() {
  const { connector, isConnected, address, chain, chainId, isConnecting, isReconnecting, isDisconnected } = useAccount();
  console.log("useWatchWagmiAccount connector, isConnected, address, chain, chainId, isConnecting, isReconnecting, isDisconnected ")
  console.log(connector, isConnected, address, chain, chainId, isConnecting, isReconnecting, isDisconnected )
  const dispatch = useAppDispatch()
  useEffect(() => {
    // Update userStore
    if(!isConnecting &&  !isReconnecting) {
        dispatch(setConnector({connector}));
        dispatch(setIsConnected({isConnected}));
        dispatch(setAddress({address}));
        dispatch(setChainId({chainId}));
        dispatch(setIsConnecting({isConnecting}))
        dispatch(setIsReconnecting({isReconnecting}))
    
    
    
        // Update dataProtector client
        if (connector) {
          initDataProtectorSDK({ connector });

          getExistingProtectedEmails({ userAddress: address, connector })
            .then((protectedEmailAddresses: any) => {
                dispatch(setProtectedData({protectedData: protectedEmailAddresses}))
            })
         
          return;
        } else {
            if(!isConnecting && !isReconnecting) {
                dispatch(setProtectedData({protectedData: []}))
            }

        }
    }
    cleanDataProtectorSDK();
  }, [connector, isConnected, address, chain, isConnecting, isReconnecting, isDisconnected]);
}
