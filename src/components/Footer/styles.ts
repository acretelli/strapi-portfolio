import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  background-color: ${theme.colors.black};
  padding: ${theme.spacings.xsmall} ${theme.spacings.large};
`

export const Text = styled.p`
  font-size: ${theme.font.sizes.xxsmall};
  font-weight: 300;
  text-align: center;
  color: ${theme.colors.primary};
`
