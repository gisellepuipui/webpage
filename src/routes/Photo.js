import React from "react";
import { Col, Row, Card, Avatar } from "antd";
const { Meta } = Card;

const Photo = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8} offset={8}>
          <Card
            bordered={false}
            cover={<img alt="จีเซล ปุยปุย" src="/img/IMG_0003.jpg" />}
          >
            <Meta
              avatar={<Avatar src="/img/IMG_0002.jpg" />}
              title="Giving up is the only sure way to fail."
              description="- Gena Showalter -"
            />
                          {/* title="It does not matter how slowly you go as long as you do not stop."
              description="- Confucius -" */}
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8} offset={8}>
          <Card
            bordered={false}
            cover={<img alt="จีเซล ปุยปุย" src="/img/IMG_0002.jpg" />}
          >
            เราคนจิง โอวัลตินยังละลาย. - จ่าตีฟ -
          </Card>
        </Col>
      </Row>


        <Row gutter={[16, 16]}>
        <Col span={8} offset={8}>
        <Card
          title="Hinata Hyuga"
          cover={
            <img
              alt="cos"
              src="/img/COS201701.jpg"
            />
          }
        >
          <a href="https://giselle-puipui.web.app/" target="_blank" rel="noopener noreferrer" >Giselle Puipui as Hinata Hyuga</a>
        </Card>
        </Col>
      </Row>
    </>
  );
};

export default Photo;
