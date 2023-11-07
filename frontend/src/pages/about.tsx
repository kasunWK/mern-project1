import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <Container>
      <Head>
        
        <img src='https://lh3.googleusercontent.com/p/AF1QipPwR-3Ey_NZBmzvN73yvc-ItxY2q3pcIQWCSQCN=s1360-w1360-h1020' />
      </Head>
      <Body>
        <Wrap>
          <Header>
            <h1>About</h1>
            <p>Established in 1998, Prasara Washing Plant
              (PVT) LTD has persistently developed and
              emerged as one of the leading washing plants
              in the industry consolidating its status.
              We have expanded our operations over the
              years, acquired the trust and loyalty of our
              valued customers. As a testament to our
              success, we have achieved numerous accolades
              that reflect our commitment to excellence.</p>
          </Header>
          <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
    overflow: "hidden", // Hide overflowing content
    position: "relative", // Needed for absolute positioning of the image
  }}
>
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
</div>





          <Slot>
            <div>
              <h1>Vision</h1>
              <p>"Empowering Creativity through Seamless Event Experiences"

At Buddhika Light Pvt Ltd company, we envision  sri Lanka where every event, from intimate gatherings to grand productions, is brought to life with unmatched energy, precision, and artistry. We are committed to providing top-tier generator, lighting, and sound solutions that elevate events to new heights. Our seamless services, innovative technology, and expert guidance empower event organizers and artists to unlock their full creative potential, leaving a lasting impact on both audiences and memories."</p>
            </div>
            
          </Slot>
          <Slot>
            <h1>Mission</h1>
            <p>Our mission is to be the cornerstone of exceptional event experiences. We are committed to providing seamless access to top-tier generators, lights, and sound equipment, enabling event organizers and artists to bring their creative visions to life. Through our unwavering dedication to reliability, innovation, and client satisfaction, we aim to be the trusted partner that empowers every event, from intimate gatherings to grand productions, with the energy, ambiance, and resonance it deserves.</p>
          </Slot>
        </Wrap>
      </Body>
    </Container>
  );
}

const Container = styled.div`
    width: 100%;
    background: var(--main);
    overflow: hidden;
`

const Head = styled.div`
    width: 100%;
    height: 75vh;

    div {
      width: 100%;
      height: 11vh;
      background: var(--main);
    }

    @media only screen and (max-width: 1200px) {
      height: 46vh;
  }

    img {
        width: 100%;
        height: 100%;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    padding: 50px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--main);
    fontFamily: Courier New ;
`

const Wrap = styled.div`
    width: 95%;
    padding: 30px 0;
`

const Header = styled.div`
h1 {
  font-size: 70px;
  text-align: center;
  color: var(--sec);
  

  @media only screen and (max-width: 1200px) {
    font-size: 42px;
    
  }
}

p {
  padding: 10px;
  line-height: 2.1rem;
  letter-spacing: 2.1px;
  text-align: left;
  

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
    text-align: center;
    padding: 10px;
  }
}
`

const Slot = styled.div`
width: 100%;
height: 250px;
padding: 10px 20px;
background: var(--sec);
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
position: relative;
margin-top: 40px;

@media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 0;
    text-align: center;
    height: 280px;
  }

p {
    line-height: 1.8rem; 
    color: #000;
    z-index: 100;
    margin-top: 20px;

    @media only screen and (max-width: 1200px) {
        font-size: 16px;
      }
}

h1 {
    color: #000;
    font-size: 36px;
    padding: 10px 0;
    z-index: 1000;
    border-bottom: 1px solid white;

    @media only screen and (max-width: 1200px) {
        font-size: 30px;
        padding: 10px 0;
    }
}
`

const Images = styled.div`
    width: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 0;

    @media only screen and (max-width: 1200px) {
        left: 40%;
      }

    img {
        width: 15%;

        @media only screen and (max-width: 1200px) {
            width: 30%;
          }
    }
`

const Image_Two = styled.div`
    width: 100%;
    position: absolute;
    bottom: 2%;
    left: 91%;
    z-index: 0;

    @media only screen and (max-width: 1200px) {
        left: 50%;
      }

    img {
        width: 10%;

        @media only screen and (max-width: 1200px) {
            width: 30%;
          }
    }
`

export default About;
