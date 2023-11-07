import React from 'react';
import styled from 'styled-components';


function Contact() {
  return (
    <Container>
      <Head>
        
        <img src='https://lh3.googleusercontent.com/p/AF1QipM1T-zVlQzghcVr1oi0uYYp8YVyM7MU1WAIU90g=s1360-w1360-h1020' alt="Header" />
      </Head>
      <Body>
        <Wrap>
          <Header>
            <h1>Contact Us</h1>
            <h2>History of us</h2>
            <p>Inheriting a history of more than 20 years, "Prasara Washing Plant" is moving forward to meet the ever-expanding market's needs and goals. It is my belief that we have protected the trust of our customers and the trust of all the employees who were members of the Prasara family to the best of our ability. My aim is to lead the institute forward by increasing the quality of the products through research studies using new technology. We invite you to keep the trust you have placed in us so far and continue to join hands with us.</p>
          </Header>

          <Detail>
            <div>
              <h3>Main Work Place</h3>
              <p>Buddhika Light  (Pvt) Ltd</p>
              <h5>anganpitiya, Padukka, Sri Lanka</h5>
              <p>Sri Lanka</p>
              <h4>077 999 2576 &nbsp; &nbsp; &nbsp; buddhikalight@gmail.com</h4>
            </div>
          </Detail>
        <img src="/temp/c.png" alt="logo" width={100} className="rounded-full" />
          <Map>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31691.12789128024!2d80.08058994731905!3d6.843642811879762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae252b4e771f95f%3A0x7b8423cfccab27b7!2sPadukka!5e0!3m2!1sen!2slk!4v1689386928855!5m2!1sen!2slk"
              width="1500"
              height="600"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Map>

         
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

const Map = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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

export default Contact;
