import { Form } from "antd";
import "./HomeView.css";
import { useState } from "react";
import TechnologyGrid from "../../components/Technology/TechnologyGrid";
import BusinessGrid from "../../components/Business/BusinessGrid";
import Card from "../../components/Card";
import ResultGrid from "../../components/Grid/ResultGrid";
import styled from "styled-components";

const Boton = styled.div`
  background-color: lightblue;
  width: 10rem;
  max-width: 150px;
  padding: 1.5rem;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 1px 1px 0px grey;
`;

const Title = styled.h1`
  margin-left: 2rem;
  font-size: 3rem;
`;

function HomeView() {
  const [selected, setSelected] = useState({});
  const [points, setPoints] = useState({ business: 0, technology: 0 });
  const [form] = Form.useForm();

  const helperFunction = () => {
    const tempValues = form.getFieldsValue();

    let allAnswered = true;

    let [businessPoints, technologyPoints] = [0, 0];
    Object.keys(tempValues).map((obj) => {
      if (tempValues[obj] === undefined) allAnswered = false;
      else {
        if (obj.startsWith("business"))
          businessPoints = Number(businessPoints) + Number(tempValues[obj]);
        if (obj.startsWith("technology"))
          technologyPoints = Number(technologyPoints) + Number(tempValues[obj]);
      }
    });
    setPoints({ business: businessPoints, technology: technologyPoints });
    console.log({ business: businessPoints, technology: technologyPoints });

    allAnswered ? setSelected(tempValues) : alert("Faltan respuestas");
  };

  return (
    <div>
      <Title>Matriz de complejidad</Title>
      <Form form={form}>
        <Card>
          <h1>Contexto de negocio</h1>
          <BusinessGrid />
        </Card>

        <Card>
          <h1>Contexto tecnológico</h1>
          <TechnologyGrid />
        </Card>
        <Card>
          <Boton type="button" onClick={helperFunction}>
            {Object.keys(selected).length ? (
              <span>Actualizar Matriz</span>
            ) : (
              <span>Ver Matriz</span>
            )}
          </Boton>

          <div>
            <p>Riesgo bajo: Cuando ambos puntajes son menores o iguales a 5.</p>
            <p>
              Riesgo medio: Cuando cualquiera de sus puntajes es mayor a 5 y
              menor o igual a 11.
            </p>
            <p>Riesgo Alto: Cuando cualquiera de sus puntajes es mayor a 11.</p>
          </div>

          <div style={{ height: 50 }} />

          {Object.keys(selected).length ? (
            <ResultGrid values={points} />
          ) : (
            <span />
          )}
        </Card>
      </Form>
    </div>
  );
}

export default HomeView;
