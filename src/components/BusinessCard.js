import React from "react";
import { Container, Col, Row } from "reactstrap";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';

// Image Assets
import beachPicture from ".././images/beach.jpg";
import ReactLogo from ".././react.svg";
import NodeLogo from ".././node.svg";
import GraphLogo from ".././graphql.png";
import ReduxLogo from ".././redux.svg";

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

        <Typography variant="body2" component="p">
          Senior Software Engineer with a focus on JavaScript and microservice
          architecture that scales.
        </Typography>

        <Typography variant="body2" component="p">
          <strong>Expert: </strong>JavaScript (ES6+), Node.js, React, Redux,
          Next.js, TypeScript, HTML/CSS, Bootstrap, Material UI, jQuery
        </Typography>

        <Typography variant="body2" component="p">
          <strong>Proficient: </strong> GraphQL, Scala, Java EE, C# .NET, PHP,
          SQL/MySQL/NoSQL
        </Typography>

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
