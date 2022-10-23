import React from 'react'

import { ProjectsSectionProps } from 'types/api'

import Button from 'components/Button'
import ProjectCard from 'components/ProjectCard'

import * as S from './styles'

type Props = {
  projectsSection: ProjectsSectionProps
}

const SectionProjects = ({ projectsSection }: Props) => {
  return (
    <S.Wrapper>
      <S.TextBlock>
        <S.Title>{projectsSection.title}</S.Title>
        <S.MainText>{projectsSection.subtitle}</S.MainText>
      </S.TextBlock>
      <S.CardsContainer>
        {projectsSection.projects &&
          projectsSection.projects.map((item, index) => {
            return <ProjectCard project={item} key={index} />
          })}
      </S.CardsContainer>
      <S.ButtonWrapper>
        <Button wide href="" onClick={() => console.log('oi')}>
          More projects
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default SectionProjects
