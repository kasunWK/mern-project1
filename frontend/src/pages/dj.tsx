import { Row, Col } from "antd";
import Header from "../componant/common/header";
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import AppFooter from "../componant/common/footer";

const Dj = (props: any) => {
  return (
    <>
      <Row>
        <Col span={24}>
          <div>
            <img src='/temp/DA.png' style={{ width: '100%', height: "35vw" }} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div style={{ textAlign: 'center' }}>
            
              <h1 style={{ fontSize: '50px', fontFamily: 'Courier New' }}>
              <b> Wedding, Party & Other Events Pro Sound System Pro Light System LED Video Wall.</b>
                <br></br>
                Contact:0766790396/0777874006
              </h1>
            
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: '100px' }}>
        <Col xs={1} sm={1} md={2} lg={2} xl={2} xxl={2}></Col>
        <Col xs={22} sm={6} md={6} lg={6} xl={6} xxl={6} style={{ borderRadius: '30px', border: '4px solid #daa520' }}>
          <b><h1 style={{ fontSize: '50px', fontFamily: 'Courier New' }}>GOLD PACKAGE</h1></b>
          <b><h1 style={{ fontSize: '50px', fontFamily: 'Courier New', color: '#daa520' }}>Rs.20000/=</h1></b>
          <ul style={{ fontSize: '20px', fontFamily: 'Courier New', color: '#00125D' }}>
            <li>JBL Sound System</li>
            <li>LED Colour Wash 4</li>
            <li>LED Disco 2</li>
            <li>Smoke 1</li>
            <li>Laser Light 1</li>
            <li>Lights Stand 1</li>
          </ul>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}></Col>
        <Col xs={22} sm={6} md={6} lg={6} xl={6} xxl={6} style={{ borderRadius: '30px', border: '4px solid #daa520' }}>
          <b><h1 style={{ fontSize: '50px', fontFamily: 'Courier New' }}>PREMIERE PACKAGE</h1></b>
          <b><h1 style={{ fontSize: '50px', fontFamily: 'Courier New', color: '#daa520' }}>Rs.25000/=</h1></b>
          <ul style={{ fontSize: '20px', fontFamily: 'Courier New', color: '#00125D' }}>
            <li>JBL Sound System</li>
            <li>LED Colour Wash 4</li>
            <li>LED Disco 1</li>
            <li>Smoke 1</li>
            <li>Laser Light 1</li>
            <li>Fire Gun 2</li>
            <li>Beam Lights 2</li>
            <li>Snow 1</li>
            <li>T Lights Stand</li>
          </ul>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}></Col>
        <Col xs={22} sm={6} md={6} lg={6} xl={6} xxl={6} style={{ borderRadius: '30px', border: '4px solid #daa520' }}>
          <b><h1 style={{ fontSize: '50px', fontFamily: 'Courier New' }}>VIP PACKAGE</h1></b>
          <b><h1 style={{ fontSize: '50px', fontFamily: 'Courier New', color: '#daa520' }}>Rs.45000/=</h1></b>
          <ul style={{ fontSize: '20px', fontFamily: 'Courier New', color: '#00125D' }}>
            <li>RCF Sound System</li>
            <li>Beam Lights 6</li>
            <li>LED Colour Wash 5</li>
            <li>LED Disco 1</li>
            <li>Haze 1</li>
            <li>Laser Light 1</li>
            <li>Fire Gun 2</li>
            <li>Snow 1</li>
            <li>Truss Stand</li>
          </ul>
        </Col>
      </Row>

      <Row style={{ marginTop: '50px', marginBottom: '50px' }}>
        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <img src='https://www.pngarts.com/files/8/10-off-PNG-Image.png' style={{ width: '40%' }} />
          </div>
        </Col>
        <Col xs={24} sm={16} md={16} lg={16} xl={16} xxl={16}>
          <div>
            <b><h1 style={{ fontSize: '50px', fontFamily: 'Courier New' }}>10% discount is available for each PACKAGE.</h1></b>
          </div>
        </Col>
      </Row>

      <AppFooter />
    </>
  );
};

export default Dj;
