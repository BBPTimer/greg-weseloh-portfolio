import { Button, Link } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CommitIcon from "@mui/icons-material/Commit";

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <Button
        href="http://www.linkedin.com/in/gregweseloh"
        target="top"
        variant="contained"
        size="large"
        startIcon={<WorkIcon />}
        disableElevation
      >
        LinkedIn
      </Button>
      <br />
      <br />
      <Button
        href="http://www.github.com/BBPTimer"
        target="top"
        variant="contained"
        size="large"
        startIcon={<CommitIcon />}
        disableElevation
      >
        GitHub
      </Button>
    </>
  );
};

export default Contact;
