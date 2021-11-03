import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSCard, SSTypography } from '@ss/ui-components';
import LogoContainer from 'containers/Logo';
import screenSaverSmallCardTheme from './index.theme';
import MediaIcon from 'components/icons/Media';
import { useHistory } from 'react-router';

function MediaSmallCard(props) {
  const { theme = 'dark' } = props;
  const history = useHistory();

  return (
    <SSCard
      {...screenSaverSmallCardTheme(theme).card}
      onClick={() => {
        history.push('/media');
      }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography label="MEDIA" {...screenSaverSmallCardTheme(theme).typography} />
          </Grid>
        </Grid>
        <LogoContainer {...screenSaverSmallCardTheme(theme).logo}>
          <MediaIcon width="100px" />
        </LogoContainer>
      </Grid>
    </SSCard>
  );
}

MediaSmallCard.propTypes = {
  dark: PropTypes.string,
};

MediaSmallCard.defaultProps = {
  dark: 'dark',
};

export default MediaSmallCard;
