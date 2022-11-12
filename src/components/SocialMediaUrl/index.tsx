import React from 'react'
import { SocialButtonsProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

type Props = {
  socialMediaUrl: SocialButtonsProps
}

const SocialMediaUrl = ({ socialMediaUrl }: Props) => (
  <S.Wrapper href={socialMediaUrl.url}>
    <S.Icon
      src={getImageUrl(socialMediaUrl.image.url)}
      alt={socialMediaUrl.image.alternativeText}
    />
    <S.UrlText>{socialMediaUrl.label}</S.UrlText>
  </S.Wrapper>
)

export default SocialMediaUrl
