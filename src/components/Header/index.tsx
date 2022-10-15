import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from 'components/Logo'

import * as S from './styles'

const Header = () => {
const router = useRouter()

const handleGoToHome = () => {
  router.push('/')
}

return (
    <S.Wrapper>
      <S.LogoWrapper onClick={handleGoToHome}>
      <Logo url="/img/logo.svg" alternativeText="Logo" />
      </S.LogoWrapper>
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
}

export default Header
