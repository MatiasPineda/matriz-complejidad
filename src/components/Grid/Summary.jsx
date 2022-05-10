function Summary(props) {
  const { values } = props;

  return (
    <div>
      <h1>Resumen</h1>
      <ul>Puntaje en complejidad del negocio: {values.business} / 16</ul>
      <ul>
        Puntaje en complejidad de la tecnología: {values.technology} / 16
      </ul>

      {values.business >= 10 || values.technology >= 10 ? (
        <h2>Riesgo alto</h2>
      ) : values.business >= 5 || values.technology >= 5 ? (
      <h2>Riesgo medio</h2>
      ): (
      <h2>Riesgo bajo</h2>
      )}
    </div>
  );
}

export default Summary;
