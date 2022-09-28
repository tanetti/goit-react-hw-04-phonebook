import PropTypes from 'prop-types';
import { Component } from 'react';
import { theme } from 'constants/theme';
import {
  FilterContainer,
  FilterField,
  FilterIcon,
} from './ContactFilter.styled';

export class ContactFilter extends Component {
  state = {
    filterValue: '',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.filterValue !== this.state.filterValue)
      this.props.onFilterChange(this.state.filterValue);

    this.toggleEscListener();
  }

  setFilterValue = ({ currentTarget }) => {
    this.setState({ filterValue: currentTarget.value });
  };

  onEscPress = ({ code }) => {
    if (code !== 'Escape') return;

    this.setState({ filterValue: '' });
  };

  toggleEscListener = () => {
    if (onkeydown && onkeydown !== this.onEscPress) return;
    if (onkeydown && onkeydown === this.onEscPress && this.state.filterValue)
      return;
    if (!this.state.filterValue) return (onkeydown = null);

    onkeydown = this.onEscPress;
  };

  render() {
    return (
      <FilterContainer>
        <FilterField
          type="text"
          name="filter"
          aria-label="Phonebook filter"
          placeholder="Filtered Search"
          value={this.state.filterValue}
          onChange={this.setFilterValue}
        />
        <FilterIcon size={theme.sizes.filterFieldIcon} />
      </FilterContainer>
    );
  }
}

ContactFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
