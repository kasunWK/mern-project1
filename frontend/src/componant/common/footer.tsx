import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div  style={{padding: '50px 0',textAlign: 'center',}}>
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                
                <div className="cta-text">
                  <h4 style={{ color: "#ff5e14", fontFamily: 'Courier New' }}>Find us</h4>
                  <span>anganpitiya, Padukka, Sri Lanka</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4 style={{ color: "#ff5e14", fontFamily: 'Courier New' }}>Call us</h4>
                  <span>077 999 2576</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4 style={{ color: "#ff5e14", fontFamily: 'Courier New' }}>Mail us</h4>
                  <span>buddhikalight@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div >
            <div >
              <div >
                <div className="footer-logo">
                  <img src="/temp/a.jpg" className="rounded-full"  alt="logo" />
                  
                </div>
                <div className="footer-text">
                  <p>EventEx Rentals: Your go-to event item rental solution. From elegant furniture to cutting-edge AV equipment, we offer quality rentals and exceptional service for unforgettable events. Contact us today!</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
  
  <a href="https://www.facebook.com/buddhika.light" style={{ marginRight: '10px' }}>
    <img src="/temp/w.png" style={{ borderRadius: '50%', width: '60px' }} alt="logo" />
  </a>
  <a href="#" style={{ marginRight: '10px' }}>
    <img src="/temp/facebook.png" style={{ borderRadius: '50%', width: '60px' }} alt="logo" />
  </a>
  <a href="#">
    <img src="/temp/imo.png" style={{ borderRadius: '50%', width: '60px' }} alt="logo" />
  </a>
</div>

              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">about</a></li>
                  <li><a href="/service">services</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="#">DJ Artice</a></li>
                  <li><a href="#">Events</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div>
                  <h3 style={{ color: "#ff5e14", fontFamily: 'Courier New' }} >Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button><i className="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
