import styled from 'styled-components';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';

export const TableDataRow = styled.tr`
  background-color: ${({ theme, isLight }) =>
    isLight ? theme.colors.tableRowLight : theme.colors.tableRowDark};

  transition: ${({ theme }) => theme.transitions.backgroundColor};

  &:hover {
    background-color: ${({ theme, isLight }) =>
      isLight
        ? theme.colors.tableRowLightHovered
        : theme.colors.tableRowDarkHovered};
  }
`;

export const TableDataCell = styled.td`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};

  font-size: ${({ theme }) => theme.fontSizes.s};

  color: ${({ theme }) => theme.colors.darkText};

  &:first-child {
    width: ${({ theme }) => theme.sizes.callLink};
    padding: ${({ theme }) => theme.space[2]};
  }

  &:nth-child(2) {
    border-right: ${({ theme }) => theme.borders.thin};
  }

  &:nth-child(3) {
    text-align: right;
  }

  &:last-child {
    width: ${({ theme }) => theme.sizes.deleteButton};
    padding: ${({ theme }) => theme.space[2]};
  }
`;

export const NameDataContainer = styled.span`
  display: block;

  transition: ${({ theme }) => theme.transitions.contactDataBackwardTransform};

  transform: translateX(-30px);

  ${TableDataRow}:hover &,
  ${TableDataRow}:focus-within & {
    transition: ${({ theme }) => theme.transitions.transform};

    transform: translateX(-15px);
  }
`;

export const NumberDataContainer = styled.span`
  display: block;

  transition: ${({ theme }) => theme.transitions.contactDataBackwardTransform};

  transform: translateX(30px);

  ${TableDataRow}:hover &,
  ${TableDataRow}:focus-within & {
    transition: ${({ theme }) => theme.transitions.transform};

    transform: translateX(15px);
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.sizes.deleteButton};
  height: ${({ theme }) => theme.sizes.deleteButton};

  color: ${({ theme }) => theme.colors.deleteButtonIcon};
  background-color: ${({ theme }) => theme.colors.deleteButtonBG};

  border-width: 0;

  cursor: pointer;

  outline-offset: -1px;
  opacity: 0;

  transform: scale(0.5);

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.transform};

  ${TableDataRow}:hover &,
  ${TableDataRow}:focus-within & {
    opacity: 1;

    transform: scale(1);

    transition: ${({ theme }) => theme.transitions.color},
      ${({ theme }) => theme.transitions.contactButtonsBackwardOpacity},
      ${({ theme }) => theme.transitions.contactDataBackwardTransform};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.deleteButtonIconHovered};

      transform: scale(1.2);

      transition: ${({ theme }) => theme.transitions.color},
        ${({ theme }) => theme.transitions.transform};
    }
  }
`;

export const DeleteIcon = styled(FaTimes)`
  fill: currentColor;
`;

export const CallLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.sizes.callLink};
  height: ${({ theme }) => theme.sizes.callLink};

  color: ${({ theme }) => theme.colors.callIcon};

  text-decoration: none;

  outline-offset: -1px;
  opacity: 0;

  transform: scale(0.5);

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.transform};

  ${TableDataRow}:hover &,
  ${TableDataRow}:focus-within & {
    opacity: 1;

    transform: scale(1);

    transition: ${({ theme }) => theme.transitions.color},
      ${({ theme }) => theme.transitions.contactButtonsBackwardOpacity},
      ${({ theme }) => theme.transitions.contactDataBackwardTransform};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.callLinkIconHovered};

      transform: scale(1.2);

      transition: ${({ theme }) => theme.transitions.color},
        ${({ theme }) => theme.transitions.transform};
    }
  }
`;

export const CallLinkIcon = styled(FaPhoneAlt)`
  fill: currentColor;
`;
