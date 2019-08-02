import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./style.css";


const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  stepLabel: {
    backgroundColor: 'yellow'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: '#364954',
    color: 'white'
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  }
}));

function getSteps() {
  return ['Initiate a project within handShake', 'Acquire appraisals from local contractors', 'Select contractor', 'Complete project and make down payment', 'Coordinate to schedule repair work', 'Post photos of completed work and generate final invoice', 'Finish payment process and complete project'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `The Homeowner/Property Manager (PM) initiates a Project within handShake, detailing the need for the repair, complete with images, a full description, and insurance coverage information.`;
    case 1:
      return 'Quotes provided include photos taken by contractor of the repair, with pictures, a description, a place to attach files and a quote (if applicable).';
    case 2:
      return `The Homeowner/PM selects a contractor to complete the requested work.`;
    case 3:
      return 'The Homeowner/PM completes an electronic contract with Contractor, as well as optional 3rd parties and makes the deposit/down payment for the work.';
    case 4:
      return 'Once payment is received, the Contractor coordinates with the Tenant to schedule repair work, based on availability';
    case 5:
      return 'Contractor posts photos of completed work and generates final invoice.'
    case 6:
      return 'The Homeowner/PM makes payment as agreed and marks the Project complete.'
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
