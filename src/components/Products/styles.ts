import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  color: ${cores.rosa};
  position: relative;
  margin-bottom: 48px;
  line-height: 22px;

  img {
    width: 100%;
  }
`

export const CardInfos = styled.div`
  padding: 0 8px 8px;
  border-right: solid 1px;
  border-left: solid 1px;
  border-bottom: solid 1px;
  border-color: #e66767;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Nota = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;

  img {
    width: 24px;
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  font-weight: 400;
`

export const Button = styled.button`
  width: 90px;
  cursor: pointer;
  background-color: #e66767;
  border: none;
  padding: 6px;
  font-weight: 700;
  font-size: 14px;

  a {
    color: #fff;
  }
`

export const TagContainer = styled.div`
  background-color: #e66767;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 8px;
  display: inline-block;
  margin-left: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
