import React from 'react'
import ReactMarkdown from 'react-markdown'

import { HomeHeaderProps } from 'types/api'
import Button from 'components/Button'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  homeHeader: HomeHeaderProps
}

const HomeHeader = ({ homeHeader }: Props) => {
  return (
    <S.Wrapper>
      <S.TextBlock>
        <S.HeadingBlock>
          <S.Title dangerouslySetInnerHTML={{ __html: homeHeader.title }} />
          <S.Subtitle>{homeHeader.subtitle}</S.Subtitle>
        </S.HeadingBlock>
        <S.Intro>{homeHeader.intro}</S.Intro>
      </S.TextBlock>
      <S.ButtonsWrapper>
        {homeHeader.skills &&
          homeHeader.skills.map((skill) => {
            return (
              <Button key={skill.id} wide href={skill.url}>
                {skill.skills}
              </Button>
            )
          })}
      </S.ButtonsWrapper>
      <S.Image
        src={getImageUrl(homeHeader.backgroundImage.url)}
        alt={homeHeader.backgroundImage.alternativeText}
      />
    </S.Wrapper>
  )
}

export default HomeHeader
