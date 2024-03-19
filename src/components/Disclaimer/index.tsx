import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

export function Disclaimer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <>
      <div className="list-block">
        <div
          className="collapse-title"
          onClick={() => {
            setShowDisclaimer((prevState) => !prevState);
          }}
        >
          <h4>Disclaimer</h4>
          {showDisclaimer ? (
            <ChevronUp size="16" className="ml-1" />
          ) : (
            <ChevronDown size="16" className="ml-1" />
          )}
        </div>
        <ul className={`ml-4 mt-4 ${!showDisclaimer && 'hidden'}`}>
          <li>
            <b>What is the Privacy Pass?</b>
            <span>
              Currently in beta, the Privacy Pass is an incentive program that
              enables Web3 users to monetize the act of receiving marketing
              emails.
            </span>
            <span>
              The "Privacy Pass" enhances user privacy by enabling companies to
              send marketing emails to subscribers without storing or knowing
              their email addresses.
            </span>
          </li>
          <li>
            <b>Who can participate?</b>
            <span>
              The incentive program is available to everyone at no cost, but the
              registration period is limited in time. In order to participate
              you need a Metamask wallet, if you don't have one you can{' '}
              <a href="https://metamask.io/download/" target="_black">
                get one here
              </a>
              .
            </span>
          </li>
          <li>
            <b>How do I sign-up?</b>
            <span>
              Connect your wallet, type your email address, and click on Claim
              my pass. You'll receive further instructions by email.
            </span>
          </li>
          <li>
            <b>How do I know my sign-up is confirmed?</b>
            <span>
              Once you have claimed your Privacy Pass, within 7 days you'll
              receive a welcome email. Then you will receive a second email to
              confirm your participation.
            </span>
          </li>
          <li>
            <b>
              How do I continue to be part of the program once my sign-up is
              confirmed?
            </b>
            <span>
              Once your sign-up is confirmed, in order to maintain your
              participation in the program, it is important to ensure that your
              information remains up to date.
            </span>
            <span>
              This program utilizes advanced confidential computing technology
              to safeguard the privacy of your emails. In the event of a
              software update or a potential bug, it may be necessary for you to
              manually reenter your email address(es) and reselect your
              subscriptions. As part of our commitment to safeguarding your
              privacy, we are unable to carry out these actions on your behalf.
              This precautionary measure ensures that your personal information
              remains protected and under your control.
            </span>
            <span>
              Rest assured, in case you need to reenter your email and
              subscriptions your past earnings remain intact. If any action is
              required we will inform you through our social media and a banner
              on this page we will give you all the information you need.
            </span>
            <span>
              If you want to have more information on the technical
              specificities of the technology behind the privacy pass, in this
              article you'll find all the details.
            </span>
          </li>
          <li>
            <b>How do I stop a subscription?</b>
            <span>
              You can revoke your consent for a subscription at any time.
            </span>
          </li>
          <li>
            <b>When do I start receiving earnings?</b>
            <span>
              You will be notified by email when an iExec partner becomes
              available for subscription, along with the subscription
              instructions and reward information.
            </span>
            <span>The rewards are paid in RLC tokens.</span>
            <span>
              You can start and stop a subscription at any time. Please note
              that earnings through Privacy Pass are not guaranteed as they
              depend on the availability of partners, the price set for
              receiving emails, and the subscriptions you have agreed to.
            </span>
          </li>
          <li>
            <b>How is my email private?</b>
            <span>
              Your email is private since the partners you have subscribed to
              will never know your email address. iExec does not know your email
              addresses either. However, at the moment, email addresses are
              known by Mailjet the email sender provider. Future versions will
              provide advanced privacy options for a full privacy mode.
            </span>
          </li>
          <li>
            <b>How do email addresses are protected?</b>
            <span>
              This is possible thanks to a new technology called Confidential
              Computing. At iExec this technology is implemented through Intel
              SGX (Software Guard Extensions). This ensures that sensitive data
              remains encrypted and protected while being processed, preventing
              unauthorized access or exposure. It enables secure computation
              across different environments, safeguarding privacy and
              maintaining data confidentiality.
            </span>
          </li>
          <li>
            <b>The current version of the Privacy Pass</b>
            <span>
              Please note that the Privacy Pass is in beta version and may have
              limited features, potential bugs, and lack stability. You
              acknowledge and accept these disclaimers by using the beta version
              of the Privacy Pass.
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}