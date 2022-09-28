import PropTypes from 'prop-types';
import { useState } from 'react';
import { theme } from 'constants/theme';
import { normalizeNumberForCallLink } from 'utils';
import {
  TableDataRow,
  TableDataCell,
  NameDataContainer,
  NumberDataContainer,
  DeleteButton,
  DeleteIcon,
  CallLink,
  CallLinkIcon,
} from './Contact.styled';
import { Modal } from 'components/Modal/Modal';
import { DeleteContactPrompt } from 'components/DeleteContactPrompt/DeleteContactPrompt';

export const Contact = ({ id, isLight, name, number, onContactDelete }) => {
  const [shouldDeletePromptModalShown, setShouldDeletePromptModalShown] =
    useState(false);
  const [modalActivator, setModalActivator] = useState(null);

  const toggleDeletePromptModal = evt => {
    toggleAriaExpanded(evt ? evt.currentTarget : modalActivator);

    setShouldDeletePromptModalShown(evt ? true : false);
    setModalActivator(evt ? evt.currentTarget : null);
  };

  const toggleAriaExpanded = target => {
    if (target.ariaExpanded === 'false') return (target.ariaExpanded = true);
    target.ariaExpanded = false;
  };

  const deleteButtonIconSize = theme.sizes.deleteButtonIcon;
  const callLinkIconSize = theme.sizes.callLinkIcon;

  return (
    <TableDataRow isLight={isLight}>
      <TableDataCell>
        <DeleteButton
          type="button"
          aria-label={`Delete contact ${name}`}
          aria-controls="modal-root"
          aria-expanded={false}
          onClick={toggleDeletePromptModal}
        >
          <DeleteIcon size={deleteButtonIconSize} />
        </DeleteButton>
        {shouldDeletePromptModalShown && (
          <Modal
            title="Are you sure?"
            onClose={toggleDeletePromptModal}
            prevOnKeyDown={onkeydown}
          >
            <DeleteContactPrompt
              id={id}
              name={name}
              onContactDelete={onContactDelete}
            />
          </Modal>
        )}
      </TableDataCell>
      <TableDataCell>
        <NameDataContainer>{name}</NameDataContainer>
      </TableDataCell>
      <TableDataCell>
        <NumberDataContainer>{number}</NumberDataContainer>
      </TableDataCell>
      <TableDataCell>
        <CallLink
          href={`tel:${normalizeNumberForCallLink(number)}`}
          aria-label={`Call ${name}`}
        >
          <CallLinkIcon size={callLinkIconSize} />
        </CallLink>
      </TableDataCell>
    </TableDataRow>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  isLight: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
