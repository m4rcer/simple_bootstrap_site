import React from 'react';
import { Container, Form, Button } from 'react-bootstrap'

export interface IContactsProps {};

const Contacts: React.FunctionComponent<IContactsProps> = props => {
    return (
        <>
        <br/>
        <br/>
        <br/>
        <Container style={{width: "500px"}}>
            <h1 className="text-center"> Contact us </h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email adress</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Form.Group controlId="formBasicPassword" className="mt-2">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox" className="mt-2">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2">Submit</Button>
            </Form>
        </Container>
        </>
    );
}
export default Contacts;