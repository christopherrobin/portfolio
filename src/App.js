import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';
import './App.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';

import ProfilePicture from './profilepic.png';

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Container id="app-container">
      <div className="App">
        {
          isLoading ?
            <div id="pre-loader">
              <Row>
                <Col xs={12}>
                  <Spinner color="info" id="spinner" />
                  <p className="sub-title">Christopher Robin Reynolds</p>
                  <p>.com</p>
                </Col>
              </Row>
            </div>
            :
            <div id="loaded">
              <div id="top-banner">
              <Row>
                <Col xs={2}>
                  <MenuIcon />
                </Col>
                <Col xs={8}>
                  <a
                    alt=""
                    href="http://github.com/christopherrobin"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <GitHubIcon />
                    </a>
                  <a
                    alt=""
                    href="https://www.linkedin.com/in/christopherrr"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: '1em' }}
                  >
                    <LinkedInIcon />
                  </a>
                </Col>
              </Row>
              </div>
              <Row>
                <Col xs={12}>
                  <img id="profilePicture" alt="Profile" src={ProfilePicture} />
                  <h1 className="sub-title">Christopher Robin Reynolds</h1>
                </Col>
              </Row>
            </div>
        }
      </div>
    </Container>
  );
}

export default (App);
