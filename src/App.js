import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, Menu, Breadcrumb, Typography } from "antd";
import { HomeOutlined, AreaChartOutlined } from "@ant-design/icons";
import SwitchComponents from "./SwitchComponents";
import "./styles/global.css";

import Unit from "./components/Unit";
import Overview from "./components/Overview";

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

function App() {
  const [data, setData] = useState([]);
  const [activeContent, setActiveContent] = useState("overview");
  const [unitIndex, setUnitIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const result = await axios("http://test.motor.tractian.com/api/test");
      setData(result.data.units);
    }
    fetchData();
  }, []);

  async function handleContent(content, index) {
    setActiveContent(content);
    setUnitIndex(index);
  }

  return (
    <Layout id="main">
      <Header>
        <Title style={{ color: "white", marginTop: 10 }} level={2}>
          Placeholder
        </Title>
      </Header>
      <Layout>
        <Sider id="sider">
          <Menu mode="inline" defaultSelectedKeys={["overview"]}>
            <SubMenu
              title={
                <span>
                  <HomeOutlined />
                  <span>Unidades</span>
                </span>
              }
            >
              <Menu.ItemGroup key="units">
                {data.map((unit, index) => {
                  return (
                    <Menu.Item
                      key={index}
                      onClick={() => handleContent("unit", index)}
                    >
                      {unit.name}
                    </Menu.Item>
                  );
                })}
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="overview" onClick={() => handleContent("overview")}>
              <AreaChartOutlined />
              <span>Visão Geral</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Placeholder</Breadcrumb.Item>
              <Breadcrumb.Item>
                {activeContent === "unit"
                  ? `${data[unitIndex].name}`
                  : activeContent.replace(/^\w/, (char) => char.toUpperCase())}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div id="site-layout-content">
              <SwitchComponents active={activeContent}>
                <Unit name="unit" title="unit" data={data} index={unitIndex} />
                <Overview name="overview" data={data} />
              </SwitchComponents>
            </div>
          </Content>
          <Footer id="footer">Desafio Tractian 2020 ®</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
