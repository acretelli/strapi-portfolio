import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacings.xsmall};

  color: inherit;
  text-decoration: none;
`

export const Icon = styled.img`
  width: 94px;
  height: 94px;
  border-radius: 50%;
`

export const UrlText = styled.p``
