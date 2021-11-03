import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSCard, SSTypography } from '@ss/ui-components';
import editorCardTheme from './index.theme';
import LogoContainer from 'containers/Logo';
import BuilderIcon from 'components/icons/Builder';

function EditorCard(props) {
  const { theme = 'dark' } = props;

  return (
    <SSCard {...editorCardTheme(theme).card}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography label="EDITOR" {...editorCardTheme(theme).typography} />
          </Grid>
        </Grid>
        <LogoContainer {...editorCardTheme(theme).logo}>
          <BuilderIcon />
        </LogoContainer>
      </Grid>
    </SSCard>
  );
}

EditorCard.propTypes = {
  theme: PropTypes.string,
};

EditorCard.defaultProps = {
  theme: 'dark',
};

export default EditorCard;
