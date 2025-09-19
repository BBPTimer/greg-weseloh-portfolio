import { Button, ButtonGroup, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CommitIcon from "@mui/icons-material/Commit";

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Greg Weseloh LLC
      </Typography>
      <br />
      <ButtonGroup disableElevation>
        <Button
          href="http://www.github.com/BBPTimer"
          target="top"
          variant="contained"
          size="small"
          startIcon={<CommitIcon />}
          disableElevation
        >
          GitHub
        </Button>
        <Button
          href="http://www.linkedin.com/in/gregweseloh"
          target="top"
          variant="contained"
          size="small"
          startIcon={<WorkIcon />}
          disableElevation
        >
          LinkedIn
        </Button>
      </ButtonGroup>
    </footer>
  );
};

export default Footer;
