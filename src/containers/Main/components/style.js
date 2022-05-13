import styled from 'styled-components'
import { CardContent, Typography, Button } from '../../../components'

export const LabelStyled = styled(Typography)`
  font-weight: 300;
  font-size: 1.0rem;
`

export const ValueStyled = styled(Typography)`
  font-weight: 300;
  font-size: 2.0rem;
`

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
`

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 25px;
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`

export const ButtonStyled = styled(Button)`
  border-radius: 10px;
  display: flex;
  justify-align: space-between;
  align-item: center;
  margin-botton: 20px;
`