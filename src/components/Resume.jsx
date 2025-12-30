import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";

const Resume = () => {
  return (
    <>
      <h1>Resume</h1>
      <Button
        href="/GregWeselohResume.pdf"
        variant="contained"
        size="large"
        startIcon={<DownloadIcon />}
        download
        disableElevation
      >
        Download
      </Button>
      <br />
      <br />
      <div className="container">
        <iframe
          className="responsive-iframe"
          src="/GregWeselohResume.pdf"
        ></iframe>
      </div>
    </>
  );
};

export default Resume;
