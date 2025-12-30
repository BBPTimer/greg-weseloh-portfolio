import ArticleIcon from "@mui/icons-material/Article";
import BuildIcon from "@mui/icons-material/Build";
import HomeIcon from "@mui/icons-material/Home";
import { Button, ButtonGroup, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";

const Header = () => {
  let navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <header>
      <ButtonGroup
        size={matches ? "large" : "small"}
        orientation={matches ? "horizontal" : "vertical"}
        disableElevation
      >
        <Button
          onClick={() => navigate("/")}
          variant="contained"
          startIcon={<HomeIcon />}
        >
          Home{" "}
        </Button>
        <Button
          onClick={() => navigate("/resume")}
          variant="contained"
          startIcon={<ArticleIcon />}
        >
          Resume
        </Button>
        <Button
          onClick={() => navigate("/projects")}
          variant="contained"
          startIcon={<BuildIcon />}
        >
          Projects{" "}
        </Button>
      </ButtonGroup>
    </header>
  );
};

export default Header;
