import * as Yup from 'yup';
import {
  NAME_VALIDATION_REG_EX,
  NUMBER_VALIDATION_REG_EX,
} from 'constants/validationRegExp';
import { truncateInnerWhitespaces } from 'utils';

Yup.addMethod(
  Yup.string,
  'notOneOfInLowercase',
  function (paramArr, errorMessage) {
    return this.test(`not-One-Of-In-Lowercase`, errorMessage, function (value) {
      const { path, createError } = this;

      if (paramArr.includes(truncateInnerWhitespaces(value?.toLowerCase()))) {
        return createError({ path, message: errorMessage });
      }
      return true;
    });
  }
);

export const createNewValidationSchema = contacts => {
  const existingContactNames = contacts.map(contact =>
    contact.name.toLowerCase()
  );

  return Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(2, 'Minimal lenght - 2')
      .max(50, 'Maximal lenght - 40')
      .matches(NAME_VALIDATION_REG_EX, 'Invalid name format')
      .notOneOfInLowercase(existingContactNames, 'Contact already exist')
      .required('Please enter contact name'),

    number: Yup.string()
      .trim()
      .matches(NUMBER_VALIDATION_REG_EX, 'Invalid phone number format')
      .min(8, 'Invalid phone number format')
      .max(20, 'Invalid phone number format')
      .required('Please enter phone number'),
  });
};
