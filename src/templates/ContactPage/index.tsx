import React from 'react'

import Heading from '../../components/Heading'
import Button from '../../components/Button'
import SocialMediaUrl from '../../components/SocialMediaUrl'

import * as S from './styles'

const ContactPage = () => (
  <S.Wrapper>
    <Heading
      center
      title="contact."
      subtitle="Here is where you can find me."
    />
    <S.SocialMediaContainer>
      <SocialMediaUrl />
      <SocialMediaUrl />
      <SocialMediaUrl />
      <SocialMediaUrl />
      <SocialMediaUrl />
    </S.SocialMediaContainer>
    <S.ButtonWrapper>
      <Button wide href="/" onClick={() => console.log('oi')}>
        Back to Home
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default ContactPage
