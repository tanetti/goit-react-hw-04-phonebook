import styled from 'styled-components';
import { Form, Field } from 'formik';
import { BiUser, BiPhone } from 'react-icons/bi';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled(Field)`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
  padding-left: ${({ theme }) => theme.space[6]};

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  color: ${({ theme }) => theme.colors.darkText};
  background-color: ${({ theme }) => theme.colors.lightBG};

  border-width: 0;
  border-bottom: ${({ theme }) => theme.borders.light};

  outline: transparent;

  transition: ${({ theme }) => theme.transitions.borderColor},
    ${({ theme }) => theme.transitions.backgroundColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBG};

    border-bottom: ${({ theme }) => theme.borders.dark};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.darkBG};

    border-bottom: ${({ theme }) => theme.borders.accent};
  }
`;

export const FormFieldLabel = styled.label`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.space[6]};

  font-size: ${({ theme }) => theme.fontSizes.m};

  color: ${({ theme }) => theme.colors.placeholder};

  pointer-events: none;

  transform: translateY(-50%);

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.transform},
    ${({ theme }) => theme.transitions.font};

  ${FormField}:not(:placeholder-shown) ~ &,
  ${FormField}:focus ~ & {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};

    transform: translateY(-39px) translateX(-62px);
  }
`;

export const FormFieldContainer = styled.div`
  position: relative;

  width: ${({ theme }) => theme.sizes.addFormFieldW};
  height: ${({ theme }) => theme.sizes.addFormFieldH};

  color: ${({ theme }) => theme.colors.placeholder};

  margin-bottom: ${({ theme }) => theme.space[5]};

  transition: ${({ theme }) => theme.transitions.color};

  &:focus-within,
  &:hover {
    color: ${({ theme }) => theme.colors.darkText};
  }

  ${FormField} {
    border-color: ${({ isError, isFilled, theme }) => {
      if (isError && isFilled) return theme.colors.error;
      if (isFilled) return theme.colors.success;
    }};
  }
`;

export const UserFieldIcon = styled(BiUser)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.space[4]};

  fill: currentColor;

  transform: translateY(-50%);
`;

export const NumberFieldIcon = styled(BiPhone)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.space[4]};

  fill: currentColor;

  transform: translateY(-50%);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ErrorMessageField = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.sizes.addFormFieldH};
  left: 0;

  width: 100%;
  padding: ${({ theme }) => theme.space[1]};

  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: right;

  color: ${({ theme }) => theme.colors.error};

  opacity: ${({ isError, isFilled }) => (isError && isFilled ? 1 : 0)};

  transition: ${({ theme }) => theme.transitions.opacity};
`;
