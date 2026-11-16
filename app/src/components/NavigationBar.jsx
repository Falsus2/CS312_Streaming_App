import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function NavigationBar(props){

    const [searchInput, setSearchInput] = useState("");

    return(
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Flix</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Form className="d-flex" onSubmit={props.searchClick}>
                        {/* <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        // onChange={() =>{
                        //     setSearchInput(value)
                        // }}
                        />
                        {/* <Button variant="outline-success" onClick={() => {
                            props.searchClick("yo");
                        }}> */}
                        <input name="searchInput" type="search"></input>
                        <Button variant="outline-success" type="Submit">
                            Search</Button>
                    </Form>
                    <Button variant="outline-failure" onClick={props.removeSearch}>Remove Search</Button>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;