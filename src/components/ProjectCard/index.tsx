import { useRouter } from 'next/router'
import Button from 'components/Button'
import React from 'react'
import { getImageUrl } from 'utils/getImageUrl'
import { ProjectsProps } from 'types/api'

import * as S from './styles'

type Props = {
  project: ProjectsProps
}

const ProjectCard = ({ project }: Props) => {
  const router = useRouter()

  const handleOpenPage = () => {
    router.push('/projects/project')
  }

  return (
    <S.Card>
      <S.CardImage
        src={getImageUrl(project.media.url)}
        alt={project.media.alternativeText}
      />
      <S.CardTitle>{project.title}</S.CardTitle>
      <S.CardSkillsWrapper>
        {project.skills &&
          project.skills.map((item, index) => {
            return <S.CardSkill key={index}>{item.skills}</S.CardSkill>
          })}
      </S.CardSkillsWrapper>
      <S.CardText>{project.description}</S.CardText>
      <Button href="" onClick={handleOpenPage}>
        get to know it
      </Button>
    </S.Card>
  )
}

export default ProjectCard
