import React, { useState } from 'react';
import { Autocomplete, TextField, Box, Button } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { usePermitStore } from '../store';
import { ICompanyInfo } from '../../../contracts/IPermit';



const CompanyStep: React.FC = () => {
  const [isFormDirty, setIsFormDirty] = useState(false);

  const updateCompany = usePermitStore(state=>state.updateCompany)
  const companyInfo = usePermitStore(state=>state.companyInfo)

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues
  } = useForm<ICompanyInfo>({
    mode: "all",
    defaultValues: {
      legalName: companyInfo?.legalName??'',
      dba:companyInfo?.dba?? '',
      physicalStreetAddress:companyInfo?.physicalStreetAddress?? '',
      city:companyInfo?.city?? '',
      state: companyInfo?.state?? '',
      zipCode:companyInfo?.zipCode?? '',
    },
  });
  const handleFormChange = () => {
    const defaultValues = companyInfo
    const currentValues = {...getValues() };
    setIsFormDirty(!deepEqual(defaultValues, currentValues));
  };
  const deepEqual = (a: any, b: any) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };
  const onSubmit: SubmitHandler<ICompanyInfo> = (data) => {
    updateCompany(data)
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={handleFormChange}>
      <Box>
      <Controller
          name="legalName"
          control={control}
          rules={{
             required: 'Legal Name is required.',
             }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Legal Name"
              variant="standard"
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              {...field}
            />
          )}
        />
      </Box>
      <Box>
      <Controller
          name="dba"
          control={control}
          rules={{
             required: 'Dba is required.'
             }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Dba"
              variant="standard"
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              {...field}
            />
          )}
        />
      </Box>
      <Box>
      <Controller
          name="physicalStreetAddress"
          control={control}
          rules={{
             required: 'Physical Street Address is required.'
             }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Physical Street Address"
              variant="standard"
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              {...field}
            />
          )}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }} style={{ display: 'flex' }}>
        <Controller
          name="city"
          control={control}
          rules={{
             required: 'City is required.'
             }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="City"
              variant="standard"
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              {...field}
              sx={{ width: '250' }}
              style={{ marginRight: '16px' }}
            />
          )}
        
        />
        <Controller
          name="state"
          control={control}
          rules={{
             required: 'State is required.'
             }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="State"
              variant="standard"
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              {...field}
              sx={{ width: '250' }}
              style={{ marginRight: '16px' }}
            />
          )}
         
        />
        <Controller
          name="zipCode"
          control={control}
          rules={{
             required: 'Zip Street Address is required.'
             }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Zip"
              variant="standard"
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              {...field}
              sx={{ width: '150' }}
            />
          )}
         
        />
      </Box>
      {isFormDirty && (
        <Button type="submit" variant="contained" color="primary">
          save
        </Button>
      )}
    </form>
  );
};

export default CompanyStep;