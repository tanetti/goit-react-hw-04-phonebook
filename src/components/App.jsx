import { useState, useEffect, useRef } from 'react';
import { Notify } from 'notiflix';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import { theme } from 'constants/theme';
import { readContactsFromLS, writeContactsToLS } from 'utils';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Section, Container } from 'components/Shared';
import {
  HeaderContainer,
  AddContactButton,
  AddContactButtonIcon,
  AddContactButtonTitle,
  SectionTitle,
} from 'components/App.styled';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Modal } from 'components/Modal/Modal';

Notify.init({
  position: 'right-bottom',
  distance: '20px',
  borderRadius: '8px',
  timeout: 4000,
  clickToClose: true,
  cssAnimationStyle: 'from-right',
  success: {
    background: theme.colors.success,
  },
  failure: {
    background: theme.colors.error,
  },
});

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [shouldAddContactModalShown, setShouldAddContactModalShown] =
    useState(false);
  const [modalActivator, setModalActivator] = useState(null);

  const isContactsLoadedFromLS = useRef(false);

  useEffect(() => {
    const savedContacts = readContactsFromLS();

    savedContacts && setContacts(savedContacts);
    isContactsLoadedFromLS.current = true;
  }, []);

  useEffect(() => {
    if (!isContactsLoadedFromLS.current) return;

    if (contacts.length) writeContactsToLS(contacts);
  }, [contacts]);

  const toggleAddContactModal = evt => {
    toggleAriaExpanded(evt ? evt.currentTarget : modalActivator);

    setShouldAddContactModalShown(evt ? true : false);
    setModalActivator(evt ? evt.currentTarget : null);
  };

  const toggleAriaExpanded = target => {
    if (target.ariaExpanded === 'false') return (target.ariaExpanded = true);
    target.ariaExpanded = false;
  };

  const addNewContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);

    Notify.success(`New contact was successfully added`);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );

    Notify.success(`Contact was successfully deleted`);
  };

  return (
    <>
      <GlobalStyles />
      <header>
        <HeaderContainer>
          <ContactFilter onFilterChange={setFilter} />
          <AddContactButton
            type="button"
            aria-label="Add new contact"
            aria-controls="modal-root"
            aria-expanded={false}
            onClick={toggleAddContactModal}
          >
            <AddContactButtonIcon size={theme.sizes.addContactIcon} />
            <AddContactButtonTitle>Add contact</AddContactButtonTitle>
          </AddContactButton>
          {shouldAddContactModalShown && (
            <Modal
              title="Add new contact"
              onClose={toggleAddContactModal}
              prevOnKeyDown={onkeydown}
            >
              <AddContactForm
                contacts={contacts}
                onNewContactAdd={addNewContact}
              />
            </Modal>
          )}
        </HeaderContainer>
      </header>

      <main>
        <PageTitle title="My awesome phonebook" />
        <Section>
          <Container>
            <SectionTitle>Phonebook</SectionTitle>
            <ContactsList
              contacts={contacts}
              filter={filter}
              onContactDelete={deleteContact}
            />
          </Container>
        </Section>
      </main>
    </>
  );
};
