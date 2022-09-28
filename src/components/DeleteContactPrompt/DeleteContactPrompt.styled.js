import styled from 'styled-components';
import { BiUserX } from 'react-icons/bi';

export const DelettingCaptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.error};

  margin-bottom: ${({ theme }) => theme.space[5]};
`;

export const DelettingContact = styled.p`
  margin: 0;

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const DelettingContactIcon = styled(BiUserX)`
  fill: currentColor;

  margin-right: ${({ theme }) => theme.space[4]};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
