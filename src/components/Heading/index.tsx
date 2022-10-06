import React from 'react'

import * as S from './styles'

export type Props = {
  center?: boolean
  title: string
  subtitle: string
}

const Heading: React.FC<Props> = ({ center = false, title, subtitle }) => (
  <S.Wrapper center={center}>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
  </S.Wrapper>
)

export default Heading
