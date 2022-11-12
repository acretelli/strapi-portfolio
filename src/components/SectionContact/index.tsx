import React from 'react'
import { ContactSectionProps } from 'types/api'

import Heading from '../Heading'
import SocialMediaUrl from '../SocialMediaUrl'

import * as S from './styles'

type Props = {
  contactSection: ContactSectionProps
}

const SectionContact = ({ contactSection }: Props) => (
  <S.Wrapper id="contact">
    <Heading
      center
      title={contactSection.title}
      subtitle={contactSection.subtitle}
    />
    {contactSection.socialBtns &&
      contactSection.socialBtns.map((item, index) => {
        return (
          <S.SocialMediaContainer key={index}>
            <SocialMediaUrl socialMediaUrl={item} />
          </S.SocialMediaContainer>
        )
      })}
  </S.Wrapper>
)

export default SectionContact
