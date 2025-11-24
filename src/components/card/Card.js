import './card.css'
import araras from './araras.jfif'
import cordeiropolis from './cordeiropolis.jpg'
import rioclaro from './rioclaro.jpg'
import digital from './digital.png'
import tv from './tv.png'
import ticket from "./ticket.png"


export default function Card() {

    const baseUrl = 'https://cmso360-frontend.vercel.app/'
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
        },
        {
            nome: 'CMSO 360',
            imagem: digital,
            endereco: 'Atendimento digital',
            url: baseUrl
        },
        {
            nome: 'Painel 360',
            imagem: tv,
            endereco: 'Painel chamada',
            url: `${baseUrl}painel`
        },
        {
            nome: 'Senha 360',
            imagem: ticket,
            endereco: 'Emissor senha',
            url: `${baseUrl}ticket`
        },
    ]
    

    
    return(
        // Adicionando um container para gerenciar o layout flexível
        <div className="cards-container">
            {data.map( unidade => {
                return (
                    // Removendo os estilos inline desnecessários e usando apenas a classe CSS
                    <div className="ui card modelcard" key={unidade.nome}> 
                        <img src={unidade.imagem} alt="Imagem da unidade centro médico de saúde ocupacional" width={60} />
                            <div className="content">
                                <div className="header">{unidade.nome}</div>
                                <div className="description">
                                    {unidade.endereco}
                                </div>
                            </div>
                            <a className="ui animated orange button" href={unidade.url}>
                                <div className="visible content">Acessar</div>
                                <div className="hidden content">
                                    <i className="right arrow icon"></i>
                                </div>
                            </a>
                    </div>
                )
                
            })}
        </div>
        
    )
}