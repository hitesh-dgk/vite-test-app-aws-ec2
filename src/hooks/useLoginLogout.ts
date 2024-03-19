import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useDisconnect } from 'wagmi';
import { useAppDispatch } from '../store/hooks';
import { userLogoutAction } from '../store/slices/userSlice';

export function useLoginLogout() {
  const { open } = useWeb3Modal();
  const { disconnectAsync } = useDisconnect();
  const dispatch = useAppDispatch()

  const logout = async () => {
    console.log("logout clicked")
    await disconnectAsync();
    dispatch(userLogoutAction)
  };

  const login = () => {
    open();
  };

  return {
    login,
    logout,
  };
}