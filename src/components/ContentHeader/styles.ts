import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: ${theme.spacings.medium};

  padding-top: ${theme.spacings.medium};
`
export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xsmall};
  max-width: 40rem;
`
export const Text = styled.p``
export const Media = styled.img`
  height: 100%;
  width: 36rem;
`
