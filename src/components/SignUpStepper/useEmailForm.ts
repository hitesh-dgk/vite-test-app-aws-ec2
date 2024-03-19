import { useState } from 'react';
import { useAccount } from "wagmi"
import { isEmail } from '../../utils/isEmail.ts';
import { getDataProtectorClient } from '../../externals/dataProtectorClient.ts';
import { protectedDataTargetKey } from '../../constants.ts';
import { useAppDispatch } from '../../store/hooks/index.tsx';
import { setProtectedData } from '../../store/slices/userSlice.ts';

export function useEmailForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [captchaErrorMessage, setCaptchaErrorMessage] = useState('');
  const [afterSubmitErrorMessage, setAfterSubmitErrorMessage] = useState('');
  const [isTermsAndConditionsChecked, setTermsAndConditionsChecked] =
    useState(false);
  const [captchaToken, setCaptchaToken] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { connector } = useAccount()

  const dispatch = useAppDispatch()

  function onCaptchaChange(token: string) {
    setCaptchaErrorMessage('');
    setCaptchaToken(token);
  }

  async function encryptEmail() {
    resetErrorMessage();

    if (!email.trim()) {
      setEmailErrorMessage('Please enter your email');
      return;
    }

    if (!isEmail(email)) {
      setEmailErrorMessage('Please enter a valid email');
      return;
    }

    if (!captchaToken) {
      setCaptchaErrorMessage('Missing captcha');
      return;
    }

    setLoading(true);

    try {
      const dataProtector = await getDataProtectorClient(connector);

      const protectedData = await dataProtector.protectData({
        data: {
          email: email,
          [protectedDataTargetKey]: true,
        },
      });


      console.log('Data protected:', protectedData.address);

      const grantedAccessResult: any = await dataProtector.grantAccess({
        protectedData: protectedData.address,
        authorizedApp: import.meta.env.VITE_APP_AUTHORIZED_APP,
        authorizedUser: import.meta.env.VITE_APP_IEXEC_WALLET,
      });
      console.log('Access granted to iExec');
      console.log("grantedAccessResult: ", grantedAccessResult)

      dispatch(setProtectedData({protectedData: [protectedData]}))

      setLoading(false);
      onSuccess();
    } catch (err) {
      console.error('! err', err);
      setLoading(false);
      setAfterSubmitErrorMessage(err?.message || 'Oops, something went wrong.');
    }
  }

  function resetErrorMessage() {
    setEmailErrorMessage('');
    setCaptchaErrorMessage('');
    setAfterSubmitErrorMessage('');
  }

  return {
    email,
    setEmail,
    emailErrorMessage,
    captchaErrorMessage,
    isTermsAndConditionsChecked,
    setTermsAndConditionsChecked,
    onCaptchaChange,
    isLoading,
    setLoading,
    afterSubmitErrorMessage,
    encryptEmail,
    resetErrorMessage,
  };
}