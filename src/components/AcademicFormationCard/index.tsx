import React from 'react'

import * as S from './styles'

type Props = {
  title: string
  text: string
  yearStart: number
  yearEnd: number
}

const AcademicFormationCard = ({ title, text, yearStart, yearEnd }: Props) => (
  <S.Wrapper>
    <S.Course>{title}</S.Course>
    <S.Institution>{text}</S.Institution>
    <S.Year>
      {yearStart} - {yearEnd}
    </S.Year>
  </S.Wrapper>
)

export default AcademicFormationCard
