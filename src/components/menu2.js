import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, ButtonToggle } from "reactstrap";
// import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';

import './menu.scss';
import ".././DarkMode.scss";

const Menu = props => {
  const [isDark, setDark] = useState(false);

  // const toggleDark = () => setDark(!isDark);

  return (
    <Container id="Menu-Component--Container" className={ isDark ? 'dark-mode' : null}>
{/*
        <Row>
            <Col xs={12}>
                <Button
                    variant="contained"
                    color="secondary"
                >
                    <SettingsBrightnessIcon onClick={toggleDark} />
                </Button>
                <small>{isDark ? 'Dark Mode' : 'Light Mode' }</small>
            </Col>
        </Row>
*/}
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
