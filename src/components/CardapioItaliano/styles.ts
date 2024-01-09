import styled from 'styled-components'
import { Button, Card, Descricao, Title } from '../Products/styles'
import { cores } from '../../styles'

export const Container = styled.div`
  max-width: 320px;
  background-color: ${cores.rosa};
  margin-bottom: 32px;
`

export const CardRosa = styled(Card)`
  padding: 8px;
  color: ${cores.branca};
  background-color: ${cores.rosa};
  margin: 0 auto;

  img {
    max-width: 300px;
  }
`

export const ButtonAdicionar = styled(Button)`
  color: ${cores.rosa};
  background-color: ${cores.branca};
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  background: #ffebd9;
`

export const Titulo = styled(Title)`
  color: #ffebd9;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 8px;
`

export const Description = styled(Descricao)`
  color: #ffebd9;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`
