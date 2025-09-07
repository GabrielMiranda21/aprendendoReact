// sempre que precisar usar propriedades, passe o parametro prop e indique a partir do ponto o nome da variavel
// importe no app e adicione as propriedades que nem os atributos do html, e coloque o conteudo dentro das aspas e ele será exibido

export function Card(props){
    return (
        <div>
            <strong>{props.name}</strong>
            <p>{props.content}</p>
        </div>
    )
}