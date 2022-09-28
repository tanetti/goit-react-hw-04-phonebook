import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const FilterContainer = styled.label`
  position: relative;

  min-width: ${({ theme }) => theme.sizes.filterFieldMinW};
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.filterFieldMaxW};
  height: ${({ theme }) => theme.sizes.filterFieldH};
  margin-right: ${({ theme }) => theme.space[4]};

  color: ${({ theme }) => theme.colors.placeholder};

  cursor: text;

  transition: ${({ theme }) => theme.transitions.color};

  &:focus-within,
  &:hover {
    color: ${({ theme }) => theme.colors.darkText};
  }
`;

export const FilterField = styled.input`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
  padding-left: ${({ theme }) =>
    `${Math.floor(
      parseInt(theme.space[4]) + parseInt(theme.sizes.filterFieldIcon) * 1.4
    )}px`};

  background-color: ${({ theme }) => theme.colors.darkBG};

  border: ${({ theme }) => theme.borders.accentTransparent};
  border-radius: ${({ theme }) => theme.radii.roundSide};

  outline: transparent;

  transition: ${({ theme }) => theme.transitions.borderColor},
    ${({ theme }) => theme.transitions.backgroundColor};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};

    transition: ${({ theme }) => theme.transitions.color};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBG};

    border: ${({ theme }) => theme.borders.light};
  }

  &:focus {
    &::placeholder {
      color: transparent;
    }

    background-color: ${({ theme }) => theme.colors.lightBG};

    border: ${({ theme }) => theme.borders.accent};
  }
`;

export const FilterIcon = styled(BiSearch)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.space[4]};

  pointer-events: none;

  transform: translateY(-50%);

  fill: currentColor;
`;
