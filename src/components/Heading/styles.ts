import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  center?: boolean
}

const wrapperModifiers = {
  cetralized: (theme: DefaultTheme) => css`
    text-align: center;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, center }) => css`
    font-size: ${theme.font.sizes.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}

    ${center && wrapperModifiers.cetralized(theme)};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: 800;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: 300;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`
