import { useRouter } from 'next/router'
import Button from 'components/Button'
import React from 'react'

import * as S from './styles'

const ProjectCard = () => {
  const router = useRouter()

  const handleOpenPage = () => {
    router.push('/projects/project')
  }

  return (
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
      <Button href="" onClick={handleOpenPage}>
        get to know it
      </Button>
    </S.Card>
  )
}

export default ProjectCard
