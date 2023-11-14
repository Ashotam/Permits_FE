import React, { useState } from 'react';
import { Autocomplete, TextField, Box, Button } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { usePermitStore } from '../store';
import { IVehicleInfo } from '../../../contracts/IPermit';


const vehicleTypes = [
  { label: 'Tractor', value: 'tractor' },
  { label: 'Trailer', value: 'trailer' },
  { label: 'Truck', value: 'truck' },
  { label: 'Bus', value: 'bus' },
];

const makes = [
  { label: 'Advance', value: 'advance' },
  { label: 'Arrow', value: 'arrow' },
  { label: 'Austin', value: 'austin' },
  { label: 'Autocar', value: 'autocar' },
];

const fuelTypes = [
  { label: 'Diesel', value: 'diesel' },
  { label: 'Gasoline', value: 'gasoline' },
  { label: 'CNG', value: 'cng' },
  { label: 'Propane', value: 'propane' },
];

const VehicaleStep: React.FC = () => {
  const [isFormDirty, setIsFormDirty] = useState(false);

  const updateVehical = usePermitStore(state=>state.updateVehical)
  const vehicalInfo = usePermitStore(state=>state.vehicalInfo)

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<IVehicleInfo>({
    mode: "all",
    defaultValues: {
      unit: vehicalInfo?.unit??'',
      vinNumber:vehicalInfo?.vinNumber?? '',
      vehicleType:vehicalInfo?.vehicleType?? '',
      year:vehicalInfo?.year?? '',
      make: vehicalInfo?.make?? '',
      fuelType:vehicalInfo?.fuelType?? '',
      licensePlate:vehicalInfo?.licensePlate?? '',
      plateState:vehicalInfo?.plateState?? '',
      unladenWeight:vehicalInfo?.unladenWeight?? '',
      gvw: vehicalInfo?.unladenWeight?? '',
    },
  });
  const isNumeric = (value: string) => {
    return /^\d+$/.test(value); // Check if the value contains only digits
  };
  const handleFormChange = () => {
    const defaultValues = vehicalInfo
    const currentValues = {...getValues() };
    setIsFormDirty(!deepEqual(defaultValues, currentValues));
  };
  const deepEqual = (a: any, b: any) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };
  const onSubmit: SubmitHandler<IVehicleInfo> = (data) => {
    updateVehical(data)
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={handleFormChange}>
      <Box sx={{ flexGrow: 1 }} style={{ display: 'flex' }}>
        <Controller
          name="unit"
          control={control}
          rules={{
             required: 'Unit # is required',
             validate: (value) => isNumeric(value) || 'Unit must contain only digits (0-9)',
             }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Unit #"
              variant="standard"
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              sx={{ width: '150px' }}
              style={{ margin: '8px' }}
              {...field}
            />
          )}
        />

        <Controller
          name="vinNumber"
          control={control}
          rules={{ required: 'VIN/Serial Number is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="VIN/Serial Number"
              variant="standard"
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              sx={{ width: '150px' }}
              style={{ margin: '8px' }}
              {...field}
            />
          )}
        />
      </Box>

      <Box sx={{ flexGrow: 1 }} style={{ display: 'flex' }}>
        <Controller
          name="vehicleType"
          control={control}
          rules={{ required: 'Vehicle Type is required' }}
          render={({ field, fieldState: { error } }) => (
            <Autocomplete
              disablePortal
              options={vehicleTypes}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Vehicle Type"
                  variant="standard"
                  error={!!error}
                  helperText={error ? error.message : ''}
                  onBlur={field.onBlur}
                  sx={{ width: '200px' }}
                  style={{ margin: '8px' }}
                />
              )}
              style={{ margin: '16px' }}
              onChange={(_, data) => field.onChange(data?.value)}
              value={vehicleTypes.find((option) => option.value === field.value)}
              onClose={()=>handleFormChange()}
            />
          )}
        />

        <Controller
          name="year"
          control={control}
          rules={{ required: 'Year is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Year"
              variant="standard"
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              sx={{ width: '150px' }}
              style={{ margin: '8px' }}
              {...field}
            />
          )}
        />

        <Controller
          name="make"
          control={control}
          rules={{ required: 'Make is required' }}
          render={({ field, fieldState: { error } }) => (
            <Autocomplete
              disablePortal
              options={makes}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Make"
                  variant="standard"
                  error={!!error}
                  helperText={error ? error.message : ''}
                  onBlur={field.onBlur}
                  sx={{ width: '200px' }}
                  style={{ margin: '8px' }}
                />
              )}
              style={{ margin: '16px' }}
              onChange={(_, data) => field.onChange(data?.value)}
              value={makes.find((option) => option.value === field.value)}
              onClose={()=>handleFormChange()}
            />
          )}
        />

        <Controller
          name="fuelType"
          control={control}
          rules={{ required: 'Fuel Type is required' }}
          render={({ field, fieldState: { error } }) => (
            <Autocomplete
              disablePortal
              options={fuelTypes}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Fuel Type"
                  variant="standard"
                  error={!!error}
                  helperText={error ? error.message : ''}
                  onBlur={field.onBlur}
                  sx={{ width: '200px' }}
                  style={{ margin: '8px' }}
                />
              )}
              style={{ margin: '16px' }}
              onChange={(_, data) => field.onChange(data?.value)}
              value={fuelTypes.find((option) => option.value === field.value)}
              onClose={()=>handleFormChange()}
            />
          )}
        />
      </Box>

      <Box sx={{ flexGrow: 1 }} style={{ display: 'flex' }}>
        <Controller
          name="licensePlate"
          control={control}
          rules={{ required: 'License Plate is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="License Plate"
              variant="standard"
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              sx={{ width: '150px' }}
              style={{ margin: '8px' }}
              {...field}
            />
          )}
        />

        <Controller
          name="plateState"
          control={control}
          rules={{ required: 'Plate State is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Plate State"
              variant="standard"
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              sx={{ width: '150px' }}
              style={{ margin: '8px' }}
              {...field}
            />
          )}
        />

        <Controller
          name="unladenWeight"
          control={control}
          rules={{ required: 'Unladen Weight is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Unladen Weight"
              variant="standard"
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              sx={{ width: '150px' }}
              style={{ margin: '8px' }}
              {...field}
            />
          )}
        />

        <Controller
          name="gvw"
          control={control}
          rules={{ required: 'GVW is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="GVW"
              variant="standard"
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              sx={{ width: '150px' }}
              style={{ margin: '8px' }}
              {...field}
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

export default VehicaleStep;