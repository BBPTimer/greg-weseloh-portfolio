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
                href="https://respirate.app"
                target="top"
                sx={{ textAlign: "left" }}
              >
                RespiRate
              </Link>
            </TableCell>
            <TableCell>
              Pet respiratory rate app with MUI X data visualization
            </TableCell>
            <TableCell>React, Material UI, MUI X</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Link
                href="https://github.com/BBPTimer/nongame-db"
                target="top"
                sx={{ textAlign: "left" }}
              >
                The Nongame! DB
              </Link>
            </TableCell>
            <TableCell>
              Full-stack therapy board game using React for frontend, and
              Java/Spring Boot and SQL for backend
            </TableCell>
            <TableCell>React, Java/Spring Boot, SQL</TableCell>
          </TableRow>
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
            <TableCell>Therapy board game using React</TableCell>
            <TableCell>React</TableCell>
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
                href="https://pagefinderr.netlify.app"
                target="top"
                sx={{ textAlign: "left" }}
              >
                PageFinder
              </Link>
            </TableCell>
            <TableCell>
              Search for book and convert page number to percent read, and back
              again
            </TableCell>
            <TableCell>React, Google Books API</TableCell>
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
        </TableBody>
      </Table>
    </>
  );
};

export default Projects;
