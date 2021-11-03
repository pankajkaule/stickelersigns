import React from 'react';
import PropTypes from 'prop-types';
import { FormHelperText, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import ControlledInput from 'components/ControlledInput';
import { SSTypography, SSUploader } from '@ss/ui-components';
import { typographyTheme } from 'themes/typography.theme';
import { buttonTheme } from 'themes/button.theme';
import { uploaderTheme } from 'themes/uploader.theme';
import { imagePreviewTheme } from 'themes/imagePreview.theme';
import { emailRegEx } from 'utils/api/regularExpressions';
import ControlledDropdown from 'components/ControlledDropdown';
import TooltipBtn from 'components/TooltipBtn';

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

function UserForm(props) {
  const { control, handleFile, setValue, errors, clearErrors, watch, roles, disabled, hideRole } =
    props;

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((el) => {
      const reader = new FileReader();
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        // Initiate the JavaScript Image object.
        handleFile(el, 'userProfilePic');
        setValue('userProfilePic', binaryStr);
      };
      reader.readAsDataURL(el);
    });
    clearErrors('userProfilePic');
  };

  let error = errors && errors !== undefined ? errors : {};

  const errorContent = error['userProfilePic'] ? (
    <FormHelperText
      error={errors['userProfilePic']}
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
              label="* User Name"
              name="userName"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'User Name is a required field'}
              setValue={setValue}
              disabled={disabled}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* First Name"
              name="userFName"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'First Name is a required field'}
              setValue={setValue}
              disabled={disabled}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* Last Name"
              name="userLName"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'Last Name is a required field'}
              setValue={setValue}
              disabled={disabled}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* User Email ID"
              name="userEmail"
              control={control}
              rules={{ required: true, pattern: emailRegEx }}
              theme={inputTheme}
              errorMessage={'User Email ID is a required field'}
              messageLabel={'User Email'}
              setValue={setValue}
              disabled={disabled}
            />
          </Grid>
          {hideRole ? (
            ''
          ) : (
            <Grid item>
              <Grid container>
                <ControlledDropdown
                  label="* Set Role"
                  name="userRole"
                  control={control}
                  rules={{ required: true }}
                  list={roles}
                  disabled={disabled}
                  errorMessage="Role is a required field"
                />
                <Grid item style={{ alignSelf: 'center', margin: '15px 10px 0' }}>
                  <TooltipBtn label="Please select role from the drop down that you want to assign to the user" />
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={5}>
        <Grid container justifyContent="flex-end" direction="column" alignItems="flex-end">
          <Grid item>
            <SSTypography
              label="User Picture"
              {...typographyTheme('dark', '').other}
              margin="0 0 13px 0"
            />
            <SSUploader
              disabled={disabled}
              handleFileDrop={onDrop}
              accept="image/jpeg, image/png"
              src={watch('userProfilePic')}
              name="userProfilePic"
              defaultDescription="Drop picture here to
instantly upload "
              buttonPrimaryTheme={buttonTheme('dark').primary}
              styles={{
                ...uploaderTheme('dark').primary,
                ...profileUploaderTheme,
              }}
              imagePreviewStyle={imagePreviewTheme('dark').secondary}
            />
            {errorContent}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

UserForm.propTypes = {
  control: PropTypes.func.isRequired,
  handleFile: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.object).isRequired,
  clearErrors: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  hideRole: PropTypes.bool,
};

useForm.defaultProps = {
  disabled: false,
  hideRole: false,
};

export default UserForm;
