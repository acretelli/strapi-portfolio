import Button from 'components/Button'
import React from 'react'

import * as S from './styles'

const HomeHeader = () => (
  <S.Wrapper>
    <S.TextBlock>
      <S.HeadingBlock>
        <S.Title>
          Hi, my name is <strong>Anna</strong>
        </S.Title>
        <S.Subtitle>
          I’m a <strong>designer</strong> and a <strong>coder</strong>.
        </S.Subtitle>
      </S.HeadingBlock>
      <S.Intro>
        As a designer, I’ve conducted research, planning and documentation of
        user’s behavior, insights and priorization, and develop friendly
        interfaces. As a coder, I’ve put interfaces into functioning, focusing
        in a clean code and readible components and templates.
      </S.Intro>
    </S.TextBlock>
    <S.ButtonsWrapper>
      <Button wide href="" onClick={() => console.log('oi')}>
        ux design
      </Button>
      <Button wide href="" onClick={() => console.log('oi')}>
        ui design
      </Button>
      <Button wide href="" onClick={() => console.log('oi')}>
        development
      </Button>
    </S.ButtonsWrapper>
    <S.Image src="/img/background-image.png" alt="background-image" />
  </S.Wrapper>
)

export default HomeHeader
