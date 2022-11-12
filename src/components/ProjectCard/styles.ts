import styled from 'styled-components'
import theme from 'styles/theme'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xsmall};
  padding: ${theme.spacings.medium};
  border-radius: 0.8rem;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);

  min-width: 20rem;
  max-width: 36rem;

  text-align: center;
`

export const CardTitle = styled.h3``

export const CardText = styled.p`
  font-size: ${theme.font.sizes.xsmall};
`

export const CardImage = styled.img`
  height: 16rem;
  border-radius: 0.4rem;
  object-fit: cover;
`

export const CardSkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacings.xxsmall};
`

export const CardSkill = styled.span`
  padding: 0.4rem;
  background-color: ${theme.colors.primary};
  border-radius: 0.4rem;

  font-size: ${theme.font.sizes.xxsmall};
  font-weight: 700;
`

export const CloseButton = styled.button`
  background-color: transparent;

  position: fixed;
  top: ${theme.spacings.medium};
  right: ${theme.spacings.medium};

  cursor: pointer;
`

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  padding: ${theme.spacings.small};
  background-color: ${theme.colors.white};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  overflow-y: scroll;
`

export const ModalContent = styled.div`
  max-width: 800px;
  margin: ${theme.spacings.small} auto;
`

export const Text = styled.p`
  margin: ${theme.spacings.small} auto;
`

export const Image = styled.img`
  width: 100%;
  margin: ${theme.spacings.small} auto;
`
