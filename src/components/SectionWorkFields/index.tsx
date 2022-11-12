import React from 'react'

import * as S from './styles'

import Button from 'components/Button'
import { SkillsDetailsProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  skillsDetails: SkillsDetailsProps[]
}

const SectionWorkFields = ({ skillsDetails }: Props) => {
  return (
    <S.Wrapper>
      <S.FieldsCardsContainer>
        {skillsDetails
          ? skillsDetails.map((item, i) => {
              return (
                <S.FieldCard id={item.slug} key={i}>
                  <S.FieldCardImage
                    src={getImageUrl(item.media.url)}
                    alt={item.media.alternativeText}
                  />
                  <S.FieldCardTextBlock>
                    <S.FieldCardTitle>{item.title}</S.FieldCardTitle>
                    <S.FieldCardSubTitle>{item.subtitle}</S.FieldCardSubTitle>
                    <S.FieldCardText
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    {/* <S.FieldCardText>
                      Projects that I get to develop more intensely those
                      skills:
                    </S.FieldCardText>
                    <S.FieldCardButtons>
                      <Button href="" onClick={() => console.log('oi')}>
                        Medroom
                      </Button>
                      <Button href="" onClick={() => console.log('oi')}>
                        Ebac
                      </Button>
                    </S.FieldCardButtons> */}
                  </S.FieldCardTextBlock>
                </S.FieldCard>
              )
            })
          : null}
      </S.FieldsCardsContainer>
    </S.Wrapper>
  )
}

export default SectionWorkFields
