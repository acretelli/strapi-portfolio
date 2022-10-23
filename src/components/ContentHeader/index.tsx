import React from 'react'

import * as S from './styles'

import Heading from 'components/Heading'
import { getImageUrl } from 'utils/getImageUrl'

type MediaProps = {
  alternativeText: string
  url: string
}

type Props = {
  title?: string
  subtitle?: string
  description?: string
  media?: MediaProps
}

const ContentHeader = ({
  title = 'Title',
  subtitle = 'Subtitle',
  description = 'Description',
  media
}: Props) => (
  <S.Wrapper>
    <S.ContentBlock>
      <Heading title={title} subtitle={subtitle} />
      <S.Text>{description}</S.Text>
    </S.ContentBlock>

    {media && (
      <S.Media src={getImageUrl(media.url)} alt={media.alternativeText} />
    )}
  </S.Wrapper>
)

export default ContentHeader
