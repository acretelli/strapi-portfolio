import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${theme.spacings.medium};

  max-width: 1024px;
  margin: ${theme.spacings.large} auto;
`

export const FieldsCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${theme.spacings.small};
`

export const FieldCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.greaterThan('medium')`
    flex-direction: row;

    :nth-child(even) {
      img {
        order: 2;
      }
    }
  `}
`

export const FieldCardImage = styled.img`
  order: 0;
  width: 100%;
  height: 20rem;
  object-fit: cover;
  object-position: left bottom;

  ${media.greaterThan('medium')`
    width: 50%;
    height: 40rem;
  `}
`

export const FieldCardTextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${theme.spacings.xxsmall};

  padding: 0 ${theme.spacings.small};
  text-align: center;
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
