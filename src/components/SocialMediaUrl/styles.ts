import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacings.xsmall};
`

export const Icon = styled.img`
  width: 94px;
  height: 94px;
  border-radius: 50%;
`

export const UrlText = styled.a`
  color: inherit;
  text-decoration: none;
`
