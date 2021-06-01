import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import Button from "@material-ui/core/Button";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ToggleSwitch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';

// "Pages"
import Resume from "./components/Resume";
import Hello from "./components/Hello";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.scss";
import "./DarkMode.scss";
import "./components/Fade.scss";

// Material Icons
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [isDark, setDark] = useState(false);

  const toggleDark = () => setDark(!isDark);

  useEffect(() => {
    setLoading(false);
  }, []);

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
              <Navigation />
              <Hello />
            </Route>

            <Route exact path="/resume">
              <Navigation />
              <Resume />
            </Route>

            <Route exact path="/contact">
              <Navigation />
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    }
    </Container>
  );
};

export default App;
