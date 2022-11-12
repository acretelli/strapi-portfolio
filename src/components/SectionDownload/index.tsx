import React from 'react'

import { DownloadModuleProps } from 'types/api'

import Button from 'components/Button'

import * as S from './styles'

type Props = {
  downloadModule: DownloadModuleProps[]
}

const SectionDownload = ({ downloadModule }: Props) => {
  return (
    <S.Wrapper>
      {downloadModule
        ? downloadModule.map((item, i) => {
            return (
              <S.TextLine key={i}>
                <S.Text>{item.text}</S.Text>
                {item.downloadButton && (
                  <Button href={item.downloadButton.url} onClick={() => null}>
                    {item.downloadButton.label}
                  </Button>
                )}
              </S.TextLine>
            )
          })
        : null}
    </S.Wrapper>
  )
}

export default SectionDownload
