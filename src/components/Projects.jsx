import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <Table sx={{ width: "75%", margin: "auto" }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Stack</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Link
                href="https://nongame.app"
                target="top"
                sx={{ textAlign: "left" }}
              >
                The Nongame!
              </Link>
            </TableCell>
            <TableCell>Full-stack therapy board game using React for frontend and Spring for backend</TableCell>
            <TableCell>React, Spring</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Link
                href="https://github.com/BBPTimer/BBPTimer2"
                target="top"
                sx={{ textAlign: "left" }}
              >
                BBPTimer
              </Link>
            </TableCell>
            <TableCell>Automatic espresso timer using Arduino</TableCell>
            <TableCell>C++, ESP8266</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Link
                href="https://github.com/BBPTimer/BBPTimer"
                target="top"
                sx={{ textAlign: "left" }}
              >
                BBPTimer v1
              </Link>
            </TableCell>
            <TableCell>Automatic espresso timer using Raspberry Pi</TableCell>
            <TableCell>Python, Raspberry Pi</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Link
                href="https://bbptimer.github.io/actoolkit/"
                target="top"
                sx={{ textAlign: "left" }}
              >
                ACToolkit
              </Link>
            </TableCell>
            <TableCell>Therapist tool using JavaScript DOM</TableCell>
            <TableCell>JavaScript</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Link
                href="https://bbptimer.github.io/countdown/"
                target="top"
                sx={{ textAlign: "left" }}
              >
                LaunchCode Graduation Countdown
              </Link>
            </TableCell>
            <TableCell>School graduation calendar using JavaScript DOM</TableCell>
            <TableCell>JavaScript</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Projects;
