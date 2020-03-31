import React from "react";
import { Col, Row, Card, Avatar } from "antd";
const { Meta } = Card;

const Home = () => {
  return (
    <Row gutter={[32,32]}>
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
