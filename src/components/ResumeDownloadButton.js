import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description";

const ResumeDownloadButton = () => {
  return (
    <div className="btn-resume-download">
      <Button
        disableElevation
        variant="contained"
        size="small"
        color="primary"
        startIcon={<DescriptionIcon />}
        className="external-links-button"
      >
        <Link to="./ChristopherReynolds-SoftwareEngineer-2021_web.pdf" target="_blank" download>Download Resume (PDF)</Link>
      </Button>
    </div>
  );
}

export default (ResumeDownloadButton);