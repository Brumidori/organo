import './CampoTexto.css'

//sso porque o React nos entrega implicitamente um parâmetro chamado props
// que são as propriedades que esse componente recebeu.
const CampoTexto = (props) => {

    //javascript variavel
    const placeholderModificada = `${props.placeholder}`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            {/*react variavel*/}
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto