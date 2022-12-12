import React from "react";

const Carrera = () => {
  const carrera = [
    { carrera: "Ingenieria en sistemas", ediicio: "E, F" },
    { carrera: "Ingenieria Mecatronica", ediicio: "G, I" },
    { carrera: "Ingenieria electrica", ediicio: "G, I, J" },
    {
      carrera: "Ingenieria Industrial",
      ediicio: "J",
    },
    {
      carrera: "Gestion empresarial",
      ediicio: "E, G, B",
    },
  ];

  return (
    <div>
      <h2>Componente Carrera</h2>
      <div className="container">
        {carrera.map((data) => (
          <>
            <div className="container_item">
              <h3>{data.carrera}</h3>
              <p>Edificios:{data.ediicio}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Carrera;
