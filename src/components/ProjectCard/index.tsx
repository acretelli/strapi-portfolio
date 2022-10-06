import Button from 'components/Button'
import React from 'react'

import * as S from './styles'

const ProjectCard = () => (
  <S.Card>
    <S.CardImage src="/img/project-image.jpg" alt="Imagem do projeto" />
    <S.CardTitle>Medroom Learning Platform</S.CardTitle>
    <S.CardSkillsWrapper>
      <S.CardSkill>UX</S.CardSkill>
      <S.CardSkill>UI</S.CardSkill>
      <S.CardSkill>Figma</S.CardSkill>
      <S.CardSkill>Storybook</S.CardSkill>
      <S.CardSkill>Reactjs</S.CardSkill>
    </S.CardSkillsWrapper>
    <S.CardText>
      As a designer, I’ve conduct research, planning and documentation of user’s
      behavior, insights and priorization, and develop friendly interfaces.
    </S.CardText>
    <Button href="" onClick={() => console.log('oi')}>
      get to know it
    </Button>
  </S.Card>
)

export default ProjectCard
