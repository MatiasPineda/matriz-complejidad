export default {
  headers: [
    "Atributo del Negocio",
    "Zona I Complejidad Baja",
    "Zona II Complejidad Media",
    "Zona III Complejidad Alta",
  ],
  questions: [
    {
      attribute:
        "Cuantos ejecutivos de la organización poseen conocimientos en esa rama del negocio.",
      zone: {
        1: "Uno",
        2: "Entre 2 y 3",
        3: "Ninguno o más de 3.",
      },
    },
    {
      attribute: "Definición de Objetivos del negocio.",
      zone: {
        1: "Método SMART",
        2: "Método SMART, aplicado no en su totalidad.",
        3: "Vagos.",
      },
    },
    {
      attribute: "Procesos de negocio.",
      zone: {
        1: "Pocos (1 a 4)",
        2: "5 a 6.",
        3: "Muchos, más de 6.",
      },
    },
    {
      attribute: "Políticas del negocio.",
      zone: {
        1: "Existentes",
        2: "Vagas",
        3: "Inexistentes",
      },
    },
    {
      attribute: "Regulaciones del negocio (Superintendencia o SII).",
      zone: {
        1: "Pocas y Simples.",
        2: "Pocas y complejas.",
        3: "Muchas y Complejas.",
      },
    },
    {
      attribute: "Personal.",
      zone: {
        1: "Experimentado.",
        2: "Poca experiencia.",
        3: "Sin Experiencia.",
      },
    },
    {
      attribute: "Ámbito geográfico del negocio.",
      zone: {
        1: "Una Localización.",
        2: "Regional.",
        3: "Gobal.",
      },
    },
    {
      attribute: "Reglas internas del negocio.",
      zone: {
        1: "Establecidas.",
        2: "Vagas.",
        3: "Inexistentes.",
      },
    },
  ],
};