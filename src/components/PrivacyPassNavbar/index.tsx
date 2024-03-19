import { Link } from 'react-router-dom';
import { ArrowLeft, QuestionCircle, BoxArrowRight } from 'react-bootstrap-icons';
import '@fontsource/space-mono/700.css';
import iExecLogo from '../../assets/iexec-logo.svg';
import { ColorfulDarkButton } from '../Buttons/ColorfulDarkButton';
import { useLoginLogout } from '../../hooks/useLoginLogout.ts';
import { useAccount } from "wagmi"
// import { useUserStore } from '../../stores/user.store.ts';

export function PrivacyPassNavbar() {
    const { isConnected } = useAccount();
    const { logout } = useLoginLogout();

    return (
        <header className="relative z-above-blurry-colours my-6 flex h-[44px] items-center px-5 md:px-20">
            <Link to={'/'} className="-mx-2 flex h-full items-center p-2">
                <img src={iExecLogo} width="25" height="30" alt="iExec logo" />

                <div className="ml-3 hidden font-mono text-base font-bold leading-5 sm:block">
                    Privacy Pass
                </div>
            </Link>

            <div className="flex flex-1 items-center justify-end">
                <div className="mr-6 md:mr-10">
                    <a
                        href="https://iex.ec/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex group -mx-2 inline-flex items-center p-2"
                    >
                        <ArrowLeft
                            size="18"
                            className="opacity-1 mr-1.5 transition-opacity group-hover:opacity-100 md:opacity-0"
                        />
                        <span>
                            <span className="hidden md:inline">Back to the </span>iExec
                            website
                        </span>
                    </a>
                </div>

                <div>
                    <ColorfulDarkButton>
                        <a
                            className='flex'
                            href="https://discord.gg/pbt9m98wnU"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="mr-2 hidden sm:inline">Help</span>
                            <QuestionCircle size="18" />
                        </a>
                    </ColorfulDarkButton>
                </div>

                {isConnected && (
                    <button
                        type="button"
                        className="-mr-1 ml-5 p-1 hover:drop-shadow-link-hover md:ml-9"
                        onClick={() => logout()}
                    >
                        <BoxArrowRight size="25" />
                    </button>
                )}
            </div>
        </header>
    );
}

