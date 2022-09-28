import PropTypes from 'prop-types';
import { cloneElement, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { transitionDuration } from 'constants/theme';
import { Backdrop, ModalContainer, ModalTitle } from './Modal.styled';

export const Modal = ({ title, onClose, prevOnKeyDown, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsMounted(true);
    });
  }, []);

  const onModalClose = () => {
    onkeydown = prevOnKeyDown;

    requestAnimationFrame(() => {
      setIsMounted(false);
    });

    setTimeout(onClose, transitionDuration);
  };

  const onEscPress = ({ code }) => {
    if (code !== 'Escape') return;

    onModalClose();
  };

  const onBackdropClick = ({ currentTarget, target }) => {
    currentTarget === target && onModalClose();
  };

  onkeydown = onEscPress;

  return createPortal(
    <Backdrop shouldShown={isMounted} onClick={onBackdropClick}>
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        {cloneElement(children, { onClose: onModalClose })}
      </ModalContainer>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  prevOnKeyDown: PropTypes.func.isRequired,
};
