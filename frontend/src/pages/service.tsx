import React from 'react';
import styled from 'styled-components';

function Service() {
  return (
    <Container>
      <Head>
        <img src='/temp/t.png' alt="Header" />
      </Head>
      <Body>
        <Wrap>
          <Header>
 <h1>Services</h1>
            <h4>Welcome to our premier open stage equipment renting service! We offer a comprehensive range of services to ensure your event is a grand success. Our offerings include state-of-the-art sound systems, dazzling lighting setups, high-resolution LED screens, and reliable generator rentals. Whether it's a concert, conference, wedding, or any outdoor event, our top-quality equipment is here to elevate your experience and create a memorable atmosphere. With our expertise and top-notch gear, your event will shine brightly and sound crystal clear, making it an unforgettable occasion for all attendees.</h4>
          </Header>

          <Detail>
 <div>
              <h3>General Communication</h3>
              <p>Prasara Washing Plant Dankotuwa (Pvt) Ltd</p>
              <h5>Negombo Road, Thabarawila, Waikkala </h5>
              <p>Sri Lanka</p>
              <h4>+(94) 31 4927863 &nbsp; &nbsp; &nbsp; +(94)31 4927864</h4>
            </div>
          </Detail>

          <ImageGrid>
            {Array.from({ length: 1}).map((_, index) => (
              <ImageItem key={index}>
                 <img
            className="h-80 w-full object-contain"
            src="/temp/stage.jpg"
            style={{ display: "block", margin: "0 auto",maxWidth: "75vw",width: "100%",height: "35vw",objectFit: "cover"}} 
          />

<img
            className="h-80 w-full object-contain"
            src="/temp/function.jpg"
            style={{ display: "block", margin: "0 auto",maxWidth: "75vw",width: "100%",height: "35vw",objectFit: "cover"}} 
          />

<img
            className="h-80 w-full object-contain"
            src="/temp/dj.jpg"
            style={{ display: "block", margin: "0 auto",maxWidth: "75vw",width: "100%",height: "35vw",objectFit: "cover"}} 
          />

<img
            className="h-80 w-full object-contain"
            src="/temp/t.png"
            style={{ display: "block", margin: "0 auto",maxWidth: "75vw",width: "100%",height: "35vw",objectFit: "cover"}} 
          />

<img
            className="h-80 w-full object-contain"
            src="/temp/a.jpg"
            style={{ display: "block", margin: "0 auto",maxWidth: "75vw",width: "100%",height: "35vw",objectFit: "cover"}} 
          />
              </ImageItem>
            ))}
          </ImageGrid>
        </Wrap>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

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
`;

const Body = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f3f4f5;
  padding: 50px;

  @media only screen and (max-width: 1200px) {
    padding: 50px 10px;
  }
`;

const Wrap = styled.div`
width: 95%;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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
    text-align: center;

    @media only screen and (max-width: 1200px) {
      font-size: 18px;
      text-align: center;
    }
  }

  h2 {
    text-align: center;
    padding: 50px 0;
    font-size: 40px;
    text-decoration: underline;

    @media only screen and (max-width: 1200px) {
      font-size: 28px;
      padding: 20px 0;
    }
  }

  h3 {
    text-align: center;

    @media only screen and (max-width: 1200px) {
      font-size: 18px;
    }
  }
`;

const Detail = styled.div`
   width: 80%;
  background: #fff;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 10px;
  }

  h3 {
    font-size: 26px;
    font-weight: normal;
    margin: 20px 0;
    color: #011085;
    letter-spacing: 2.1px;

    @media only screen and (max-width: 1200px) {
      font-size: 22px;
    }
  }

  p {
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 2.1px;
  }

  h5 {
    font-size: 23px;
    font-weight: normal;
    margin: 12px 0;
    letter-spacing: 2.1px;

    @media only screen and (max-width: 1200px) {
      font-size: 20px;
    }
  }

  h4 {
    font-weight: normal;
    margin: 20px 0;
    letter-spacing: 2.1px;
  }

  div {
    width: 98%;
    border-left: 3px solid #011085;
    border-right: 3px solid #011085;
    padding: 0 20px;
    text-align: center;
  }

`;

const ImageGrid = styled.div`
  /* Styles for the image grid */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImageItem = styled.div`
  /* Styles for each image item */
  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export default Service;
