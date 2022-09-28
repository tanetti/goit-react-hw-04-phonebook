import { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: [],
    filter: '',

    shouldAddContactModalShown: false,
    modalActivator: null,
  };

  componentDidMount() {
    const savedContacts = readContactsFromLS();

    if (savedContacts) this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(_, { contacts: prevContacts }) {
    const { contacts: currContacts } = this.state;

    if (prevContacts.length !== currContacts.length)
      writeContactsToLS(currContacts);
  }

  toggleAddContactModal = evt => {
    this.toggleAriaExpanded(
      evt ? evt.currentTarget : this.state.modalActivator
    );

    this.setState({
      shouldAddContactModalShown: evt ? true : false,
      modalActivator: evt ? evt.currentTarget : null,
    });
  };

  toggleAriaExpanded = target => {
    if (target.ariaExpanded === 'false') return (target.ariaExpanded = true);
    target.ariaExpanded = false;
  };

  addNewContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    Notify.success(`New contact was successfully added`);
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));

    Notify.success(`Contact was successfully deleted`);
  };

  changeFilterValue = filterValue => {
    this.setState({ filter: filterValue });
  };

  render() {
    return (
      <>
        <GlobalStyles />
        <header>
          <HeaderContainer>
            <ContactFilter onFilterChange={this.changeFilterValue} />
            <AddContactButton
              type="button"
              aria-label="Add new contact"
              aria-controls="modal-root"
              aria-expanded={false}
              onClick={this.toggleAddContactModal}
            >
              <AddContactButtonIcon size={theme.sizes.addContactIcon} />
              <AddContactButtonTitle>Add contact</AddContactButtonTitle>
            </AddContactButton>
            {this.state.shouldAddContactModalShown && (
              <Modal
                title="Add new contact"
                onClose={this.toggleAddContactModal}
              >
                <AddContactForm
                  contacts={this.state.contacts}
                  onNewContactAdd={this.addNewContact}
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
                contacts={this.state.contacts}
                filter={this.state.filter}
                onContactDelete={this.deleteContact}
              />
            </Container>
          </Section>
        </main>
      </>
    );
  }
}
