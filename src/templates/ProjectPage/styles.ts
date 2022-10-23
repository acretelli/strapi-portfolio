import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  margin: ${theme.spacings.large} auto;
`
export const Textblock = styled.div`
  margin: ${theme.spacings.large} auto;
  max-width: 800px;
`
export const MediasWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacings.xsmall};
  max-width: 800px;
  margin: ${theme.spacings.xxsmall} auto;
`
export const Media = styled.img`
  width: 100%;
  margin: 0 auto;
`
export const ButtonWrapper = styled.div`
  max-width: 240px;
  margin: ${theme.spacings.large} auto;
`
