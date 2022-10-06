import styled from 'styled-components'
import theme from 'styles/theme'

export const FieldCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FieldCardImage = styled.img`
  width: 50%;
  height: 40rem;
  object-fit: cover;
  object-position: left bottom;
`

export const FieldCardTextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${theme.spacings.xxsmall};

  padding: 0 ${theme.spacings.small};
`

export const FieldCardTitle = styled.h2`
  width: 100%;
`

export const FieldCardSubTitle = styled.h3`
  width: 100%;

  font-weight: 400;
`

export const FieldCardText = styled.p`
  width: 100%;
  font-size: ${theme.font.sizes.xsmall};
`

export const FieldCardButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${theme.spacings.xxsmall};

  width: 100%;
`
