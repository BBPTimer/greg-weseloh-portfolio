import { Avatar, Table, TableBody, TableCell, TableRow } from "@mui/material";

const Home = () => {
  return (
    <>
      <br />
      <Avatar
        alt="Greg Weseloh"
        src="/headshot.png"
        sx={{ width: 100, height: 100, margin: "auto" }}
      />
      <Table sx={{ width: "75%", margin: "auto" }}>
        <TableBody>
          <TableRow>
            <TableCell>Who I Am</TableCell>
            <TableCell>
              Entry-level software developer with over 10 years experience in
              technology leadership.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>What I Do</TableCell>
            <TableCell>
              Knowledgeable in:
              <ul>
                <li>JavaScript, React</li>
                <li>Java, Spring Boot</li>
                <li>SQL</li>
                <li>PowerShell</li>
                <li>Batch, Bash</li>
                <li>AWS EC2</li>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>What I Seek</TableCell>
            <TableCell>
              Seeking a junior developer role on a team focused on creating
              software to improve people's lives.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Home;
