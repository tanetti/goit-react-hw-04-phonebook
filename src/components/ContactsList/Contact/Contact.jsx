import PropTypes from 'prop-types';
import { Component } from 'react';
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

export class Contact extends Component {
  state = {
    shouldDeletePromptModalShown: false,
    modalActivator: null,
  };

  toggleDeletePromptModal = evt => {
    this.toggleAriaExpanded(
      evt ? evt.currentTarget : this.state.modalActivator
    );

    this.setState({
      shouldDeletePromptModalShown: evt ? true : false,
      modalActivator: evt ? evt.currentTarget : null,
    });
  };

  toggleAriaExpanded = target => {
    if (target.ariaExpanded === 'false') return (target.ariaExpanded = true);
    target.ariaExpanded = false;
  };

  render() {
    const { id, isLight, name, number, onContactDelete } = this.props;

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
            onClick={this.toggleDeletePromptModal}
          >
            <DeleteIcon size={deleteButtonIconSize} />
          </DeleteButton>
          {this.state.shouldDeletePromptModalShown && (
            <Modal title="Are you sure?" onClose={this.toggleDeletePromptModal}>
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
  }
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  isLight: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
