import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Grid } from '@material-ui/core';
import { SSTypography, SSUploader } from '@ss/ui-components';
import ControlledInput from 'components/ControlledInput';
import { buttonTheme } from 'themes/button.theme';
import { uploaderTheme } from 'themes/uploader.theme';
import { typographyTheme } from 'themes/typography.theme';
import { profileUploaderTheme } from '../CompanyInfo';
import { imagePreviewTheme } from 'themes/imagePreview.theme';
// import ControlledMaskedInput from 'components/ControlledMaskedInput';

const inputTheme = {
  width: '570px',
};

const AdminForm = React.forwardRef((props) => {
  const { control, handleFile, setValue, errors, watch } = props;

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((el) => {
      const reader = new FileReader();
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        // Initiate the JavaScript Image object.
        handleFile(el, 'adminProfileFile');
        setValue('adminProfilePic', binaryStr);
      };
      reader.readAsDataURL(el);
    });
  };

  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={12} sm={6} md={7} lg={7}>
        <Grid container direction="column">
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* Username"
              name="adminUserName"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'Admin Name is a required field'}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* First Name"
              name="adminFName"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'Admin Name is a required field'}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* Last Name"
              name="adminLName"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'Admin Name is a required field'}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* Admin Email ID"
              name="adminEmail"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'Admin Email is a required field'}
            />
          </Grid>
          {/* <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledMaskedInput
              label="* Admin's Contact Number"
              name="adminContact"
              control={control}
              rules={{ required: true }}
              theme={{}}
              errorMessage={'Admin Contact Number is a required field'}
            />
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={5}>
        <Grid container justifyContent="flex-end" direction="column" alignItems="flex-end">
          <Grid item>
            <FormControl error={errors}>
              <SSTypography
                label="Admin Picture"
                {...typographyTheme('dark').other}
                margin="0 0 13px 0"
              />
              <SSUploader
                handleFileDrop={onDrop}
                accept="image/jpeg, image/png"
                src={watch('adminProfilePic')}
                name="adminProfilePic"
                defaultDescription="Drop picture here to
            instantly upload "
                buttonPrimaryTheme={buttonTheme('dark').secondary}
                styles={{
                  ...uploaderTheme('dark').primary,
                  ...profileUploaderTheme,
                }}
                imagePreviewStyle={imagePreviewTheme('dark').primary}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

AdminForm.defaultProps = {
  control: PropTypes.func.isRequired,
  onAdminFormSubmit: PropTypes.func.isRequired,
};

AdminForm.propTypes = {};

export default AdminForm;
