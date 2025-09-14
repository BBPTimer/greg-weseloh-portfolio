import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import BuildIcon from '@mui/icons-material/Build';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const Header = () => {
  return (
    <header>
      <ButtonGroup size="large">
        <Link to="/" ><Button variant="contained" startIcon={<HomeIcon />}>Home</Button></Link>
        <Link to="/resume"><Button variant="contained" startIcon={<ArticleIcon />}>Resume</Button></Link>
        <Link to="/projects"><Button variant="contained" startIcon={<BuildIcon />}>Projects</Button></Link>
        <Link to="/contact"><Button variant="contained" startIcon={<ContactPageIcon />}>Contact</Button></Link>
      </ButtonGroup>
    </header>
  );
};

export default Header;
