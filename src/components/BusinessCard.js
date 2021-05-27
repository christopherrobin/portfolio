import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Col, Row } from 'reactstrap';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Tech logos
import ReactLogo from ".././react.svg";
import NodeLogo from ".././node.svg";
import GraphLogo from ".././graphql.png";
import ReduxLogo from ".././redux.svg";

// Material Icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

export default function BusinessCard() {
  return (
    <Card id="business-card">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Christopher Reynolds
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Senior Software Engineer with a focus on JavaScript and microservice architecture that scales.
          </Typography>
          <Container>
          <Row style={{ marginTop: '1.5em' }}>
            <Col xs={3} className="skill-logo">
                <img src={ReactLogo} alt="React logo" />
                <div>React</div>
            </Col>
            <Col xs={3} className="skill-logo">
                <img src={NodeLogo} alt="React logo" />
                <div>Node.js</div>
            </Col>
            <Col xs={3} className="skill-logo">
                <img src={ReduxLogo} alt="React logo" />
                <div>Redux</div>
            </Col>
            <Col xs={3} className="skill-logo">
                <img src={GraphLogo} alt="Scala logo" />
                <div>GraphQL</div>
            </Col>
          </Row>
          </Container>
        </CardContent>

      <CardActions id="card-actions">
        <Button size="small" color="primary" startIcon={<DescriptionIcon />}><NavLink to="/resume">Resume</NavLink></Button>
        <Button size="small" color="primary" startIcon={<GitHubIcon />}><a target="blank" href="https://github.com/christopherrobin/">GitHub</a></Button>
        <Button size="small" color="primary" startIcon={<LinkedInIcon />}><a target="blank" href="https://www.linkedin.com/in/christopherrr/">LinkedIn</a></Button>
      </CardActions>
    </Card>
  );
}
