import React from 'react';
import { Container, Col, Button, Row, Card, ListGroup } from 'react-bootstrap'

export interface IPostsProps {};

const Posts: React.FunctionComponent<IPostsProps> = props => {
    return (
       <Container className="">
           <Row>
               <Col md={9}>
               <div className="d-flex align-items-center m-5">
                   <div className="flex-shrink-0">
                        <img
                        width={150}
                        height={150}
                        className="mr-3"
                        src="https://edu-code.ru/storage/files/BABGYGcFKNHUx8JsYZaVJ8ennUKQFzcOoukSr9Cu.png"
                        />
                   </div>
                   <div className="flex-grow-1 ms-3">
                       <h5>Blog posts</h5>
                       <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.
                       </p>
                   </div>
                </div>  
                <div className="d-flex align-items-center m-5">
                   <div className="flex-shrink-0">
                        <img
                        width={150}
                        height={150}
                        className="mr-3"
                        src="https://edu-code.ru/storage/files/BABGYGcFKNHUx8JsYZaVJ8ennUKQFzcOoukSr9Cu.png"
                        />
                   </div>
                   <div className="flex-grow-1 ms-3">
                       <h5>Blog posts</h5>
                       <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.
                       </p>
                   </div>
                </div>  
                <div className="d-flex align-items-center m-5">
                   <div className="flex-shrink-0">
                        <img
                        width={150}
                        height={150}
                        className="mr-3"
                        src="https://edu-code.ru/storage/files/BABGYGcFKNHUx8JsYZaVJ8ennUKQFzcOoukSr9Cu.png"
                        />
                   </div>
                   <div className="flex-grow-1 ms-3">
                       <h5>Blog posts</h5>
                       <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.
                       </p>
                   </div>
                </div>  
                <div className="d-flex align-items-center m-5">
                   <div className="flex-shrink-0">
                        <img
                        width={150}
                        height={150}
                        className="mr-3"
                        src="https://edu-code.ru/storage/files/BABGYGcFKNHUx8JsYZaVJ8ennUKQFzcOoukSr9Cu.png"
                        />
                   </div>
                   <div className="flex-grow-1 ms-3">
                       <h5>Blog posts</h5>
                       <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.
                       </p>
                   </div>
                </div>   
               </Col>
               <Col md={3}>
                   <h5 className="text-center mt-5">Categories</h5>
                   <Card>
                       <ListGroup variant="flush">
                            <ListGroup.Item>Html/Css</ListGroup.Item>
                            <ListGroup.Item>Html/Css</ListGroup.Item>
                            <ListGroup.Item>Html/Css</ListGroup.Item>
                            <ListGroup.Item>Html/Css</ListGroup.Item>
                       </ListGroup>
                   </Card>

                   <Card className="mt-3" bg="light">
                       <Card.Body>
                           <Card.Title>Side widget</Card.Title>
                           <Card.Text>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.
                           </Card.Text>
                       </Card.Body>
                   </Card>
               </Col>
           </Row>
       </Container> 
    );
}
export default Posts;