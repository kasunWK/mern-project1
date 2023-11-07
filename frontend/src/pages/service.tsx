import { Row } from "antd";
import Header from "../componant/common/header";
import { Outlet } from "react-router-dom";
import { Layout, Col } from 'antd';
import AppFooter from "../componant/common/footer";
import {useState} from 'react';


const Service = (props: any) => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <Header />
      <Row>
      <Col span={24}>
     <div>
     <img src='/temp/service.png' style={{width:'100%', height: "27.5vw"}} />
     </div>
     </Col>

     </Row>

     <Row>
     <Col span={24} style={{textAlign: 'center'}}>
      <div>
      <h1 style={{fontSize:'30px', fontFamily: 'Courier New',color:'#1A3CCF'}}>We bring the convenience to your doorstep. Simply request our services, and we'll ensure that everything you need for your event from generators to lighting and more, is delivered to your location.</h1>
      
      </div>
     </Col>
     </Row>
                                                  {/* Generators */}
     <Row style={{marginTop:'50px'}}>
     <Col span={10} style={{textAlign: 'center'}}>
     <div>
      <div>
      <h1 style={{fontSize:'30px', fontFamily: 'Courier New'}}>Generators</h1>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
         
         <img src="https://purepng.com/public/uploads/large/purepng.com-generatorgeneratorelectricity-generationmechanical-energyelectrical-powerpower-source-170152835040481zdy.png" alt="logo"  style={{ transition: 'transform 0.2s', width:'70%', height:'70%' }}
       onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.9)';}}
       onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; }} />

        </div>

        
      </div>
    </div>
     </Col>

     <Col span={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
     {isHovering && (
          <div style={{fontSize:'18px', fontFamily: 'Courier New'}}>
            <h2>Our generators are the backbone of reliable power supply for your mega events in SriLanka. These robust machines come in different capacities to meet your event's power needs. You can reserve particular generators as your intereset.l and alao  we provide fuel with the generators. With automatic fail-safes and skilled technicians on standby, you can trust that your event will never be left in the dark.</h2> 
          </div>
        )}
    </Col>

     </Row>
                                                       {/* light */}
     <Row style={{marginTop:'50px'}}>
     <Col span={10} style={{textAlign: 'center'}}>
     <div>
      <div>
      <h1 style={{fontSize:'30px', fontFamily: 'Courier New'}}>Lights</h1>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
         
         <img src="https://www.pngarts.com/files/3/Stage-Lights-PNG-Picture.png" alt="logo"  style={{ transition: 'transform 0.2s', width:'70%', height:'70%' }}
       onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.9)';}}
       onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; }} />

        </div>

        
      </div>
    </div>
     </Col>

     <Col span={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
     {isHovering && (
          <div style={{fontSize:'18px', fontFamily: 'Courier New'}}>
            <h2>We offer a spectrum of lighting options from vivid color displays .You can choose variety of ways to brighten up your venue and create the right mood.</h2> 
          </div>
        )}
    </Col>

     </Row>
                                                   {/* Sounds */}
     <Row style={{marginTop:'50px'}}>
     <Col span={10} style={{textAlign: 'center'}}>
     <div>
      <div>
      <h1 style={{fontSize:'30px', fontFamily: 'Courier New'}}> Sounds</h1>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
         
         <img src="https://www.pngmart.com/files/17/Audio-Speakers-DJ-PNG-Transparent-Image.png" alt="logo"  style={{ transition: 'transform 0.2s', width:'60%', height:'60%' }}
       onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.9)';}}
       onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; }} />

        </div>

        
      </div>
    </div>
     </Col>

     <Col span={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
     {isHovering && (
          <div style={{fontSize:'18px', fontFamily: 'Courier New'}}>
            <h2> Immerse your audience in an auditory wonderland with our premium sound systems. . We provide a complete range of audio equipment, including high-quality speakers, microphones etc.</h2> 
          </div>
        )}
    </Col>

     </Row>
                                                                  {/* Stages  */}
     <Row style={{marginTop:'50px'}}>
     <Col span={10} style={{textAlign: 'center'}}>
     <div>
      <div>
      <h1 style={{fontSize:'30px', fontFamily: 'Courier New'}}>Stages </h1>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
         
         <img src="https://pluspng.com/img-png/png-stage-welcome-to-dunicon-outdoor-stage-png-358.png" alt="logo"  style={{ transition: 'transform 0.2s', width:'70%', height:'70%' }}
       onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.9)';}}
       onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; }} />

        </div>

        
      </div>
    </div>
     </Col>

     <Col span={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
     {isHovering && (
          <div style={{fontSize:'18px', fontFamily: 'Courier New'}}>
            <h2>Our stages are versatile platforms for your event's performances and presentations. We offer stages in different  sizes and configurations to accommodate your specific needs. Our stage construction and design are developed with safety and flexibility in mind, allowing for easy customization. Whether you are hosting a live concert  or any other event our stages provide a professional and secure space .</h2> 
          </div>
        )}
    </Col>

     </Row>

     


     <Row style={{marginBottom:'50px'}}>
     <Col span={24} style={{textAlign: 'center'}}>
      <div>
      <h1 style={{fontSize:'50px', fontFamily: 'Courier New',color:'#1A3CCF'}}>Dj artists</h1>
      <h1 style={{fontSize:'18px', fontFamily: 'Courier New'}}>Enhance your event with the sounds of our talented DJ artist. You can elevate your experience by hiring our DJ artist , ensuring that your guests dance the night away to the hottest beats and tunes.</h1>
      </div>
     </Col>
     </Row>

     
     <AppFooter />

    </>
    
  );
};

export default Service;
