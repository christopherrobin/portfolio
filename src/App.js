import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import Menu from "./components/menu2";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DescriptionIcon from "@material-ui/icons/Description";

// "Pages"
import BusinessCard from "./components/BusinessCard";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

import Fade from "./components/Fade";
import "./App.scss";

import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "./components/Fade.scss";

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  // console.log(isLoading);

  return (
    <Container id="app-container">
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/hello" />
            </Route>

            <Route path="/hello">
              <Menu />
              <Container>
                <Row>
                  <Col xs={12} md={6}>
                    <Fade
                      childComponent={
                        <div>
                          <h1>Hello! &#128075;</h1>
                          <p>
                            My name is Christopher, I'm a Software Engineer
                            living in Indianapolis. I wrote my first line of
                            code when I was 12 years old.{" "}
                          </p>
                          <p>
                            I love creating technology that scales to millions
                            of people while providing a powerful experience for
                            both users and developers.
                          </p>
                          <p>
                            I'm obsessed with JavaScript, functional
                            programming, blockchain technology, strategy games,
                            and music.
                          </p>

                          <div id="external-links-wrapper">
                            <Row>
                              <Col xs={12} lg={4}>
                                <Button
                                  target="_blank"
                                  href="https://github.com/christopherrobin/"
                                  variant="contained"
                                  size="medium"
                                  color="primary"
                                  startIcon={<GitHubIcon />}
                                  className="external-links-button"
                                  fullWidth
                                >
                                  GitHub
                                </Button>
                              </Col>

                              <Col xs={12} lg={4}>
                                <Button
                                  target="_blank"
                                  href="https://www.linkedin.com/in/christopherrr/"
                                  variant="contained"
                                  size="medium"
                                  color="primary"
                                  startIcon={<LinkedInIcon />}
                                  className="external-links-button"
                                  fullWidth
                                >
                                  LinkedIn
                                </Button>
                              </Col>
                              <Col xs={12} lg={4}>
                                <Button
                                  target="_blank"
                                  // href="/resume"
                                  variant="contained"
                                  size="medium"
                                  color="primary"
                                  startIcon={<DescriptionIcon />}
                                  className="external-links-button"
                                  fullWidth
                                  onClick={() => window.open('/ChristopherReynolds-SoftwareEngineer-2021_web.pdf', '_blank')}
                                >
                                  Resume
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      }
                    />
                  </Col>

                  <Col xs={12} md={6}>
                    <Fade childComponent={<BusinessCard />} />
                  </Col>
                </Row>
              </Container>
            </Route>

            <Route exact path="/resume">
              <Menu />
              <Resume />
            </Route>

            <Route exact path="/projects">
              <Menu />
              <Fade childComponent={<Projects />} />
            </Route>

            <Route exact path="/contact">
              <Menu />
              <Container id="Contact-Page--Container">
                <Row>
                  <Col xs={12} style={{ textAlign: "center" }}>
                    <Fade
                      childComponent={
                        <div>
                          <a
                            alt=""
                            href="http://github.com/christopherrobin"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button block>
                              <EmailIcon /> christopher (at) mail.com
                            </Button>
                          </a>
                          <br />
                          <a
                            alt=""
                            href="http://github.com/christopherrobin"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button block>
                              <GitHubIcon /> @ChristopherRobin
                            </Button>
                          </a>
                          <br />
                          <a
                            alt=""
                            href="https://www.linkedin.com/in/christopherrr"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button block>
                              <LinkedInIcon /> @Christopherrr
                            </Button>
                          </a>
                        </div>
                      }
                    />
                  </Col>
                </Row>
              </Container>
            </Route>
          </Switch>
        </Router>
      </div>
    </Container>
  );
};

export default App;

/*
              {
                isLoading ?
                  <div id="pre-loader">
                    <Row>
                      <Col xs={12}>
                        <Spinner color="info" id="spinner" />
                        <p className="sub-title">Loading</p>
                      </Col>
                    </Row>
                  </div> : null
              }
*/
