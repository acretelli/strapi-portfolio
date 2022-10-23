import React from 'react'

import { DownloadModuleProps } from 'types/api'

import Button from 'components/Button'

import * as S from './styles'

type Props = {
  downloadModule: DownloadModuleProps
}

const SectionDownload = ({ downloadModule }: Props) => {
  return (
    <S.Wrapper>
      <S.TextLine>
        <S.Text>{downloadModule.text}</S.Text>
        {downloadModule.downloadButton && (
          <Button href={downloadModule.downloadButton.url} onClick={() => null}>
            {downloadModule.downloadButton.label}
          </Button>
        )}
      </S.TextLine>
      <S.TextLine>
        <S.Text>Do you want my resume instead?</S.Text>
        <Button href="" onClick={() => console.log('oi')}>
          Download Resume
        </Button>
      </S.TextLine>
    </S.Wrapper>
  )
}

export default SectionDownload
