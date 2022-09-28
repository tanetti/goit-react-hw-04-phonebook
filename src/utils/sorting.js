const sortContactsByName = isOrderASC => (a, b) => {
  const aLower = a.name.toLowerCase();
  const bLower = b.name.toLowerCase();

  if (isOrderASC) {
    if (aLower > bLower) return 1;
    if (aLower < bLower) return -1;

    return 0;
  } else {
    if (aLower < bLower) return 1;
    if (aLower > bLower) return -1;

    return 0;
  }
};

const sortContactsByNumber = isOrderASC => (a, b) => {
  if (isOrderASC) {
    if (a.number > b.number) return 1;
    if (a.number < b.number) return -1;

    return 0;
  } else {
    if (a.number < b.number) return 1;
    if (a.number > b.number) return -1;

    return 0;
  }
};

export const sortContacts = (sortField, isOrderASC) => {
  if (sortField === 'name') {
    return sortContactsByName(isOrderASC);
  }

  if (sortField === 'number') {
    return sortContactsByNumber(isOrderASC);
  }
};
