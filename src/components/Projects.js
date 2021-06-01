import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProjectEntry from './ProjectEntry';
import "./Projects.scss";

// Images
import someImage from '../images/al_small.png';

export default function Projects() {
    return (
        <Container id="projects-container">
            <Row>
                <Col xs={12}>
                    <h1>Personal Projects</h1>
                    <ProjectEntry
                        title="Indy Fuel Hub"
                        image={someImage}
                        description="The Indy Fuel Hub is a set of user-friendly tools for following the Indy Fuel. Minor league hockey can sometimes be hard to keep up with due to the smaller fan base and frequency of player trades. Information travels slow and isn’t always readily available. This app fixes that by aggregating data from 3 different sources and presenting them in an organized and focused manner for users that want to follow their favorite ECHL hockey team. Current features are spoiler free game results, upcoming schedule information with ticket sales links, and all incoming/outgoing Indy Fuel roster moves."
                        imageAltText="image alt text"
                    />
                    <ProjectEntry
                        title="Cryptalyzer"
                        image={someImage}
                        description="Cryptalyzer description goes here"
                        imageAltText="image alt text"
                    />
                </Col>
            </Row>
        </Container>
    )
};
