import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./index.scss"
import { Form } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { addNewCategory } from "../../../services/category.service";
import { useAppDispatch } from "../../../store/hooks";
import { addCategoryAsyncThunk } from "../../../store/asyncThunk/CategoryAsyncThunk";

function AddNewCategory(props: any) {

    const [categoryName, setCategoryName] = useState("")
    const [isActive, setIsActive] = useState(true)
    const [submitTriggered, setSubmitTriggered] = useState(false)

    const dispatch = useAppDispatch();

    const handleClose = () => { props.onClose() };

    const categoryNameChanged = (e: any) => {
        setCategoryName(e.target.value)
    }

    const switchChanged = () => {
        setIsActive(!isActive)
    }

    const formSubmitHandler = (e: any) => {
        e.preventDefault();
        setSubmitTriggered(true)
        let data: any = {
            name: categoryName,
            is_active: isActive
        }
        console.log("data: ", data)
        dispatch(addCategoryAsyncThunk(data));
        setCategoryName("")
        setIsActive(true)
        setSubmitTriggered(false)
        props.onClose()
    }


    return (
        <Modal className="new-model" show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formCategoryName">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control type="text" placeholder="Category Name" value={categoryName} onChange={categoryNameChanged} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Is Active"
                            onChange={switchChanged}
                            checked={isActive}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} disabled={submitTriggered}>
                    Close
                </Button>
                <Button variant="primary" onClick={formSubmitHandler} type="submit" className="submit-button" disabled={submitTriggered}>
                    <ProgressBar variant="success" now={60} />
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddNewCategory;