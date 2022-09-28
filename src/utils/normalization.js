export const truncateInnerWhitespaces = value => {
  if (!value) return '';

  return value.replace(/\s\s+/g, ' ');
};

export const normalizeNumber = number =>
  number
    .split('')
    .map(numSymb => (!isNaN(numSymb) && numSymb !== ' ' && numSymb) || null)
    .join('');

export const normalizeFilterValue = filterValue => {
  const prenormalizedFilterValue = filterValue.trim().toLowerCase();

  if (
    !isNaN(prenormalizedFilterValue[0]) ||
    prenormalizedFilterValue[0] === '+' ||
    prenormalizedFilterValue[0] === ')' ||
    prenormalizedFilterValue[0] === '(' ||
    prenormalizedFilterValue[0] === '-'
  )
    return truncateInnerWhitespaces(normalizeNumber(prenormalizedFilterValue));

  return truncateInnerWhitespaces(prenormalizedFilterValue);
};

export const normalizeNumberForCallLink = number =>
  number
    .split('')
    .map(
      numSymb =>
        (((!isNaN(numSymb) && numSymb !== ' ') || numSymb === '+') &&
          numSymb) ||
        null
    )
    .join('');
