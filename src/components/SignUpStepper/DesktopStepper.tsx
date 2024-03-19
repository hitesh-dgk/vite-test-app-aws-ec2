import React, { useEffect } from 'react';
import { ArrowUpRight } from 'react-bootstrap-icons';
import { PrimaryButton } from '../Buttons/PrimaryButton.tsx';
import { CircledDigit } from './CircledDigit.tsx';
import { DesktopEmailForm } from './DesktopEmailForm.tsx';
import { useAccount } from "wagmi"
import { useAppSelector } from "../..//store/hooks";
import { RootState } from "../../store";

export function DesktopStepper({
  isConnected,
  displayAddress,
  showEmailForm,
  emailInputRef,
  hasProtectedEmail,
  goToSignUpConfirmed,
  showSignUpConfirmed,
  login,
}: {
  isConnected: boolean;
  displayAddress?: string;
  showEmailForm: boolean;
  emailInputRef: React.RefObject<HTMLInputElement>;
  hasProtectedEmail: boolean;
  goToSignUpConfirmed: () => void;
  showSignUpConfirmed: boolean;
  login: () => void;
}) {
    const { connector } = useAppSelector((state: RootState) => state.user);

  return (
    <>
      <div className="relative -mx-4 mt-16 grid grid-cols-3 place-content-around gap-2 xs:mx-auto xs:max-w-4xl sm:gap-x-4 md:gap-y-4">
        <div
          className={`absolute top-4 z-20 mx-[16%] h-px w-[34%] ${isConnected ? 'bg-primary' : 'bg-grey-700'}`}
        ></div>
        <div
          className={`absolute top-4 z-10 mx-[16%] h-px w-[68%] ${showSignUpConfirmed ? 'bg-primary' : 'bg-grey-700'}`}
        ></div>
        <div className="flex justify-center">
          <div className="z-20 flex w-16 justify-center bg-background">
            <CircledDigit isActive={!isConnected} isDone={isConnected}>
              1
            </CircledDigit>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="z-20 flex w-16 justify-center bg-background">
            <CircledDigit isActive={isConnected} isDone={hasProtectedEmail}>
              2
            </CircledDigit>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="z-20 flex w-16 justify-center bg-background">
            <CircledDigit
              isActive={isConnected && hasProtectedEmail}
              isDone={showSignUpConfirmed}
            >
              3
            </CircledDigit>
          </div>
        </div>
        <div className="relative font-semibold text-foreground sm:text-lg">
          {!isConnected ? 'Connect wallet' : 'Wallet connected'}
          <div className="absolute left-1/2 -translate-x-1/2 text-xs text-grey-500">
            {displayAddress}
          </div>
        </div>
        <div
          className={`font-semibold transition-colors sm:text-lg ${isConnected ? 'text-foreground' : 'text-grey-600'}`}
        >
          {!hasProtectedEmail ? 'Protect email' : 'Email protected'}
        </div>
        <div
          className={`font-semibold transition-colors sm:text-lg ${showSignUpConfirmed ? 'text-foreground' : 'text-grey-600'}`}
        >
          Waitlist confirmed
        </div>
      </div>

      {!isConnected && (
        <>
          <div className="mt-10 text-center text-lg">
            Please sign up for this new version to participate in RLC tokens
            reward campaigns.
          </div>
          <div className="mt-10">
            <PrimaryButton
              className="w-full xs:w-auto"
              onClick={() => {
                login();
              }}
            >
              Connect wallet
              <ArrowUpRight size="18" className="ml-2" />
            </PrimaryButton>
          </div>
        </>
      )}

      <div
        className={`grid transition-opacity ${showEmailForm ? 'opacity-1 mt-10 grid-rows-[1fr]' : 'grid-rows-[0fr] opacity-0'}`}
        style={{ transition: 'grid-template-rows 0.2s ease-in-out' }}
      >
        <div className="overflow-hidden">
          <DesktopEmailForm
            emailInputRef={emailInputRef}
            onSuccess={() => goToSignUpConfirmed()}
          />
        </div>
      </div>
    </>
  );
}