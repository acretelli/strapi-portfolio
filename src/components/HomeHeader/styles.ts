import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  gap: ${theme.spacings.small};

  text-align: center;
`

export const HeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  gap: ${theme.spacings.xxsmall};

  text-align: center;
`

export const Title = styled.h1`
  font-weight: 300;
`

export const Subtitle = styled.h3`
  font-weight: 300;
`

export const Intro = styled.p`
  font-size: ${theme.font.sizes.xsmall};
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xxsmall};
  margin-top: ${theme.spacings.small};

  ${media.greaterThan('small')`
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${theme.spacings.xxsmall};
  `}
`
