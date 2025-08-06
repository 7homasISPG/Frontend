import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableView = ({ data }) => {
  if (!data || data.length === 0) return null;

  const headers = Object.keys(data[0]);

  return (
    <TableContainer component={Paper} elevation={2} sx={{ mt: 1, mb: 1 }}>
      <Table aria-label="data table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            {headers.map((header) => (
              <TableCell key={header}><strong>{header}</strong></TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {headers.map((header) => (
                <TableCell key={`${index}-${header}`}>{row[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableView;