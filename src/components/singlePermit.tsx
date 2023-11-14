
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {IPermit} from "../contracts/IPermit"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
interface cardProps{
    permit:IPermit[],
    onClick?:()=>void
}

export default function BasicCard(props:cardProps) {
  return (
    <>
    {
      <Box m={2}>
      <TableContainer component={Paper} sx={{ background: 'rgba(255, 255, 255, 0.2)', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>State</TableCell>
              <TableCell>State Fee</TableCell>
              <TableCell>Service Fee</TableCell>
              <TableCell>Is New</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Effective Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.permit.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.stateFee}</TableCell>
                <TableCell>{row.serviceFee}</TableCell>
                <TableCell>{row.isNew ? 'Yes' : 'No'}</TableCell>
                {/* <TableCell>{row.effectiveDate}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    }
    </>
  );
}