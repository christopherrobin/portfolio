import React from 'react';
import { Container, Row, Col } from "reactstrap";
import BusinessCard from "./BusinessCard";
import Fade from "./Fade";

import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";

const Hello = () => {
    return (
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
                                href="/resume"
                                variant="contained"
                                size="medium"
                                color="primary"
                                startIcon={<DescriptionIcon />}
                                className="external-links-button"
                                fullWidth
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
                    <Fade childComponent={
                        <div>
                            <BusinessCard />
                        </div>
                    } />
                </Col>
            </Row>
        </Container>
    );
}

export default Hello;