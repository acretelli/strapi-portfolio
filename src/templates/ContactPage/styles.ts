import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  margin: ${theme.spacings.large} auto;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: ${theme.spacings.small};
  flex-wrap: wrap;
  margin: ${theme.spacings.medium} auto;
`

export const ButtonWrapper = styled.div`
  max-width: 240px;
  margin: ${theme.spacings.large} auto;
`
