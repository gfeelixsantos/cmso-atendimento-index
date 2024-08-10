import card from './card.css'
import logo from './logoquadrado.jpg'

export default function Card() {

    const data = [
        {
        nome: 'Araras',
        endereco: 'Rua Coronel Justiniano, 509 - Centro',
        url: 'https://192.168.99.101:3000'
        },
        {
            nome: 'Cordeirópolis',
            endereco: 'Rua Guilherme Krauter, 507 - Centro',
            url: 'https://192.168.0.123:3000'
        },
        {
            nome: 'Rio Claro',
            endereco: 'Rua Dois, 635 - Saúde',
            url: 'https://192.168.0.221:3000'
        }
    ]

    

    return(
        data.map( unidade => {
            return (
                <div class="ui card modelcard" style={{margin: 0}}>
                    <img src={logo} alt="Imagem da unidade centro médico de saúde ocupacional"></img>
                        <div class="content">
                            <div class="header">{unidade.nome}</div>
                            <div class="description">
                                {unidade.endereco}
                            </div>
                        </div>
                        <a class="ui animated orange button" href={unidade.url}>
                            <div class="visible content">Acessar</div>
                            <div class="hidden content">
                                <i class="right arrow icon"></i>
                            </div>
                        </a>
                </div>
            )
            
        })
        
    )
}