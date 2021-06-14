import React from "react";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description";
import Tooltip from '@material-ui/core/Tooltip';

const ResumeDownloadButton = () => {
  return (
    <div className="btn-resume-download">
      <Tooltip title="Download My Resume">
        <Button
          disableElevation
          variant="contained"
          size="small"
          color="primary"
          startIcon={<DescriptionIcon />}
          className="external-links-button"
          alt="Download My Resume"
        >
          <a href='./ChristopherReynolds_SeniorSoftwareEngineer_2021_web.pdf' target="_blank" download>Download Resume (PDF)</a>
        </Button>
      </Tooltip>
    </div>
  );
}

export default (ResumeDownloadButton);
