import React, { useState } from "react";
import { Row, Col, Menu, Button } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";
const { SubMenu } = Menu;

function App() {
  const [state, setState] = useState({
    current: "mail"
  });

  const handleClick = e => {
    setState({
      current: e.key
    });
  };

  return (
    <Row justify="center">
      <Col span={18} offset={3}>
        <Menu
          onClick={handleClick}
          selectedKeys={[state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <HomeOutlined />
            <a
              href="/"
              rel="noopener noreferrer"
            >
              Home
            </a>
          </Menu.Item>
          {/* <Menu.Item key="app" disabled>
          <AppstoreOutlined />
          Navigation Two
        </Menu.Item> */}
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <SettingOutlined />
                Settings
              </span>
            }
          >
            <Menu.ItemGroup title="Setting 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          {/* <Menu.Item key="alipay">
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigation Four - Link
            </a>
          </Menu.Item> */}
        </Menu>
      </Col>
    </Row>
  );
}

export default App;
