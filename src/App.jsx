import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: green[100],
        main: green[500],
        dark: green[900],
        contrastText: "#ffffff"
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <br />
      <br />
      <footer className="white-bg gray-hover">
        <Typography variant="body2">&copy; {new Date().getFullYear()} Greg Weseloh LLC</Typography>
      </footer>
    </ThemeProvider>
  );
}

export default App;
