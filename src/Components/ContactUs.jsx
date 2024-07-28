import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useState } from 'react';
import './Style/ContactUs.css';

export function ContactUs() {
    const [data, setData] = useState({ name: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data.name || !data.email || !data.message) {
            setStatus('Please fill in all required fields.');
            setShowModal(true);
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                setStatus('Email sent successfully');
                setData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus('Error sending email');
                setData({ name: "", email: "", phone: "", message: "" });
            }
        } catch (error) {
            setStatus('Error sending email');
        }
        setShowModal(true);
    }
    const handleCloseModal = () => setShowModal(false);

    return (
        <div>
            <div>
                <Container className="bg-light text-center mt-2 p-2 pb-1 rounded">
                    <h1 className="display-4 mb-1 font-weight-bold custom-heading">
                        ALL IN ONE ENGINEERING SOLUTION
                    </h1>
                    <p className="lead">
                        "At Aioes, we believe that every small step towards innovation and safety makes a giant leap towards a healthier and safer tomorrow for all."
                    </p>
                </Container>
                <br />
                <Row>
                    <h1 className="text-center font-weight-bold mb-4 pagetitle">Contact Us</h1>
                    <Col xs={6} className="querycol">
                        <div class="query">
                            <br />
                            <h6 class="querytitle">ALL GENERAL QUERIES</h6>
                            <p class="querycontent">
                                <i className="fas fa-envelope mr-2"></i>
                                <a href="mailto:allinone.engg2010@gmail.com" style={{ color: "black" }}>{' '}allinone.engg2010@gmail.com</a>
                            </p>
                            <p class="querycontent">
                                <i className="fas fa-phone-alt mr-2"></i>
                                <a href="tel:7389304143" style={{ color: "black" }}>{' '}7389304143</a>
                            </p>

                            <h6 class="querytitle">FOR SERVICE RELATED QUERIES</h6>
                            <p class="querycontent">Rushikesh Patil – 9191455589</p>
                            <p class="querycontent">donation@NGOHubfoundationindia.org</p><br />

                            <h6 class="querytitle">FOR PRODUCT RELATED QUERIES</h6>
                            <p class="querycontent">Akshay Wagh – 9191455478</p>
                            <p class="querycontent">donation@NGOHubfoundationindia.org</p><br />

                            <h6 class="querytitle">FOR PURCHASE RELATED QUERIES</h6>
                            <p class="querycontent">Write to Sandip Chetry at sandip@NGOHubfoundation.email</p><br />
                        </div>
                    </Col>
                    <Col xs={6}>
                        <form method="post" onSubmit={handleSubmit} className='contactform'>
                            <h3 class="formtitle">HELPDESK</h3>
                            <p class="formcontent">For any grievance, suggestions and queries kindly write to us.</p>
                            <label htmlFor="name">Name</label>
                            <input
                                className="forminput"
                                type="text"
                                name="name"
                                id="name"
                                onChange={handleChange}
                                value={data.name}
                                placeholder="Enter Name"
                                required
                            />

                            <label htmlFor="email">Email</label>
                            <input
                                className="forminput"
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                value={data.email}
                                placeholder="example@email.com"
                                required
                            />

                            <label htmlFor="phone">Phone</label>
                            <input
                                className="forminput"
                                type="phone"
                                name="phone"
                                id="phone"
                                onChange={handleChange}
                                value={data.phone}
                                placeholder="+91"
                                required
                            />

                            <label htmlFor="">Message</label>
                            <textarea
                                className="textarea"
                                name="message"
                                id="message"
                                cols="30"
                                rows="8"
                                onChange={handleChange}
                                value={data.message}
                                placeholder="Type here......" />
                            <br />
                            <button type="submit" className='sentbutton'>Send</button>
                        </form>
                    </Col>
                    <Row className="justify-content-center text-center">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1949669990167!2d81.65179997489521!3d21.224115980474583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd87494acc5d%3A0xcd8959e8a50dd6a6!2sAll%20In%20One%20Engineering%20Solution!5e0!3m2!1sen!2sin!4v1722124503772!5m2!1sen!2sin" width="1200" height="500" title="Location" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Row>
                </Row>
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Helpdesk Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>{status}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

