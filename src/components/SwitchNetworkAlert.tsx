import { ExclamationCircle } from "react-bootstrap-icons";
import { useAccount, useSwitchChain } from "wagmi";
import { PrimaryButton } from "./Buttons/PrimaryButton.tsx";
// import { useUserStore } from '../stores/user.store.ts';

export function SwitchNetworkAlert() {
  const { chains, error, switchChain, status } = useSwitchChain();
  const { connector } = useAccount();

  console.log("chains : ", chains);

  //   const { chainId } = useUserStore();

  return (
    <div className="mx-auto mt-12">
      <p>Oops, you're on the wrong network</p>
      <p>Click on the following button to switch to the right network</p>
      <PrimaryButton
        disabled={status === "pending"}
        key={chains[2]?.id}
        onClick={() =>
          switchChain({
            connector,
            chainId: chains[2]?.id,
          })
        }
        className="mt-4"
      >
        Switch to {chains[2].name}
        {status === "pending" && ' (switching)'}
      </PrimaryButton>
      {error && (
        <div className="ml-1 mt-1.5 flex items-center justify-center text-red-500">
          <ExclamationCircle size="14" />
          <span className="ml-1 text-sm">{error.message}</span>
        </div>
      )}
    </div>
  );
}
