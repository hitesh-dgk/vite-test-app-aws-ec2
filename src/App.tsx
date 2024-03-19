import React, { Suspense }   from "react";
import { useAppSelector } from "./store/hooks";
import { RootState } from "./store";
// import { useWatchWagmiAccount } from "./utils/watchWagmiAccount";

function App() {
  const { isConnected, isConnecting, isReconnecting, fetchingProtectedData, protectedData } = useAppSelector((state: RootState) => state.user);
  console.log("isConnected: ", isConnected)
  console.log("isConnecting: ", isConnecting)
  console.log("isReconnecting: ", isReconnecting)
  console.log("fetchingProtectedData: ", fetchingProtectedData)
  console.log("protectedData: ", protectedData)

  useWatchWagmiAccount();


  return (
    <>
    Main App
    </>
  )
}

export default App
