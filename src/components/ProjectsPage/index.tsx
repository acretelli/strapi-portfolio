import React from 'react'

import ContentHeader from 'components/ContentHeader'
import ProjectCard from 'components/ProjectCard'
import Button from 'components/Button'

import * as S from './styles'

const ProjectsPage = () => {
  return (
    <S.Wrapper>
      <ContentHeader />
      <S.ProjectsWrapper>
        <ProjectCard />
        <ProjectCard />
      </S.ProjectsWrapper>
      <S.ButtonWrapper>
        <Button wide href="/" onClick={() => console.log('oi')}>
          Back to Home
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default ProjectsPage
