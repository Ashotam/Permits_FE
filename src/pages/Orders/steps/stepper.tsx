import React, { useState } from 'react';
import { Button, Container, Step, StepLabel, Stepper, Typography } from '@mui/material';
import PermitStep from "./permit"; // Corrected import statement
import VehicaleStep from './vehicleStep';
import CompanyStep from './companyStep';

import { usePermitStore } from '../store';
const steps = [
  {label:"PERMITS",
   index:1
  },
  {label:"VEHICLE",
   index:2
  },
  {label:"COMPANY",
   index:3
  }
 
];



const MultiStepForm: React.FC = ()   => {

 
  const isPermitStapComplated = usePermitStore(state=>state.isPermitStapComplated())
  const isVehicalStepCompleted = usePermitStore(state=>state.isVehicalStepCompleted())
  const isCompanyStapComplated = usePermitStore(state=>state.isCompanyStapComplated())


  const [activeStep, setActiveStep] = useState(1);
 
  type StepKey = 'PERMITS' | 'VEHICLE' | 'COMPANY';
  const stepsValidation: Record<StepKey, { isValid: boolean; errorText: string }> = {
    'PERMITS': { isValid: !isPermitStapComplated, errorText: 'Please Select Permit' },
    'VEHICLE': { isValid: !isVehicalStepCompleted, errorText: 'Please Select Vehicle' },
    'COMPANY': { isValid: !isCompanyStapComplated, errorText: 'Please Select Company' },
  };
  
  const isStepFailed = (label: string) => {
    const stepInfo = stepsValidation[label as StepKey];
    return stepInfo ? stepInfo.isValid : false;
  };
  // const handleNext = () => {
  //   // Check if the current step's input fields are valid before allowing the user to proceed
 

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };



  const getStepContent = (step: number) => {
    switch (step) {
      case 1:
        return (
          <PermitStep />
        );
      case 2:
        return (
        
          <VehicaleStep />
        );
      case 3:
        return (
          <CompanyStep />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} style={{ margin: "32px" }}>
        {steps.map(({label,index}) => {
           const labelProps: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};
          if (isStepFailed(label)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                {stepsValidation[label as StepKey].errorText}
              </Typography>
            );
            labelProps.error = true;
          }
          return ( <Step key={index} >
            <StepLabel  {...labelProps} onClick={()=>setActiveStep(index)}>{label}</StepLabel>
          </Step>)
        }
          
         
        )}
      </Stepper>
   
        {activeStep === steps.length+1 ? (
          <div>
            <Typography variant="h5">All steps completed</Typography>
            {/* <Button type="submit" variant="contained" color="primary">
              Submit
            </Button> */}
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              {
                isPermitStapComplated && isCompanyStapComplated && isVehicalStepCompleted && 
              <Button type="submit" variant="contained" color="primary" style={{margin:"16px"}}>
                Add to card
              </Button>
              }
            
            </div>
          </div>
        )}
    </Container>
  );
};

export default MultiStepForm;