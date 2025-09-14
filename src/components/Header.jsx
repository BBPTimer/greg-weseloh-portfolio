import { Button, ButtonGroup, useMediaQuery } from "@mui/material";
import { Link } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import BuildIcon from "@mui/icons-material/Build";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const Header = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <header>
      <ButtonGroup size={matches ? "large" : "small"}>
        <Button variant="contained" startIcon={<HomeIcon />}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant="contained" startIcon={<ArticleIcon />}>
          <Link to="/resume">Resume</Link>
        </Button>
        <Button variant="contained" startIcon={<BuildIcon />}>
          <Link to="/projects">Projects</Link>
        </Button>
        <Button variant="contained" startIcon={<ContactPageIcon />}>
          <Link to="/contact">Contact</Link>
        </Button>
      </ButtonGroup>
    </header>
  );
};

export default Header;
