import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Menu from "./components/Menu";
import Button from "@material-ui/core/Button";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ToggleSwitch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from "./components/Fade";

// "Pages"
import Resume from "./components/Resume";
import Hello from "./components/Hello";
// import Projects from "./components/Projects";

import "./App.scss";
import "./DarkMode.scss";
import "./components/Fade.scss";

// Material Icons
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [isDark, setDark] = useState(false);

  const toggleDark = () => setDark(!isDark);

  useEffect(() => {
    setLoading(false);
  }, []);

  console.log(isLoading);

  return (

    <Container id="app-container" className={ isDark ? 'dark-mode' : null}>
    {
      isLoading ?
        <div id="pre-loader">
          <Row>
            <Col xs={12}>
              <CircularProgress />
              <p className="sub-title">Loading</p>
            </Col>
          </Row>
        </div>
        :
      <div className="App">
        <Container>
          <Row>
              <Col xs={12}>
              <Tooltip title="Toggle light/dark theme">
                  <Button id="dark-mode-toggle">
                      <FormControlLabel
                        control={
                          <ToggleSwitch
                            checked={isDark}
                            onChange={toggleDark}
                            name="toggleDarkMode"
                            color="primary"
                          />
                        }
                        label={isDark ? <NightsStayIcon /> : <WbSunnyIcon /> }
                      />
                  </Button>
                  </Tooltip>
              </Col>
          </Row>
        </Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/hello" />
            </Route>

            <Route path="/hello">
              <Menu />
              <Hello />
            </Route>

            <Route exact path="/resume">
              <Menu />
              <Resume />
            </Route>

            <Route exact path="/contact">
              <Menu />
              <Container id="Contact-Page--Container">
                <Row>
                  <Col xs={12}>
                    <Fade
                      childComponent={
                        <div>
                        <h1>Contact Me</h1>
                          <a
                            alt="Email"
                            href="mailto:christopher@spaceagebrains.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="contained" color="primary" startIcon={<EmailIcon />}>
                              christopher (at) spaceagebrains.com
                            </Button>
                          </a>
                          <br />
                          <a
                            alt="GitHub"
                            href="http://github.com/christopherrobin"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="contained" color="primary" startIcon={<GitHubIcon />}>
                              @ChristopherRobin
                            </Button>
                          </a>
                          <br />
                          <a
                            alt="Linked In"
                            href="https://www.linkedin.com/in/christopherrr"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button startIcon={<LinkedInIcon />} variant="contained" color="primary">
                              @Christopherrr
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
    }
    </Container>
  );
};

export default App;
