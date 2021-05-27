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
                    <ProjectEntry
                        title="Title"
                        image={someImage}
                        description="Angi is your home for everything home— a comprehensive solution for all your home needs. From repairs and renovations to products and financing, Angi is transforming every touch point in the customer journey. With over 25 years of experience and a network of nearly 250,000 pros, we have helped more than 150 million people with their home needs. Angi is your partner for every part of your home care journey."
                        imageAltText="image alt text"
                    />
                </Col>
            </Row>
        </Container>
    )
};
