import React from 'react';
import Fade from "./Fade";
import { Container, Row, Col } from "reactstrap";
import Button from "@material-ui/core/Button";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from '@material-ui/icons/Twitter';

const Contact = () => {
  return (
    <Container id="Contact-Page--Container">
      <Row>
        <Col xs={12}>
          <Fade
            childComponent={
              <div>
                <h1>Contact Me</h1>
                <p>Feel free to get in touch if you like you talking about technology.</p>
                <a
                  alt="Email"
                  href="mailto:christopher@spaceagebrains.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EmailIcon />}
                    fullWidth
                  >
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
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<GitHubIcon />}
                    fullWidth
                  >
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
                  <Button
                    startIcon={<LinkedInIcon />}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    @Christopherrr
                  </Button>
                </a>
                <a
                  alt="Twitter"
                  href="https://twitter.com/M4THBL45T3R"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    startIcon={<TwitterIcon />}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    @M4THBL45T3R
                  </Button>
                </a>
              </div>
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
