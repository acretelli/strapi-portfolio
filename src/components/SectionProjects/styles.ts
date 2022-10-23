import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div``

export const TextBlock = styled.div`
  max-width: 80rem;
  margin: ${theme.spacings.large} auto ${theme.spacings.medium};
  text-align: center;
`

export const Title = styled.h2`
  font-weight: 700;
`

export const MainText = styled.h3`
  font-weight: 300;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacings.xsmall};

  max-width: 80rem;
  margin: ${theme.spacings.medium} auto;
`

export const ButtonWrapper = styled.div`
  max-width: 240px;
  margin: ${theme.spacings.small} auto;
`
