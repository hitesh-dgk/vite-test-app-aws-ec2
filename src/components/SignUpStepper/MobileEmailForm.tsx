import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { ArrowUpRight } from 'react-bootstrap-icons';
import { InputText } from '../InputText.tsx';
import { PrimaryButton } from '../Buttons/PrimaryButton.tsx';
import { LoadingSpinner } from '../LoadingSpinner.tsx';
import { useEmailForm } from './useEmailForm.ts';

export function MobileEmailForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    email,
    setEmail,
    emailErrorMessage,
    captchaErrorMessage,
    isTermsAndConditionsChecked,
    setTermsAndConditionsChecked,
    isLoading,
    onCaptchaChange,
    afterSubmitErrorMessage,
    encryptEmail,
    resetErrorMessage,
  } = useEmailForm({
    onSuccess,
  });

  return (
    <form
      noValidate
      className="p-1"
      onSubmit={(event) => {
        event.preventDefault();
        encryptEmail();
      }}
    >
      <InputText
        placeholder="Enter your email"
        className="w-full"
        value={email}
        disabled={isLoading}
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
          resetErrorMessage();
          setEmail(event.target.value);
        }}
      />
      {emailErrorMessage && (
        <div className="absolute ml-4 mt-0.5 text-left text-xs text-red-500">
          {emailErrorMessage}
        </div>
      )}

      <div className="mt-6 px-2 text-left">
        <label>
          <input
            type="checkbox"
            className="accent-primary"
            disabled={isLoading}
            onChange={(event) => {
              setTermsAndConditionsChecked(event.target.checked);
            }}
          />
          <span className="ml-2.5">
            I have read and accepted the FAQ and Disclaimer
          </span>
        </label>
      </div>

      <div className="mt-6">
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
          onChange={onCaptchaChange}
        />
        {captchaErrorMessage && (
          <div className="text-left text-sm text-red-500">
            {captchaErrorMessage}
          </div>
        )}
      </div>

      <div className="mt-6">
        <PrimaryButton
          type="submit"
          disabled={!isTermsAndConditionsChecked || isLoading}
          className="w-full"
        >
          Protect email
          {isLoading ? (
            <LoadingSpinner className="-mr-1 ml-2.5" />
          ) : (
            <ArrowUpRight size="18" className="-mr-1 ml-2" />
          )}
        </PrimaryButton>
      </div>

      {afterSubmitErrorMessage && (
        <div>
          <div className="mt-4 text-red-500">{afterSubmitErrorMessage}</div>
        </div>
      )}
    </form>
  );
}