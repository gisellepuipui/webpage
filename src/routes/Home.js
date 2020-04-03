import React from "react";
import { Col, Row, Card, Avatar, Input, Button } from "antd";
import { CloudUploadOutlined } from '@ant-design/icons';
const { Meta } = Card;
const { TextArea } = Input;

const Home = () => {
  return (
    <Row gutter={[32, 32]}>
      <Col span={8}>
        <Card>
          <Meta
            avatar={<Avatar src="/img/IMG_0002.jpg" />}
            title="Giselle Puipui"
          />
          <br />
          <Input placeholder="Card title" />
          <TextArea rows={4} style={{ marginTop: "10px" }} />
          <Button type="primary" shape="round" icon={<CloudUploadOutlined />} style={{ marginTop: "10px", float: "right" }}>
          Post
        </Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
          <Meta
            avatar={<Avatar src="/img/IMG_0002.jpg" />}
            title="Giselle Puipui"
            style={{ marginTop: "20px" }}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
