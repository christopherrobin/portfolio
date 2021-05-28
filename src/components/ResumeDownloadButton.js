import React from "react";
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
        onClick={() => window.open('./ChristopherReynolds-SoftwareEngineer-2021_web.pdf', '_blank')}
      >
        Resume (PDF)
      </Button>
    </div>
  );
}

export default (ResumeDownloadButton);