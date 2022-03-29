import React from 'react';
import { Col, Form, Row, Button, Container, CardGroup, Card } from 'react-bootstrap';
import Packages from '../Packages/Packages';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Packages></Packages>
            <Container>
            <div className="happy-clients">
                <h1>Happy Clients Comments</h1>
                <p>Below you can see some of our clients and there valuable comment about us</p>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/zPYxg0h/photo-1520466809213-7b9a56adcd45.jpg" />
                        <Card.Body>
                        <Card.Title>Anna banna</Card.Title>
                        <Card.Text>
                            I love c++.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 1 day ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/CmjRsvg/clent-2.jpg" />
                        <Card.Body>
                        <Card.Title>Mark york</Card.Title>
                        <Card.Text>
                        I love JS.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 2 hours ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/pnMwFPx/clent-3.jpg" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        I love Python
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 30 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
            <div className="contact">
                <h2 style={{marginBottom:"4rem"}}>Contact with Us</h2>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button className="mt-3 mb-4" variant="primary" type="submit">
                    Submit
                </Button>
                </Form>

            </div>
            </Container>
        </div>
    );
};

export default Home;