import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from 'components/Logo'

import * as S from './styles'

const Header = ({ logo }) => {
  const router = useRouter()

  const handleGoToHome = () => {
    router.push('/')
  }

  return (
    <S.Wrapper>
      <S.LogoWrapper onClick={handleGoToHome}>
        <Logo url={logo.url} alternativeText={logo.alternativeText} />
      </S.LogoWrapper>
      <S.Navigation>
        <S.NavLink>
          <Link href="/">
            <a>home</a>
          </Link>
        </S.NavLink>
        <S.NavLink>
          <Link href="#projects">
            <a>projects</a>
          </Link>
        </S.NavLink>
        <S.NavLink>
          <Link href="#about-me">
            <a>about me</a>
          </Link>
        </S.NavLink>
        <S.NavLink>
          <Link href="#contact">
            <a>contact</a>
          </Link>
        </S.NavLink>
      </S.Navigation>
    </S.Wrapper>
  )
}

export default Header
