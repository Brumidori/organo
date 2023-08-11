import './Time.css'

const Time= (props) =>{
    return (
        //style eh insersão de css no JSX
        <section className='time' style={{backgroundColor: props.corSecundaria}}> 
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Time