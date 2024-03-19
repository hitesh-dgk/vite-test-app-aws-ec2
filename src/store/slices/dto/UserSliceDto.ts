import type { Connector } from 'wagmi';
// Define a type for the slice state
export interface userSliceState {
    connector: Connector | null;
    isConnected: boolean;
    isConnecting: boolean;
    isReconnecting: boolean;
    fetchingProtectedData: boolean;
    address: any;
    chainId: number | undefined;
    protectedData: []
    preferenceCategories: any[];
    fetchingUserPreferenceCategories: string;
    error_msg: string;
}