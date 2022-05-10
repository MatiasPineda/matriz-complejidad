import { Form, Radio, Button } from "antd";
import "./HomeView.css";
import { useState } from "react";
import TechnologyGrid from "../../components/Technology/TechnologyGrid";
import BusinessGrid from "../../components/Business/BusinessGrid";
import Card from "../../components/Card";
import ResultGrid from "../../components/Grid/ResultGrid";

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
      <Form form={form}>
        <Card>
          <BusinessGrid />
        </Card>

        <Card>
          <TechnologyGrid />
        </Card>
        <Card>
          <Button type="button" onClick={helperFunction}>
            {Object.keys(selected).length ? (
              <span>Actualizar Matriz</span>
            ) : (
              <span>Ver Matriz</span>
            )}
          </Button>

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
