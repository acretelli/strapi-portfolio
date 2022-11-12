import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacings.medium};
  flex-direction: column;

  max-width: 1024px;
  margin: auto;
  padding-top: ${theme.spacings.medium};

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`
export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xsmall};

  text-align: center;
`
export const Text = styled.p``
export const Media = styled.img`
  height: 100%;
  width: 24rem;

  ${media.greaterThan('medium')`
    width: 36rem;
  `}
`
