import banner from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import macarrao from '../../assets/images/fundo-macarrao.png'
import * as S from './styles'
import CardapioList from '../../components/CardapioList'
import { Link } from 'react-router-dom'

const Product = () => (
  <>
    <S.Fundo style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="logo" />
        <p>0 produto(s) no carrinho</p>
      </div>
    </S.Fundo>
    <S.Apresentacao style={{ backgroundImage: `url(${macarrao})` }}>
      <div className="container">
        <S.Titulo>Italiana</S.Titulo>
        <S.Titulo2>La Dolce Vita Trattoria</S.Titulo2>
      </div>
    </S.Apresentacao>
    <CardapioList />
  </>
)

export default Product
