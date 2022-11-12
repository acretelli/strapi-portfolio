import React from 'react'
import { useRouter } from 'next/router'

import { ProjectsSectionProps } from 'types/api'

import Button from 'components/Button'
import ProjectCard from 'components/ProjectCard'

import * as S from './styles'

type Props = {
  projectsSection: ProjectsSectionProps
}

const SectionProjects = ({ projectsSection }: Props) => {
  return (
    <S.Wrapper id="projects">
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
    </S.Wrapper>
  )
}

export default SectionProjects
