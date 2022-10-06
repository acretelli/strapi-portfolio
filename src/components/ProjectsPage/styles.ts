import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  margin: ${theme.spacings.large} auto;
`
export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${theme.spacings.xxsmall};

  margin: ${theme.spacings.large} auto;
  max-width: 800px;
`
export const ButtonWrapper = styled.div`
  max-width: 240px;
  margin: ${theme.spacings.large} auto;
`
