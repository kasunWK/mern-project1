import { Row } from "antd";
import { Outlet } from "react-router-dom";
import { Layout, Col } from 'antd';
import AppFooter from "../componant/common/footer";


const Event = (props: any) => {
  return (
    <>
     
      <Row>
      <Col span={24}>
     <div>
     <img src='/temp/e1.png' style={{width:'100%', height: "27.5vw"}} />
     </div>
     </Col>
     </Row>
     <Row style={{marginTop:'50px'}}>
     <Col span={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
     <h1 style={{fontSize:'50px', fontFamily: 'Courier New'}}>Wedding decorations</h1>
     <img src="/temp/e2.png" alt="logo"  style={{ transition: 'transform 0.2s', width:'80%', height:'70%' }}
       onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.9)';}}
       onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; }} />
     </Col>

    <Col span={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <h1 style={{fontSize:'50px', fontFamily: 'Courier New'}}>Musical shows</h1>
     <img src="/temp/e5.png" alt="logo"  style={{ transition: 'transform 0.2s', width:'80%', height:'70%' }}
       onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.9)';}}
       onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; }} />
    </Col>

     </Row>
    <Row>

    <Col span={24} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <h1 style={{fontSize:'50px', fontFamily: 'Courier New'}}>Art Festivals</h1>
     <img src="/temp/e3.png" alt="logo"  style={{ transition: 'transform 0.2s', width:'100%', height:'70%' }}
       onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.9)';}}
       onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; }} />
    </Col>
    </Row>
    <Row>

    <Col span={24} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <h1 style={{fontSize:'50px', fontFamily: 'Courier New'}}>Backdrop Design</h1>
     <img src="/temp/e4.png" alt="logo"  style={{ transition: 'transform 0.2s', width:'100%', height:'70%' }}
       onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.9)';}}
       onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; }} />
    </Col>
    </Row>

     
     <AppFooter />

    </>
    
  );
};

export default Event;
