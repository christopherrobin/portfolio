import React from "react";
import { Container, Col, Row } from "reactstrap";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';

// Image Assets
import beachPicture from ".././images/beach.jpg";
import ReactLogo from ".././images/react.svg";
import NodeLogo from ".././images/node.svg";
import GraphLogo from ".././images/graphql.png";
import ReduxLogo from ".././images/redux.svg";

export default function BusinessCard() {
  return (
    <Card id="business-card">
      <CardMedia
        image={beachPicture}
        title="Christopher's day at the lake"
        style={{ height: 250 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Christopher Reynolds
        </Typography>

        <p>
          Senior Software Engineer experienced in application design and development, translating business
          requirements to technical specifications, project management, and microservice architecture seeks
          a position which will leverage current and emerging technologies in order to pursue company goals.
        </p>

        <Container>
          <Row style={{ marginTop: "1.5em" }}>
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
    </Card>
  );
}
