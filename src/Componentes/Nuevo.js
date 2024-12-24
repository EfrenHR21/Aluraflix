
import Formulario from './Formulario/Formulario';
import { useState } from 'react';
import { v4 as uuid } from "uuid";

function Nuevo() {

  const equiposIniciales = [
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Back End",
      colorPrimario: "#e8f8ff",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FDE7E8",
      colorSecundario: "#D9F7E9"
    }
  ];

  const [colaboradores, actualizarColaboradores] = useState([]);
  const [equipos, setEquipos] = useState(equiposIniciales);

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador);
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  
  return (
    <div>
      <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador} 
      />
    </div>
  );
}

export default Nuevo;
