import PropTypes from 'prop-types';
import { SafeButton, UnsafeButton } from 'components/Shared';
import { theme, transitionDuration } from 'constants/theme';
import {
  DelettingCaptionContainer,
  DelettingContact,
  DelettingContactIcon,
  ButtonContainer,
} from './DeleteContactPrompt.styled';

export const DeleteContactPrompt = ({ id, name, onContactDelete, onClose }) => {
  const onDeleteButtonClick = () => {
    onClose();

    setTimeout(() => onContactDelete(id), transitionDuration);
  };

  return (
    <>
      <DelettingCaptionContainer>
        <DelettingContactIcon size={theme.sizes.delettingContactIcon} />
        <DelettingContact>{name}</DelettingContact>
      </DelettingCaptionContainer>
      <ButtonContainer>
        <UnsafeButton type="button" onClick={onDeleteButtonClick}>
          Delete
        </UnsafeButton>
        <SafeButton type="button" onClick={onClose}>
          Cancel
        </SafeButton>
      </ButtonContainer>
    </>
  );
};

DeleteContactPrompt.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
