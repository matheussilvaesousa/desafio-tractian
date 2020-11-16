import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {
  Tabs,
  Card,
  Row,
  Col,
  Modal,
  Typography,
  Divider,
  Statistic,
  Image,
} from "antd";

const { Text } = Typography;
const { TabPane } = Tabs;

function Unit(props) {
  const unitData = props.data[props.index];
  const [visible, setVisible] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(0);
  let currentAsset = unitData.data.assetsData[selectedAsset];

  const {
    countAssets,
    inUse,
    available,
    onAlert,
    underMaintenance,
    insightsPending,
    insightsChecked,
  } = unitData.data;

  function handleOpenModal(index) {
    setSelectedAsset(index);
    setVisible(true);
  }
  function handleCloseModal() {
    setVisible(false);
  }

  return (
    <Row>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Ativos" key="assets">
          <Row>
            {unitData.data.assetsData.map((asset, index) => {
              return (
                <>
                  <Card
                    title={<Text strong>{asset.name}</Text>}
                    className="card"
                    onClick={() => handleOpenModal(index)}
                  >
                    <Text>{asset.description}</Text>
                    <div className="date-wrapper">
                      <Divider />
                      <Text type="secondary">
                        Iniciado em
                        {" " +
                          new Intl.DateTimeFormat("pt-BR", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                          }).format(Date.parse(asset.startup))}
                      </Text>
                    </div>
                  </Card>
                  <Modal
                    title={<Text strong>{currentAsset.name}</Text>}
                    visible={visible}
                    onOk={() => handleCloseModal()}
                    onCancel={() => handleCloseModal()}
                    index={index}
                    width={800}
                  >
                    <Row gutter={24} justify="center">
                      <Col className="modal-image-wrapper" span={12}>
                        <Image width={200} src={currentAsset.model.image} />
                        <p class="image-description">
                          {currentAsset.model.description}
                        </p>
                      </Col>
                      <Col span={12}>
                        <Col span={12}>
                          <Statistic
                            title="Saúde do equipamento"
                            value={currentAsset.healthscore.health}
                            suffix="/ 100"
                          />
                        </Col>
                        <Col span={12}>
                          <Statistic
                            title="Insights pendentes"
                            value={currentAsset.insights.pending}
                          />
                        </Col>
                        <Col span={12}>
                          <Statistic
                            title="Insights resolvidos"
                            value={currentAsset.insights.checked}
                          />
                        </Col>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="description-wrapper">
                        <Text className="description-title">
                          {currentAsset.category.name}
                        </Text>
                        <Text className="description-text">
                          {currentAsset.category.description}
                        </Text>
                      </Col>
                    </Row>
                  </Modal>
                </>
              );
            })}
          </Row>
        </TabPane>
        <TabPane tab="Estatísticas" key="stats  ">
          <Row id="overview" gutter={48} justify="space-around">
            <Col span={3}>
              <Statistic title="Total de ativos" value={countAssets} />
            </Col>
            <Col span={3}>
              <Statistic title="Em uso" value={inUse} />
            </Col>
            <Col span={3}>
              <Statistic title="Disponíveis" value={available} />
            </Col>
            <Col span={3}>
              <Statistic title="Em alerta" value={onAlert} />
            </Col>
            <Col span={3}>
              <Statistic title="Em manutenção" value={underMaintenance} />
            </Col>
            <Col span={3}>
              <Statistic title="Insights pendentes" value={insightsPending} />
            </Col>
            <Col span={3}>
              <Statistic title="Insights resolvidos" value={insightsChecked} />
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
                  plotOptions: {
                    pie: {
                      colors: [
                        "#67b7dc",
                        "#6771dc",
                        "#8067dc",
                        "#c767dc",
                        "#a367dc",
                      ],
                      dataLabels: {
                        enabled: false,
                      },
                      showInLegend: true,
                    },
                  },
                  series: [
                    {
                      name: "Browsers",
                      colorByPoint: true,
                      data: [
                        {
                          name: "Em uso",
                          y: inUse,
                        },
                        {
                          name: "Disponíveis",
                          y: available,
                        },
                        {
                          name: "Em alerta",
                          y: onAlert,
                        },
                        {
                          name: "Em manutenção",
                          y: underMaintenance,
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
                  plotOptions: {
                    pie: {
                      colors: ["#e9282a", "#4bb543"],
                      dataLabels: {
                        enabled: false,
                      },
                      showInLegend: true,
                    },
                  },
                  series: [
                    {
                      name: "Browsers",
                      colorByPoint: true,
                      data: [
                        {
                          name: "Insights pendentes",
                          y: insightsPending,
                        },
                        {
                          name: "Insights resolvidos",
                          y: insightsChecked,
                        },
                      ],
                    },
                  ],
                }}
              />
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </Row>
  );
}

export default Unit;
