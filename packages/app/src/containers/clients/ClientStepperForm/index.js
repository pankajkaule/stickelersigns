import React, { useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { SSButton, SSDivider, SSDrawer, SSStepper } from '@ss/ui-components';
import drawerTheme from 'themes/drawer.theme';
import { useLocation } from 'react-router';
import useDrawerAutoScroll from 'hooks/useDrawereAutoScroll';
import { Grid } from '@material-ui/core';
import useStyles from './index.styles';
import { stepperIconTheme } from 'themes/stepperIcon.theme';
import { stepperLabelTheme } from 'themes/stepperLabel.theme';
import { buttonTheme } from 'themes/button.theme';
import CompanyInfo from 'components/form/CompanyInfo';
import { useForm } from 'react-hook-form';
import AdminForm from 'components/form/Admin';
import ClientInfoPreview from 'components/preview/Client';
import { dividerTheme } from 'themes/divider.theme';
import ClientServices from 'utils/services/ClientService';
import { UserContext } from 'context/user';

const stepsList = ['Add New Client', 'Add Admin', 'Verify Info'];

function ClientStepperForm(props) {
  const { handleClose, theme } = props;
  const { userDispatch } = useContext(UserContext);
  const [step, setStep] = useState(0);
  const [filesContainer, setFilesContainer] = useState({});
  const location = useLocation();
  const { drawerTop } = useDrawerAutoScroll({ id: 'client-stepper-form' });
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    getValues,
    register,
    setValue,
    formState: { errors },
    clearErrors,
    watch,
    reset,
  } = useForm();

  register('companyProfilePic', { required: true });
  register('adminProfilePic');

  const handleNext = () => setStep((prev) => prev + 1);

  const handleClosePopup = () => {
    setStep(0);
    handleClose();
    reset();
    setFilesContainer({});
  };

  const handleCreation = (data) => {
    const { createCompany } = ClientServices;
    createCompany(data, filesContainer, userDispatch, handleClosePopup);
  };

  // const handleSaveAsDraft = () => {
  //   console.log(getValues());
  // };

  const onSubmit = (data) => {
    if (step < 2 && data) {
      handleNext();
    } else {
      handleCreation(data);
    }
  };

  const handleFile = useCallback(
    (file, sourceName) => {
      const filesContainerCopy = { ...filesContainer };
      filesContainerCopy[sourceName] = file;
      setFilesContainer(filesContainerCopy);
    },
    [filesContainer],
  );
  const getStepComponents = useCallback(() => {
    switch (step) {
      case 0:
        return (
          <CompanyInfo
            control={control}
            errors={errors}
            setValue={setValue}
            handleFile={handleFile}
            clearErrors={clearErrors}
            watch={watch}
          />
        );
      case 1:
        return (
          <AdminForm
            control={control}
            errors={errors}
            setValue={setValue}
            handleFile={handleFile}
            clearErrors={clearErrors}
            watch={watch}
          />
        );
      case 2:
        return <ClientInfoPreview setStep={setStep} {...getValues()} />;

      default:
        return <CompanyInfo control={control} />;
    }
  }, [step, control, getValues, errors, clearErrors, setValue, watch, handleFile]);

  const stepsActionLabel = stepsList.length - 1 === step ? 'Add Client' : 'Next Step';

  return (
    <SSDrawer
      anchor="bottom"
      open={location.pathname === '/clients/new'}
      onClose={handleClosePopup}
      id={'client-stepper-form'}
      top={drawerTop}
      {...drawerTheme(theme).drawer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justify="center" style={{ padding: '40px' }}>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.container}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <SSStepper
                  iconStyles={stepperIconTheme(theme).primary}
                  stepList={stepsList}
                  stepValue={step}
                  styles={stepperLabelTheme(theme).primary}
                />
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <SSButton onClick={handleClosePopup} {...buttonTheme(theme).secondary}>
                      Cancel
                    </SSButton>
                  </Grid>
                  <Grid item>
                    <SSButton type="submit" {...buttonTheme(theme).primary}>
                      {stepsActionLabel}
                    </SSButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.container}>
            <SSDivider style={dividerTheme('dark').secondary} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.container}>
            {getStepComponents()}
          </Grid>
        </Grid>
      </form>
    </SSDrawer>
  );
}

ClientStepperForm.propTypes = {
  handleClose: PropTypes.func,
  theme: PropTypes.string,
};

ClientStepperForm.defaultProps = {
  handleClose: () => {},
  theme: 'dark',
};

export default ClientStepperForm;
