import React from 'react'

import ContentHeader from '../../components/ContentHeader'
import Button from '../../components/Button'
import AcademicFormationCard from '../../components/AcademicFormationCard'
import ProfessionalExperienceCard from '../../components/ProfessionalExperienceCard'

import * as S from './styles'

const AboutPage = () => (
  <S.Wrapper>
    <ContentHeader />

    <S.AcademicFormationContainer>
      <S.TextBlock>
        <S.Title>My academic formation</S.Title>
        <S.Subtitle>
          My background is a little bit crazy, but I promise that it all make
          perfect sense.
        </S.Subtitle>
      </S.TextBlock>
      <AcademicFormationCard />
    </S.AcademicFormationContainer>
    <S.ProfessionalExperienceContainer>
      <S.TextBlock>
        <S.Title>My academic formation</S.Title>
        <S.Subtitle>
          My background is a little bit crazy, but I promise that it all make
          perfect sense.
        </S.Subtitle>
      </S.TextBlock>
      <ProfessionalExperienceCard />
    </S.ProfessionalExperienceContainer>
    <S.ButtonWrapper>
      <Button wide href="/" onClick={() => console.log('oi')}>
        Back to Home
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default AboutPage
