import React from "react";
import { Col, Row, Card, Avatar } from "antd";
const { Meta } = Card;

const GTAV = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={12} offset={6}>
          <Card
            bordered={false}
            cover={<img alt="จีเซล ปุยปุย" src="/img/gtav4.png" />}
          >
            <Meta
              avatar={<Avatar src="/img/IMG_0002.jpg" />}
              title="We may encounter many defeats, but we must not be defeated."
              description="- Gena Showalter -"
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
      <Col span={12} offset={6}>
          <Card
            bordered={false}
            cover={<img alt="จีเซล ปุยปุย" src="/img/GTAV5.png" />}
          >
            <Meta
              avatar={<Avatar src="/img/IMG_0002.jpg" />}
              title="The best revenge is massive success."
              description="- Frank Sinatra -"
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default GTAV;
