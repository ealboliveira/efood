import styled from 'styled-components'
import { Imagem } from '../../components/Header/styles'

export const Fundo = styled(Imagem)`
  height: 200px;
  display: flex;
  margin: 0;

  .container {
    top: 0;
    justify-content: space-between;
    color: #e66767;
    font-family: Roboto;
    font-weight: 900;
    font-style: normal;
    font-size: 18px;

    a {
      color: #e66767;
    }
  }
`

export const Apresentacao = styled(Imagem)`
  height: 300px;
  margin-bottom: 56px;

  .container {
    display: block;
  }
`

export const Titulo = styled.h3`
  position: absolute;
  top: -50px;
  font-size: 33px;
  color: #fff;
  line-height: normal;
  font-weight: 100 !important;
`
export const Titulo2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  top: 144px;
  color: #fff;
  position: absolute;
  font-weight: 900;
`
