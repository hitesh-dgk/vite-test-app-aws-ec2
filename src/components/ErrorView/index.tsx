import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import "./index.scss"

const ErrorView = (props: any) => {
    const [show, setShow] = useState(true);

    return <>
        <Alert className='error-view' variant={"danger"} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <span>{props.error.message}</span>
        </Alert>
    </>

}

export default ErrorView