function Summary(props) {
  const { values } = props;

  return (
    <div>
      <h1>Resumen</h1>
      <ul>Puntaje en complejidad del negocio: {values.business} / 16</ul>
      <ul>Puntaje en complejidad de la tecnología: {values.technology} / 16</ul>

      {values.business >= 10 || values.technology >= 10 ? (
        <div>
          <h2>Riesgo alto</h2>
          <span>
            {" "}
            Con este puntaje, el proyecto se considera de alta complejidad en su
            contexto de negocio y/o tecnológico. Se debe a la escasa o
            insuficientes definiciones y requerimientos tanto de modelo de
            negocios como en la implementación de tecnologías. Se aconseja no
            tomar este tipo de proyectos o re-evaluar la matriz.
          </span>
        </div>
      ) : values.business >= 5 || values.technology >= 5 ? (
        <div>
          <h2>Riesgo medio</h2>
          <span>
            {" "}
            Con este puntaje, el proyecto se considera de mediana complejidad en
            su contexto de negocio y/o tecnológico. Las definiciones del negocio
            y tecnología probablemente se encuentran bien definidas y no
            implican complicaciones extremas. Se aconseja tener precaución al
            considerar este tipo de proyectos.
          </span>
        </div>
      ) : (
        <div>
          <h2>Riesgo bajo</h2>
          <span>
            {" "}
            Con este puntaje, se encuentra bien definido y con condiciones
            ideales en lo tecnológico y en el negocio. Se recomienda tomar este
            tipo de proyectos si es que se considera que traerá un beneficio
            neto para la compañía.
          </span>
        </div>
      )}
    </div>
  );
}

export default Summary;
