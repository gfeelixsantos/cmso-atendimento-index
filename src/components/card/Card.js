import './card.css'
import araras from './araras.jfif'
import cordeiropolis from './cordeiropolis.jpg'
import rioclaro from './rioclaro.jpg'


export default function Card() {

    const data = [
        {
            nome: 'Araras',
            imagem: araras,
            endereco: 'Rua Coronel Justiniano, 509 - Centro',
            url: 'https://192.168.99.104:3000'
        },
        {
            nome: 'Cordeirópolis',
            imagem: cordeiropolis,
            endereco: 'Rua Guilherme Krauter, 507 - Centro',
            url: 'https://192.168.0.90:3000'
        },
        {
            nome: 'Rio Claro',
            imagem: rioclaro,
            endereco: 'Rua Dois, 635 - Saúde',
            url: 'https://192.168.0.221:3000'
        }
    ]

    

    return(
        data.map( unidade => {
            return (
                <div class="ui card modelcard" style={{margin: 0}}>
                    <img src={unidade.imagem} alt="Imagem da unidade centro médico de saúde ocupacional"></img>
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
