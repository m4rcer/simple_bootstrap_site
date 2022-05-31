import React from 'react';
import { Container, Card, Button, Row } from 'react-bootstrap'
import teamImg from '../Assets/team.jpg'

export interface ICardsProps {};

const Cards: React.FunctionComponent<ICardsProps> = props => {
    return (
        <Container>
            <h2 className="text-center mb-4">Our team</h2>
            <Row md={3}>
            <Card className="add-spaces" style={{width:"350px"}}>
                <Card.Img 
                variant="top"
                src={teamImg}
                />
                <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>Enim nunc faucibus a pellentesque sit amet porttitor.</Card.Text>
                    <Button variant="primary">About team</Button>
                </Card.Body>
            </Card>
            <Card className="add-spaces" style={{width:"350px"}}>
                <Card.Img 
                variant="top"
                src={teamImg}
                />
                <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>Enim nunc faucibus a pellentesque sit amet porttitor.</Card.Text>
                    <Button variant="primary">About team</Button>
                </Card.Body>
            </Card>
            <Card className="add-spaces" style={{width:"350px"}}> 
                <Card.Img 
                variant="top"
                src={teamImg}
                />
                <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>Enim nunc faucibus a pellentesque sit amet porttitor.</Card.Text>
                    <Button variant="primary">About team</Button>
                </Card.Body>
            </Card>
            </Row>
        </Container>
    );
}
export default Cards;