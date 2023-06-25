import React from 'react';
import '../assets/stylesheets/Landing.css';
import logo from '../assets/images/logo.jpg'
import { Container, Row, Col, Button } from 'react-bootstrap';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-md-start text-center">
                            <h1>Build your professional network</h1>
                            <p>Connect with industry professionals and discover new opportunities.</p>
                            <Button variant="primary">Join Linka</Button>
                        </Col>
                        <Col md={6} className="text-center">
                            {/* Add an image or illustration here */}
                            <img src={logo} width={300} height={300} alt="Linka Logo" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </header>

            <section className="features">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4} className="text-center">
                            <i className="bi bi-people"></i>
                            <h4>Connect</h4>
                            <p>Build your professional network and stay connected with colleagues.</p>
                        </Col>
                        <Col md={4} className="text-center">
                            <i className="bi bi-briefcase"></i>
                            <h4>Discover</h4>
                            <p>Explore job opportunities and discover industry insights.</p>
                        </Col>
                        <Col md={4} className="text-center">
                            <i className="bi bi-chat-dots"></i>
                            <h4>Engage</h4>
                            <p>Join professional groups, share knowledge, and engage in meaningful discussions.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="cta">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6} className="text-center">
                            <h2>Start building your professional network today</h2>
                            <Button variant="primary">Join Linka</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default LandingPage;
