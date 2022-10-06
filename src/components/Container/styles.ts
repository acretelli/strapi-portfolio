import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: calc(100vh - 112px);

    margin: 0 auto;

    ${media.greaterThan('medium')` / 2);
    `}
  `}
`
