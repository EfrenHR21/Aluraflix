import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"
import { useState } from "react"

const Formulario = (props) =>{

    const [titulo,actualizarTitulo] = useState("")
    const [imagen,actualizarImagen] = useState("")
    const [video,actualizarVideo] = useState("")
    const [descripcion,actualizarDescripcion]= useState("")
    const [equipo,actualizarEquipo]= useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            titulo,
            equipo,
            imagen,
            video,
            descripcion
        }
        props.registrarColaborador(datosAEnviar)
    }

    return <section>
        <form onSubmit={manejarEnvio}>
            <h2>NUEVO VIDEO</h2>
            <div>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</div>
            <CampoTexto 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo} 
                />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos = {props.equipos}
            />
            <CampoTexto 
                titulo="Imagen" 
                placeholder="Ingresar Enlace de Imagen" 
                required 
                valor={imagen} 
                actualizarValor={actualizarImagen} 
                />
            <CampoTexto 
                titulo="Video" 
                placeholder="Ingresar Enlace de Video" 
                required 
                valor={video}
                actualizarValor={actualizarVideo} 
                />
            <CampoTexto 
                titulo="Descripcion" 
                placeholder="¿De que trata este video?" 
                required 
                valor={descripcion} 
                actualizarValor={actualizarDescripcion} 
                />
            <Boton>   
            </Boton> 

        </form>
    </section>
}

export default Formulario