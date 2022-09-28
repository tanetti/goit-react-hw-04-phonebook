export const NAME_VALIDATION_REG_EX = new RegExp(
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
);

export const NUMBER_VALIDATION_REG_EX = new RegExp(
  '^[+]?[0-9]{1,2}[ ]?[(]{0,1}[0-9]{1,4}[)]{0,1}[- 0-9]*$'
);

// export const NUMBER_VALIDATION_REG_EX = new RegExp(
//   '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}'
// );
