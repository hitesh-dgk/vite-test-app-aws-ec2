import React from 'react';
import { ArrowUpRight } from 'react-bootstrap-icons';
import ReCAPTCHA from 'react-google-recaptcha';
import { InputText } from '../InputText.tsx';
import { PrimaryButton } from '../Buttons/PrimaryButton.tsx';
import { LoadingSpinner } from '../LoadingSpinner.tsx';
import { useEmailForm } from './useEmailForm.ts';

export function DesktopEmailForm({
  emailInputRef,
  onSuccess,
}: {
  emailInputRef: React.RefObject<HTMLInputElement>;
  onSuccess: () => void;
}) {
  const {
    email,
    setEmail,
    emailErrorMessage,
    captchaErrorMessage,
    isTermsAndConditionsChecked,
    setTermsAndConditionsChecked,
    onCaptchaChange,
    isLoading,
    afterSubmitErrorMessage,
    encryptEmail,
    resetErrorMessage,
  } = useEmailForm({
    onSuccess,
  });

  return (
    <div className="md:mx-10 lg:mx-20">
      <form
        noValidate
        className="flex flex-row items-center justify-center px-1 pt-1"
        onSubmit={(event) => {
          event.preventDefault();
          encryptEmail();
        }}
      >
        <div className="relative w-full text-left">
          <InputText
            ref={emailInputRef}
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
        </div>

        <div className="ml-4">
          <PrimaryButton
            type="submit"
            disabled={!isTermsAndConditionsChecked || isLoading}
            className="protect-email-button whitespace-nowrap"
          >
            Protect email
            {isLoading ? (
              <LoadingSpinner className="-mr-1 ml-2.5" />
            ) : (
              <ArrowUpRight size="18" className="-mr-1 ml-2" />
            )}
          </PrimaryButton>
          {captchaErrorMessage && (
            <div className="absolute ml-4 mt-0.5 text-left text-xs text-red-500">
              {captchaErrorMessage}
            </div>
          )}
        </div>
      </form>

      <div className="mt-6 px-2 text-left">
        <label className="-m-2 flex cursor-pointer items-center p-2">
          <input
            type="checkbox"
            className="size-4 accent-primary"
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
      </div>

      {afterSubmitErrorMessage && (
        <div>
          <div className="mt-6 text-red-500">{afterSubmitErrorMessage}</div>
        </div>
      )}
    </div>
  );
}