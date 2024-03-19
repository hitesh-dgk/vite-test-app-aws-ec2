import React, { Suspense }   from "react";
import { useAppSelector } from "./store/hooks";
import { RootState } from "./store";
import { useWatchWagmiAccount } from "./utils/watchWagmiAccount";
// import './index.scss'
// import './App.scss'
// import PrivacyPassLayer from "./modules/PrivacyPassLayer"
// import MainApplicationHOC from "./components/MainApplicationHOC";
const PrivacyPassLayer = React.lazy(() => import('./modules/PrivacyPassLayer'));
const MainApplicationHOC = React.lazy(() => import("./components/MainApplicationHOC"));



function App() {
  const { isConnected, isConnecting, isReconnecting, fetchingProtectedData, protectedData } = useAppSelector((state: RootState) => state.user);

  useWatchWagmiAccount();
  return (
    <Suspense fallback={<></>}>
      Test App
      {/* {!isConnecting && !isReconnecting && !fetchingProtectedData && (!isConnected || protectedData.length == 0) && <PrivacyPassLayer/>} */}
      {/* {!isConnecting && !isReconnecting && !fetchingProtectedData &&  (isConnected && protectedData.length > 0) && <MainApplicationHOC/>} */}
      </Suspense>
  )
}

export default App
