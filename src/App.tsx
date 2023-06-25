import React from 'react';
import { Routes, Route } from 'react-router-dom'
import {Button, Container, Navbar, Nav} from 'react-bootstrap';
import './App.css';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import { SignUpPage } from './Pages/SignUpPage';
import { NotFoundPage } from './Pages/NotFoundPage';


function App() {
  return (
   <>
     <Container>
       <Navbar>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="justify-content-end navbar-align-items">
             <Nav.Link className="nav-text-color-black" href="/">Home</Nav.Link>
             <Nav.Link className="nav-text-color-black" href="/sign-up">Join now</Nav.Link>
             <Button variant="outline-primary">
               <Nav.Link className="nav-text-color-blue" href="/sign-in">Sign In</Nav.Link>
             </Button>
           </Nav>
         </Navbar.Collapse>
       </Navbar>

       <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/sign-up" element={<SignUpPage />} />
         <Route path="/sign-in" element={<LoginPage />} />
         <Route path="*" element={<NotFoundPage />} />
       </Routes>
     </Container>
   </>
  );
}

export default App;
