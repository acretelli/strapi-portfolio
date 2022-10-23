import React from 'react'

import { AboutSectionProps, InfoListSectionProps } from 'types/api'

import ContentHeader from '../ContentHeader'
import Button from '../Button'
import AcademicFormationCard from '../AcademicFormationCard'
import ProfessionalExperienceCard from '../ProfessionalExperienceCard'

import * as S from './styles'

type Props = {
  aboutSection: AboutSectionProps
  infoListSection: InfoListSectionProps[]
}

const SectionAbout = ({ aboutSection, infoListSection }: Props) => {
  return (
    <S.Wrapper>
      <ContentHeader
        title={aboutSection.title}
        subtitle={aboutSection.subtitle}
        description={aboutSection.description}
        media={aboutSection.media}
      />

      {infoListSection &&
        infoListSection.map((item, index) => {
          return (
            <S.AcademicFormationContainer key={index}>
              <S.TextBlock>
                <S.Title>{item.title}</S.Title>
                <S.Subtitle>{item.subtitle}</S.Subtitle>
              </S.TextBlock>
              {item.list.map((listItem, index) => {
                return (
                  <AcademicFormationCard
                    title={listItem.title}
                    text={listItem.text}
                    yearStart={listItem.yearStart}
                    yearEnd={listItem.yearEnd}
                    key={index}
                  />
                )
              })}
            </S.AcademicFormationContainer>
          )
        })}
    </S.Wrapper>
  )
}

export default SectionAbout
