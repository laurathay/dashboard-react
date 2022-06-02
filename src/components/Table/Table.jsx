import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';

function createData(
  name: string,
  email: string,
  score: number,
  comments: string,
) {
  return { name, email, score, comments };
}

const rows = [
  createData('Lynch Cai', 'l_cai@hetic.eu', 20, 'A'),
  createData('Mehdi Verfaillie', 'm_verfaillie@hetic.eu', 20, 'B'),
  createData('Laura THAY', 'l_thay@hetic.eu', 20, 'C'),
  createData('Vincent Li', 'v_li@hetic.eu', 20,'X'),
  createData('Yeonsoo', 'yeongsoo@hetic.eu', 20,'Y'),
];

export default function BasicTable() {
  return (
      <div className="Table">
          <h3> Recent Scores </h3>
            <TableContainer component={Paper}
            style={{boxShadow: '0px 13px 20px 0px #80808029'}}
            >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Peeps</TableCell>
                    <TableCell align="left">email</TableCell>
                    <TableCell align="left">score</TableCell>
                    <TableCell align="left">comments</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left" class="score">{row.score}</TableCell>
                    <TableCell align="left">{row.comments}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
    </div>
  );
}
