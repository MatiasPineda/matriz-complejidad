import business from "./businessdata";
import { Form, Radio } from "antd";

function BusinessGrid() {
  return (
    <div>
      <tr>
        {business.headers.map((titles) => (
          <th>
            <div style={{ width: "20vw" }}>{titles}</div>
          </th>
        ))}
      </tr>
      {business.questions.map((q, index) => (
        <Form.Item
          name={`business-question-${index}`}
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

export default BusinessGrid;