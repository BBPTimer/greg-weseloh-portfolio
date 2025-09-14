import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

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
      >
        Download
      </Button>
      <br />
      <br />
      <div class="container">
        <iframe class="responsive-iframe" src="/GregWeselohResume.pdf"></iframe>
      </div>
    </>
  );
};

export default Resume;
