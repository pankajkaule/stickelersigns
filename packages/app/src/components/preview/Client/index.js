import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid } from '@material-ui/core';
import { SSButton, SSTypography } from '@ss/ui-components';
import { typographyTheme } from 'themes/typography.theme';
import { buttonTheme } from 'themes/button.theme';

function ClientInfoPreview(props) {
  const {
    setStep,
    adminUserName,
    adminEmail,
    adminFName,
    adminLName,
    companyContact,
    companyDescription,
    companyEmail,
    companyName,
    companyWebsite,
    companyProfilePic,
    adminProfilePic,
    companyCountry,
    companyState,
    companyZipCode,
    companyAddress,
    companyCity,
  } = props;
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '40px 0 0 0' }}>
        <SSTypography
          label="On click of Add Client, verification mail will be sent to <admin@email.com> "
          useDefault
          variant="info"
          overflowEllipsis={false}
        />
        <SSTypography
          label=" Please ask admin to check the mailbox and click on the link provided to get started. "
          useDefault
          variant="info"
          overflowEllipsis={false}
        />
      </Grid>
      <Grid container xs={12} sm={12} md={12} lg={12} style={{ margin: '40px 0 0 0' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid container>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Avatar
                  src={companyProfilePic}
                  variant="rounded"
                  style={{ width: '170px', height: '170px' }}
                />
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <Grid container direction="column">
                  <SSTypography
                    label={`Client / Company Name: ${companyName}`}
                    useDefault
                    variant="infoProfile"
                    overflowEllipsis={false}
                  />
                  <SSTypography
                    label={`Email: ${companyEmail}`}
                    useDefault
                    variant="infoProfile"
                    overflowEllipsis={false}
                  />
                  <SSTypography
                    label={`Website: ${companyWebsite}`}
                    useDefault
                    variant="infoProfile"
                    overflowEllipsis={false}
                  />
                  <SSTypography
                    label={`Contact: ${companyContact}`}
                    {...typographyTheme('dark').infoProfile}
                    overflowEllipsis={false}
                  />
                  <SSTypography
                    label={`Address: ${companyAddress}`}
                    useDefault
                    variant="infoProfile"
                    overflowEllipsis={false}
                  />
                  <SSTypography
                    label={`State: ${companyState}`}
                    {...typographyTheme('dark').infoProfile}
                    overflowEllipsis={false}
                  />
                  <SSTypography label={`City: ${companyCity}`} useDefault variant="infoProfile" />
                  <SSTypography
                    label={`Zip Code: ${companyZipCode}`}
                    useDefault
                    variant="infoProfile"
                    overflowEllipsis={false}
                  />
                  <SSTypography
                    label={`Country: ${companyCountry}`}
                    useDefault
                    variant="infoProfile"
                    overflowEllipsis={false}
                  />
                  <SSTypography
                    label={`Description: ${companyDescription}`}
                    useDefault
                    variant="infoProfile"
                    overflowEllipsis={false}
                  />
                  <Grid item style={{ margin: '10px 0 0 0' }}>
                    <SSButton onClick={() => setStep(0)} {...buttonTheme('dark').secondary}>
                      Edit
                    </SSButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid container>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Avatar
                  src={adminProfilePic}
                  variant="rounded"
                  style={{ width: '170px', height: '170px' }}
                />
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <Grid container direction="column">
                  <SSTypography
                    label={`Admin User Name: ${adminUserName}`}
                    useDefault
                    variant="infoProfile"
                    overflowEllipsis={false}
                  />
                  <SSTypography
                    label={`Admin First Name: ${adminFName}`}
                    useDefault
                    variant="infoProfile"
                    overflowEllipsis={false}
                  />
                  <SSTypography
                    label={`Admin Last Name: ${adminLName}`}
                    useDefault
                    variant="infoProfile"
                    overflowEllipsis={false}
                  />
                  <SSTypography
                    label={`Email: ${adminEmail}`}
                    useDefault
                    variant="infoProfile"
                    overflowEllipsis={false}
                  />

                  <Grid item style={{ margin: '10px 0 0 0' }}>
                    <SSButton onClick={() => setStep(1)} {...buttonTheme('dark').secondary}>
                      Edit
                    </SSButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

ClientInfoPreview.propTypes = {
  setStep: PropTypes.func.isRequired,
};

ClientInfoPreview.defaultProps = {};

export default ClientInfoPreview;
