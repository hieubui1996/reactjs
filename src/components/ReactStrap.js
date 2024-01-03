import React, { useState } from 'react'
import {
    Button,
    Table,
    UncontrolledCarousel,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Container, 
    Row,
    Col,

} from 'reactstrap';

export default function ReactStrap() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <Navbar color="faded" light expand="sm">
                <NavbarBrand href="/" className="me-auto">
                    reactstrap
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <UncontrolledCarousel
                items={[
                    {
                        altText: 'Slide 1',
                        caption: 'Slide 1',
                        key: 1,
                        src: 'https://picsum.photos/id/123/1200/600'
                    },
                    {
                        altText: 'Slide 2',
                        caption: 'Slide 2',
                        key: 2,
                        src: 'https://picsum.photos/id/456/1200/600'
                    },
                    {
                        altText: 'Slide 3',
                        caption: 'Slide 3',
                        key: 3,
                        src: 'https://picsum.photos/id/678/1200/600'
                    }
                ]}
            />
            <Button color="danger" onClick={toggle}>
                Login
            </Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>LOG IN</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup floating>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />
                            <Label for="exampleEmail">
                                Name
                            </Label>
                        </FormGroup>
                        {' '}
                        <FormGroup floating>
                            <Input
                                id="examplePassword"
                                name="phonenumber"
                                placeholder="Password"
                                type="number"
                            />
                            <Label for="examplePassword">
                                Phone Number
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Sign in
                    </Button>{' '}
                    <Button color="danger" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
                <Container>
                    <Row>
                        <Col sm='6' md='3' lg='2'>Col</Col>
                        <Col sm='6' md='3' lg='2'>Col</Col>
                        <Col sm='6' md='3' lg='2'>Col</Col>
                        <Col sm='6' md='3' lg='2'>Col</Col>
                        <Col sm='6' md='3' lg='2'>Col</Col>
                        <Col sm='6' md='3' lg='2'>Col</Col>
                        <Col sm='6' md='3' lg='2'>Col</Col>
                        <Col sm='6' md='3' lg='2'>Col</Col>
                    </Row>
                </Container>
        </div>
    )
}
