import Button from 'components/Button'
import ProjectCard from 'components/ProjectCard'
import React from 'react'

import * as S from './styles'

const SectionProjects = () => (
  <S.Wrapper>
    <S.TextBlock>
      <S.MainText>Do you want to see some of my work?</S.MainText>
    </S.TextBlock>
    <S.CardsContainer>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </S.CardsContainer>
    <S.ButtonWrapper>
      <Button wide href="" onClick={() => console.log('oi')}>
        More projects
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default SectionProjects
