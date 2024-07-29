// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import card1 from './Images/Cards/Card1.jpg';
import card2 from './Images/Cards/Card1.jpg';
import card3 from './Images/Cards/Card1.jpg';
import card4 from './Images/Cards/Card1.jpg';


export function MyCards() {
    return (

        <div>
            
            <Container>
                <h4 className="text-center">ESSENTIAL DRIVING TIPS</h4><br />
                
                <Row className="justify-content-md-center mb-4">
                    <Col lg={3}>
                        <Card style={{ width: '18rem', height:'30rem' }}>
                            <Card.Img  src={card1} width="100" height="180"/>
                            <Card.Body>
                                <Card.Title>DON'T SKIP THESE DRIVING TIPS</Card.Title>
                                <Card.Text>
                                    10 Practices that make you a safer Driver
                                </Card.Text>
                                <p>Although the 2020 lockdown resulted in a 49.47% fall in the number of lives lost in road accidents</p>
                                {/* <Button variant="primary">More</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem', height:'30rem' }}>
                            <Card.Img src={card2} width="100" height="180"/>
                            <Card.Body>
                                <Card.Title>IT'S TIME TO ERASE COMMON DRIVING MISTAKES</Card.Title>
                                <Card.Text>
                                    Mistakes that most people make while driving
                                </Card.Text>
                                <p>We must admit that each and every one of us is guilty of making errors while driving.</p>
                                {/* <Button variant="primary">More</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem', height:'30rem' }}>
                        <Card.Img src={card3} width="100" height="180"/>
                            <Card.Body>
                                <Card.Title>LEARN HOW TO HOLD A INTERNATIONAL DRIVING LICENSE</Card.Title>
                                <Card.Text>
                                    International Driving License: Here's What You Need to Know
                                </Card.Text>
                                <p>Whether for travelling and exploring or work purposes, there may be times when you have to get behind the wheel in a foriegn country.</p>
                                {/* <Button variant="primary">More</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem', height:'30rem' }}>
                        <Card.Img src={card4} width="100" height="180"/>
                            <Card.Body>
                                <Card.Title>MOCK LEARNER LICENSE TEST</Card.Title>
                                <Card.Text>
                                    Explore the plethora of Questions in Learner License
                                </Card.Text>
                                <p>To 'Clear' the learners license test you must know the traffic signs and traffic rules  </p>
                                {/* <Button variant="primary">More</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>

    );

}