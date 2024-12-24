import Banner from "./Banner/Banner";
import Org from './Organizacion/Org';
import Equipo from './Equipo/Equipo';
import { useState } from 'react';
import { v4 as uuid } from "uuid";

function Index() {

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

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  };

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        return { ...equipo, colorPrimario: color };
      }
      return equipo;
    });
    setEquipos(equiposActualizados);
  };

  return (
    <div>
      <Banner />
      <Org />
      {equipos.map((equipo) => (
        <Equipo 
          datos={equipo} 
          key={equipo.id} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor} 
        />
      ))}
    </div>
  );
}

export default Index;
