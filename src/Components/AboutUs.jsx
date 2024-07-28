
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import About1 from "./Images/Cards/Card1.jpg";
import About2 from "./Images/Cards/Card1.jpg";
import { Link } from "react-router-dom";


export function AboutUs() {
    return (
        <Container>
            <Alert variant="primary" style={{ marginTop: '20px', marginBottom: '30px', textAlign: 'center' }}>
                <h2 style={{ fontWeight: 'bold' }}>Company Overview</h2>
                <p>
                    Established in 2017 under the brand name All in One Engineering Solution, we are an ISO 9001:2015 certified supplier and service provider offering a premium range of fire protection systems, detection systems, medical oxygen plants, O2 materials, cubical curtain tracks, and various other accessories. Our products and services conform to Indian standards, NBC, NABH, and other relevant standards.
                </p>
                <p>
                    We have become a trusted and innovative supplier of portable trolley and trailer-mounted fire extinguishers and gas cartridges, as well as fire alarm and hydrant systems, fire detection and suppression systems, medical oxygen plant materials, cubical curtain tracks, technical manpower, and many other similar products and services for hospital, commercial, and industrial applications.
                </p>
                <p>
                    We have earned a reputation for excellence in the fire protection industry and medical oxygen gas systems. Our policy of continual investment in state-of-the-art technology and innovative product development allows us to offer unique brands and high-quality products at great value.
                </p>
                <p>
                    All in One Engineering Solution is managed by a highly qualified management team and boasts excellent engineering skills, a dedicated project team, and quality maintenance supported by well-trained, certified welders and engineers. Our strong reputation is backed by many years of proven performance in serving our esteemed clients. We continue to achieve total quality in fire protection solutions and O2 plant installations, ensuring exceptional value and satisfaction for our customers.
                </p>
            </Alert>
            <Alert variant="primary" style={{ marginTop: '20px', marginBottom: '30px', textAlign: 'center' }}>
                <h2 style={{ fontWeight: 'bold' }}>Mission & Vision</h2>
                <p>
                    Our mission is to deliver unparalleled fire protection and medical gas solutions through innovative technology, exceptional service, and unwavering commitment to quality. We strive to safeguard lives and properties by providing reliable, cutting-edge systems and services tailored to meet the unique needs of our clients across hospital, commercial, and industrial sectors. We are dedicated to continuous improvement, driven by our passion for excellence and our responsibility to ensure safety and peace of mind for all.
                </p>
                <p>
                    Our vision is to be the leading provider of integrated fire protection and medical gas solutions, renowned for our innovation, reliability, and excellence. We aspire to set new industry standards through our commitment to state-of-the-art technology and exceptional customer service. By fostering a culture of innovation and integrity, we aim to build lasting relationships with our clients, contribute to safer environments, and make a significant impact on the communities we serve.
                </p>
            </Alert>
            <Container style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginTop: '20px', marginBottom: '30px' }}>
            <Row className="justify-content-md-center">
            <h2 style={{ fontWeight: 'bold', textAlign: 'center'}}>Team Members</h2>
                <Col lg={3}>
                    <Card style={{ height: '34rem', marginTop: '20px', marginBottom: '30px' }}>
                        <Card.Img variant="top" src={About1} style={{ width: '300px', height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Tejaswini Maskare</Card.Title>
                            <div>Email : tejumaskare2001@gmail.com</div>
                            <Link to="https://www.linkedin.com/in/tejaswinimaskare/">TejaswiniLinkedin</Link>
                            <div>Phone : 9021399249</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ height: '34rem', marginTop: '20px', marginBottom: '30px' }}>
                        <Card.Img variant="top" src={About1} style={{ width: '300px', height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Tejaswini Maskare</Card.Title>
                            <div>Email : tejumaskare2001@gmail.com</div>
                            <Link to="https://www.linkedin.com/in/tejaswinimaskare/">TejaswiniLinkedin</Link>
                            <div>Phone : 9021399249</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ height: '34rem', marginTop: '20px', marginBottom: '30px' }}>
                        <Card.Img variant="top" src={About1} style={{ width: '300px', height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Tejaswini Maskare</Card.Title>
                            <div>Email : tejumaskare2001@gmail.com</div>
                            <Link to="https://www.linkedin.com/in/tejaswinimaskare/">TejaswiniLinkedin</Link>
                            <div>Phone : 9021399249</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ height: '34rem', marginTop: '20px', marginBottom: '30px' }}>
                        <Card.Img variant="top" src={About2} style={{ width: '300px', height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Krishna Kashyap</Card.Title>
                            <div>Email : kashyapanish11@gmail.com</div>
                            <Link to="https://rb.gy/67e4la">KrishnaLinkedin</Link>
                            <div>Phone : 7389304143</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
            <Alert variant="primary" style={{ marginTop: '20px', marginBottom: '30px', textAlign: 'center' }}>
                <h2 style={{ fontWeight: 'bold' }}>Why Choose Us</h2>
                <p>
                    At All in One Engineering Solution, we distinguish ourselves through our comprehensive approach to fire protection and medical gas solutions. Our ISO 9001:2015 certification underscores our commitment to quality and adherence to international standards. We pride ourselves on offering a wide range of state-of-the-art products and services, including advanced fire alarm systems, medical oxygen plants, and specialized accessories, all tailored to meet the unique needs of our clients.
                </p>
                <p>
                    Our continual investment in cutting-edge technology and innovative product development ensures that we deliver superior performance and reliability. Our team of highly qualified engineers, certified welders, and skilled technicians brings a wealth of experience and expertise to every project, guaranteeing precision and excellence.
                </p>
                <p>
                    We offer customized solutions designed to address specific requirements, coupled with exceptional customer service throughout the project lifecycle. Our competitive pricing delivers outstanding value, making advanced safety solutions accessible without compromising on quality. With a proven track record of success and a commitment to building long-term partnerships, we remain dedicated to providing exceptional safety solutions and achieving total customer satisfaction.
                </p>
            </Alert>
        </Container>
    );
}
