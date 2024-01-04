import styled from 'styled-components'
import { Imagem } from '../Header/styles'

export const Container = styled.div`
  display: block;
`

export const ImageFooter = styled(Imagem)`
  height: 300px;
  border: 1px solid red;
`

export const RedesSociais = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 120px;

  img {
    margin-right: 8px;
  }
`

export const RodaPe = styled.p`
  position: relative;
  font-size: 10px;
  text-align: center;
  color: #e66767;
  margin-top: 160px;
  font-weight: 400;
`
