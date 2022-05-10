import technology from "./tecnologydata";
import { Form, Radio } from "antd";

function TechnologyGrid() {
  return (
    <div>
      <tr>
        {technology.headers.map((titles) => (
          <th>
            <div style={{ width: "20vw" }}>{titles}</div>
          </th>
        ))}
      </tr>
      {technology.questions.map((q, index) => (
        <Form.Item
          name={`technology-question-${index}`}
          rules={[
            {
              required: true,
              message: "Todas las opciones deben ser seleccionadas",
            },
          ]}
        >
          <tr>
            <Radio.Group>
              <td>
                <div style={{ width: "20vw" }}>{q.attribute}</div>
              </td>
              <td>
                <div style={{ width: "20vw" }}>
                  <Radio.Button value={0}>{q.zone[1]}</Radio.Button>
                </div>
              </td>
              <td>
                <div style={{ width: "20vw" }}>
                  <Radio.Button value={1}>{q.zone[2]}</Radio.Button>
                </div>
              </td>
              <td>
                <div style={{ width: "20vw" }}>
                  <Radio.Button value={2}>{q.zone[3]}</Radio.Button>
                </div>
              </td>
            </Radio.Group>
          </tr>
        </Form.Item>
      ))}
    </div>
  );
}

export default TechnologyGrid;
