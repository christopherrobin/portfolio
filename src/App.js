import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Button } from "reactstrap";
// import Menu1 from "./components/menu";
import Menu from "./components/menu2";
// import Header from './components/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BusinessCard from "./components/BusinessCard";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Fade from "./components/Fade";
import "./App.scss";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import './components/Fade.scss';
// import { CSSTransitionGroup } from 'react-transition-group'
// import { TransitionGroup, CSSTransition } from "react-transition-group";



const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  console.log(isLoading);

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
                    <Col xs={12} md={6} className="d-md-none">
                      <Fade childComponent={<BusinessCard />} />
                    </Col>
                    
                    <Col xs={12} md={6}>
                      <Fade childComponent={
                      <div>
                        <div>
                          <h1>Hello!</h1>
                        </div>
                        <p>
                          My name is Christopher, I'm a Software Engineer living
                          in Indianapolis. I wrote my first line of code when I
                          was 12 years old, over 22 years ago. I love creating technology
                          that can scale to millions of users while providing a powerful
                          experience for both users and developers.
                          I'm obsessed with JavaScript, functional programming,
                          blockchain technology, strategy games, and music.
                        </p>
                        <h3>Expert</h3>
                        <p>
                          JavaScript (ES6+), Node.js, React, Redux, Next.js, TypeScript, HTML/CSS, Bootstrap,
                          Material UI, jQuery (&#129326;)
                        </p>

                        <h3>Proficient</h3>
                        <p>GraphQL, Scala, Java EE, C# .NET, PHP, SQL/MySQL/NoSQL</p>

                        <h3>Summary</h3>
                        <ul>
                          <li>
                            HTML 5 / CSS 3 ( + Bootstrap, Material UI, Tailwind,
                            SASS, LESS)
                          </li>
                          <li>
                            JavaScript (ECMAScript, Babel, Next JS, NodeJS, React,
                            Redux, Underscore/Lodash, Webpack, Angular)
                          </li>
                          <li>C# / C++ / ASP.NET</li>
                          <li>Java EE, JSTL, Scala</li>
                          <li>SQL / MySQL / NoSQL</li>
                          <li>
                            Automated Unit Testing (Mocha, Jest, Chai, Sinon, Selenium)
                          </li>
                          <li>WCAG 2.2 and ADA Compliance</li>
                          <li>UI / UX Development and Testing</li>
                          <li>Agile (Scrum) Software Development</li>
                        </ul>

                        <p>
                          + Github & SVN, Optimizely, Akamai, Segment, Google
                          Apps/AdSense/Analytics, Adobe Dynamic Tag Management,
                          IBM WebSphere Commerce, Confluence, JIRA, Cryptocurrency
                          and blockchain technology
                        </p>
                      </div>
                      } />
                    </Col>

                    <Col
                      xs={12}
                      md={6}
                      className="d-none d-xs-none d-sm-none d-md-block"
                    >
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
                    <Fade childComponent={
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
                    }/>
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
