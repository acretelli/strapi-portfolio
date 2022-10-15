import React from 'react'
import { getImageUrl } from 'utils/getImageUrl'

import ContentHeader from '../../components/ContentHeader'
import ProjectCard from '../../components/ProjectCard'
import Button from '../../components/Button'

import * as S from './styles'

const ProjectPage = () => {
  return (
    <S.Wrapper>
      <ContentHeader />
      <S.Textblock>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </S.Textblock>
      <S.MediasWrapper>
        <S.Media src={getImageUrl('/img/project-image.jpg')} alt="" />
        <S.Media src={getImageUrl('/img/project-image.jpg')} alt="" />
        <S.Media src={getImageUrl('/img/project-image.jpg')} alt="" />
        <S.Media src={getImageUrl('/img/project-image.jpg')} alt="" />
      </S.MediasWrapper>
      <S.ButtonWrapper>
        <Button wide href="/" onClick={() => console.log('oi')}>
          Back to Home
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default ProjectPage
