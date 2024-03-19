import { useEffect, useState, useRef } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import { useLoginLogout } from '../../hooks/useLoginLogout.ts';
import { useAccount } from "wagmi"
// import { useUserStore } from '../../stores/user.store.ts';
import { getExistingProtectedEmails } from '../../externals/getExistingProtectedEmails.ts';
import { SwitchNetworkAlert } from '../SwitchNetworkAlert.tsx';
import { isElementInViewport } from '../../utils/isElementInViewport.ts';
import { MobileStepper } from './MobileStepper.tsx';
import { DesktopStepper } from './DesktopStepper.tsx';

import { useAppSelector } from "../..//store/hooks";
import { RootState } from "../../store";


const VERTICAL_STEPPER_BREAKPOINT = 640;

export function SignUpStepper(props: any) {
    const { login } = useLoginLogout();
    const { isConnected, chainId, address, connector } = useAppSelector((state: RootState) => state.user);

    const windowSize = useWindowSize();

    const [hasProtectedEmail, setHasProtectedEmail] = useState(false);
    const [showSignUpConfirmed, setShowSignUpConfirmed] = useState(false);
    const [showEmailForm, setShowEmailForm] = useState(false);

    const emailInputRef = useRef<HTMLInputElement>(null);

    const displayAddress =
        address &&
        `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;

    useEffect(() => {
        setHasProtectedEmail(false);
        setShowEmailForm(false);
        setShowSignUpConfirmed(false);

        if (!isConnected || !address || !connector || chainId !== 134) {
            return;
        }

        function getProtectedEmails() {
            return getExistingProtectedEmails({
                userAddress: address!,
                connector
            });
        }
        getProtectedEmails().then((protectedEmailAddresses: any) => {
            if (protectedEmailAddresses.length > 0) {
                goToSignUpConfirmed();
            } else {
                setTimeout(() => {
                    setShowEmailForm(true);
                    if (isElementInViewport(emailInputRef.current)) {
                        setTimeout(() => {
                            emailInputRef.current?.focus();
                        }, 300);
                    }
                }, 100);
            }
        });
    }, [isConnected, address, connector, chainId, emailInputRef]);

    function goToSignUpConfirmed() {
        setShowEmailForm(false);
        setHasProtectedEmail(true);
        setTimeout(() => {
            setShowSignUpConfirmed(true);
            props.onSuccessHandler()
        }, 750);
    }

    return (
        <div className="rounded-3xl px-8 py-20 sm:border sm:border-[#303038]">
            <h2 className="relative z-above-blurry-colours px-2 font-anybody text-xl font-bold sm:text-3xl">
                Sign up for the iExec Privacy Pass Waitlist
            </h2>
            <div className="relative z-above-blurry-colours mt-4 md:mt-6">
                Earn RLC tokens for emails you choose to receive, while keeping your
                address encrypted and private.
            </div>

            {isConnected && chainId !== 134 && <SwitchNetworkAlert />}

            {(!isConnected || chainId === 134) && (
                <>
                    {windowSize.width &&
                        windowSize.width < VERTICAL_STEPPER_BREAKPOINT ? (
                        <MobileStepper
                            isConnected={isConnected}
                            displayAddress={displayAddress}
                            showEmailForm={showEmailForm}
                            hasProtectedEmail={hasProtectedEmail}
                            goToSignUpConfirmed={goToSignUpConfirmed}
                            showSignUpConfirmed={showSignUpConfirmed}
                            login={login}

                        />
                    ) : (
                        <DesktopStepper
                            isConnected={isConnected}
                            displayAddress={displayAddress}
                            showEmailForm={showEmailForm}
                            emailInputRef={emailInputRef}
                            hasProtectedEmail={hasProtectedEmail}
                            goToSignUpConfirmed={goToSignUpConfirmed}
                            showSignUpConfirmed={showSignUpConfirmed}
                            login={login}
                        />
                    )}
                </>
            )}

            <div
                className={`grid transition-opacity ${showSignUpConfirmed ? 'opacity-1 mt-10 grid-rows-[1fr]' : 'grid-rows-[0fr] opacity-0'}`}
                style={{ transition: 'grid-template-rows 0.2s ease-in-out' }}
            >
                <div className="overflow-hidden text-left sm:text-center">
                    <div className="text-lg font-bold sm:text-2xl">
                        You're on the waitlist!
                    </div>
                    <div className="mt-6 text-lg">
                        Once our Dashboard for campaign subscriptions and earnings
                        management launches, you'll need to verify your email address.
                    </div>
                    <div className="text-lg">Thanks for your patience!</div>
                </div>
            </div>
        </div>
    );
}