import headercss from './header.css'

export default function Header(){
    return(
        <div id="header">
            <h1 id="headername" class="ui header">
                Centro Médico de Saúde Ocupacional
                <div id='subheadername' class="sub header">Unidades de atendimentos</div>
            </h1>
        </div>
    )
}