import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100%;
  padding: ${({ theme }) => theme.space[4]};

  background-color: ${({ theme }) => theme.colors.backdropBG};
  backdrop-filter: blur(4px);

  opacity: ${({ shouldShown }) => (shouldShown ? 1 : 0)};
  transform: scale(${({ shouldShown }) => (shouldShown ? 1 : 2)});
  visibility: ${({ shouldShown }) => (shouldShown ? 'initial' : 'hidden')};
  pointer-events: ${({ shouldShown }) => (shouldShown ? 'initial' : 'none')};

  overflow: hidden;

  transition: ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.transform},
    ${({ theme }) => theme.transitions.visibility};
`;

export const ModalContainer = styled.div`
  min-width: ${({ theme }) => theme.sizes.modalContainerMin};
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.modalContainerMax};
  padding: ${({ theme }) => theme.space[5]};

  background-color: ${({ theme }) => theme.colors.whiteBG};

  border: ${({ theme }) => theme.borders.accentTransparent};
  border-radius: ${({ theme }) => theme.radii.generic};
`;

export const ModalTitle = styled.h2`
  margin: ${({ theme }) => theme.space[0]};
  margin-bottom: ${({ theme }) => theme.space[5]};

  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  text-transform: uppercase;
`;
