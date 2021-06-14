import React from "react";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description";
import Tooltip from '@material-ui/core/Tooltip';
import FileSaver from 'file-saver';

import { get } from 'lodash';

const ResumeDownloadButton = () => {

  console.log(get(process, 'env.PUBLIC_URL', false));

  const saveFile = () => {
    FileSaver.saveAs(
      './ChristopherReynolds_SeniorSoftwareEngineer_2021_web.pdf',
      "ChristopherReynolds_SeniorSoftwareEngineer.pdf"
    );
  };

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
          onClick={saveFile}
        >
          Download Resume (PDF)
        </Button>
      </Tooltip>
      <a href='/ChristopherReynolds_SeniorSoftwareEngineer.pdf'>test</a>
    </div>
  );
}

export default ResumeDownloadButton;
