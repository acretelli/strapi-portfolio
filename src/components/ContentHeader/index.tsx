import React from 'react'

import * as S from './styles'

import Heading from 'components/Heading'
import { getImageUrl } from 'utils/getImageUrl'

const ContentHeader = () => (
  <S.Wrapper>
    <S.ContentBlock>
      <Heading title="about me." subtitle="I'm a UI/UX product designer." />
      <S.Text>
        I have been worked in virtual reality, communication and publishing
        companies with design and development of graphic and digital products,
        and I have more than ten years of experience in the area.
      </S.Text>
    </S.ContentBlock>

    <S.Media src={getImageUrl('/img/logo.svg')} alt="" />
  </S.Wrapper>
)

export default ContentHeader
