import React, { useCallback, useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { SSButton, SSConfirmationDialog, SSDivider } from '@ss/ui-components';
import { buttonTheme } from 'themes/button.theme';
import { dividerTheme } from 'themes/divider.theme';
import CompanyInfo from 'components/form/CompanyInfo';
import ClientServices from 'utils/services/ClientService';
import useQuery from 'hooks/useQuery';
import { convertIntoBase64Image, convertIntoPhoneFormat } from 'utils/helpers/dataConverters';
import { UserContext } from 'context/user';
import { confirmationDialogTheme } from 'themes/confirmationDialog.theme';
import useModal from 'hooks/useModal';

function CompanyEdit(props) {
  const { handelClose } = props;
  const { userDispatch } = useContext(UserContext);
  const query = useQuery();
  const id = query.get('id');
  const [clientDetails, setClientsDetails] = useState({});
  const [filesContainer, setFilesContainer] = useState({});
  const resetModal = useModal();
  const {
    control,
    setValue,
    formState: { errors },
    clearErrors,
    watch,
    handleSubmit,
    register,
  } = useForm();

  register('companyProfilePic', { required: true });

  const fetchClientDetails = useCallback(async () => {
    if (id) {
      const data = await ClientServices.getClientDetails(id, userDispatch);
      setClientsDetails(data);
    }
  }, [id, userDispatch]);

  useEffect(() => {
    fetchClientDetails();
  }, [fetchClientDetails]);

  useEffect(() => {
    if (clientDetails && clientDetails !== undefined && Object.keys(clientDetails).length) {
      setValue('companyName', clientDetails.name);
      setValue('companyEmail', clientDetails.email);
      setValue('companyWebsite', clientDetails.websiteUrl);
      setValue('companyContact', convertIntoPhoneFormat(clientDetails.contactNumber));
      setValue('companyDescription', clientDetails.description);
      setValue('companyProfilePic', convertIntoBase64Image(clientDetails.photo));
      setValue('companyAddress', clientDetails.address);
      setValue('companyCity', clientDetails.city);
      setValue('companyZipCode', clientDetails.zipcode);
      setValue('companyState', clientDetails.state);
      setValue('companyCountry', clientDetails.country);
    }
  }, [clientDetails, setValue]);

  const handleFile = useCallback(
    (file, sourceName) => {
      const filesContainerCopy = { ...filesContainer };
      filesContainerCopy[sourceName] = file;
      setFilesContainer(filesContainerCopy);
    },
    [filesContainer],
  );

  const onSubmit = (data) => {
    const { updateCompany } = ClientServices;
    updateCompany(data, filesContainer, userDispatch, id, handelClose);
  };

  const handleResetPassword = () => {
    const { forgetPassword } = ClientServices;
    forgetPassword(watch('companyEmail'), userDispatch, resetModal.handleClose);
  };

  const handleDeactivateClient = () => {
    const { deactivateClient } = ClientServices;
    deactivateClient(id, userDispatch, handelClose);
  };

  const handleActivateClient = () => {
    const { activateClient } = ClientServices;
    activateClient(id, userDispatch, handelClose);
  };

  const handleDeleteClient = () => {
    const { deleteClient } = ClientServices;
    deleteClient(id, userDispatch, handelClose);
  };

  const isActive = clientDetails.active || false;
  const ActiveInActiveTitle = isActive ? 'Deactivate Client' : 'Activate Client';

  return (
    <Grid container>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '40px 0 0 0' }}>
          <CompanyInfo
            control={control}
            setValue={setValue}
            errors={errors}
            clearErrors={clearErrors}
            watch={watch}
            handleFile={handleFile}
            disabledEmail={id && id !== undefined ? true : false}
          />
        </Grid>
        <SSDivider style={dividerTheme('dark').primary} />
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justifyContent="space-between">
            {/* <Grid item>
              <SSButton onClick={resetModal.handleOpen} {...buttonTheme('dark').secondary}>
                Reset Password
              </SSButton>
            </Grid> */}
            <Grid item>
              <Grid container>
                <Grid item>
                  <SSButton type="submit" {...buttonTheme('dark').secondary}>
                    Update Client Info
                  </SSButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <SSButton
                    onClick={isActive ? handleDeactivateClient : handleActivateClient}
                    {...buttonTheme('dark').secondary}>
                    {ActiveInActiveTitle}
                  </SSButton>
                </Grid>
                <Grid item>
                  <SSButton onClick={handleDeleteClient} {...buttonTheme('dark').secondary}>
                    Delete Client
                  </SSButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <SSConfirmationDialog
        open={resetModal.modalState.open}
        {...confirmationDialogTheme('dark').secondary}
        buttonPrimaryTheme={{ ...buttonTheme('dark').primary }}
        buttonSecondaryTheme={{ ...buttonTheme('dark').secondary }}
        handleSave={handleResetPassword}
        handleCancel={resetModal.handleClose}
        primaryBtnLabel="Yes, Reset"
        secondaryBtnLabel="cancel"
        content="Link will be sent to client’s register email id with instructions to reset new password."
        title="Reset Password?"
      />
    </Grid>
  );
}

export default React.memo(CompanyEdit);
