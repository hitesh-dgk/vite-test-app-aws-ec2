import { ArrowUpRight } from 'react-bootstrap-icons';
import { PrimaryButton } from '../Buttons/PrimaryButton.tsx';
import { CircledDigit } from './CircledDigit.tsx';
import { MobileEmailForm } from './MobileEmailForm.tsx';

export function MobileStepper({
  isConnected,
  displayAddress,
  showEmailForm,
  hasProtectedEmail,
  goToSignUpConfirmed,
  showSignUpConfirmed,
  login,
}: {
  isConnected: boolean;
  displayAddress?: string;
  showEmailForm: boolean;
  goToSignUpConfirmed: () => void;
  hasProtectedEmail: boolean;
  showSignUpConfirmed: boolean;
  login: () => void;
}) {
  return (
    <>
      {/* ----- Connect wallet ----- */}

      <div className="mt-10">
        <div className="flex items-center gap-x-2.5">
          <CircledDigit isActive={!isConnected} isDone={isConnected}>
            1
          </CircledDigit>
          <div className="relative text-xl font-semibold text-foreground">
            {!isConnected ? 'Connect wallet' : 'Wallet connected'}
            <div className="absolute text-xs text-grey-500">
              {displayAddress}
            </div>
          </div>
        </div>
      </div>

      {!isConnected && (
        <>
          <div className="mt-6 text-left text-lg">
            Please sign up for this new version to participate in RLC tokens
            reward campaigns.
          </div>
          <div className="mt-6">
            <PrimaryButton
              className="w-full"
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

      {/* ----- Protect email ----- */}

      <div className="relative mt-10">
        <div className="flex items-center gap-x-2.5">
          <CircledDigit isActive={isConnected} isDone={hasProtectedEmail}>
            2
          </CircledDigit>
          <div
            className={`font-semibold text-foreground ${!isConnected ? 'text-grey-600' : 'text-xl'}`}
          >
            {!hasProtectedEmail ? 'Protect email' : 'Email protected'}
          </div>
        </div>
        {isConnected && (
          <div
            className={`absolute -top-8 left-4 z-20 h-[25px] w-px ${isConnected ? 'bg-primary' : 'bg-grey-700'}`}
          ></div>
        )}
      </div>

      <div
        className={`grid transition-opacity ${showEmailForm ? 'opacity-1 mt-6 grid-rows-[1fr]' : 'grid-rows-[0fr] opacity-0'}`}
        style={{ transition: 'grid-template-rows 0.2s ease-in-out' }}
      >
        <div className="overflow-hidden">
          <MobileEmailForm onSuccess={() => goToSignUpConfirmed()} />
        </div>
      </div>

      {/* ----- Sign up confirmed ----- */}

      <div className="relative mt-10">
        <div className="flex items-center gap-x-2.5">
          <CircledDigit
            isActive={isConnected && hasProtectedEmail}
            isDone={showSignUpConfirmed}
          >
            3
          </CircledDigit>
          <div
            className={`relative font-semibold text-foreground ${!hasProtectedEmail ? 'text-grey-600' : 'text-xl'}`}
          >
            Sign up confirmed
          </div>
        </div>
        {(!isConnected || hasProtectedEmail) && (
          <div
            className={`absolute -top-8 left-4 z-20 h-[25px] w-px ${hasProtectedEmail ? 'bg-primary' : 'bg-grey-700'}`}
          ></div>
        )}
      </div>
    </>
  );
}