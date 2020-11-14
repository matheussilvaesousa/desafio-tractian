import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import drilldown from "highcharts/modules/drilldown";
import { Typography, Statistic, Row, Col } from "antd";

const { Text } = Typography;

// drilldown(Highcharts);
let dataSumOptions = {};

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

  data.map((unit) => {
    for (const property in unit.data) {
      dataSum[property] += unit.data[property];
    }
  });

  useEffect(() => {
    dataSumOptions = dataSum;
  }, []);

  return (
    <Row id="overview" gutter={16} justify="space-around">
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
      <Col>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              type: "pie",
            },
            xAxis: {
              type: "category",
            },
            yAxis: {
              title: "Número de ativos",
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
    </Row>
  );
}

export default Overview;
