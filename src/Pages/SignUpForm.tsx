import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const handleGoogleAuth = () => {
        // Handle Google OAuth logic here
    };

    return (
        <Row className="justify-content-start">
            <Col xs={12} md={8}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="email" className="mt-3">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)
                        }
                        />
                    </Form.Group>
                    <Form.Group controlId="password" className="mt-3">
                        <Form.Control
                            type="password"
                            placeholder="Password(8+ characters)"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                        }
                        />
                    </Form.Group>
                    <div className="text-center mt-3 d-grid gap-2">
                        <Button variant="primary" size="lg" type="submit">
                            Agree & Join
                        </Button>
                    </div>
                </Form>
                <div className="line-container mt-3">
                  <div className="line"></div>
                </div>
                <div className="text-center mt-3 d-grid gap-2">
                    <Button variant="light"  size="sm" onClick={handleGoogleAuth}>
                        Sign Up with Google
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default SignUpForm;
