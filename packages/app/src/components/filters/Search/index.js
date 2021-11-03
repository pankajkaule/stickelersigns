import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { SSButton, SSSearch } from '@ss/ui-components';
import { inputTheme } from 'themes/inputTheme';
import basicActionsTheme from 'components/BasicActions/index.theme';

function Search(props) {
  const { toggle, handleToggle, value, onChange, handleClear, label, theme } = props;
  return toggle ? (
    <form noValidate autoComplete="off">
      <SSSearch
        placeholder={label}
        {...inputTheme(theme).searchBox}
        onChange={onChange}
        value={value}
        handleClear={handleClear}
        onBlur={() => handleToggle(value.length > 0 ? true : false)}
        autoFocus={toggle}
      />
    </form>
  ) : (
    <SSButton onClick={() => handleToggle(true)} {...basicActionsTheme(theme).searchButton}>
      <SearchIcon style={{ width: '14px', height: '14px' }} />
    </SSButton>
  );
}

Search.propTypes = {
  toggle: PropTypes.bool,
  handleToggle: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  handleClear: PropTypes.func,
  label: PropTypes.string,
  theme: PropTypes.string,
};

Search.defaultProps = {
  toggle: false,
  handleToggle: () => {},
  value: '',
  onChange: () => {},
  handleClear: () => {},
  label: '',
  theme: 'dark',
};

export default Search;
