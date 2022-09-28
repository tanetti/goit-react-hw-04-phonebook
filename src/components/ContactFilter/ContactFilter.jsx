import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { theme } from 'constants/theme';
import {
  FilterContainer,
  FilterField,
  FilterIcon,
} from './ContactFilter.styled';

export const ContactFilter = ({ onFilterChange }) => {
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    onFilterChange(filterValue);
  }, [filterValue, onFilterChange]);

  const updateFilterValue = ({ currentTarget }) =>
    setFilterValue(currentTarget.value);

  const onEscPress = ({ code }) => {
    if (code !== 'Escape') return;

    setFilterValue('');
  };

  onkeydown = onEscPress;

  return (
    <FilterContainer>
      <FilterField
        type="text"
        name="filter"
        aria-label="Phonebook filter"
        placeholder="Filtered Search"
        value={filterValue}
        onChange={updateFilterValue}
      />
      <FilterIcon size={theme.sizes.filterFieldIcon} />
    </FilterContainer>
  );
};

ContactFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
