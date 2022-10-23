import styled from 'styled-components'
import theme from 'styles/theme'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xsmall};
  padding: ${theme.spacings.medium};
  border-radius: 0.8rem;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);

  min-width: 20rem;
  max-width: 36rem;

  text-align: center;
`

export const CardTitle = styled.h3``

export const CardText = styled.p`
  font-size: ${theme.font.sizes.xsmall};
`

export const CardImage = styled.img`
  height: 16rem;
  border-radius: 0.4rem;
  object-fit: cover;
`

export const CardSkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacings.xxsmall};
`

export const CardSkill = styled.span`
  padding: 0.4rem;
  background-color: ${theme.colors.primary};
  border-radius: 0.4rem;

  font-size: ${theme.font.sizes.xxsmall};
  font-weight: 700;
`
