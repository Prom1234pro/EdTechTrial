import './Footer.css';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import Logo from '../../assets/logo.svg';
import linkedin from '../../assets/linkedin.svg';

const Footer = () => (
  <footer className="footer">
    <img src={Logo} alt="logo" />
    <ul>
      <li>
        <a href="#features">Home</a>
      </li>
      <li>
        <a href="#features">Features</a>
      </li>
      <li>
        <a href="#plans">Pricing</a>
      </li>
      <li>
        <a href="#faq">Contact us</a>
      </li>
      <li>
        <a href="#faq">Terms of service</a>
      </li>
      <li>
        <a href="#faq">Privacy policy</a>
      </li>
    </ul>
    <hr />
    <div className="footer-bottom">
      <p>© 2024 Edudesks. All rights reserved</p>
      <div className="socials">
        <div className="social-item">
          <img src={instagram} alt="" />
        </div>
        <div className="social-item">
          <img src={twitter} alt="" />
        </div>
        <div className="social-item">
          <img src={linkedin} alt="" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
