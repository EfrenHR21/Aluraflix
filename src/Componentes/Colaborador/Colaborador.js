import "./Colaborador.css"
import { IoIosCloseCircle } from "react-icons/io";

const Colaborador = (props) => {
    
    const {titulo,imagen,video,descripcion,equipo, id} = props.datos
    const {eliminarColaborador} = props

    return <div className="colaborador">
        <IoIosCloseCircle onClick={() => eliminarColaborador(id)} />
        
        <div className="" >
            <img src={imagen} alt="imagen" />
        </div>
        <div className="info">
            <h4>{titulo}</h4>
            <h5>{descripcion}</h5>
        </div>
    </div>
}

export default Colaborador