import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (

        <Navbar className='w-100' expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Container>
        </Navbar>

    );
};

export default NavBar;