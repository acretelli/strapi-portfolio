import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.black};
  color: ${theme.colors.primary};
  padding: ${theme.spacings.xsmall};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
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

export const NavButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
  :hover {
    color: ${theme.colors.primaryHover};
  }
`
