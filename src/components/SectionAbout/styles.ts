import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  margin: ${theme.spacings.large} auto;
`

export const AcademicFormationContainer = styled.div`
  margin: ${theme.spacings.large} auto;
  max-width: 1024px;
  text-align: center;
`
export const ProfessionalExperienceContainer = styled.div`
  margin: ${theme.spacings.large} auto;
  max-width: 1024px;
  text-align: center;
`

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacings.medium};

  margin: ${theme.spacings.medium};

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`

export const TextBlock = styled.div`
  max-width: 1024px;
  margin: ${theme.spacings.large} auto ${theme.spacings.xsmall};
`

export const Title = styled.h2``

export const Subtitle = styled.h3`
  font-weight: 300;
`

export const ButtonWrapper = styled.div`
  max-width: 240px;
  margin: ${theme.spacings.large} auto;
`
