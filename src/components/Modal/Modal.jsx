import PropTypes from 'prop-types';
import { cloneElement, Component } from 'react';
import { createPortal } from 'react-dom';
import { transitionDuration } from 'constants/theme';
import { Backdrop, ModalContainer, ModalTitle } from './Modal.styled';

export class Modal extends Component {
  state = {
    isMounted: false,
  };

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({ isMounted: true });
    });

    onkeydown = this.onEscPress;
  }

  onEscPress = ({ code }) => {
    if (code !== 'Escape') return;

    this.onClose();
  };

  onClose = () => {
    requestAnimationFrame(() => {
      this.setState({ isMounted: false });
    });

    onkeydown = null;

    setTimeout(this.props.onClose, transitionDuration);
  };

  onBackdropClick = ({ currentTarget, target }) => {
    currentTarget === target && this.onClose();
  };

  render() {
    return createPortal(
      <Backdrop
        shouldShown={this.state.isMounted}
        onClick={this.onBackdropClick}
      >
        <ModalContainer>
          <ModalTitle>{this.props.title}</ModalTitle>
          {cloneElement(this.props.children, { onClose: this.onClose })}
        </ModalContainer>
      </Backdrop>,
      document.querySelector('#modal-root')
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
