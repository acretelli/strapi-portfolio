import styled from 'styled-components'
import media from 'styled-media-query'

export const LogoWrapper = styled.img`
  width: 2rem;

  ${media.greaterThan('medium')`
    width: 4rem;
  `}
`
