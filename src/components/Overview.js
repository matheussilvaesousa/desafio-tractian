import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Statistic, Row, Col, Divider } from "antd";

function Overview(props) {
  const data = props.data;
  const dataSum = {
    countAssets: 0,
    inUse: 0,
    available: 0,
    onAlert: 0,
    underMaintenance: 0,
    insightsPending: 0,
    insightsChecked: 0,
  };

  data.forEach((unit) => {
    for (const property in unit.data) {
      dataSum[property] += unit.data[property];
    }
  });

  return (
    <Row id="overview" gutter={48} justify="space-around">
      <Col span={3}>
        <Statistic title="Total de ativos" value={dataSum.countAssets} />
      </Col>
      <Col span={3}>
        <Statistic title="Em uso" value={dataSum.inUse} />
      </Col>
      <Col span={3}>
        <Statistic title="Disponíveis" value={dataSum.available} />
      </Col>
      <Col span={3}>
        <Statistic title="Em alerta" value={dataSum.onAlert} />
      </Col>
      <Col span={3}>
        <Statistic title="Em manutenção" value={dataSum.underMaintenance} />
      </Col>
      <Col span={3}>
        <Statistic title="Insights pendentes" value={dataSum.insightsPending} />
      </Col>
      <Col span={3}>
        <Statistic
          title="Insights resolvidos"
          value={dataSum.insightsChecked}
        />
      </Col>
      <Divider />
      <Col span={12}>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              type: "pie",
            },
            title: {
              text: "Ativos",
            },
            series: [
              {
                name: "Browsers",
                colorByPoint: true,
                data: [
                  {
                    name: "Em uso",
                    y: dataSum.inUse,
                  },
                  {
                    name: "Disponíveis",
                    y: dataSum.available,
                  },
                  {
                    name: "Em alerta",
                    y: dataSum.onAlert,
                  },
                  {
                    name: "Em manutenção",
                    y: dataSum.underMaintenance,
                  },
                ],
              },
            ],
          }}
        />
      </Col>
      <Col>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              type: "pie",
            },
            title: {
              text: "Insights",
            },
            series: [
              {
                name: "Browsers",
                colorByPoint: true,
                data: [
                  {
                    name: "Insights pendentes",
                    y: dataSum.insightsPending,
                  },
                  {
                    name: "Insights resolvidos",
                    y: dataSum.insightsChecked,
                  },
                ],
              },
            ],
          }}
        />
      </Col>
    </Row>
  );
}

export default Overview;
