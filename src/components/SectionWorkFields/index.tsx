import React from 'react'

import * as S from './styles'

import Button from 'components/Button'

const SectionWorkFields = () => (
  <S.Wrapper>
    <S.FieldsCardsContainer>
      <S.FieldCard>
        <S.FieldCardImage src="/img/project-image.jpg" alt="Project image" />
        <S.FieldCardTextBlock>
          <S.FieldCardTitle>ux design.</S.FieldCardTitle>
          <S.FieldCardSubTitle>
            User-centric products well planned and validated.
          </S.FieldCardSubTitle>
          <S.FieldCardText>
            Some of the skills I’ve deloped: research, interview, build personas
            and empathy maps, get insights and prioritize tasks, validation and
            iteration principles...
          </S.FieldCardText>
          <S.FieldCardText>
            Projects that I get to develop more intensely those skills:
          </S.FieldCardText>
          <S.FieldCardButtons>
            <Button href="" onClick={() => console.log('oi')}>
              Medroom
            </Button>
            <Button href="" onClick={() => console.log('oi')}>
              Ebac
            </Button>
          </S.FieldCardButtons>
        </S.FieldCardTextBlock>
      </S.FieldCard>
      <S.FieldCard>
        <S.FieldCardTextBlock>
          <S.FieldCardTitle>ux design.</S.FieldCardTitle>
          <S.FieldCardSubTitle>
            User-centric products well planned and validated.
          </S.FieldCardSubTitle>
          <S.FieldCardText>
            Some of the skills I’ve deloped: research, interview, build personas
            and empathy maps, get insights and prioritize tasks, validation and
            iteration principles...
          </S.FieldCardText>
          <S.FieldCardText>
            Projects that I get to develop more intensely those skills:
          </S.FieldCardText>
          <S.FieldCardButtons>
            <Button href="" onClick={() => console.log('oi')}>
              Medroom
            </Button>
            <Button href="" onClick={() => console.log('oi')}>
              Ebac
            </Button>
          </S.FieldCardButtons>
        </S.FieldCardTextBlock>
        <S.FieldCardImage src="/img/project-image.jpg" alt="Project image" />
      </S.FieldCard>
      <S.FieldCard>
        <S.FieldCardImage src="/img/project-image.jpg" alt="Project image" />
        <S.FieldCardTextBlock>
          <S.FieldCardTitle>ux design.</S.FieldCardTitle>
          <S.FieldCardSubTitle>
            User-centric products well planned and validated.
          </S.FieldCardSubTitle>
          <S.FieldCardText>
            Some of the skills I’ve deloped: research, interview, build personas
            and empathy maps, get insights and prioritize tasks, validation and
            iteration principles...
          </S.FieldCardText>
          <S.FieldCardText>
            Projects that I get to develop more intensely those skills:
          </S.FieldCardText>
          <S.FieldCardButtons>
            <Button href="" onClick={() => console.log('oi')}>
              Medroom
            </Button>
            <Button href="" onClick={() => console.log('oi')}>
              Ebac
            </Button>
          </S.FieldCardButtons>
        </S.FieldCardTextBlock>
      </S.FieldCard>
    </S.FieldsCardsContainer>
    <Button href="" onClick={() => console.log('oi')}>
      Check all projects
    </Button>
  </S.Wrapper>
)

export default SectionWorkFields
