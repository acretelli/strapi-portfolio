import Button from 'components/Button'
import React, { useState } from 'react'
import { getImageUrl } from 'utils/getImageUrl'
import { ProjectsProps } from 'types/api'

import ContentHeader from 'components/ContentHeader'
import { FiX } from 'react-icons/fi'

import * as S from './styles'

type Props = {
  project: ProjectsProps
}

const ProjectCard = ({ project }: Props) => {
  const [openPage, setOpenPage] = useState(false)
  const handleOpenPage = () => {
    console.log(project)
    setOpenPage(!openPage)
  }

  return (
    <>
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
        <Button onClick={handleOpenPage}>get to know it</Button>
      </S.Card>
      {openPage ? (
        <S.Modal>
          <S.CloseButton onClick={handleOpenPage}>
            <FiX size={24} />
          </S.CloseButton>
          <ContentHeader
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            media={project.media}
          />
          <S.ModalContent>
            {project.mediaText
              ? project.mediaText.map((item, i) => {
                  return (
                    <div key={i}>
                      <S.Text>{item.text}</S.Text>
                      {item.media.map((media, i) => {
                        return (
                          <S.Image
                            src={getImageUrl(media.url)}
                            alt={media.alternativeText}
                            key={i}
                          />
                        )
                      })}
                    </div>
                  )
                })
              : null}
            <Button wide onClick={handleOpenPage}>
              Voltar para Home
            </Button>
          </S.ModalContent>
        </S.Modal>
      ) : null}
    </>
  )
}

export default ProjectCard
