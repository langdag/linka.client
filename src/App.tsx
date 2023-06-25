import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';
import { LandingPage } from './Pages/LandingPage';
import { AboutPage } from './Pages/AboutPage';
import { NotFoundPage } from './Pages/NotFoundPage';

function App() {
  return (
   <>
     <Container>
       <Navbar expand="lg" variant="light" bg="light">
         <Container>
           <Link className="nav-link" to="/">Home</Link>
           <Link className="nav-link" to="/about">About Me</Link>
         </Container>
       </Navbar><br />

       <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="*" element={<NotFoundPage />} />
       </Routes>
     </Container>
   </>
  );
}

export default App;
