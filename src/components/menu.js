import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, ButtonToggle } from "reactstrap";

import './Menu.scss';

const Menu = props => {
    return (
        <Container id="Menu-Component--Container">
            <Row>
                <Col xs={12}>
                    <div id="Menu-Component-SubNav">
                        <NavLink to="/hello" activeClassName="selected-menu-item"><ButtonToggle color="secondary">Home</ButtonToggle></NavLink>
                        <NavLink to="/resume" activeClassName="selected-menu-item"><ButtonToggle color="secondary">Resume</ButtonToggle></NavLink>
                        {/*<NavLink to="/projects" activeClassName="selected-menu-item"><ButtonToggle color="secondary">Projects</ButtonToggle></NavLink> */}
                        <NavLink to="/contact" activeClassName="selected-menu-item"><ButtonToggle color="secondary">Contact</ButtonToggle></NavLink>
                    </div>
                </Col>
            </Row>
        </Container>
	);
};

export default Menu;
