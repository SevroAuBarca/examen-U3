import React from "react";

const Alumno = () => {
  const alumno = {
    alumno: "Daniel Alejandro Contreras Martinez",
    carrera: "Ingenieria en Sistemas Computacionales",
    Ncontrol: 18680096,
    escuela: "Instituto Tecnologico de Cuautla",
  };
  return (
    <div className="alumno">
      <h2>Componente Alumno</h2>
      <h3>
        Nombre: <span>{alumno.alumno}</span>
      </h3>
      <p>
        Carrera: <span>{alumno.carrera}</span>
      </p>
      <p>
        No. Control: <span>{alumno.Ncontrol}</span>
      </p>
      <p>
        Escuela: <span>{alumno.escuela}</span>
      </p>
    </div>
  );
};

export default Alumno;
