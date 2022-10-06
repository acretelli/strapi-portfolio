import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type Props = {
  wide: boolean
}

const buttonModifiers = {
  wide: (theme: DefaultTheme) => css`
    display: block;
    padding: 0.4rem ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      padding: 0.8rem ${theme.spacings.large};
    `}
  `
}

export const ButtonWrapper = styled.a<Props>`
  ${({ theme, wide }) => css`
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${theme.colors.primaryHover};
    }

    ${wide && buttonModifiers.wide(theme)};
  `}
`
