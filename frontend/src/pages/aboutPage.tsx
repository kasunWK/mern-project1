import { Row } from "antd";
import Header from "../componant/common/header";
import { Outlet } from "react-router-dom";
import { Layout, Col } from 'antd';
import AppFooter from "../componant/common/footer";


const AboutPage = (props: any) => {
  return (
    <>
      <Header />
      <Row>
      <Col span={24}>
     <div>
     <img src='https://lh3.googleusercontent.com/p/AF1QipPwR-3Ey_NZBmzvN73yvc-ItxY2q3pcIQWCSQCN=s1360-w1360-h1020' style={{width:'100%', height: "27.5vw"}} />
     </div>
     </Col>
     </Row>
     <Row style={{marginTop:'100px'}}>
     <Col span={5}>
     <h1 style={{fontSize:'100px', fontFamily: 'Courier New'}}>About</h1>
</Col>
<Col span={9}>
<p style={{fontSize:'18px',marginTop:'40px', fontFamily: 'Courier New', textAlign: 'justify'}}>Welcome to Buddhika Light Pvt Ltd, your trusted source for generator, lighting and sound rental solutions. Our passion is to transform ordinary gatherings into extraordinary spectacles which leave your guests in awe.By delivering power, illumination and audio excellence, we have been a leading partner in the industry within past few years.Our commitment to quality and customer satisfaction has made us the go to choice for mega events, businesses  and individuals looking for reliable equipment to make their occasions truly memorable. We  not only provide powerful blend of generators, captivating lighting and crystal clear sound, but we also offer unmatched expertise to ensure your event  shines. Our journey is one of pride and innovation, where we transform ordinary settings into extraordinary stages .You can explore our extensive range of products and services and let us be the power behind your success.</p>
</Col>
<Col span={10}>
<img
    src="https://www.pngmart.com/files/About-Us-PNG.png"
    width="450"
    height="450"
    style={{
      display: "block",
      transition: "transform 0.8s", // Adding a transition for smooth movement
      position: "absolute", // Position the image absolutely
      top: "50%", // Vertically center the image using top: 50%
      left: "50%", // Horizontally center the image using left: 50%
      transform: "translate(-50%, -50%)", // Adjust for the image's size and centering
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translate(-50%, 50%)"; // Move the image down by 50% of its height
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translate(-50%, -50%)"; // Reset the transformation
    }}
  />
</Col>

     </Row>

     <Row style={{marginTop:'150px'}}>
     <Col span={8}>
     <h1 style={{fontSize:'100px', fontFamily: 'Courier New'}}>Vision</h1>
</Col>

<Col span={8}>
<img
    src="/temp/b.png"
    width="450"
    height="450"
    style={{
      display: "block",
      transition: "transform 0.8s", // Adding a transition for smooth movement
      position: "absolute", // Position the image absolutely
      top: "50%", // Vertically center the image using top: 50%
      left: "50%", // Horizontally center the image using left: 50%
      transform: "translate(-50%, -50%)", // Adjust for the image's size and centering
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translate(-50%, 50%)"; // Move the image down by 50% of its height
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translate(-50%, -50%)"; // Reset the transformation
    }}
  />
</Col>

<Col span={8}>
<h1 style={{fontSize:'100px', fontFamily: 'Courier New'}} >Mission</h1>
</Col>


     </Row>

     <Row style={{marginBottom:'50px'}} >
     <Col span={8}>
     <h1 style={{fontSize:'18px', fontFamily: 'Courier New', textAlign: 'justify'}}>"Empowering Creativity through Seamless Event Experiences" At Buddhika Light Pvt Ltd company, we envision sri Lanka where every event, from intimate gatherings to grand productions, is brought to life with unmatched energy, precision, and artistry. We are committed to providing top-tier generator, lighting, and sound solutions that elevate events to new heights. Our seamless services, innovative technology, and expert guidance empower event organizers and artists to unlock their full creative potential, leaving a lasting impact on both audiences and memories."</h1>
</Col>

<Col span={8}>

</Col>

<Col span={8}>
<h1 style={{fontSize:'18px', fontFamily: 'Courier New', textAlign: 'justify'}}>Our mission is to be the cornerstone of exceptional event experiences. We are committed to providing seamless access to top-tier generators, lights, and sound equipment, enabling event organizers and artists to bring their creative visions to life. Through our unwavering dedication to reliability, innovation, and client satisfaction, we aim to be the trusted partner that empowers every event, from intimate gatherings to grand productions, with the energy, ambiance, and resonance it deserves.</h1>
</Col>


     </Row>

     <Row style={{marginBottom:'150px'}} >
     <Col span={24}>
     <h1 style={{fontSize:'100px', fontFamily: 'Courier New'}}>Our History</h1>
     <p style={{fontSize:'18px', fontFamily: 'Courier New', textAlign: 'justify'}}>Inheriting a history of more than 20 years, "Buddhika Light" is moving forward to meet the ever-expanding market's needs and goals. It is my belief that we have protected the trust of our customers and the trust of all the employees who were members of the Prasara family to the best of our ability. My aim is to lead the institute forward by increasing the quality of the products through research studies using new technology. We invite you to keep the trust you have placed in us so far and continue to join hands with us.</p>
    </Col>




     </Row>
     <AppFooter />

    </>
    
  );
};

export default AboutPage;
