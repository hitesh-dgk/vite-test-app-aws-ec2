import { useEffect } from "react"
import { TitleAndMotion } from '../../components/TitleAndMotion';
import { SignUpStepper } from '../../components/SignUpStepper';
import { Faq } from '../../components/Faq';
import { Contact } from '../../components/Contact';
import { Disclaimer } from '../../components/Disclaimer';
import { PrivacyPassNavbar } from "../../components/PrivacyPassNavbar";
import "./index.css"

const PrivacyPassLayer = (props: any) => {

    const userConnectionCompletedHandler = () => {
        console.log("Connection Completed")
    }

    return <>
        {
            <>
                <PrivacyPassNavbar />
                <div className="sm:container">
                    <div className="mt-20">
                        <TitleAndMotion />
                    </div>

                    <div className="mt-10 text-center sm:mt-20">
                        <SignUpStepper onSuccessHandler={userConnectionCompletedHandler} />
                    </div>

                    <div className="mt-20 px-4 sm:mt-40 sm:px-0">
                        <Faq />
                    </div>

                    <div className="mt-28 px-4 text-center sm:px-0 sm:text-left">
                        <Contact />
                    </div>

                    <div className="mt-20 px-4">
                        <Disclaimer />
                    </div>
                </div>
            </>
        }
    </>


}

export default PrivacyPassLayer;