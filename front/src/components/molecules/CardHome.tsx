import styled from 'styled-components'
import { FlexBox, colors, dimensions, font } from '../../styles'
import { Text } from '../atoms'

const MainContainer = styled(FlexBox)`
  align-items: flex-end;
  margin: ${dimensions.spacing.base};
`

const ContentContainer = styled(FlexBox)`
  position: relative;
  background-color: ${colors.gray.gray5};
  padding: ${dimensions.spacing.md};
  height: fit-content;
  width: 200px;
  height: 268px;
  border-bottom-left-radius: ${dimensions.borderRadius.base};
  border-bottom-right-radius: ${dimensions.borderRadius.base};
  border-top-left-radius: ${dimensions.borderRadius.base};
`
const TopContainter = styled.div`
  background-color: ${colors.gray.gray5};
  height: 30px;
  width: 163px;
  border-top-right-radius: ${dimensions.borderRadius.base};
  border-top-left-radius: ${dimensions.borderRadius.base};
`
const IndicatorStyled = styled(FlexBox)`
  position: absolute;
  min-width: ${dimensions.spacing.xl};
  background-color: ${colors.white};
  padding: ${dimensions.spacing.xxs};
  border-bottom-left-radius: ${dimensions.borderRadius.base};
  border-bottom-right-radius: ${dimensions.borderRadius.base};
  left: -0.1rem;
  top: -1.9rem;
  font-size: ${font.xss};
  color: ${colors.gray.gray3};
`
const ImgStyled = styled.img`
  height: 100px;
  width: 100px;
`
const TitleStyled = styled(Text)`
  text-align: center;
`
const SubtitleStyled = styled(Text)`
  text-align: center;
  color: ${colors.gray.gray3};
  font-size: ${font.xss};
`

type TCardHome = {
  cardTitle: string
  cardSubtitle: string
  indicator: string
  icon: string
}

export const CardHome = ({
  cardTitle,
  cardSubtitle,
  indicator,
  icon,
}: TCardHome) => (
  <MainContainer>
    <TopContainter />
    <ContentContainer>
      <IndicatorStyled>{indicator}</IndicatorStyled>
      <ImgStyled alt="icon" src={icon} data-testid="testIcon" />
      <TitleStyled>{cardTitle}</TitleStyled>
      <SubtitleStyled>{cardSubtitle}</SubtitleStyled>
    </ContentContainer>
  </MainContainer>
)