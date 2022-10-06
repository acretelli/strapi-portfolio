import React from 'react'
import Link from 'next/link'

import Logo from 'components/Logo'

import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <Logo url="/img/logo.svg" alternativeText="Logo" />
    <S.Navigation>
      <S.NavLink>
        <Link href="/">
          <a>home</a>
        </Link>
      </S.NavLink>
      <S.NavLink>
        <Link href="/projects">
          <a>projects</a>
        </Link>
      </S.NavLink>
      <S.NavLink>
        <Link href="/about">
          <a>about</a>
        </Link>
      </S.NavLink>
      <S.NavLink>
        <Link href="/contact">
          <a>contact</a>
        </Link>
      </S.NavLink>
    </S.Navigation>
  </S.Wrapper>
)

export default Header
