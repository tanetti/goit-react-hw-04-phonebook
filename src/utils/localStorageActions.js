import { CONTACTS_LS_KEY } from 'constants/localStorageKeys';

export const readContactsFromLS = () => {
  const savedContacts = localStorage.getItem(CONTACTS_LS_KEY);

  if (savedContacts) {
    try {
      const parsedContacts = JSON.parse(savedContacts);

      for (const contact of parsedContacts) {
        if (
          !Object.keys(contact).includes('id') ||
          !Object.keys(contact).includes('name') ||
          !Object.keys(contact).includes('number')
        )
          throw new Error();
      }

      return parsedContacts;
    } catch {
      console.log('Local Storage corrupted!');
    }
  }
};

export const writeContactsToLS = contacts =>
  localStorage.setItem(CONTACTS_LS_KEY, JSON.stringify(contacts));
