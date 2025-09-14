import { Button, Link } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CommitIcon from "@mui/icons-material/Commit";

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <Link href="http://www.linkedin.com/in/gregweseloh" target="top">
        <Button variant="contained" size="large" startIcon={<WorkIcon />}>
          LinkedIn
        </Button>
      </Link>
      <br />
      <br />{" "}
      <Link href="http://www.github.com/BBPTimer" target="top">
        <Button variant="contained" size="large" startIcon={<CommitIcon />}>
          GitHub
        </Button>
      </Link>
    </>
  );
};

export default Contact;
