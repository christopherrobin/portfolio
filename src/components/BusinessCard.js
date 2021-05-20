import React from 'react';
import { Col, Row } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import ProfilePicture from ".././profile3.png";
import ProfilePicture from ".././gtr.jpg";
import { NavLink } from "react-router-dom";
import ReactLogo from ".././react.svg";
import NodeLogo from ".././node.svg";
import GraphLogo from ".././graphql.png";
import ReduxLogo from ".././redux.svg";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

export default function BusinessCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

        <CardMedia
          className={classes.media}
          image={ProfilePicture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Christopher Reynolds
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Senior Software Engineer with a focus on JavaScript and microservice architecture that scales.
          </Typography>
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
        </CardContent>

      <CardActions>
        <Button size="small" color="primary"><NavLink to="/resume">Resume</NavLink></Button>
        <Button size="small" color="primary"><a href="https://www.linkedin.com/in/christopherrr/" target="_blank"></a>Github</Button>
        <Button size="small" color="primary">LinkedIn</Button>
      </CardActions>
    </Card>
  );
}
