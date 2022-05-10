export default {
  headers: [
    "Atributo de la tecnología",
    "Zona I Complejidad Baja",
    "Zona II Complejidad Media",
    "Zona III Complejidad Alta",
  ],
  questions: [
    {
      attribute: "Arquitectura tecnológica del proyecto.",
      zone: {
        1: "Existente en la  empresa",
        2: "Existen, pero no desarrolladas",
        3: "Inexistente en la empresa",
      },
    },
    {
      attribute: "Proveedores de Tecnología y telecomunicaciones.",
      zone: {
        1: "Antiguos, con presencia de más de 4 años en el mercado.",
        2: "Antiguos con presencia de menos de 4 años en le mercado.",
        3: "Nuevos.",
      },
    },
    {
      attribute: "Localización de los dispositivos a controlar.",
      zone: {
        1: "Uno",
        2: "Entre 3 y 4 localizaciones.",
        3: "5 o más.",
      },
    },
    {
      attribute: "Personal de áreas tecnológicas.",
      zone: {
        1: "Experimentado, más de 2 años.",
        2: "Menos de 2 años de experiencia",
        3: "Sin experiencia",
      },
    },
    {
      attribute: "Cantidad de plataformas.",
      zone: {
        1: "Pocas (1 a 3).",
        2: "4.",
        3: "Muchas (más de 4).",
      },
    },
    {
      attribute:
        "Nivel de integración de las distintas plataformas, actualmente.",
      zone: {
        1: "Integradas.",
        2: "Medianamente integradas.",
        3: "Sin integración.",
      },
    },
    {
      attribute: "Plataformas tolerantes a fallas o redundantes.",
      zone: {
        1: "Muchas (Mayor a 70%).",
        2: "Entre 30% y 69%",
        3: "Menos de 30%.",
      },
    },
    {
      attribute: "Pregunta inventada.",
      zone: {
        1: "r1.",
        2: "r2.",
        3: "r3.",
      },
    },
  ],
};