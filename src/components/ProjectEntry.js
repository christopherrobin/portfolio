import React from "react";
import { Container, Row, Col } from "reactstrap";
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import "./Projects.scss";

export default function ProjectEntry(props) {
    const { title, description, image, imageAltText } = props;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <img src={image} alt={imageAltText} />
                    <h4>{title}</h4>
                    <p>{description}</p>
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Paper className="project-modal" elevation={3}>
            <h4>{title}</h4>
            <p>{description}</p>
        </Paper>
      </Modal>
    </div>
                </Col>
            </Row>
        </Container>
    )
};
