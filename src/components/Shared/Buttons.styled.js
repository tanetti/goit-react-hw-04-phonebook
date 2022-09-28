import styled from 'styled-components';

export const SafeButton = styled.button`
  display: block;

  min-width: ${({ theme }) => theme.sizes.buttonMinW};
  height: ${({ theme }) => theme.sizes.buttonH};
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};

  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  color: ${({ theme }) => theme.colors.whiteText};
  background-color: ${({ theme }) => theme.colors.mainAccent};

  border: ${({ theme }) => theme.borders.accent};
  border-radius: ${({ theme }) => theme.radii.roundSide};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.backgroundColor},
    ${({ theme }) => theme.transitions.borderColor};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.darkBG};

    border: ${({ theme }) => theme.borders.accentTransparent};

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkBG};

      border: ${({ theme }) => theme.borders.accentTransparent};
    }
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.success};

    border: ${({ theme }) => theme.borders.success};
  }
`;

export const UnsafeButton = styled.button`
  display: block;

  min-width: ${({ theme }) => theme.sizes.buttonMinW};
  height: ${({ theme }) => theme.sizes.buttonH};
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};

  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  color: ${({ theme }) => theme.colors.mainAccent};
  background-color: ${({ theme }) => theme.colors.whiteBG};

  border: ${({ theme }) => theme.borders.accent};
  border-radius: ${({ theme }) => theme.radii.roundSide};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.borderColor};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.error};

    border: ${({ theme }) => theme.borders.error};
  }
`;
