import Colaborador from "../Colaborador/Colaborador"
import "./Equipo.css"

const Equipo = (props) => {

    const {colaboradores, eliminarColaborador, actualizarColor } = props
    const {id} = props.datos
    

    return <> 
    { colaboradores.length > 0 &&
    <section className="">
        <input  
            type="color"
            className=""
            onChange={(evento) => {
                actualizarColor(evento.target.value, id) 
            }}
        />
        <h3>{props.datos.titulo}</h3>
        <div>
            {
                colaboradores.map((colaborador,index) => <Colaborador 
                datos={colaborador} 
                key={index} 
                eliminarColaborador={eliminarColaborador}
                />)
            }
        </div>
    </section>
    }
    </>
}

export default Equipo