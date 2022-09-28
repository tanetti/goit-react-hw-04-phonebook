import styled from 'styled-components';
import { BiUserPlus } from 'react-icons/bi';

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: ${({ theme }) => theme.space[4]};

  background-color: ${({ theme }) => theme.colors.whiteBG};
  backdrop-filter: blur(4px);

  border-bottom: ${({ theme }) => theme.borders.thin};
`;

export const AddContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  min-width: ${({ theme }) => theme.sizes.buttonMinW};
  height: ${({ theme }) => theme.sizes.filterFieldH};
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};

  color: ${({ theme }) => theme.colors.whiteText};
  background-color: ${({ theme }) => theme.colors.mainAccent};

  border: ${({ theme }) => theme.borders.accent};
  border-radius: ${({ theme }) => theme.radii.roundSide};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.backgroundColor},
    ${({ theme }) => theme.transitions.borderColor};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.mainAccentHovered};

    border: ${({ theme }) => theme.borders.accentHovered};
  }
`;

export const AddContactButtonIcon = styled(BiUserPlus)`
  fill: currentColor;
`;

export const AddContactButtonTitle = styled.span`
  padding-left: ${({ theme }) => theme.space[3]};

  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.beforeMin}) {
    display: none;
  }
`;

export const SectionTitle = styled.h2`
  margin: ${({ theme }) => theme.space[0]};
  margin-top: ${({ theme }) => theme.sizes.headerH};
  margin-bottom: ${({ theme }) => theme.space[5]};

  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  text-transform: uppercase;
`;
