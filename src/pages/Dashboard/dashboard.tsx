import { permitInfo } from "../../mockDate";
import { styled } from '@mui/system';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const GlassmorphicTableContainer = styled(Paper)`
  width: 70%;
  margin: 64px auto;
  padding: 8px;
  max-height: 400px;
  overflow: auto;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%), #0077ff; 
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    transform: translateY(-3px);
  }
`;

const GlassmorphicTableElem = styled(Table)`
  background: transparent;
  font-size: 14px;

  th,
  td {
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 8px;
  }

  th {
    background: rgba(255, 255, 255, 0.2);
    font-weight: 600;
  }

  tr:nth-of-type(even) {
    background: rgba(255, 255, 255, 0.1);
  }
`;


const GlassmorphicTable = () => {
  

  return (
    <GlassmorphicTableContainer>
      <GlassmorphicTableElem>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>State</TableCell>
            <TableCell>State Fee</TableCell>
            <TableCell>Service Fee</TableCell>
            <TableCell>Effective Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {permitInfo.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.state}</TableCell>
              <TableCell>${row.stateFee}</TableCell>
              <TableCell>${row.serviceFee}</TableCell>
              <TableCell>
                {row.effectiveDate.toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </GlassmorphicTableElem>
    </GlassmorphicTableContainer>
  );
};

export default GlassmorphicTable;