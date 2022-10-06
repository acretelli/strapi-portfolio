import Button from 'components/Button'
import React from 'react'

import * as S from './styles'

const SectionDownload = () => (
  <S.Wrapper>
    <S.TextLine>
      <S.Text>Do you want an offline version? Get it right here</S.Text>
      <Button href="" onClick={() => console.log('oi')}>
        Download Portfolio
      </Button>
    </S.TextLine>
    <S.TextLine>
      <S.Text>Do you want my resume instead?</S.Text>
      <Button href="" onClick={() => console.log('oi')}>
        Download Resume
      </Button>
    </S.TextLine>
  </S.Wrapper>
)

export default SectionDownload
