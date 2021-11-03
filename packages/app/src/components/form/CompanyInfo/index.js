import React from 'react';
import PropTypes from 'prop-types';
import { FormHelperText, Grid } from '@material-ui/core';
import { SSTypography, SSUploader } from '@ss/ui-components';
import ControlledInput from 'components/ControlledInput';
import { buttonTheme } from 'themes/button.theme';
import { uploaderTheme } from 'themes/uploader.theme';
import { typographyTheme } from 'themes/typography.theme';
import { emailRegEx } from 'utils/api/regularExpressions';
import { imagePreviewTheme } from 'themes/imagePreview.theme';
import ControlledMaskedInput from 'components/ControlledMaskedInput';

const inputTheme = {
  width: '570px',
};

export const profileUploaderTheme = {
  maxHeight: '250px',
  maxWidth: '250px',
  minHeight: '250px',
  minWidth: '250px',
  height: '250px',
  width: '250px',
  borderRadius: 0,
};
function CompanyInfo(props) {
  const { control, handleFile, setValue, errors, clearErrors, watch, disabledEmail } = props;

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((el) => {
      const reader = new FileReader();
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        // Initiate the JavaScript Image object.
        handleFile(el, 'companyProfileFile');
        setValue('companyProfilePic', binaryStr);
      };
      reader.readAsDataURL(el);
    });
    clearErrors('companyProfilePic');
  };

  let error = errors && errors !== undefined ? errors : {};

  const errorContent = error['companyProfilePic'] ? (
    <FormHelperText
      error={errors['companyProfilePic']}
      style={{ margin: '10px 0 0 0', color: '#FF003E' }}>
      Company Logo is a required field
    </FormHelperText>
  ) : (
    ''
  );
  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={12} sm={6} md={7} lg={7}>
        <Grid container direction="column">
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* Client / Company Name"
              name="companyName"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'Client / Company Name is a required field'}
              setValue={setValue}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* Company Email ID"
              name="companyEmail"
              control={control}
              rules={{ required: true, pattern: emailRegEx }}
              theme={inputTheme}
              errorMessage={'Company Email ID is a required field'}
              messageLabel={'Company Email'}
              setValue={setValue}
              disabled={disabledEmail}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* Website"
              name="companyWebsite"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'Website is a required field'}
              setValue={setValue}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledMaskedInput
              label="* Contact Number"
              name="companyContact"
              control={control}
              rules={{ required: true }}
              theme={{}}
              errorMessage={'Contact Number is a required field'}
              messageLabel={'Contact Number'}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* Address"
              name="companyAddress"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'Address is a required field'}
              setValue={setValue}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* City"
              name="companyCity"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'City is a required field'}
              setValue={setValue}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* Zip Code"
              type="number"
              name="companyZipCode"
              control={control}
              rules={{ required: true, maxLength: 6, minLength: 6 }}
              theme={inputTheme}
              errorMessage={'Zip Code is a required field'}
              setValue={setValue}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* State"
              name="companyState"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'State is a required field'}
              setValue={setValue}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* Country"
              name="companyCountry"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'Country is a required field'}
              setValue={setValue}
            />
          </Grid>
          <Grid item>
            <ControlledInput
              label="Client/ Company’s Description"
              name="companyDescription"
              control={control}
              theme={inputTheme}
              setValue={setValue}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={5}>
        <Grid container justifyContent="flex-end" direction="column" alignItems="flex-end">
          <Grid item>
            <SSTypography
              label="* Company Logo"
              {...typographyTheme('dark', '').other}
              margin="0 0 13px 0"
            />
            <SSUploader
              handleFileDrop={onDrop}
              accept="image/jpeg, image/png"
              src={watch('companyProfilePic')}
              name="companyProfilePic"
              defaultDescription="Drop picture here to
            instantly upload "
              buttonPrimaryTheme={buttonTheme('dark').secondary}
              styles={{
                ...uploaderTheme('dark').primary,
                ...profileUploaderTheme,
              }}
              imagePreviewStyle={imagePreviewTheme('dark').primary}
            />
            {errorContent}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

CompanyInfo.propTypes = {
  control: PropTypes.func.isRequired,
};

export default CompanyInfo;
