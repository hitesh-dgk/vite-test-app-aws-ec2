import { FaqItem } from './FaqItem.tsx';

export function Faq() {
  return (
    <>
      <h3 className="font-anybody text-xl font-bold sm:text-4xl">
        Frequently Asked Questions
      </h3>
      <div className="mt-4">
        Here's some context on the initial sign-up phase of the Privacy Pass
        incentives program. We will provide further information for the earning
        phase in the future.
      </div>

      <h4 className="mt-10 font-anybody text-lg font-bold sm:mt-20 sm:text-2xl">
        The iExec Privacy Pass
      </h4>
      <FaqItem
        title="What is the Privacy Pass?"
        content={
          <>
            <p>
              The Privacy Pass is an incentive program that allows users to earn
              RLC tokens by receiving marketing emails.
            </p>
            <p className="mt-4">
              The Privacy Pass helps protect the privacy of the email address by
              ensuring that the partners sending these emails do not have access
              to your actual email address.
            </p>
          </>
        }
      />
      <FaqItem
        title="How does it work?"
        content={
          <>
            <p>
              Protecting data in use, in this case, an email address is possible
              thanks to a recent technology called Confidential Computing. At
              iExec this technology is implemented through Intel SGX (Software
              Guard Extensions). This ensures that sensitive data remains
              encrypted and protected while being processed, preventing
              unauthorized access or exposure. It enables secure computation
              across different environments, safeguarding privacy and
              maintaining data confidentiality.
            </p>
            <p className="mt-4">
              The Privacy Pass has been built upon two iExec developer tools
              that integrate this technology, you can find more information
              here.
            </p>
          </>
        }
      />
      <FaqItem
        title="How is my email protected?"
        content={
          <>
            <p>
              The Privacy Pass enables companies to send marketing emails to
              subscribers without storing or knowing the subscriber's email
              addresses. This means that the partners you have subscribed to
              receive emails in exchange for RLC tokens, don’t have access to
              your email address.
            </p>
          </>
        }
      />
      <FaqItem
        title="Who can participate?"
        content={
          <>
            <p>
              Anyone with an Ethereum-compatible wallet and a verifiable email
              address.
            </p>
          </>
        }
      />

      <h4 className="mt-16 font-anybody text-lg font-bold sm:text-2xl">
        The signup process
      </h4>
      <FaqItem
        title="How do I sign up?"
        content={
          <>
            <p>To get on the waitlist, you'll need to follow these steps:</p>
            <ul className="mt-3 list-decimal pl-4">
              <li>
                Connect your wallet using MetaMask or WalletConnect and make
                sure you've switched to the iExec Sidechain (bellecour) when
                prompted
              </li>
              <li className="mt-2">
                Protect your email address, you will be requested to sign and
                confirm multiple transactions in your web3 wallet, here's the
                breakdown of it:
                <ol className="list-disc pl-4">
                  <li className="mt-1">
                    The first signature will be for creating a new ‘protected
                    data' within iExec, with the protected data being your email
                    address
                  </li>
                  <li className="mt-1">
                    Secondly, you'll be asked for another signature to grant
                    access to your protected data, which is permission for your
                    email address to be securely used, but never revealed
                  </li>
                  <li className="mt-1">
                    Finally, you will be asked to sign the final confirmation
                  </li>
                </ol>
              </li>
            </ul>
          </>
        }
      />
      <FaqItem
        title="How do I know my sign-up is confirmed?"
        content={
          <>
            <p>
              You'll be on our waitlist once you’ve completed the steps above.
              Please note that you will not yet receive an email notification
              yet. You will need to verify your email address only after our
              Dashboard for campaign subscriptions and earnings management
              launches.
            </p>
            <p className="mt-4">Thanks for your patience!</p>
          </>
        }
      />

      <h4 className="mt-16 font-anybody text-lg font-bold sm:text-2xl">
        Managing subscriptions
      </h4>
      <FaqItem
        title="When can I start receiving earnings?"
        content={
          <>
            <p>
              This version is for sign-up only, the next version will allow you
              to manage subscriptions and participation in campaigns. Once the
              dashboards are available, we will ask you to verify your email
              before subscribing.
            </p>
            <p className="mt-4">
              When a partner becomes available for subscription it will be
              displayed on the campaigns dashboard, along with the reward
              information. The rewards are paid in RLC tokens.
            </p>
          </>
        }
      />
      <FaqItem
        title="How do I stop a subscription?"
        content={
          <>
            <p>You can revoke your consent for a subscription at any time.</p>
          </>
        }
      />
    </>
  );
}