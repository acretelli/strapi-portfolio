import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.black};
  color: ${theme.colors.primary};
  padding: ${theme.spacings.xsmall};
`

export const LogoWrapper = styled.div`
  cursor: pointer;

  :hover {
    opacity: 0.95;
  }
`

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${theme.spacings.xsmall};

  list-style: none;
`

export const NavLink = styled.li`
  a {
    text-decoration: none;
    color: inherit;
  }
  a:active {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    color: ${theme.colors.primaryHover};
  }
`
