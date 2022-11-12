import React from 'react'

import { AboutSectionProps, InfoListSectionProps } from 'types/api'

import ContentHeader from '../ContentHeader'
import AcademicFormationCard from '../AcademicFormationCard'

import * as S from './styles'

type Props = {
  aboutSection: AboutSectionProps
  infoListSection: InfoListSectionProps[]
}

const SectionAbout = ({ aboutSection, infoListSection }: Props) => {
  return (
    <S.Wrapper id="about-me">
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
              <S.InfoBlock>
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
              </S.InfoBlock>
            </S.AcademicFormationContainer>
          )
        })}
    </S.Wrapper>
  )
}

export default SectionAbout
