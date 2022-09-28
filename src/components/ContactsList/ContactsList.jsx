import PropTypes from 'prop-types';
import { useState } from 'react';
import { sortContacts, normalizeFilterValue, normalizeNumber } from 'utils';
import { theme } from 'constants/theme';
import { Contact } from './Contact/Contact';
import {
  ContactsTableBox,
  ContactsTable,
  TableHeadCell,
  SortByNameButton,
  SotrByNameIconASC,
  SotrByNameIconDSC,
  SortByNumberButton,
  SotrByNumberIconASC,
  SotrByNumberIconDSC,
  TableDataCellEmpty,
  CenteredSpan,
  NoResultsIcon,
} from './ContactsList.styled';

export const ContactsList = ({ contacts, filter, onContactDelete }) => {
  const [sortField, setSortField] = useState('name');
  const [isSortOrderASC, setIsSortOrderASC] = useState({
    name: true,
    number: true,
  });

  const prepareFilteredContacts = () => {
    const normalizedFilterValue = normalizeFilterValue(filter);
    const prepearedContacts = [];

    contacts
      .sort(sortContacts(sortField, isSortOrderASC[sortField]))
      .forEach(contact => {
        const normalizedName = contact.name.toLowerCase();
        const normalizedNumber = normalizeNumber(contact.number);

        if (
          normalizedName.includes(normalizedFilterValue) ||
          normalizedNumber.includes(normalizedFilterValue)
        )
          prepearedContacts.push(contact);
      });

    return prepearedContacts;
  };

  const onSortButtonClick = ({ currentTarget: { value: targetSortField } }) => {
    if (sortField !== targetSortField) return setSortField(targetSortField);

    setIsSortOrderASC(prevIsSortOrderASC => ({
      ...prevIsSortOrderASC,
      [targetSortField]: !prevIsSortOrderASC[targetSortField],
    }));
  };

  const preparedContacts = prepareFilteredContacts();

  const sortButtonIconSize = theme.sizes.sortButtonIcon;
  const noResultIconSize = theme.sizes.noResultIcon;

  return (
    <ContactsTableBox>
      <ContactsTable>
        <thead>
          <tr>
            <TableHeadCell colSpan={2}>
              Contact name
              <SortByNameButton
                type="button"
                value="name"
                isSortFieldName={sortField === 'name'}
                aria-label={`Sort contacts by contact name in ${
                  isSortOrderASC.name ? 'ascending' : 'descending'
                } order`}
                onClick={onSortButtonClick}
              >
                <SotrByNameIconASC
                  size={sortButtonIconSize}
                  value={isSortOrderASC.name}
                />
                <SotrByNameIconDSC
                  size={sortButtonIconSize}
                  value={isSortOrderASC.name}
                />
              </SortByNameButton>
            </TableHeadCell>
            <TableHeadCell colSpan={2}>
              Phone number
              <SortByNumberButton
                type="button"
                value="number"
                isSortFieldNumber={sortField === 'number'}
                aria-label={`Sort contacts by phone number in ${
                  isSortOrderASC.number ? 'ascending' : 'descending'
                } order`}
                onClick={onSortButtonClick}
              >
                <SotrByNumberIconASC
                  size={sortButtonIconSize}
                  value={isSortOrderASC.number}
                />
                <SotrByNumberIconDSC
                  size={sortButtonIconSize}
                  value={isSortOrderASC.number}
                />
              </SortByNumberButton>
            </TableHeadCell>
          </tr>
        </thead>

        <tbody>
          {preparedContacts.length ? (
            preparedContacts.map(({ id, name, number }, idx) => (
              <Contact
                key={id}
                id={id}
                name={name}
                number={number}
                isLight={idx % 2 === 0}
                onContactDelete={onContactDelete}
              />
            ))
          ) : filter ? (
            <tr>
              <TableDataCellEmpty colSpan={4}>
                <CenteredSpan>
                  Nothing was found
                  <NoResultsIcon size={noResultIconSize} />
                </CenteredSpan>
              </TableDataCellEmpty>
            </tr>
          ) : (
            <tr>
              <TableDataCellEmpty colSpan={4}>
                <CenteredSpan>
                  Phonebook is empty
                  <NoResultsIcon size={noResultIconSize} />
                </CenteredSpan>
              </TableDataCellEmpty>
            </tr>
          )}
        </tbody>
      </ContactsTable>
    </ContactsTableBox>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
