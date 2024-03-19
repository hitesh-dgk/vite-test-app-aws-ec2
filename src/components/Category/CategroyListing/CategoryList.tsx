import { useState, useEffect } from "react"
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";


const CategoryList = (props: any) => {

    const [categoryActiveState, setCategoryActiveState] = useState<boolean>(props.category.is_active)
    useEffect(() => {

        setCategoryActiveState(props.category.is_active)

    }, [props.category.is_active])

    const isActveChangeHandler = (e: any) => {
        setCategoryActiveState(!categoryActiveState)
    }

    return <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-center mb-2"
    >
        <div className="me-auto">
            <div className="fw-bold">{props.category.name}</div>
        </div>
        <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label="Is Active"
            disabled
            onChange={isActveChangeHandler}
            checked={categoryActiveState}

        />
        <Button className="ms-3" onClick={() => props.onOpenModal(props.category)}>Edit</Button>
    </ListGroup.Item>

}

export default CategoryList