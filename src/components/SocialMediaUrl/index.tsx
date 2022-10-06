import React from 'react'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const SocialMediaUrl = () => (
  <S.Wrapper>
    <S.Icon src={getImageUrl('/img/logo.svg')} alt="" />
    <S.UrlText href="mailto:anna.cbf@gmail.com">anna.cbf@gmail.com</S.UrlText>
  </S.Wrapper>
)

export default SocialMediaUrl
