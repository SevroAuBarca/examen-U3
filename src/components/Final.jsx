import React from "react";

const Final = () => {
  const tecnologias = [
    {
      tipo: "Frontend",
      lenguaje: "Javascript",
      frameworks: [
        {
          nombre: "React",
          icon: "https://api.iconify.design/vscode-icons:file-type-reactjs.svg",
        },
        {
          nombre: "Angular",
          icon: "https://api.iconify.design/logos:angular-icon.svg",
        },
        { nombre: "Vue", icon: "https://api.iconify.design/logos:vue.svg" },
      ],
    },
    {
      tipo: "Backend",
      lenguaje: "Python",
      frameworks: [
        {
          nombre: "Django",
          icon: "https://api.iconify.design/vscode-icons:file-type-django.svg",
        },
        { nombre: "Flask", icon: "https://api.iconify.design/bxl:flask.svg" },
        {
          nombre: "FastAPI",
          icon: "https://api.iconify.design/simple-icons:fastapi.svg",
        },
      ],
    },
  ];
  return (
    <div>
      <h2>Componente Arreglo</h2>
      <div className="container xd">
        {tecnologias.map((data) => (
          <>
            <div className="container_item">
              <h3>{data.tipo}</h3>
              <p>{data.lenguaje}</p>
              <ul>
                {data.frameworks.map((data) => (
                  <>
                    <li>
                      <img src={data.icon} alt="" />
                      {data.nombre}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Final;
