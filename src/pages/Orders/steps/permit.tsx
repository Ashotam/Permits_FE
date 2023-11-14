import React, { useState } from 'react';
import { Autocomplete, TextField, Box, Button, IconButton, TableCell, TableRow, TableBody, TableHead, Table } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { v4 as uuid } from 'uuid';
import { IPermit } from '../../../contracts/IPermit';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { usePermitStore } from '../store';

interface PermitInfoStepProps {}



const offers = [
  {
    label: 'fuel',
    price: 100,
  },
  {
    label: 'overweight',
    price: 70,
  },
  {
    label: 'overheight',
    price: 80,
  },
  {
    label: 'trip',
    price: 90,
  },
];

const states = [
  { label: 'Alabama', code: 1 },
  { label: 'Arizona', code: 2 },
  { label: 'Arkansas', code: 3 },
  { label: 'California', code: 4 },
];

const PermitStep: React.FC<PermitInfoStepProps> = () => {
  // const [permits, setPermits] = useState<IPermit[]>([]);
  const permits:IPermit[] = usePermitStore(state => state.permits)
  const updatePermits = usePermitStore(state=>state.updatePermits)

  const [newPermit,setNewPermit] = useState<IPermit>({ type: '', state: '', isEdit: false, id: uuid(),effectiveDate: new(Date),  stateFee:40,serviceFee:30 })
  const selectState = (e: React.ChangeEvent<{}>, value: { label: string }, id: string) => {
   
      const newPermits = permits.map((permit) => {
        if (permit.id === id) {
          permit.state = value.label;
        }
        return permit;
      });
      updatePermits(newPermits)
  };
  const selectPermit = (e: React.ChangeEvent<{}>, value: { label: string }, id: string) => {
   
      const newState = permits.map((permit) => {
        if (permit.id === id) {
          permit.type = value.label;
        }
        return permit;
      });
      updatePermits(newState)
  };
  const deletePermit = (id:string) => {
    const newpermits = permits.filter((permit)=>permit.id !==id)
    updatePermits(newpermits)
  };
  const editPermit=(id:string)=>{
      const newpermits = permits.map((permit) => {
        if (permit.id === id) {
          permit.isEdit = true;
        }
        return permit;
      });
      updatePermits(newpermits)
  }
  const completePermit = () => {
    updatePermits([...permits,newPermit])
    setNewPermit({ type: '', state: '', isEdit: false, id: uuid(),effectiveDate: new(Date),  stateFee:40,serviceFee:30 })
}
const completeEditedPermit = (id:string)=>{
 
    const newpermits = permits.map((permit) => {
      if (permit.id === id) {
        permit.isEdit = false
      }
      return permit;
    });
    updatePermits(newpermits)
}
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ display: 'flex' }}>
            <Autocomplete
              disablePortal
              options={states}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Choose a state" />}
              style={{ margin: '16px' }}
              value={{ label: newPermit.state, code: 1 }}
              onChange={(e, v) => {
                const ubdetedPermit  = {...newPermit}
                ubdetedPermit.state = v.label
                setNewPermit(ubdetedPermit);
              }}
            />
            <Autocomplete
              disabled={!newPermit.state}
              disablePortal
              options={offers}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Choose a permit type" />}
              style={{ margin: '16px' }}
              value={{ label: newPermit.type, price: 1 }}
              onChange={(e, v) => {
                const ubdetedPermit  = {...newPermit}
                ubdetedPermit.type = v.label
                setNewPermit(ubdetedPermit);
              }}
            />
            {newPermit.type && newPermit.state && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => completePermit()}
              >
                <DoneIcon />
              </IconButton>
      )}

          </Box>
          <Table>
        <TableHead>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>State Fee</TableCell>
            <TableCell>Service Fee</TableCell>
            <TableCell>Effective Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {permits.map((row, index) => (
            <TableRow key={index}>
              
               {row.isEdit?(
                 <TableCell>
                  <Autocomplete
            disablePortal
            options={states}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="Choose a state" />}
            style={{ margin: '16px' }}
            value={{ label: row.state, code: 1 }}
            onChange={(e, v) => {
            selectState(e, v, row.id);
             }}
            />
                 </TableCell>
           ):(
              <TableCell>{row.state}</TableCell>
              )}
              
              {row.isEdit?(
                <TableCell>
                   <Autocomplete
            disablePortal
            options={offers}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="Choose a permit type" />}
            style={{ margin: '16px' }}
            value={{ label: row.type, price: 1 }}
            onChange={(e, v) => {
            selectPermit(e, v, row.id);
             }}
            />
                </TableCell>
          ):(
            <TableCell>{row.type}</TableCell>
              )}
              <TableCell>${row.stateFee}</TableCell>
              <TableCell>${row.serviceFee}</TableCell>
              <TableCell>
                {row.effectiveDate.toLocaleDateString()}
              </TableCell>
              <TableCell>
                {!row.isEdit?(
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => editPermit(row.id)}
                  >
                    <EditIcon/>
                  </IconButton>
                ):
                row.type && row.state?(
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => completeEditedPermit(row.id)}
                  >
                    <DoneIcon />
                  </IconButton>
                ):null}
                
            
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {deletePermit(row.id)}}
          >
             <DeleteIcon/>
          </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default PermitStep;