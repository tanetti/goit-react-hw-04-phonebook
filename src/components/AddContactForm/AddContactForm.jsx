import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { createNewValidationSchema, truncateInnerWhitespaces } from 'utils';
import { theme } from 'constants/theme';
import { SafeButton, UnsafeButton } from 'components/Shared';
import {
  StyledForm,
  FormFieldContainer,
  FormField,
  FormFieldLabel,
  UserFieldIcon,
  NumberFieldIcon,
  ButtonContainer,
  ErrorMessageField,
} from './AddContactForm.styled';

export const AddContactForm = ({ contacts, onNewContactAdd, onClose }) => {
  const validationSchema = createNewValidationSchema(contacts);

  const onNewContactSubmit = newContact => {
    onNewContactAdd({
      id: nanoid(14),
      name: truncateInnerWhitespaces(newContact.name),
      number: truncateInnerWhitespaces(newContact.number),
    });

    onClose();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => onNewContactSubmit(validationSchema.cast(values))}
    >
      {({ values, errors }) => (
        <StyledForm autoComplete="off">
          <FormFieldContainer isError={errors.name} isFilled={values.name}>
            <FormField
              id="contact-name"
              name="name"
              placeholder=" "
              type="text"
            />
            <UserFieldIcon size={theme.sizes.addFormFieldIcon} />
            <FormFieldLabel htmlFor="contact-name">Contact name</FormFieldLabel>
            <ErrorMessageField isError={errors.name} isFilled={values.name}>
              {errors.name}
            </ErrorMessageField>
          </FormFieldContainer>
          <FormFieldContainer isError={errors.number} isFilled={values.number}>
            <FormField
              id="contact-number"
              name="number"
              placeholder=" "
              type="tel"
            />
            <NumberFieldIcon size={theme.sizes.addFormFieldIcon} />
            <FormFieldLabel htmlFor="contact-number">
              Phone number
            </FormFieldLabel>
            <ErrorMessageField isError={errors.number} isFilled={values.number}>
              {errors.number}
            </ErrorMessageField>
          </FormFieldContainer>
          <ButtonContainer>
            <UnsafeButton type="button" onClick={onClose}>
              Cancel
            </UnsafeButton>
            <SafeButton
              type="submit"
              disabled={
                !values.name || !values.number || errors.name || errors.number
              }
            >
              Add contact
            </SafeButton>
          </ButtonContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

AddContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onNewContactAdd: PropTypes.func.isRequired,
};
