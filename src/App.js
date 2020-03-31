import React, { useState, useEffect } from "react";
import { Layout, Menu, message, Dropdown } from "antd";
import {
  DownOutlined,
  HomeOutlined,
  FileImageFilled,
  FileImageOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Photo from "./routes/Photo";
import GTAV from "./routes/GTAV";

const { Header, Content, Footer } = Layout;

function App() {
  const [menukey, setMenukey] = useState("/");

  const handleSettingsClick = ({ key }) => {
    message.info(`Click on setting ${key}`);
  };

  const handleClick = e => {
    setMenukey("settings");
    console.log(`Click on ${e.key}`);
  };

  const menu = (
    <Menu onClick={handleSettingsClick}>
      <Menu.Item key="1">1st settings</Menu.Item>
      <Menu.Item key="2">2nd settings</Menu.Item>
      <Menu.Item key="3">3rd settings</Menu.Item>
    </Menu>
  );

  useEffect(() => {
    setMenukey(window.location.pathname.toLowerCase());
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout className="layout">
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[menukey]}
              onClick={handleClick}
            >
              <Menu.Item key="/">
                <HomeOutlined />
                <a href="/">Home</a>
              </Menu.Item>
              <Menu.Item key="/photo">
                <FileImageFilled />
                <a href="/photo">Photo</a>
              </Menu.Item>
              <Menu.Item key="/gtav">
                <FileImageOutlined />
                <a href="/gtav">GTA V</a>
              </Menu.Item>
              <Menu.Item key="/settings">
                <Dropdown overlay={menu}>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <SettingOutlined />Settings <DownOutlined />
                  </a>
                </Dropdown>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "20px 200px" }}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/photo" component={Photo} />
              <Route path="/gtav" component={GTAV} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            webpage ©2020 Created by Giselle Puipui
          </Footer>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
